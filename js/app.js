/**
 * BAUBUND - Customer Web Application Logic
 * 4 Bottom Tabs (Dashboard, Booking, Projects & Docs, Support)
 * Dedicated Light/Dark Mode + Dynamic Trade Booking Engine + Direct Chat
 */

class BaubundApp {
  constructor() {
    this.currentTab = 'tab-dashboard';
    this.rates = {
      full: { name: 'Komplett-Wohnungssanierung', labor: 145, matStd: 75, matPrem: 140 },
      bath: { name: 'Badsanierung & Sanitär', labor: 110, matStd: 65, matPrem: 125 },
      floor: { name: 'Hochwertiger Innenausbau & Parkett', labor: 42, matStd: 32, matPrem: 65 },
      paint: { name: 'Maler- & Spachtelarbeiten Q4', labor: 28, matStd: 14, matPrem: 26 }
    };

    this.selectedTrade = 'bath';
    this.selectedArea = 18;
    this.selectedQuality = 'standard';
    this.selectedCity = 'Stuttgart';
  }

  init() {
    this.initTheme();
    this.initTabs();
    this.initBookingEngine();
    this.initChat();
    this.loadActiveOrders();

    // Re-calculate when language switches
    document.addEventListener('langChanged', () => {
      this.updateBookingCalculations();
    });
  }

