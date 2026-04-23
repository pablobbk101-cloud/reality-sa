function initMobileShell(options = {}) {
  const navInner = document.querySelector('nav .nav-inner');
  const navLinks = navInner ? navInner.querySelector('.nav-links') : null;

  if (!navInner || !navLinks || navInner.querySelector('.mobile-menu-btn')) {
    return;
  }

  let utility = navInner.querySelector('.nav-utility');
  if (!utility) {
    utility = document.createElement('div');
    utility.className = 'nav-utility';
    navInner.appendChild(utility);
  }

  const menuBtn = document.createElement('button');
  menuBtn.className = 'mobile-menu-btn';
  menuBtn.type = 'button';
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-label', 'Open navigation menu');
  menuBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
      <path d="M4 7h16M4 12h16M4 17h16"></path>
    </svg>
  `;
  utility.appendChild(menuBtn);

  const title = options.title || 'Explore the site';
  const label = options.label || 'Navigate';
  const links = Array.from(navLinks.querySelectorAll('a')).map((link) => {
    const href = link.getAttribute('href') || '#';
    const active = link.classList.contains('active');
    const rawLabel = link.textContent.trim();
    const cleanLabel = rawLabel.replace(/^[^\w]+/u, '').trim() || rawLabel;
    return { href, active, rawLabel, cleanLabel };
  });

  const panel = document.createElement('div');
  panel.className = 'mobile-menu-panel';
  panel.innerHTML = `
    <div class="mobile-menu-header">
      <div class="mobile-menu-label">${label}</div>
      <div class="mobile-menu-title">${title}</div>
    </div>
    <div class="mobile-menu-links">
      ${links.map((link) => `
        <a href="${link.href}" class="${link.active ? 'active' : ''}">
          <span>${link.rawLabel}<small>${link.active ? 'You are here right now' : `Open ${link.cleanLabel}`}</small></span>
          <span>→</span>
        </a>
      `).join('')}
    </div>
  `;
  navInner.appendChild(panel);

  const closeMenu = () => {
    panel.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Open navigation menu');
  };

  menuBtn.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!panel.contains(event.target) && !menuBtn.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
}
