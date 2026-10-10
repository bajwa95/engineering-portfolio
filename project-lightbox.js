// Portfolio media rule: any video whose filename starts with '-' must remain silent.
(function () {
  const isSilentVideo = (video) => {
    const source =
      video.getAttribute("src") ||
      video.querySelector("source")?.getAttribute("src") ||
      video.currentSrc ||
      "";
    if (!source) return false;

    try {
      const pathname = new URL(source, window.location.href).pathname;
      const filename = decodeURIComponent(pathname.split("/").pop() || "");
      return filename.startsWith("-");
    } catch (_) {
      return false;
    }
  };

  const enforceSilence = (video) => {
    if (!isSilentVideo(video)) return;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
    video.setAttribute("muted", "");

    // If the viewer tries to unmute a dash-prefixed video, immediately mute it again.
    video.addEventListener("volumechange", () => {
      if (!video.muted || video.volume !== 0) {
        video.muted = true;
        video.volume = 0;
      }
    });
  };

  const apply = () => document.querySelectorAll("video").forEach(enforceSilence);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply, { once: true });
  } else {
    apply();
  }

  // Also cover videos added later by dynamic page code.
  const observer = new MutationObserver(() => apply());
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();

(function () {
  const selectors = [
    ".photo-card img",
    ".gate-media-card img",
    ".project-thumb",
    ".media-tile"
  ];

  const candidates = Array.from(document.querySelectorAll(selectors.join(","))).filter((el) => {
    return !el.closest(".case-cover") &&
           !el.closest(".hero") &&
           !el.closest(".case-hero .case-cover") &&
           !el.classList.contains("hero-portrait-image");
  });

  if (!candidates.length) return;

  const overlay = document.createElement("div");
  overlay.className = "project-lightbox";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = `
    <button class="project-lightbox-close" type="button" aria-label="Close image">×</button>
    <button class="project-lightbox-nav project-lightbox-prev" type="button" aria-label="Previous image">‹</button>
    <figure class="project-lightbox-figure">
      <img class="project-lightbox-image" alt="">
      <figcaption class="project-lightbox-caption"></figcaption>
    </figure>
    <button class="project-lightbox-nav project-lightbox-next" type="button" aria-label="Next image">›</button>
  `;
  document.body.appendChild(overlay);

  const imageEl = overlay.querySelector(".project-lightbox-image");
  const captionEl = overlay.querySelector(".project-lightbox-caption");
  const closeBtn = overlay.querySelector(".project-lightbox-close");
  const prevBtn = overlay.querySelector(".project-lightbox-prev");
  const nextBtn = overlay.querySelector(".project-lightbox-next");

  const items = candidates.map((el) => {
    let src = "";
    let alt = "";
    let caption = "";

    if (el.tagName === "IMG") {
      src = el.currentSrc || el.src;
      alt = el.alt || "";
      const figure = el.closest("figure");
      const figcaption = figure?.querySelector("figcaption");
      caption = figcaption ? figcaption.innerText.trim() : alt;
    } else {
      const style = getComputedStyle(el);
      const bg = style.backgroundImage || "";
      const match = bg.match(/url\(["']?(.*?)["']?\)/);
      src = match ? match[1] : "";
      const text = el.querySelector("span");
      caption = text ? text.innerText.trim() : "";
      alt = caption;
    }

    return { el, src, alt, caption };
  }).filter(item => item.src);

  let currentIndex = 0;

  function show(index) {
    if (!items.length) return;
    currentIndex = (index + items.length) % items.length;
    const item = items[currentIndex];
    imageEl.src = item.src;
    imageEl.alt = item.alt;
    captionEl.textContent = item.caption || "";
    captionEl.hidden = !item.caption;
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("project-lightbox-open");
    closeBtn.focus();
  }

  function close() {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("project-lightbox-open");
  }

  items.forEach((item, index) => {
    item.el.classList.add("project-lightbox-trigger");
    item.el.setAttribute("tabindex", "0");
    item.el.setAttribute("role", "button");
    item.el.setAttribute("aria-label", "Enlarge image");
    item.el.addEventListener("click", () => show(index));
    item.el.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        show(index);
      }
    });
  });

  closeBtn.addEventListener("click", close);
  prevBtn.addEventListener("click", () => show(currentIndex - 1));
  nextBtn.addEventListener("click", () => show(currentIndex + 1));

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) close();
  });

  document.addEventListener("keydown", (event) => {
    if (!overlay.classList.contains("is-open")) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") show(currentIndex - 1);
    if (event.key === "ArrowRight") show(currentIndex + 1);
  });
})();

(function () {
  const endpoint = "https://portfolio-analytics.gurwinderjitsingh05.workers.dev";
  const params = new URLSearchParams(window.location.search);
  const visit = {
    page: window.location.pathname,
    source: params.get("src"),
    referrer: document.referrer || null
  };

  try {
    navigator.sendBeacon(endpoint, JSON.stringify(visit));
  } catch (_) {
    fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(visit),
      keepalive: true,
      mode: "cors"
    }).catch(() => {});
  }
})();
