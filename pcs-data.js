const pcs = [

  // ── BUDGET DESKTOPS ───────────────────────────────────────────────────────
  {
    id: "hp-slimline-290",
    name: "HP Slimline 290",
    brand: "HP",
    year: 2024,
    price: 7999,
    category: "Budget Desktop",
    cpu: "Intel Core i3-12100",
    gpu: "Intel UHD 730 (Integrated)",
    ram: "8GB DDR4",
    storage: "256GB SSD",
    ports: "USB-A x4, USB-C x1, HDMI, RJ45",
    psu: "180W",
    scores: { performance: 5, display: 6, thermals: 7, build: 6, value: 7 },
    pros: ["Compact and quiet", "Good for basic office work", "Low power consumption"],
    cons: ["Very limited upgradeability", "No dedicated GPU", "256GB SSD is too small"],
    mrPointSays: "The HP Slimline is the office workhorse. It handles emails, spreadsheets, and video calls without fuss and sits neatly on a desk. Don't expect gaming or heavy creative work. Best used as a business or home office machine."
  },
  {
    id: "lenovo-ideacentre-3",
    name: "Lenovo IdeaCentre 3",
    brand: "Lenovo",
    year: 2024,
    price: 8999,
    category: "Budget Desktop",
    cpu: "AMD Ryzen 5 5500",
    gpu: "AMD Radeon (Integrated)",
    ram: "8GB DDR4",
    storage: "512GB SSD",
    ports: "USB-A x6, USB-C x1, HDMI, DisplayPort, RJ45",
    psu: "260W",
    scores: { performance: 6, display: 6, thermals: 7, build: 6, value: 8 },
    pros: ["Ryzen 5 5500 handles multitasking well", "512GB storage is decent", "Easy to open and upgrade RAM"],
    cons: ["No dedicated GPU slot by default", "Basic build quality", "Needs RAM upgrade for heavy use"],
    mrPointSays: "The IdeaCentre 3 is a solid budget desktop. The Ryzen 5 5500 gives it real processing power for the price, and it's easy to pop open and add more RAM. A smart starting point for anyone building up a home setup."
  },

  // ── MID-RANGE DESKTOPS ────────────────────────────────────────────────────
  {
    id: "dell-optiplex-7010",
    name: "Dell OptiPlex 7010",
    brand: "Dell",
    year: 2024,
    price: 14999,
    category: "Mid-Range Desktop",
    cpu: "Intel Core i5-13500",
    gpu: "Intel UHD 770 (Integrated)",
    ram: "16GB DDR4",
    storage: "512GB SSD",
    ports: "USB-A x6, USB-C x2, HDMI, DisplayPort x2, RJ45",
    psu: "300W",
    scores: { performance: 8, display: 7, thermals: 8, build: 9, value: 7 },
    pros: ["Rock-solid business build", "Core i5-13500 is very capable", "Excellent port selection"],
    cons: ["No dedicated GPU", "Expensive compared to custom builds", "Not designed for gaming"],
    mrPointSays: "The OptiPlex 7010 is what businesses buy when they want reliability above all else. The Core i5-13500 handles any office and creative workload, the build is tanks-grade, and Dell's support is solid. Not for gaming but brilliant for work."
  },
  {
    id: "hp-envy-desktop",
    name: "HP Envy Desktop TE02",
    brand: "HP",
    year: 2024,
    price: 16999,
    category: "Mid-Range Desktop",
    cpu: "Intel Core i7-13700",
    gpu: "NVIDIA GeForce RTX 3060",
    ram: "16GB DDR4",
    storage: "512GB SSD + 1TB HDD",
    ports: "USB-A x6, USB-C x2, HDMI, DisplayPort, SD Card, RJ45",
    psu: "500W",
    scores: { performance: 8, display: 7, thermals: 7, build: 8, value: 8 },
    pros: ["RTX 3060 handles 1080p gaming confidently", "Core i7-13700 is very fast", "Good storage combo"],
    cons: ["Gets loud under gaming load", "Not easily upgradeable PSU", "Pricier than custom builds"],
    mrPointSays: "The HP Envy TE02 is a great all-in-one family PC that can actually game. The RTX 3060 plays most modern games at 1080p high settings smoothly, and the Core i7 handles everything else. Solid pick if you want a pre-built that just works."
  },

  // ── GAMING DESKTOPS ───────────────────────────────────────────────────────
  {
    id: "custom-budget-gaming",
    name: "Budget Gaming Build",
    brand: "Custom",
    year: 2024,
    price: 12999,
    category: "Gaming Build",
    cpu: "AMD Ryzen 5 7600",
    gpu: "NVIDIA GeForce RTX 4060",
    ram: "16GB DDR5",
    storage: "1TB NVMe SSD",
    ports: "Full ATX motherboard — USB-A x6, USB-C, HDMI 2.1, DP 1.4",
    psu: "650W 80+ Bronze",
    scores: { performance: 8, display: 7, thermals: 8, build: 7, value: 9 },
    pros: ["RTX 4060 crushes 1080p and handles 1440p", "Ryzen 5 7600 is fast with no bottleneck", "Best performance per rand in SA right now"],
    cons: ["Requires assembly (or pay a builder)", "No monitor, keyboard or mouse included", "Custom builds void brand warranty"],
    mrPointSays: "This is the best gaming PC you can build in SA right now for under R13,000. The RTX 4060 and Ryzen 5 7600 are a perfectly matched pair — smooth 1080p on everything, handles 1440p on most games. This is where custom builds blow pre-builts out of the water on value."
  },
  {
    id: "custom-mid-gaming",
    name: "Mid-Range Gaming Build",
    brand: "Custom",
    year: 2024,
    price: 19999,
    category: "Gaming Build",
    cpu: "AMD Ryzen 7 7700X",
    gpu: "NVIDIA GeForce RTX 4070",
    ram: "32GB DDR5",
    storage: "1TB NVMe SSD",
    ports: "Full ATX motherboard — USB-A x6, USB-C x2, HDMI 2.1, DP 1.4",
    psu: "750W 80+ Gold",
    scores: { performance: 9, display: 8, thermals: 8, build: 8, value: 8 },
    pros: ["RTX 4070 destroys 1440p gaming", "32GB RAM is future-proof", "Handles game streaming + recording easily"],
    cons: ["Requires assembly or builder fee", "No peripherals included", "RTX 4070 power draw needs good PSU"],
    mrPointSays: "The mid-range gaming build hits the sweet spot for serious gamers. The RTX 4070 is phenomenal at 1440p and very capable at 4K, the Ryzen 7 7700X won't bottleneck anything, and 32GB RAM means you're set for years. Outstanding value."
  },
  {
    id: "asus-rog-strix-g15",
    name: "ASUS ROG Strix G15 Desktop",
    brand: "ASUS",
    year: 2024,
    price: 22999,
    category: "Gaming Desktop",
    cpu: "AMD Ryzen 9 7900X",
    gpu: "NVIDIA GeForce RTX 4070 Ti",
    ram: "32GB DDR5",
    storage: "1TB NVMe SSD",
    ports: "USB-A x6, USB-C x2, HDMI 2.1, DP 1.4 x3, RJ45, Wi-Fi 6E",
    psu: "700W",
    scores: { performance: 10, display: 8, thermals: 8, build: 9, value: 7 },
    pros: ["RTX 4070 Ti handles 4K gaming smoothly", "Ryzen 9 7900X is overkill in the best way", "No assembly required — plug and play"],
    cons: ["Premium price for a pre-built", "Loud under full load", "Costs more than equivalent custom build"],
    mrPointSays: "The ROG Strix G15 is the best pre-built gaming desktop in SA right now. The RTX 4070 Ti eats 4K for breakfast, and the Ryzen 9 7900X means no bottleneck ever. It costs more than a custom build with similar specs, but you get ASUS build quality and warranty included."
  },

  // ── WORKSTATIONS ──────────────────────────────────────────────────────────
  {
    id: "mac-mini-m4",
    name: "Mac Mini M4",
    brand: "Apple",
    year: 2025,
    price: 15999,
    category: "Workstation",
    cpu: "Apple M4 (10-core CPU)",
    gpu: "Apple M4 (10-core GPU)",
    ram: "16GB Unified Memory",
    storage: "256GB SSD",
    ports: "Thunderbolt 4 x3, USB-A x2, HDMI 2.1, RJ45",
    psu: "Built-in (150W max)",
    scores: { performance: 9, display: 8, thermals: 10, build: 9, value: 8 },
    pros: ["Fanless and completely silent", "M4 chip destroys equivalent Intel/AMD at this price", "Tiny footprint on your desk"],
    cons: ["256GB base storage is not enough", "macOS ecosystem required", "Limited gaming support"],
    mrPointSays: "The Mac Mini M4 is the most impressive computer per rand in 2025. It's the size of a book, completely silent, and runs circles around Intel and AMD chips at this price. If you work in design, video, or coding and are on macOS — this is a no-brainer."
  },
];

// Score categories for PCs
const pcScoreCategories = [
  { key: 'performance', label: 'Performance', icon: '⚡' },
  { key: 'display',     label: 'Connectivity', icon: '🔌' },
  { key: 'thermals',    label: 'Thermals',     icon: '🌡️' },
  { key: 'build',       label: 'Build',        icon: '🔨' },
  { key: 'value',       label: 'Value',        icon: '💰' },
];

pcs.forEach(p => {
  const vals = Object.values(p.scores);
  p.overall = Math.round((vals.reduce((a, b) => a + b, 0) / vals.length) * 10) / 10;
  p.scoreInfo = getScoreLabel(p.overall);
});
