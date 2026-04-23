// ─── Mr Point Currency System ──────────────────────────────────────────────
// All prices in data.js are stored in ZAR (South African Rand).
// Rates are approximate — updated periodically.

const CURRENCIES = [
  { code: "ZAR", symbol: "R",  name: "South African Rand",  rate: 1 },
  { code: "USD", symbol: "$",  name: "US Dollar",           rate: 0.054 },
  { code: "EUR", symbol: "€",  name: "Euro",                rate: 0.050 },
  { code: "GBP", symbol: "£",  name: "British Pound",       rate: 0.043 },
  { code: "BWP", symbol: "P",  name: "Botswana Pula",       rate: 0.74  },
  { code: "ZMW", symbol: "K",  name: "Zambian Kwacha",      rate: 1.48  },
  { code: "NGN", symbol: "₦",  name: "Nigerian Naira",      rate: 87    },
  { code: "KES", symbol: "KSh",name: "Kenyan Shilling",     rate: 7.1   },
  { code: "GHS", symbol: "₵",  name: "Ghanaian Cedi",       rate: 0.81  },
  { code: "AUD", symbol: "A$", name: "Australian Dollar",   rate: 0.083 },
];

const CURRENCY_KEY = "mrpoint_currency";

function getActiveCurrency() {
  const saved = localStorage.getItem(CURRENCY_KEY);
  return CURRENCIES.find(c => c.code === saved) || CURRENCIES[0];
}

function setActiveCurrency(code) {
  localStorage.setItem(CURRENCY_KEY, code);
}

function formatPrice(zarPrice, showTilde = true) {
  const cur = getActiveCurrency();
  const converted = zarPrice * cur.rate;
  const prefix = showTilde ? '~' : '';
  // Format nicely
  if (converted >= 1000) {
    return `${prefix}${cur.symbol}${Math.round(converted).toLocaleString()}`;
  } else if (converted >= 10) {
    return `${prefix}${cur.symbol}${Math.round(converted)}`;
  } else {
    return `${prefix}${cur.symbol}${converted.toFixed(2)}`;
  }
}

// Inject currency picker into a nav element
function injectCurrencyPicker(navInnerSelector) {
  const nav = document.querySelector(navInnerSelector);
  if (!nav) return;

  const active = getActiveCurrency();

  const wrapper = document.createElement('div');
  wrapper.className = 'currency-picker';
  wrapper.innerHTML = `
    <button class="currency-btn" id="currency-btn" title="Change currency">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity:0.6"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
      <span id="currency-code">${active.code}</span>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="opacity:0.5"><path d="M6 9l6 6 6-6"/></svg>
    </button>
    <div class="currency-dropdown" id="currency-dropdown">
      <div class="currency-dropdown-header">Select Currency</div>
      ${CURRENCIES.map(c => `
        <button class="currency-option ${c.code === active.code ? 'active' : ''}" data-code="${c.code}">
          <span class="currency-option-symbol">${c.symbol}</span>
          <span class="currency-option-info">
            <span class="currency-option-code">${c.code}</span>
            <span class="currency-option-name">${c.name}</span>
          </span>
          ${c.code === active.code ? '<span class="currency-check">✓</span>' : ''}
        </button>
      `).join('')}
      <div class="currency-disclaimer">Rates are approximate</div>
    </div>
  `;

  nav.appendChild(wrapper);

  // Toggle dropdown
  const btn = document.getElementById('currency-btn');
  const dropdown = document.getElementById('currency-dropdown');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  document.addEventListener('click', () => dropdown.classList.remove('open'));
  dropdown.addEventListener('click', e => e.stopPropagation());

  // Select currency
  dropdown.querySelectorAll('.currency-option').forEach(opt => {
    opt.addEventListener('click', () => {
      setActiveCurrency(opt.dataset.code);
      window.location.reload();
    });
  });
}

// CSS injected once
(function injectCurrencyStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .currency-picker { position: relative; margin-left: 0.5rem; }

    .currency-btn {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      border: 1px solid #e5e7eb;
      background: #f9fafb;
      color: #374151;
      font-size: 0.8rem;
      font-weight: 600;
      padding: 0.4rem 0.75rem;
      border-radius: 8px;
      cursor: pointer;
      font-family: 'Inter', sans-serif;
      transition: border-color 0.15s, background 0.15s;
    }
    .currency-btn:hover { border-color: #2563eb; background: #eff6ff; color: #2563eb; }

    .currency-dropdown {
      display: none;
      position: absolute;
      right: 0;
      top: calc(100% + 6px);
      background: #fff;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.12);
      width: 230px;
      z-index: 999;
      overflow: hidden;
    }
    .currency-dropdown.open { display: block; }

    .currency-dropdown-header {
      padding: 0.65rem 1rem;
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #9ca3af;
      border-bottom: 1px solid #f3f4f6;
    }

    .currency-option {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      width: 100%;
      border: none;
      background: none;
      padding: 0.6rem 1rem;
      cursor: pointer;
      font-family: 'Inter', sans-serif;
      transition: background 0.1s;
      text-align: left;
    }
    .currency-option:hover { background: #f9fafb; }
    .currency-option.active { background: #eff6ff; }

    .currency-option-symbol {
      font-family: 'Outfit', sans-serif;
      font-weight: 900;
      font-size: 0.9rem;
      color: #2563eb;
      width: 22px;
      text-align: center;
      flex-shrink: 0;
    }

    .currency-option-info { flex: 1; }
    .currency-option-code { font-size: 0.85rem; font-weight: 700; color: #111; display: block; }
    .currency-option-name { font-size: 0.72rem; color: #6b7280; }

    .currency-check { color: #16a34a; font-weight: 700; font-size: 0.85rem; }

    .currency-disclaimer {
      padding: 0.5rem 1rem;
      font-size: 0.65rem;
      color: #9ca3af;
      border-top: 1px solid #f3f4f6;
      text-align: center;
    }

    @media (max-width: 640px) {
      .currency-dropdown { right: -0.5rem; width: 200px; }
    }
  `;
  document.head.appendChild(style);
})();