  /* ==========================================================================
     Theme Management (Strict Anti-Slop, Deep Slate & High Contrast)
     ========================================================================== */
  initTheme() {
    const savedTheme = localStorage.getItem('baubund_theme') || 'light';
    this.setTheme(savedTheme);

    const themeToggleBtn = document.getElementById('app-theme-toggle');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(nextTheme);
      });
    }
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('baubund_theme', theme);

    const themeToggleBtn = document.getElementById('app-theme-toggle');
    if (themeToggleBtn) {
      // Toggle icon between sun & moon
      if (theme === 'dark') {
        themeToggleBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>`;
      } else {
        themeToggleBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>`;
      }
    }
  }

  /* ==========================================================================
     Bottom 4-Tab Navigation
     ========================================================================== */
  initTabs() {
    const tabButtons = document.querySelectorAll('.nav-tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target-panel');
        this.switchTab(targetId);
      });
    });

    // Deep linking through quick action buttons on dashboard
    document.querySelectorAll('[data-switch-tab]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = el.getAttribute('data-switch-tab');
        this.switchTab(targetId);
      });
    });
  }

  switchTab(targetId) {
    const tabButtons = document.querySelectorAll('.nav-tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(btn => {
      if (btn.getAttribute('data-target-panel') === targetId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    tabPanels.forEach(panel => {
      if (panel.id === targetId) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    this.currentTab = targetId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ==========================================================================
     Interactive Service Booking Engine (High-Margin Trades)
     ========================================================================== */
  initBookingEngine() {
    // Trade selection cards
    const tradeCards = document.querySelectorAll('.trade-select-card');
    tradeCards.forEach(card => {
      card.addEventListener('click', () => {
        tradeCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.selectedTrade = card.getAttribute('data-trade') || 'bath';
        this.updateBookingCalculations();
      });
    });

    // Area slider & number sync
    const areaSlider = document.getElementById('book-area-slider');
    const areaDisplay = document.getElementById('book-area-val');

    if (areaSlider && areaDisplay) {
      areaSlider.addEventListener('input', () => {
        this.selectedArea = parseInt(areaSlider.value, 10);
        areaDisplay.textContent = `${this.selectedArea} m²`;
        this.updateBookingCalculations();
      });
    }

    // Material quality choice
    const qualityBtns = document.querySelectorAll('.quality-choice-btn');
    qualityBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        qualityBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.selectedQuality = btn.getAttribute('data-quality') || 'standard';
        this.updateBookingCalculations();
      });
    });

    // City Selector
    const citySelect = document.getElementById('book-city-select');
    if (citySelect) {
      citySelect.addEventListener('change', () => {
        this.selectedCity = citySelect.value;
      });
    }

    // Booking submit button
    const confirmBtn = document.getElementById('app-book-confirm-btn');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.submitBooking();
      });
    }

    this.updateBookingCalculations();
  }

  updateBookingCalculations() {
    const rateInfo = this.rates[this.selectedTrade] || this.rates.bath;
    const matRate = this.selectedQuality === 'premium' ? rateInfo.matPrem : rateInfo.matStd;

    const laborCost = Math.round(this.selectedArea * rateInfo.labor * 1.19);
    const materialCost = Math.round(this.selectedArea * matRate * 1.19);
    const totalCost = laborCost + materialCost;

    const isEn = (window.i18n && window.i18n.currentLang === 'en');
    const fmt = new Intl.NumberFormat(isEn ? 'en-US' : 'de-DE', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    });

    const sumLaborEl = document.getElementById('sum-labor-val');
    const sumMatEl = document.getElementById('sum-material-val');
    const sumTotalEl = document.getElementById('sum-total-val');

    if (sumLaborEl) sumLaborEl.textContent = fmt.format(laborCost);
    if (sumMatEl) sumMatEl.textContent = fmt.format(materialCost);
    if (sumTotalEl) sumTotalEl.textContent = fmt.format(totalCost);

    this.currentCalculatedTotal = fmt.format(totalCost);
  }

  submitBooking() {
    const confirmBtn = document.getElementById('app-book-confirm-btn');
    const successBox = document.getElementById('book-success-banner');

    if (confirmBtn) {
      confirmBtn.disabled = true;
      confirmBtn.textContent = '...';

      setTimeout(() => {
        confirmBtn.disabled = false;
        const confirmTextKey = 'app_book_btn_confirm';
        confirmBtn.textContent = window.i18n ? window.i18n.t(confirmTextKey) : 'Gewerk jetzt verbindlich anfragen';

        if (successBox) {
          successBox.style.display = 'block';
          successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // Save order to localStorage
        const orderData = {
          trade: this.selectedTrade,
          tradeName: this.rates[this.selectedTrade].name,
          area: this.selectedArea,
          city: this.selectedCity,
          total: this.currentCalculatedTotal,
          date: new Date().toLocaleDateString('de-DE')
        };
        localStorage.setItem('baubund_last_booking', JSON.stringify(orderData));

        setTimeout(() => {
          this.switchTab('tab-dashboard');
          if (successBox) successBox.style.display = 'none';
        }, 3200);
      }, 700);
    }
  }

  loadActiveOrders() {
    const raw = localStorage.getItem('baubund_last_booking');
    if (!raw) return;
    try {
      const order = JSON.parse(raw);
      const activeProjNameEl = document.getElementById('dash-active-project-name');
      if (activeProjNameEl) {
        activeProjNameEl.textContent = `${order.tradeName} (${order.area} m²) · ${order.total}`;
      }
    } catch (e) {}
  }

  /* ==========================================================================
     Direct Site Manager Chat Integration
     ========================================================================== */
  initChat() {
    const chatInput = document.getElementById('app-chat-input');
    const sendBtn = document.getElementById('app-chat-send');
    const messageContainer = document.getElementById('app-chat-messages');

    if (!chatInput || !sendBtn || !messageContainer) return;

    const sendMessage = () => {
      const text = chatInput.value.trim();
      if (!text) return;

      const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      // Append user outgoing message
      const userBubble = document.createElement('div');
      userBubble.className = 'chat-bubble outgoing';
      userBubble.innerHTML = `${this.escapeHtml(text)} <span class="chat-time">${timeStr}</span>`;
      messageContainer.appendChild(userBubble);
      chatInput.value = '';
      messageContainer.scrollTop = messageContainer.scrollHeight;

      // Simulated realistic response from Site Manager Markus Lindner
      setTimeout(() => {
        const lang = (window.i18n && window.i18n.currentLang) || 'de';
        const replyText = lang === 'de'
          ? 'Danke für die Nachricht! Ich bin aktuell kurz auf der Baustelle in Stuttgart-Mitte und melde mich in ca. 15 Minuten telefonisch.'
          : 'Thank you for the message! I am currently on the site in Stuttgart-Mitte and will call you back in about 15 minutes.';

        const replyTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const managerBubble = document.createElement('div');
        managerBubble.className = 'chat-bubble incoming';
        managerBubble.innerHTML = `<strong>Dipl.-Ing. Markus Lindner</strong><br>${replyText} <span class="chat-time">${replyTime}</span>`;
        messageContainer.appendChild(managerBubble);
        messageContainer.scrollTop = messageContainer.scrollHeight;
      }, 950);
    };

    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }

  escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.baubundApp = new BaubundApp();
  window.baubundApp.init();
});
