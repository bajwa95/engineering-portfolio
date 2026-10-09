window.PORTFOLIO_PROJECTS = [
  {
    order: 1,
    title: "Forklift-Mounted Workstation Power Integration",
    mediaTitle: "Forklift Workstation Power",
    mediaSubtitle: "32 VDC · DC-DC conversion · mobile computing",
    kicker: "Industrial Power Integration · Reliability Improvement",
    description: "Replaced a costly UPS-dependent forklift workstation with a fused, key-switched DC power system for a 24 V thermal label printer and 20 V Windows tablet computer.",
    tags: ["DC-DC", "32 VDC", "Power Distribution", "Thermal Printer", "Troubleshooting"],
    href: "projects/forklift-workstation.html",
    image: "assets/forklift-workstation/finlintegrationworking.jpg",
    imageAlt: "Forklift-mounted computer and thermal label printer after direct power integration",
    capabilities: {
      electrical: "Designed a fused DC-DC power integration from the forklift’s 32 V electrical system for the 24 V printer and 20 V computer loads.",
      manufacturing: "Removed the two-hour UPS limitation from a production forklift workstation so labeling and computing could remain available through the shift."
    },
    featured: true
  },
  {
    order: 2,
    title: "John Deere 450C Fuel-System Reliability Retrofit",
    mediaTitle: "Dozer Fuel-System Retrofit",
    mediaSubtitle: "Mechanical troubleshooting · 12 VDC · reliability",
    kicker: "Mechanical Troubleshooting · Reliability Retrofit · Field Repair",
    description: "Diagnosed reverse flow through the original engine-driven lift pump, then bypassed it with a fused, ignition-switched electric pump feeding the existing filters.",
    tags: ["Root Cause", "Fuel System", "12 VDC", "Field Repair", "Reliability"],
    href: "projects/dozer-fuel-retrofit.html?v=20261008i",
    image: "assets/dozer-fuel-retrofit/electric-fuel-pump-installation.jpg?v=20261008i",
    imageAlt: "John Deere 450C electric fuel-pump retrofit feeding the existing fuel filters",
    capabilities: {
      electrical: "Integrated a fused, ignition-switched 12 V electric lift pump as the new active fuel-supply path after diagnosing the original pump fault."
    },
    featured: true
  },
  {
    order: 3,
    title: "Forklift Charger Electrical Reconfiguration",
    mediaTitle: "Forklift Charger Reconfiguration",
    mediaSubtitle: "Industrial electrical · transformer configuration · equipment relocation",
    kicker: "Industrial Electrical · Equipment Integration",
    description: "Industrial charger relocation and electrical reconfiguration project. Detailed case study is being documented from the original installation, transformer information and final operating setup.",
    tags: ["Industrial Electrical", "Transformer", "Charger", "Troubleshooting"],
    image: "assets/forklift-charger/20260324_104900.jpg",
    imageAlt: "Forklift charger installation during electrical reconfiguration work",
    status: "Case study in progress",
    capabilities: {
      electrical: "Industrial charger relocation and electrical / transformer reconfiguration work for the forklift charging setup.",
      manufacturing: "Charging-infrastructure work supporting the plant’s material-handling equipment."
    },
    featured: false
  },
  {
    order: 4,
    title: "Sliding Gate Limit Sensor Retrofit",
    mediaTitle: "Gate Sensor Retrofit",
    mediaSubtitle: "Industrial controls · sensing · reliability",
    kicker: "Controls Troubleshooting · Sensor Integration",
    description: "Redesigned a corrosion-prone gate-position sensor from a mechanical contact arrangement to a glass-sealed dual reed-switch retrofit with a custom 3D-printed mount.",
    tags: ["Controls", "Sensors", "Root Cause", "Onshape", "3D Printing"],
    href: "projects/gate-sensor-retrofit.html",
    image: "assets/gate-sensor/dual-reed-switch-retrofit.jpg",
    imageAlt: "Custom 3D-printed gate sensor module with dual reed switches",
    capabilities: {
      automation: "Diagnosed failed gate-position feedback and replaced the mechanical contact concept with dual reed-switch sensing integrated to the existing controller.",
      electrical: "Traced the sensing path and wired the replacement reed-switch arrangement into the existing control circuit."
    },
    featured: true
  },
  {
    order: 5,
    title: "KOMO Xtreme XL CNC",
    mediaTitle: "KOMO Xtreme XL CNC",
    mediaSubtitle: "Industrial automation · CNC · reliability",
    kicker: "Electrical · Controls · Mechanical Recovery",
    description: "Spindle overload troubleshooting, automatic tool-changer recovery and conveyor material-handling alignment on a production CNC system.",
    tags: ["VFD", "CNC", "Electrical", "Root Cause", "Alignment"],
    href: "projects/komo-cnc.html",
    image: "assets/komo/mhs-post-alignment-cnc-conveyor.jpeg",
    imageAlt: "KOMO CNC and conveyor system after material-handling alignment",
    capabilities: {
      automation: "Troubleshot spindle/VFD, automatic tool-changer and machine-control issues, then validated operation before return to production.",
      electrical: "Verified the three-phase supply and isolated a damaged spindle power cable in the VFD-to-spindle path.",
      manufacturing: "Corrected conveyor/material-handling alignment and restored consistent production-machine operation."
    },
    featured: true
  },
  {
    order: 6,
    title: "Cable-Driven Parallel 3D Concrete Printer",
    mediaTitle: "Cable-Driven 3D Concrete Printer",
    mediaSubtitle: "Motion control · electronics · R&D",
    kicker: "Motion Control · R&D · Systems Engineering",
    description: "Large-scale cable-driven robotic platform integrating motion control, electronics, software, mechanical systems and camera-assisted positional feedback.",
    tags: ["Motion", "PID", "OpenCV", "HMI", "Integration"],
    href: "projects/concrete-printer.html",
    image: "assets/concrete-printer/h-layer-test-isometric.jpg",
    imageAlt: "Concrete layer and corner test produced by the cable-driven 3D concrete printer",
    capabilities: {
      automation: "Integrated multi-axis motion control, servo/stepper hardware, operator controls and camera-assisted positional correction during R&D.",
      electrical: "Handled control wiring, drive/motor connections, power integration and electronics bring-up across the motion platform.",
      software: "Integrated operator-interface work and OpenCV-based positional feedback with the physical motion system."
    },
    featured: false
  },
  {
    order: 7,
    title: "Food-Serving Mobile Robot",
    mediaTitle: "Autonomous Mobile Robot",
    mediaSubtitle: "LiDAR · navigation · Android integration",
    kicker: "Robotics · LiDAR · Android",
    description: "Android-based destination selection integrated with SLAMTEC LiDAR, mapping/localization and autonomous navigation.",
    tags: ["LiDAR", "SLAM", "Android", "TCP/IP", "Robotics"],
    href: "projects/food-robot.html?v=20261008c",
    image: "assets/robot/a.jpg",
    imageAlt: "Food-serving mobile robot project development photo",
    capabilities: {
      automation: "Connected operator destination commands to LiDAR/encoder-based autonomous navigation and final-pose behavior.",
      software: "Developed the Android-side destination interface and network communication integration into the existing SLAMTEC navigation stack."
    },
    featured: false
  },
  {
    order: 8,
    title: "Centralized Multi-Screen Display Platform",
    mediaTitle: "Centralized Display Platform",
    mediaSubtitle: "Python · Flask · Socket.IO · Raspberry Pi",
    kicker: "Custom Software · Systems Integration · Networking",
    description: "Custom centralized software for screen-specific media rendering, live display status, heartbeat monitoring and remote refresh across multiple unattended displays.",
    tags: ["Python", "Flask", "Socket.IO", "Linux", "Raspberry Pi"],
    href: "projects/display-platform.html",
    image: "assets/display/display-manager.png",
    imageAlt: "Central Display Manager showing connected screen status and media controls",
    capabilities: {
      manufacturing: "Built a practical operator-facing workflow for screen-specific content, status visibility and unattended display reliability.",
      software: "Developed the Python/Flask/Socket.IO platform for media delivery, heartbeat monitoring, current-media visibility and remote refresh."
    },
    featured: false
  },
  {
    order: 9,
    title: "Roadmoji Vehicle Display Controller",
    mediaTitle: "Roadmoji Vehicle Display",
    mediaSubtitle: "Embedded Linux · human interface · prototype",
    kicker: "Embedded Systems · Human Interface · Prototype",
    description: "Raspberry Pi and Stream Deck prototype for physical-button control of a rear display, with media management and a web console.",
    tags: ["Raspberry Pi", "Python", "PyQt", "Flask", "USB HID"],
    href: "projects/roadmoji.html",
    capabilities: {
      software: "Built the Raspberry Pi, Python, PyQt and Flask workflow for Stream Deck-triggered display control and browser-based media management."
    },
    featured: false
  }
];
