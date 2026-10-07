(function () {
  const grid = document.getElementById("field-notes-grid");
  const lightbox = document.getElementById("field-notes-lightbox");
  const lightboxImage = document.getElementById("field-lightbox-image");
  const lightboxCaption = document.getElementById("field-lightbox-caption");
  const closeBtn = lightbox?.querySelector(".field-lightbox-close");
  const prevBtn = lightbox?.querySelector(".field-lightbox-prev");
  const nextBtn = lightbox?.querySelector(".field-lightbox-next");

  if (!grid || !Array.isArray(window.FIELD_NOTES)) return;

  let currentIndex = 0;

  const openLightbox = (index) => {
    if (!lightbox || !lightboxImage) return;
    currentIndex = index;
    const item = window.FIELD_NOTES[currentIndex];
    lightboxImage.src = item.image;
    lightboxImage.alt = item.alt || "";
    if (lightboxCaption) {
      lightboxCaption.textContent = item.caption || "";
      lightboxCaption.hidden = !item.caption;
    }
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
    closeBtn?.focus();
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
  };

  const move = (step) => {
    if (!window.FIELD_NOTES.length) return;
    currentIndex = (currentIndex + step + window.FIELD_NOTES.length) % window.FIELD_NOTES.length;
    openLightbox(currentIndex);
  };

  window.FIELD_NOTES.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "field-photo";
    button.setAttribute("aria-label", item.caption ? "Open " + item.caption : "Open engineering photo");

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.alt || "";
    img.loading = index < 6 ? "eager" : "lazy";
    img.decoding = "async";

    button.appendChild(img);
    button.addEventListener("click", () => openLightbox(index));
    grid.appendChild(button);
  });

  closeBtn?.addEventListener("click", closeLightbox);
  prevBtn?.addEventListener("click", () => move(-1));
  nextBtn?.addEventListener("click", () => move(1));

  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox?.classList.contains("is-open")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
  });
})();