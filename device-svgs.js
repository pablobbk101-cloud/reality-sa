// device-svgs.js — White outline device illustrations for Mr Point
// Each SVG uses stroke="rgba(255,255,255,0.88)" on transparent bg
// Usage: getDeviceSVG(item, type)  where type is 'phone' | 'laptop' | 'pc'

const _SVG = {};

/* ── PHONE (Samsung Galaxy A style — thin bezels, punch-hole cam) ─────── */
_SVG.phone = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 160" fill="none" stroke="rgba(255,255,255,0.88)" stroke-linecap="round" stroke-linejoin="round">
  <rect x="10" y="4" width="60" height="152" rx="13" stroke-width="2.5"/>
  <rect x="14" y="14" width="52" height="122" rx="6" stroke-width="1.5"/>
  <circle cx="40" cy="22" r="3" stroke-width="1.5"/>
  <line x1="28" y1="148" x2="52" y2="148" stroke-width="2.5"/>
  <line x1="10" y1="46" x2="10" y2="62" stroke-width="4"/>
  <line x1="10" y1="68" x2="10" y2="84" stroke-width="4"/>
  <line x1="70" y1="52" x2="70" y2="72" stroke-width="4"/>
</svg>`;

/* ── STANDARD LAPTOP (HP, Dell, Lenovo, ASUS VivoBook, etc.) ──────────── */
_SVG.laptop = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130" fill="none" stroke="rgba(255,255,255,0.88)" stroke-linecap="round" stroke-linejoin="round">
  <rect x="16" y="4" width="168" height="106" rx="6" stroke-width="2"/>
  <rect x="22" y="10" width="156" height="94" rx="3" stroke-width="1.5"/>
  <circle cx="100" cy="13" r="2.5" stroke-width="1.5"/>
  <line x1="6" y1="112" x2="194" y2="112" stroke-width="1.5"/>
  <path d="M2 112 L0 124 Q4 130 100 130 Q196 130 200 124 L198 112" stroke-width="2"/>
  <rect x="62" y="115" width="76" height="8" rx="4" stroke-width="1.5"/>
</svg>`;

/* ── MACBOOK (Apple M-series — ultra-thin, notch, Apple logo) ─────────── */
_SVG.macbook = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 130" fill="none" stroke="rgba(255,255,255,0.88)" stroke-linecap="round" stroke-linejoin="round">
  <rect x="14" y="2" width="192" height="108" rx="10" stroke-width="2"/>
  <rect x="20" y="8" width="180" height="96" rx="5" stroke-width="1.5"/>
  <path d="M96 8 L96 20 Q102 26 110 26 Q118 26 124 20 L124 8" stroke-width="1.5"/>
  <path d="M110 52 Q110 46 116 44 Q114 38 118 36 Q124 36 126 40 Q130 40 132 44 Q134 50 130 56 Q126 62 118 62 Q110 58 110 52 Z" stroke-width="1.5"/>
  <line x1="4" y1="112" x2="216" y2="112" stroke-width="1.5"/>
  <path d="M0 112 L0 122 Q6 130 110 130 Q214 130 220 122 L220 112" stroke-width="2"/>
  <rect x="74" y="115" width="72" height="8" rx="4" stroke-width="1.5"/>
</svg>`;

/* ── GAMING LAPTOP (Lenovo, ASUS TUF, Acer Nitro — thick, angular) ────── */
_SVG.gaming_laptop = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 142" fill="none" stroke="rgba(255,255,255,0.88)" stroke-linecap="round" stroke-linejoin="round">
  <rect x="12" y="2" width="176" height="106" rx="4" stroke-width="2"/>
  <rect x="18" y="8" width="164" height="94" rx="2" stroke-width="1.5"/>
  <circle cx="100" cy="11" r="2.5" stroke-width="1.5"/>
  <line x1="2" y1="110" x2="198" y2="110" stroke-width="1.5"/>
  <path d="M0 110 L0 134 L200 134 L200 110" stroke-width="2"/>
  <line x1="26" y1="128" x2="68" y2="128" stroke-width="1.5"/>
  <line x1="26" y1="131" x2="68" y2="131" stroke-width="1.5"/>
  <line x1="132" y1="128" x2="174" y2="128" stroke-width="1.5"/>
  <line x1="132" y1="131" x2="174" y2="131" stroke-width="1.5"/>
  <rect x="28" y="114" width="144" height="10" rx="2" stroke-width="1.5"/>
  <rect x="68" y="116" width="64" height="6" rx="3" stroke-width="1.2"/>
  <line x1="0" y1="134" x2="12" y2="142" stroke-width="1.5"/>
  <line x1="200" y1="134" x2="188" y2="142" stroke-width="1.5"/>
</svg>`;

