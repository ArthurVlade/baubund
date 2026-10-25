/**
 * BAUBUND - Interactive Project & Cost Estimator
 * Real-world baseline calculation for craft labor, materials & logistics.
 */

class ProjectCalculator {
  constructor() {
    this.serviceRates = {
      paint: { laborPerSqm: 22, materialStandard: 9, materialPremium: 18, materialEco: 28 },
      floor: { laborPerSqm: 32, materialStandard: 19, materialPremium: 38, materialEco: 65 },
      tiles: { laborPerSqm: 68, materialStandard: 28, materialPremium: 52, materialEco: 89 },
      drywall: { laborPerSqm: 46, materialStandard: 22, materialPremium: 36, materialEco: 54 },
      garden: { laborPerSqm: 54, materialStandard: 30, materialPremium: 58, materialEco: 92 },
      full: { laborPerSqm: 145, materialStandard: 75, materialPremium: 135, materialEco: 220 }
    };

    this.minSqm = {
      paint: 15,
      floor: 10,
      tiles: 8,
      drywall: 10,
      garden: 15,
      full: 30
    };
  }

  init() {
    this.form = document.getElementById('project-calc-form');
    if (!this.form) return;

    this.serviceSelect = document.getElementById('calc-service');
    this.sqmInput = document.getElementById('calc-sqm');
    this.sqmRange = document.getElementById('calc-sqm-range');
    this.qualityRadios = document.querySelectorAll('input[name="calc-quality"]');
    this.extraRemoval = document.getElementById('calc-extra-removal');
    this.extraExpress = document.getElementById('calc-extra-express');
    this.extraFurniture = document.getElementById('calc-extra-furniture');

    this.laborOutput = document.getElementById('calc-labor-val');
    this.materialOutput = document.getElementById('calc-material-val');
    this.totalOutput = document.getElementById('calc-total-val');
    this.adoptBtn = document.getElementById('calc-adopt-btn');

    this.bindEvents();
    this.calculate();
  }

  bindEvents() {
    // Sync number and range slider
    if (this.sqmInput && this.sqmRange) {
      this.sqmInput.addEventListener('input', () => {
        this.sqmRange.value = this.sqmInput.value;
        this.calculate();
      });
      this.sqmRange.addEventListener('input', () => {
        this.sqmInput.value = this.sqmRange.value;
        this.calculate();
      });
    }

    if (this.serviceSelect) {
      this.serviceSelect.addEventListener('change', () => this.calculate());
    }

    this.qualityRadios.forEach(r => {
      r.addEventListener('change', () => this.calculate());
    });

    [this.extraRemoval, this.extraExpress, this.extraFurniture].forEach(chk => {
      if (chk) chk.addEventListener('change', () => this.calculate());
    });

    // Update currency / format on language change
    document.addEventListener('langChanged', () => {
      this.calculate();
    });

    if (this.adoptBtn) {
      this.adoptBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.adoptToInquiry();
      });
    }
  }

  calculate() {
    if (!this.serviceSelect || !this.sqmInput) return;

    const service = this.serviceSelect.value || 'paint';
    let sqm = parseFloat(this.sqmInput.value) || 45;
    if (sqm < 5) sqm = 5;

    const rates = this.serviceRates[service] || this.serviceRates.paint;

    let selectedQuality = 'standard';
    this.qualityRadios.forEach(r => {
      if (r.checked) selectedQuality = r.value;
    });

    let materialRate = rates.materialStandard;
    if (selectedQuality === 'premium') materialRate = rates.materialPremium;
    if (selectedQuality === 'eco') materialRate = rates.materialEco;

    let baseLabor = sqm * rates.laborPerSqm;
    let baseMaterial = sqm * materialRate;

    // Extras
    if (this.extraRemoval && this.extraRemoval.checked) {
      baseLabor += sqm * 11; // Removal & disposal fee
    }

    if (this.extraFurniture && this.extraFurniture.checked) {
      baseLabor += 190; // Flat furniture handling & masking
    }

    let subtotal = baseLabor + baseMaterial;

    if (this.extraExpress && this.extraExpress.checked) {
      subtotal *= 1.15; // 15% express dispatch
    }

    // German VAT / MwSt 19% inclusive display
    const finalTotal = Math.round(subtotal * 1.19);
    const finalLabor = Math.round(baseLabor * 1.19);
    const finalMaterial = Math.round(baseMaterial * 1.19);

    // Format currency
    const isEn = (window.i18n && window.i18n.currentLang === 'en');
    const currencyFormatter = new Intl.NumberFormat(isEn ? 'en-US' : 'de-DE', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    });

    if (this.laborOutput) this.laborOutput.textContent = currencyFormatter.format(finalLabor);
    if (this.materialOutput) this.materialOutput.textContent = currencyFormatter.format(finalMaterial);
    if (this.totalOutput) this.totalOutput.textContent = currencyFormatter.format(finalTotal);

    this.lastCalculation = {
      service,
      sqm,
      quality: selectedQuality,
      total: finalTotal,
      formattedTotal: currencyFormatter.format(finalTotal)
    };
  }

  adoptToInquiry() {
    if (!this.lastCalculation) return;
    const { service, sqm, total } = this.lastCalculation;
    const targetUrl = `kontakt.html?service=${encodeURIComponent(service)}&sqm=${encodeURIComponent(sqm)}&estimate=${encodeURIComponent(total)}`;
    window.location.href = targetUrl;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.projectCalc = new ProjectCalculator();
  window.projectCalc.init();
});
