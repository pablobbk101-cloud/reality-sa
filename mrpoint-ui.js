/* ================================================================
   MRPOINT-UI.JS — Shared UI helpers
================================================================ */

/**
 * Renders a circular score ring SVG badge.
 * @param {number} score   - e.g. 7.8
 * @param {string} color   - hex color matching verdict
 * @returns {string}       - HTML string for the ring element
 */
function scoreRingHTML(score, color) {
  const r = 23;
  const circ = 2 * Math.PI * r;
  const filled = circ * (score / 10);
  const gap = circ - filled;
  const offset = circ * 0.25; // start from 12 o'clock

  return `
    <div class="score-ring-wrap">
      <svg class="score-ring-svg" viewBox="0 0 56 56" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="${r}" fill="none" stroke="#e8edf5" stroke-width="5"/>
        <circle cx="28" cy="28" r="${r}" fill="none" stroke="${color}" stroke-width="5"
          stroke-dasharray="${filled.toFixed(2)} ${gap.toFixed(2)}"
          stroke-dashoffset="${offset.toFixed(2)}"
          stroke-linecap="round"/>
      </svg>
      <div class="score-ring-center">
        <span class="score-ring-num" style="color:${color}">${score}</span>
        <span class="score-ring-denom">/10</span>
      </div>
    </div>
  `.trim();
}

/**
 * Returns a small colored verdict pill span.
 * @param {string} label - e.g. "Great Buy"
 * @param {string} color - hex color
 */
function verdictPillHTML(label, color) {
  // Make background a tinted version of the color at low opacity
  return `<span class="verdict-pill" style="color:${color}; background:${color}18; border: 1px solid ${color}30;">${label}</span>`;
}