/* ── SLIM DESKTOP (HP Slimline, Lenovo IdeaCentre — small form factor) ── */
_SVG.desktop_sff = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 80" fill="none" stroke="rgba(255,255,255,0.88)" stroke-linecap="round" stroke-linejoin="round">
  <rect x="6" y="6" width="168" height="58" rx="8" stroke-width="2"/>
  <line x1="6" y1="26" x2="174" y2="26" stroke-width="1.5"/>
  <circle cx="90" cy="16" r="6" stroke-width="2"/>
  <rect x="18" y="34" width="72" height="8" rx="3" stroke-width="1.5"/>
  <rect x="18" y="46" width="72" height="8" rx="3" stroke-width="1.5"/>
  <rect x="102" y="34" width="62" height="20" rx="3" stroke-width="1.5"/>
  <rect x="10" y="58" width="22" height="6" rx="2" stroke-width="1.2"/>
  <rect x="148" y="58" width="22" height="6" rx="2" stroke-width="1.2"/>
</svg>`;

/* ── MID-RANGE DESKTOP TOWER (Dell OptiPlex, HP Envy, etc.) ──────────── */
_SVG.desktop_tower = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 148" fill="none" stroke="rgba(255,255,255,0.88)" stroke-linecap="round" stroke-linejoin="round">
  <rect x="10" y="6" width="60" height="136" rx="8" stroke-width="2"/>
  <line x1="10" y1="30" x2="70" y2="30" stroke-width="1.5"/>
  <circle cx="40" cy="18" r="6" stroke-width="2"/>
  <rect x="18" y="38" width="44" height="7" rx="2.5" stroke-width="1.5"/>
  <rect x="18" y="50" width="44" height="7" rx="2.5" stroke-width="1.5"/>
  <rect x="28" y="64" width="10" height="6" rx="1.5" stroke-width="1.5"/>
  <rect x="42" y="64" width="10" height="6" rx="1.5" stroke-width="1.5"/>
  <rect x="20" y="80" width="40" height="40" rx="5" stroke-width="1.5"/>
  <line x1="26" y1="100" x2="54" y2="100" stroke-width="1.2"/>
  <line x1="26" y1="107" x2="54" y2="107" stroke-width="1.2"/>
  <rect x="14" y="136" width="18" height="6" rx="2" stroke-width="1.2"/>
  <rect x="48" y="136" width="18" height="6" rx="2" stroke-width="1.2"/>
</svg>`;

/* ── GAMING TOWER (Custom builds, ASUS ROG — angular, side panel window) */
_SVG.gaming_tower = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 154" fill="none" stroke="rgba(255,255,255,0.88)" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8 150 L8 18 L28 4 L82 4 L82 150 Z" stroke-width="2"/>
  <rect x="13" y="24" width="54" height="90" rx="4" stroke-width="1.5"/>
  <circle cx="40" cy="69" r="19" stroke-width="1.5"/>
  <circle cx="40" cy="69" r="9" stroke-width="1.5"/>
  <line x1="40" y1="50" x2="40" y2="60" stroke-width="1.2"/>
  <line x1="40" y1="78" x2="40" y2="88" stroke-width="1.2"/>
  <line x1="21" y1="69" x2="31" y2="69" stroke-width="1.2"/>
  <line x1="49" y1="69" x2="59" y2="69" stroke-width="1.2"/>
  <circle cx="70" cy="22" r="5" stroke-width="2"/>
  <rect x="63" y="34" width="14" height="4" rx="1.5" stroke-width="1.5"/>
  <rect x="63" y="44" width="14" height="4" rx="1.5" stroke-width="1.5"/>
  <line x1="8" y1="118" x2="8" y2="138" stroke-width="4"/>
  <rect x="12" y="142" width="20" height="8" rx="3" stroke-width="1.5"/>
  <rect x="58" y="142" width="20" height="8" rx="3" stroke-width="1.5"/>
</svg>`;

/* ── MAC MINI (Apple M4 — flat, minimal, wide) ───────────────────────── */
_SVG.mac_mini = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 64" fill="none" stroke="rgba(255,255,255,0.88)" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="8" width="172" height="48" rx="10" stroke-width="2"/>
  <rect x="10" y="14" width="160" height="36" rx="7" stroke-width="1.2"/>
  <path d="M90 26 Q90 21 95 20 Q93 16 96 14 Q101 14 102 18 Q105 18 107 21 Q109 26 106 31 Q103 36 97 36 Q90 32 90 26 Z" stroke-width="1.5"/>
  <circle cx="167" cy="50" r="2.5" stroke-width="1.5"/>
  <rect x="24" y="46" width="10" height="5" rx="2" stroke-width="1.2"/>
  <rect x="40" y="46" width="10" height="5" rx="2" stroke-width="1.2"/>
  <rect x="56" y="46" width="6" height="5" rx="1.5" stroke-width="1.2"/>
</svg>`;

/* ── MAPPING FUNCTION ─────────────────────────────────────────────────── */
function getDeviceSVG(item, type) {
  if (type === 'phone') {
    return _SVG.phone;
  }

  if (type === 'laptop') {
    if (item.brand === 'Apple') return _SVG.macbook;
    if (item.category === 'Gaming') return _SVG.gaming_laptop;
    return _SVG.laptop;
  }

  if (type === 'pc') {
    if (item.brand === 'Apple') return _SVG.mac_mini;
    const cat = item.category || '';
    if (cat === 'Gaming Build' || cat === 'Gaming Desktop') return _SVG.gaming_tower;
    if (cat === 'Budget Desktop') return _SVG.desktop_sff;
    return _SVG.desktop_tower;
  }

  return _SVG.laptop; // fallback
}
