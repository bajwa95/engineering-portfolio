(function () {
  const grid = document.getElementById("field-notes-grid");
  if (!grid || !Array.isArray(window.FIELD_NOTES)) return;

  const make = (tag, className, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  };

  window.FIELD_NOTES.forEach((note) => {
    const card = make("article", "field-note-card");

    const media = make("div", "field-note-media");
    const fallback = make("div", "project-image-fallback");
    media.appendChild(fallback);

    if (note.image) {
      const img = document.createElement("img");
      img.src = note.image;
      img.alt = note.imageAlt || note.title;
      img.loading = "lazy";
      img.decoding = "async";
      img.addEventListener("error", () => img.remove());
      media.appendChild(img);
    }
    card.appendChild(media);

    const body = make("div", "field-note-body");
    body.appendChild(make("div", "project-kicker", note.category || "Field Note"));
    body.appendChild(make("h3", "", note.title));
    body.appendChild(make("p", "", note.description || ""));

    const tags = make("div", "tag-row");
    (note.tags || []).forEach(tag => tags.appendChild(make("span", "", tag)));
    body.appendChild(tags);

    if (note.href) {
      const link = make("a", "text-link", "View related case study →");
      link.href = note.href;
      body.appendChild(link);
    }

    card.appendChild(body);
    grid.appendChild(card);
  });

  if (!window.FIELD_NOTES.length) {
    grid.appendChild(make("p", "media-note", "Field Notes will appear here as they are added."));
  }
})();