/**
 * BAUBUND - Main Application & UI Interactions
 * Mobile navigation, tabbed showcase box, cookie consent banner, form handling, active routes.
 */

document.addEventListener('DOMContentLoaded', () => {
  initSmartHeader();
  initScrollIndicator();
  initMobileMenu();
  initActiveNav();
  initShowcaseTabs();
  initCookieBanner();
  initContactFormAutofill();
  initForms();
});

// Smart header: disappears when scrolling down, reappears when scrolling up
function initSmartHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY;

        // If mobile nav is open, never hide the header
        const isMobileOpen = document.body.classList.contains('menu-open');
        if (isMobileOpen) {
          header.classList.remove('header-hidden');
          lastScrollY = currentScrollY;
          ticking = false;
          return;
        }

        if (currentScrollY <= 25) {
          // Always show at top
          header.classList.remove('header-hidden');
        } else if (scrollDelta > 7 && currentScrollY > 75) {
          // Scrolling down -> hide header
          header.classList.add('header-hidden');
        } else if (scrollDelta < -6) {
          // Scrolling up -> reveal header
          header.classList.remove('header-hidden');
        }

        lastScrollY = currentScrollY;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// Custom scrollbar: visible only when scrolling or hovered
function initScrollIndicator() {
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    document.body.classList.add('is-scrolling');
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      document.body.classList.remove('is-scrolling');
    }, 850);
  }, { passive: true });
}

// Mobile menu toggle
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.main-nav');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('nav-open');
    document.body.classList.toggle('menu-open');
  });

  // Close when clicking outside or pressing Escape
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('nav-open') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('nav-open');
      document.body.classList.remove('menu-open');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('nav-open')) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('nav-open');
      document.body.classList.remove('menu-open');
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('nav-open');
      document.body.classList.remove('menu-open');
    });
  });
}

// Highlight current active navigation link
function initActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Tabbed Info Box UI element (Reference 2)
function initShowcaseTabs() {
  const tabButtons = document.querySelectorAll('.showcase-tab-btn');
  const detailPanels = document.querySelectorAll('.showcase-detail-panel');

  if (!tabButtons.length || !detailPanels.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target-tab');

      tabButtons.forEach(b => b.classList.remove('active'));
      detailPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

// Cookie & Privacy Banner with localStorage consent
function initCookieBanner() {
  const banner = document.getElementById('cookie-consent-banner');
  if (!banner) return;

  const hasConsent = localStorage.getItem('baubund_cookie_consent');
  if (!hasConsent) {
    setTimeout(() => {
      banner.classList.add('visible');
    }, 600);
  }

  const acceptBtn = document.getElementById('cookie-accept-btn');
  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('baubund_cookie_consent', 'essential');
      banner.classList.remove('visible');
    });
  }
}

// Auto-fill inquiry form if navigated from calculator
function initContactFormAutofill() {
  const params = new URLSearchParams(window.location.search);
  const service = params.get('service');
  const sqm = params.get('sqm');
  const estimate = params.get('estimate');

  if (!service && !sqm && !estimate) return;

  const typeSelect = document.getElementById('inquiry-service-type');
  const descArea = document.getElementById('inquiry-description');

  if (typeSelect && service) {
    typeSelect.value = service;
  }

  if (descArea) {
    const lang = (window.i18n && window.i18n.currentLang) || 'de';
    if (lang === 'de') {
      descArea.value = `Geschätztes Projekt aus dem Kostenrechner:\n- Gewerk: ${service}\n- Fläche ca.: ${sqm} m²\n- Vorkalkulation: ca. ${estimate} € inkl. MwSt.\n\nBitte um Kontaktaufnahme zur Terminabstimmung in der Region Stuttgart / bundesweit.`;
    } else {
      descArea.value = `Estimated project from cost calculator:\n- Trade: ${service}\n- Area approx.: ${sqm} m²\n- Budget estimate: approx. €${estimate} incl. VAT\n\nPlease contact me to coordinate an on-site consultation in the Stuttgart region / nationwide.`;
    }
  }
}

// Handle form submits with accessible in-page confirmation
function initForms() {
  document.querySelectorAll('form[data-ajax-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const feedbackEl = form.querySelector('.form-feedback');

      if (submitBtn) {
        submitBtn.disabled = true;
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '...';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
          form.reset();

          if (feedbackEl) {
            feedbackEl.classList.add('visible', 'success');
            const lang = (window.i18n && window.i18n.currentLang) || 'de';
            feedbackEl.textContent = lang === 'de'
              ? 'Vielen Dank! Ihre Anfrage ist erfolgreich eingegangen. Unser Bauleiter meldet sich innerhalb von 24 Stunden.'
              : 'Thank you! Your inquiry has been received. Our team will contact you within 24 hours.';

            setTimeout(() => {
              feedbackEl.classList.remove('visible');
            }, 8000);
          }
        }, 600);
      }
    });
  });
}
