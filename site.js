(function () {
  const allProjects = Array.isArray(window.PORTFOLIO_PROJECTS) ? [...window.PORTFOLIO_PROJECTS] : [];
  const projects = allProjects.sort((a, b) => {
    const orderA = Number.isFinite(Number(a.order)) ? Number(a.order) : 9999;
    const orderB = Number.isFinite(Number(b.order)) ? Number(b.order) : 9999;
    if (orderA !== orderB) return orderA - orderB;
    return String(a.title || "").localeCompare(String(b.title || ""));
  });

  const make = (tag, className, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  };

  const grid = document.getElementById("project-grid");
  if (grid) {
    const count = document.getElementById("project-count");
    if (count) count.textContent = projects.length + (projects.length === 1 ? " project" : " projects");

    projects.forEach((project, index) => {
      const card = make("article", "project-card" + (project.featured ? " featured" : ""));

      const media = make("div", "project-media");
      const fallback = make("div", "project-image-fallback");
      media.appendChild(fallback);

      if (project.image) {
        const img = document.createElement("img");
        img.src = project.image;
        img.alt = project.imageAlt || project.title;
        img.loading = index < 2 ? "eager" : "lazy";
        img.decoding = "async";
        img.addEventListener("error", () => img.remove());
        media.appendChild(img);
      }

      media.appendChild(make("div", "media-index", String(index + 1).padStart(2, "0")));

      const mediaCopy = make("div", "project-media-copy");
      mediaCopy.appendChild(make("span", "", project.mediaTitle || project.title));
      mediaCopy.appendChild(make("small", "", project.mediaSubtitle || ""));
      media.appendChild(mediaCopy);

      card.appendChild(media);
      card.appendChild(make("div", "project-kicker", project.kicker));
      card.appendChild(make("h3", "", project.title));
      card.appendChild(make("p", "", project.description));

      const tags = make("div", "tag-row");
      (project.tags || []).forEach(tag => tags.appendChild(make("span", "", tag)));
      card.appendChild(tags);

      if (project.href) {
        const link = make("a", "text-link", "Read full case study →");
        link.href = project.href;
        card.appendChild(link);
      } else if (project.status) {
        card.appendChild(make("div", "project-status", project.status));
      }

      grid.appendChild(card);
    });
  }

  const capabilityLabels = {
    automation: "Industrial automation",
    electrical: "Electrical & electronics",
    manufacturing: "Manufacturing systems",
    software: "Software integration"
  };

  const capabilityList = document.getElementById("capability-project-list");
  const capabilityTitle = document.getElementById("capability-projects-title");
  const capabilityCount = document.getElementById("capability-project-count");
  const capabilityPanel = document.getElementById("capability-projects");
  const capabilityTriggers = [...document.querySelectorAll(".capability-trigger")];
  const heroSpecialties = [...document.querySelectorAll(".hero-specialty")];

  const renderCapability = (key, shouldScroll) => {
    if (!capabilityList || !capabilityLabels[key]) return;

    capabilityTriggers.forEach(button => {
      const active = button.dataset.capability === key;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    heroSpecialties.forEach(button => {
      const active = button.dataset.capability === key;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    const related = projects.filter(project =>
      project.capabilities && typeof project.capabilities[key] === "string"
    );

    capabilityTitle.textContent = capabilityLabels[key];
    capabilityCount.textContent = related.length + (related.length === 1 ? " project" : " projects");
    capabilityList.replaceChildren();

    related.forEach(project => {
      const item = project.href ? document.createElement("a") : document.createElement("div");
      item.className = "capability-project-item" + (project.href ? "" : " is-unavailable");
      if (project.href) item.href = project.href;

      const copy = make("div", "capability-project-copy");
      copy.appendChild(make("strong", "", project.title));
      copy.appendChild(make("span", "", project.capabilities[key]));
      item.appendChild(copy);

      if (project.href) {
        item.appendChild(make("span", "capability-project-link", "View case study →"));
      } else {
        item.appendChild(make("span", "capability-project-status", project.status || "Case study in progress"));
      }

      capabilityList.appendChild(item);
    });

    if (shouldScroll && capabilityPanel) {
      capabilityPanel.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  capabilityTriggers.forEach(button => {
    button.addEventListener("click", () => renderCapability(button.dataset.capability, false));
  });

  heroSpecialties.forEach(button => {
    button.addEventListener("click", () => renderCapability(button.dataset.capability, true));
  });

  if (capabilityList) renderCapability("automation", false);
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
