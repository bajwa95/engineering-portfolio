(function () {
  const grid = document.getElementById("project-grid");
  if (!grid || !Array.isArray(window.PORTFOLIO_PROJECTS)) return;

  const projects = [...window.PORTFOLIO_PROJECTS].sort((a, b) => {
    const orderA = Number.isFinite(Number(a.order)) ? Number(a.order) : 9999;
    const orderB = Number.isFinite(Number(b.order)) ? Number(b.order) : 9999;
    if (orderA !== orderB) return orderA - orderB;
    return String(a.title || "").localeCompare(String(b.title || ""));
  });

  const count = document.getElementById("project-count");
  if (count) count.textContent = projects.length + (projects.length === 1 ? " project" : " projects");

  const make = (tag, className, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  };

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

    const number = make("div", "media-index", String(index + 1).padStart(2, "0"));
    media.appendChild(number);

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
})();
