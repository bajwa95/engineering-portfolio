# Engineering Portfolio

Static engineering portfolio for Garry Bajwa, focused on industrial automation, manufacturing systems, controls, electronics, systems integration and technical troubleshooting.

## Structure

- `index.html` — main portfolio page
- `styles.css` — shared responsive styling
- `projects/komo-cnc.html`
- `projects/concrete-printer.html`
- `projects/food-robot.html`
- `projects/display-platform.html`
- `projects/roadmoji.html`

The site intentionally uses no employer-confidential source files, production data or internal procedures. Project pages can later be expanded with sanitized media that is appropriate for public portfolio use.

## GitHub Pages

This repository is designed as a dependency-free static site. GitHub Pages can serve it directly from the `main` branch / root folder.


## Media replacement map

Replace the portfolio images later using these exact filenames so the existing layout updates automatically:

### Profile
- `assets/profile/garry-bajwa2.jpg`

### KOMO Xtreme XL
- `assets/komo/overview.jpg`
- `assets/komo/alarm.jpg`
- `assets/komo/damaged-cable.jpg`
- `assets/komo/tool-carousel.jpg`
- `assets/komo/conveyor.jpg`

### Cable-Driven 3D Concrete Printer
- `assets/concrete-printer/overview.jpg`
- `assets/concrete-printer/tower-system.jpg`
- `assets/concrete-printer/controller-electronics.jpg`
- `assets/concrete-printer/extruder.jpg`
- `assets/concrete-printer/printed-result.jpg`

### Food-Serving Mobile Robot
- `assets/robot/overview.jpg`
- `assets/robot/android-control.jpg`
- `assets/robot/lidar-mapping.jpg`
- `assets/robot/navigation-demo.jpg`

### Centralized Display Platform
- `assets/display/overview.jpg`
- `assets/display/display-manager.jpg`
- `assets/display/server-control.jpg`
- `assets/display/led-display.jpg`

### Roadmoji
- `assets/roadmoji/overview.jpg`
- `assets/roadmoji/streamdeck-controller.jpg`
- `assets/roadmoji/rear-display.jpg`
- `assets/roadmoji/web-console.jpg`

Missing media files intentionally fall back to the site's engineering-themed gradient panels instead of breaking the layout.


## Adding a project to the homepage

The homepage project section is data-driven. To add a future project, edit only `projects-data.js` and add another project object with:

- `title`
- `mediaTitle`
- `mediaSubtitle`
- `kicker`
- `description`
- `tags`
- `href`
- `image`
- `imageAlt`
- `featured`

`site.js` automatically creates the card, numbering, tags, project count, image fallback, and link. Featured projects are placed first automatically. No homepage HTML changes are required for normal project additions.
