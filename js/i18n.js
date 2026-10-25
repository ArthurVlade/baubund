/**
 * BAUBUND - Bilingual Translation Engine (DE / EN)
 * Complete dictionary for all pages, interactive calculators, showcase boxes, and legal modules.
 */

const translations = {
  de: {
    // Navigation & Common
    "brand_name": "BAUBUND",
    "brand_tagline": "Handwerk, Material & Baukoordination aus einer Hand",
    "nav_home": "Home",
    "nav_services": "Gewerke",
    "nav_process": "Ablauf",
    "nav_partners": "Für Partner",
    "nav_calculator": "Kostenrechner",
    "nav_pitch": "B2B Pitch Deck",
    "nav_contact": "Kontakt",
    "nav_cta": "Projekt anfragen",
    "lang_toggle_label": "Sprache wechseln",
    "nav_location_badge": "Stuttgart & bundesweit",

    // Common CTAs & Trust Badges
    "cta_request_quote": "Kostenloses Angebot anfordern",
    "cta_calculate_now": "Kosten jetzt berechnen",
    "cta_become_partner": "Partnerbetrieb werden",
    "cta_contact_us": "Beratungsgespräch vereinbaren",
    "cta_send_inquiry": "Anfrage unverbindlich absenden",
    "trust_fixed_price": "Festpreisgarantie",
    "trust_licensed_pros": "Geprüfte Meister- & Fachbetriebe",
    "trust_insured": "Bis 5 Mio. € vollversichert",
    "trust_materials": "Qualitätsbaustoffe inklusive",

    // Homepage Hero
    "hero_badge": "Deutschlandweiter Rollout, Startregion Stuttgart",
    "hero_title": "Kein Handwerker-Chaos mehr. Ein Ansprechpartner für Ihr gesamtes Projekt.",
    "hero_subtitle": "Ob anspruchsvolle Wohnungssanierung, Badumbau oder hochwertiger Innenausbau: Wir koordinieren qualifizierte Meisterbetriebe, beschaffen alle Baumarkt- und Profimaterialien und garantieren verbindliche Festpreise.",
    "hero_stat_1_val": "100%",
    "hero_stat_1_txt": "Verlässliche Festpreise ohne Nachforderungen",
    "hero_stat_2_val": "1 Ansprechpartner",
    "hero_stat_2_txt": "Statt Dutzende Firmen einzeln zu koordinieren",
    "hero_stat_3_val": "Geprüfte Qualität",
    "hero_stat_3_txt": "Zertifizierte Fachhandwerker und Meisterbetriebe",

    // Three Pillars / Problem Solver
    "pillars_title": "Die neue Art, Handwerks- und Bauprojekte umzusetzen",
    "pillars_subtitle": "Herkömmliche Sanierungen scheitern meist an schlechter Absprache zwischen Gewerken, teuren Materialfehlern und zeitraubender Organisation. BAUBUND löst diese Probleme von Grund auf.",
    "pillar_1_title": "Zentrale Projektorganisation",
    "pillar_1_desc": "Sie müssen nicht Elektriker, Fliesenleger und Maler einzeln suchen. Wir takten alle Gewerke in enger Abstimmung aufeinander ab und überwachen die Baustelle.",
    "pillar_2_title": "Direkte Materialbeschaffung",
    "pillar_2_desc": "Durch Partnerschaften mit führenden Baumärkten (wie Hornbach, OBI, Bauhaus) und Baustoffhändlern liefern wir Profimaterial pünktlich und ohne unnötige Aufschläge.",
    "pillar_3_title": "Verbindlicher Festpreis & Garantie",
    "pillar_3_desc": "Keine bösen Überraschungen bei der Schlussrechnung. Vor Arbeitsbeginn steht der transparente Gesamtpreis fest. Sie zahlen erst bei sauberer Abnahme.",

    // High-Margin Showcase Section (Reference Box UI)
    "showcase_section_tag": "Fokus-Gewerke & Kernkompetenzen",
    "showcase_section_title": "Erstklassige Ausführung für wertsteigernde Projekte",
    "showcase_section_subtitle": "Wir konzentrieren uns auf renditestarke, qualitätsintensive Gewerke mit höchstem Anspruch an Koordination und Materialqualität.",
    
    // Tab 1: Komplett-Wohnungssanierung
    "tab_1_title": "Komplett-Wohnungssanierung",
    "tab_1_sub": "Schlüsselfertig, Alle Gewerke",
    "tab_1_badge": "Kernkompetenz, Höchste Wertschöpfung",
    "tab_1_heading": "Ganzheitliche Sanierung aus einer Meisterhand",
    "tab_1_desc": "Von der Entkernung über neue Leitungen, Böden und Wände bis zum fertigen Einzug. Unser Bauleiter steuert alle Gewerke mit verbindlichem Zeitplan.",
    "tab_1_impact_meta": "ZEIT- & KOSTENVORTEIL",
    "tab_1_impact_text": "Bis zu 35% kürzere Bauzeit durch lückenlose Gewerke-Taktung",
    "tab_1_cap_title": "LEISTUNGSUMFANG & MEISTERQUALITÄT",
    "tab_1_cap_1": "Komplette Projektleitung mit einem festen Ansprechpartner vor Ort",
    "tab_1_cap_2": "Zentrale Materialdisposition direkt über Großhandel & Baumarkt-Kontingente",
    "tab_1_cap_3": "Feste Fertigstellungstermine mit garantierter Endabnahme",
    "tab_1_cap_4": "Umfassende Gesamthaftung und 5 Jahre Gewährleistung nach BGB",
    "tab_1_footer_meta": "Schlüsselfertig, Materiallogistik, Meisterabnahme",
    "tab_1_cta": "Sanierung unverbindlich anfragen",

    // Tab 2: Badsanierung
    "tab_2_title": "Badsanierung & Sanitär",
    "tab_2_sub": "Barrierefrei, Fliesen & Sanitär",
    "tab_2_badge": "Spezialisierung, Feuchtraum-Zertifiziert",
    "tab_2_heading": "Moderne Bäder ohne Koordinationsaufwand",
    "tab_2_desc": "Fliesenleger, Installateur und Elektriker arbeiten Hand in Hand. Wir verwandeln veraltete Nassräume in moderne Wohlfühlbäder mit bodengleichen Duschen.",
    "tab_2_impact_meta": "FESTPREIS-SICHERHEIT",
    "tab_2_impact_text": "Verbindlicher Pauschalpreis inklusive aller Sanitär- und Fliesenmaterialien",
    "tab_2_cap_title": "LEISTUNGSUMFANG & MEISTERQUALITÄT",
    "tab_2_cap_1": "Fachgerechte Verbundabdichtung nach DIN 18534 gegen Feuchteschäden",
    "tab_2_cap_2": "Großformatige Fliesenverlegung und präzise Gehrungsschnitte (Jolly-Kanten)",
    "tab_2_cap_3": "Installation moderner Unterputz-Armaturen und Fußbodenerwärmung",
    "tab_2_cap_4": "Staubschutzwände und Luftreinigung während der gesamten Bauphase",
    "tab_2_footer_meta": "Planung, Sanitärtechnik, Fliesenmeister",
    "tab_2_cta": "Badprojekt jetzt kalkulieren",

    // Tab 3: Innenausbau & Parkett
    "tab_3_title": "Hochwertiger Innenausbau & Parkett",
    "tab_3_sub": "Echtholz, Vinyl & Trockenbau",
    "tab_3_badge": "Präzision, Nachhaltige Werkstoffe",
    "tab_3_heading": "Böden und Raumaufteilung in Vollendung",
    "tab_3_desc": "Maßgeschneiderte Trockenbauwände für neue Raumkonzepte kombiniert mit professionell verlegtem Parkett, Landhausdielen oder strapazierfähigem Design-Vinyl.",
    "tab_3_impact_meta": "MATERIALVORTEIL",
    "tab_3_impact_text": "Direktbelieferung ab Baumarkt / Großlager ohne Schleppen oder Verschnittverlust",
    "tab_3_cap_title": "LEISTUNGSUMFANG & MEISTERQUALITÄT",
    "tab_3_cap_1": "Professioneller Untergrundausgleich mit faserverstärkter Fließspachtelmasse",
    "tab_3_cap_2": "Verklebung oder schwimmende Verlegung mit integriertem Schallschutz",
    "tab_3_cap_3": "Schalloptimierte Trockenbau-Ständerwände nach GEG-Dämmstandards",
    "tab_3_cap_4": "Perfekt montierte Sockelleisten und saubere Übergangsschienen",
    "tab_3_footer_meta": "Echtholz, Designböden, Akustikdecken",
    "tab_3_cta": "Boden & Innenausbau anfragen",

    // Tab 4: Maler- & Spachteltechnik
    "tab_4_title": "Maler- & Spachteltechnik Q3/Q4",
    "tab_4_sub": "Glattputz, Vlies & Lackierungen",
    "tab_4_badge": "Oberflächen-Finish, Höchste Qualitätsstufe",
    "tab_4_heading": "Makellose Oberflächen ohne Streiflichteffekte",
    "tab_4_desc": "Hochwertiges Spachteln auf Q3/Q4-Niveau, verzugsfreie Malervlies-Montage und langlebige Anstriche mit emissionsarmen Silikat- und Premiumfarben.",
    "tab_4_impact_meta": "QUALITÄTSGARANTIE",
    "tab_4_impact_text": "Staubarmes Maschinenschleifen & gleichmäßige Streiflicht-Prüfung",
    "tab_4_cap_title": "LEISTUNGSUMFANG & MEISTERQUALITÄT",
    "tab_4_cap_1": "Vollflächiges Spachteln und Glätten für anspruchsvolle Architekturbeleuchtung",
    "tab_4_cap_2": "Rissüberbrückendes Renoviervlies für dauerhaft glatte Wandflächen",
    "tab_4_cap_3": "Spritzlackierung von Türen, Zargen und Heizkörpern in Profiqualität",
    "tab_4_cap_4": "Atmungsaktive, lösemittelfreie Farben für ein gesundes Raumklima",
    "tab_4_footer_meta": "Q4-Finish, Silikatfarben, Malermeister",
    "tab_4_cta": "Malerarbeiten anfragen",

    // 4-Step Process
    "workflow_title": "In 4 klaren Schritten zum fertigen Projekt",
    "workflow_subtitle": "Transparent, verlässlich und ohne Stress für Sie als Auftraggeber.",
    "step_1_num": "Schritt 1",
    "step_1_title": "Anfrage & Vor-Ort-Besichtigung",
    "step_1_desc": "Sie schildern Ihr Vorhaben online oder per Telefon. Bei Bedarf prüfen wir die Gegebenheiten vor Ort kostenfrei.",
    "step_2_num": "Schritt 2",
    "step_2_title": "Verbindliches Festpreisangebot",
    "step_2_desc": "Sie erhalten ein transparentes Angebot mit Materialauswahl, Ausführungszeitraum und garantierten Kosten.",
    "step_3_num": "Schritt 3",
    "step_3_title": "Materiallieferung & Ausführung",
    "step_3_desc": "Wir liefern alle Materialien auf die Baustelle. Unsere geprüften Fachhandwerker starten pünktlich und arbeiten gewerkübergreifend.",
    "step_4_num": "Schritt 4",
    "step_4_title": "Gemeinsame Abnahme & Garantie",
    "step_4_desc": "Erst wenn alles makellos ausgeführt und gereinigt ist, erfolgt die offizielle Abnahme inklusive Gewährleistung.",

    // Calculator Section Teaser
    "calc_teaser_title": "Interaktiver Projekt- & Kostenrechner",
    "calc_teaser_subtitle": "Kalkulieren Sie in 60 Sekunden eine erste Kostenschätzung für Ihr Vorhaben – inklusive Material und Arbeitszeit.",
    "calc_cta_start": "Zum Kostenrechner",

    // Partner Section Teaser
    "partner_teaser_title": "Für Handwerksbetriebe & Baumarkt-Partner",
    "partner_teaser_subtitle": "Konzentrieren Sie sich auf Ihr Handwerk – wir übernehmen Kundenakquise, Baustellenlogistik und pünktliche Abrechnung.",
    "partner_bullet_1": "Kein Akquise- und Bürokratieaufwand",
    "partner_bullet_2": "Material liegt rechtzeitig vor Ort bereit",
    "partner_bullet_3": "Garantierte, pünktliche Bezahlung nach Meilenstein",
    "partner_bullet_4": "Baumarkt-Kooperationen: Direktvermittlung von Montagekunden",

    // Pitch Deck Specific
    "pitch_badge": "B2B Kooperationskonzept",
    "pitch_title": "Partner-Präsentation für Baumärkte & Handwerksbetriebe",
    "pitch_subtitle": "Wie BAUBUND den Umsatz im Baustoffhandel steigert und Fachbetrieben eine verlässliche Auslastung ohne Bürokratie garantiert.",

    // Calculator Page
    "calc_page_title": "Interaktiver Kostenschätzer",
    "calc_page_intro": "Wählen Sie Ihr Gewerk, geben Sie die Raumgröße an und sehen Sie sofort einen realistischen Richtpreis für Arbeitszeit und Qualitätsmaterial.",
    "calc_step_service": "1. Gewerk auswählen",
    "calc_opt_paint": "Maler- & Spachtelarbeiten (Q3/Q4 Glätte)",
    "calc_opt_floor": "Bodenbelag (Parkett, Design-Vinyl, Laminat)",
    "calc_opt_tiles": "Fliesenarbeiten & Sanitärvorbereitung",
    "calc_opt_drywall": "Trockenbauwand / Raumteiler",
    "calc_opt_garden": "Garten & Außenanlagen (Pflaster, Zaun)",
    "calc_opt_full": "Komplett-Wohnungssanierung schlüsselfertig",
    "calc_step_size": "2. Fläche / Projektgröße",
    "calc_size_label": "Fläche in Quadratmetern (m²):",
    "calc_step_quality": "3. Material-Qualitätsstufe",
    "calc_qual_standard": "Solide Markenqualität (z.B. Hornbach/OBI Standard)",
    "calc_qual_premium": "Premium Fachhandelsqualität (robuster, langlebiger)",
    "calc_qual_eco": "Ökologisch & Exklusiv (Naturfarben, Massivholz, High-End)",
    "calc_step_extras": "4. Zusatzleistungen",
    "calc_extra_removal": "Altbelag entfernen & fachgerecht entsorgen",
    "calc_extra_express": "Express-Ausführung (Start innerhalb von 5 Werktagen)",
    "calc_extra_furniture": "Möbel rücken, abdecken & Endreinigung",
    "calc_res_title": "Ihre geschätzte Kostenaufstellung",
    "calc_res_labor": "Geschätzte Arbeitsleistung:",
    "calc_res_material": "Material & Logistik (Baumarkt/Fachhandel):",
    "calc_res_total": "Gesamtpreis (Richtwert inkl. MwSt.):",
    "calc_res_note": "Hinweis: Dies ist eine unverbindliche Orientierung. Für ein verbindliches Festpreisangebot führen wir gerne eine kostenlose Vor-Ort-Besichtigung durch.",
    "calc_btn_adopt": "Dieses Projekt unverbindlich anfragen",

    // Contact Page
    "page_contact_title": "Kontakt & Projektanfrage",
    "page_contact_intro": "Haben Sie ein konkretes Vorhaben oder Fragen zu unserem Modell? Sprechen Sie direkt mit unserer Baukoordination.",
    "contact_info_title": "Direkter Draht",
    "contact_phone_label": "Telefon:",
    "contact_phone_val": "+49 (0) 711 4905 8230",
    "contact_email_label": "E-Mail:",
    "contact_email_val": "kontakt@baubund-projekte.de",
    "contact_hours_label": "Erreichbarkeit:",
    "contact_hours_val": "Mo – Sa: 07:30 – 19:00 Uhr",
    "contact_form_title": "Kostenloses Angebot anfordern",
    "form_name": "Vollständiger Name",
    "form_project_type": "Art des Projekts",
    "form_address": "Postleitzahl & Ort des Bauvorhabens",
    "form_timeframe": "Gewünschter Starttermin",
    "form_timeframe_asap": "Schnellstmöglich",
    "form_timeframe_month": "Innerhalb der nächsten 4 Wochen",
    "form_timeframe_later": "Später / Noch in Planung",
    "form_desc_placeholder": "Beschreiben Sie kurz Ihr Vorhaben (z.B. 85m² Wohnung in Stuttgart komplett sanieren, neues Bad und Parkett)...",
    "form_consent": "Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage gespeichert und verarbeitet werden.",
    "form_submit_btn": "Projekt jetzt unverbindlich anfragen",

    // Cookie Banner
    "cookie_title": "Privatsphäre & Einstellungen",
    "cookie_desc": "Wir nutzen ausschließlich technisch essenzielle Cookies, um Grundfunktionen wie Ihre Spracheinstellungen zu speichern. Es werden keine externen Werbe-Tracker geladen.",
    "cookie_accept": "Verstanden & Speichern",
    "cookie_privacy_link": "Datenschutzerklärung",

    // Footer
    "footer_about": "BAUBUND ist Ihr verlässlicher Generalpartner für Handwerks- und Bauprojekte. Deutschlandweiter Rollout ab Metropolregion Stuttgart. Wir verbinden Meisterbetriebe, smarte Baumarkt-Logistik und verbindliche Festpreise.",
    "footer_quicklinks": "Schnellzugriff",
    "footer_trades": "Gewerke",
    "footer_legal": "Rechtliches",
    "footer_imprint": "Impressum",
    "footer_privacy": "Datenschutz",
    "footer_terms": "AGB",
    "footer_copyright": "© 2026 BAUBUND Projektgesellschaft. Alle Rechte vorbehalten."
  },

  en: {
    // Navigation & Common
    "brand_name": "BAUBUND",
    "brand_tagline": "Craft, Materials & Construction Coordination from a Single Source",
    "nav_home": "Home",
    "nav_services": "Trades",
    "nav_process": "Process",
    "nav_partners": "For Partners",
    "nav_calculator": "Cost Calculator",
    "nav_pitch": "B2B Pitch Deck",
    "nav_contact": "Contact",
    "nav_cta": "Request Project",
    "lang_toggle_label": "Switch language",
    "nav_location_badge": "Stuttgart & Nationwide",

    // Common CTAs & Trust Badges
    "cta_request_quote": "Request Free Quote",
    "cta_calculate_now": "Calculate Costs Now",
    "cta_become_partner": "Become a Trade Partner",
    "cta_contact_us": "Schedule Consultation",
    "cta_send_inquiry": "Submit Inquiry Without Obligation",
    "trust_fixed_price": "Guaranteed Fixed Pricing",
    "trust_licensed_pros": "Verified Master Craftspeople",
    "trust_insured": "Fully Insured up to €5M",
    "trust_materials": "Quality Materials Included",

    // Homepage Hero
    "hero_badge": "Nationwide Rollout, Launch Hub Stuttgart",
    "hero_title": "No more contractor chaos. One accountable partner for your entire project.",
    "hero_subtitle": "From full-scale apartment refurbishment and turnkey bathrooms to premium interior finishing: We coordinate licensed master craftspeople, procure all hardware store and wholesale materials, and guarantee binding fixed prices.",
    "hero_stat_1_val": "100%",
    "hero_stat_1_txt": "Reliable fixed prices with zero hidden markups",
    "hero_stat_2_val": "1 Point of Contact",
    "hero_stat_2_txt": "Instead of juggling dozens of separate contractors",
    "hero_stat_3_val": "Certified Craft",
    "hero_stat_3_txt": "Only verified master craftsmen and licensed professionals",

    // Three Pillars / Problem Solver
    "pillars_title": "A Smarter Way to Execute Craft & Construction Projects",
    "pillars_subtitle": "Traditional renovations frequently fail due to miscommunication between trades, expensive material delays, and stressful coordination. BAUBUND solves these issues from the ground up.",
    "pillar_1_title": "Central Project Coordination",
    "pillar_1_desc": "You don't need to hunt down electricians, tilers, and painters individually. We schedule and coordinate all trades on site.",
    "pillar_2_title": "Direct Material Procurement",
    "pillar_2_desc": "Through partnerships with leading home improvement centers (like Hornbach, OBI, Bauhaus) and trade merchants, we deliver materials on time without middlemen markups.",
    "pillar_3_title": "Binding Fixed Price & Guarantee",
    "pillar_3_desc": "No unpleasant surprises on the final invoice. You get a transparent all-inclusive price before work begins, and you only pay after clean inspection.",

    // High-Margin Showcase Section (Reference Box UI)
    "showcase_section_tag": "Focus Trades & Core Capabilities",
    "showcase_section_title": "High-Craft Execution for Value-Adding Projects",
    "showcase_section_subtitle": "We focus on high-yield, quality-intensive trades with demanding standards in coordination, execution, and materials.",
    
    // Tab 1: Komplett-Wohnungssanierung
    "tab_1_title": "Turnkey Apartment Renovation",
    "tab_1_sub": "Turnkey, All Trades Combined",
    "tab_1_badge": "Core Capability, Highest Value-Add",
    "tab_1_heading": "Holistic Renovation Under Single Master Management",
    "tab_1_desc": "From initial demolition and rewiring to pristine flooring, walls, and move-in readiness. Our site manager directs all trades on a strictly coordinated timeline.",
    "tab_1_impact_meta": "TIME & COST ADVANTAGE",
    "tab_1_impact_text": "Up to 35% shorter construction time through synchronized trade scheduling",
    "tab_1_cap_title": "SCOPE OF WORK & MASTER QUALITY",
    "tab_1_cap_1": "End-to-end site management with a single dedicated point of contact",
    "tab_1_cap_2": "Centralized material dispatch directly through wholesale & hardware store allotments",
    "tab_1_cap_3": "Guaranteed completion dates backed by rigorous milestone inspections",
    "tab_1_cap_4": "Single-source legal liability and 5-year German BGB warranty",
    "tab_1_footer_meta": "Turnkey, Staged Logistics, Master Inspection",
    "tab_1_cta": "Inquire About Full Renovation",

    // Tab 2: Badsanierung
    "tab_2_title": "Master Bathroom Renovation",
    "tab_2_sub": "Accessible, Plumbing & Tile",
    "tab_2_badge": "Specialty, Certified Waterproofing",
    "tab_2_heading": "Modern Luxury Bathrooms Without Coordination Friction",
    "tab_2_desc": "Tilers, certified plumbers, and electricians working in tight concert. We transform dated wet rooms into modern walk-in sanctuaries.",
    "tab_2_impact_meta": "FIXED-PRICE CERTAINTY",
    "tab_2_impact_text": "Binding lump-sum quote including all sanitary fixtures, tiles, and consumables",
    "tab_2_cap_title": "SCOPE OF WORK & MASTER QUALITY",
    "tab_2_cap_1": "DIN 18534 certified composite sealing against moisture damage",
    "tab_2_cap_2": "Large-format tile installation with precision mitered Jolly edges",
    "tab_2_cap_3": "Concealed sanitary elements, walk-in drainage channels & underfloor heating",
    "tab_2_cap_4": "Dust protection partitions and HEPA air scrubbing throughout construction",
    "tab_2_footer_meta": "Planning, Sanitary Engineering, Master Tiler",
    "tab_2_cta": "Calculate Bathroom Costs",

    // Tab 3: Innenausbau & Parkett
    "tab_3_title": "Premium Flooring & Interior Drywall",
    "tab_3_sub": "Hardwood, Vinyl & Wall Framing",
    "tab_3_badge": "Precision, Sustainable Materials",
    "tab_3_heading": "Flawless Flooring and Spatial Architecture",
    "tab_3_desc": "Bespoke drywall partitions for updated room layouts combined with expertly laid real wood parquet, plank flooring, or high-durability luxury vinyl.",
    "tab_3_impact_meta": "MATERIAL BENEFIT",
    "tab_3_impact_text": "Direct site delivery from hardware centers without heavy lifting or cutting scrap",
    "tab_3_cap_title": "SCOPE OF WORK & MASTER QUALITY",
    "tab_3_cap_1": "Professional subfloor leveling with fiber-reinforced self-leveling compound",
    "tab_3_cap_2": "Glued or floating installation with integrated acoustic impact decoupling",
    "tab_3_cap_3": "Acoustically optimized stud walls meeting modern thermal insulation standards",
    "tab_3_cap_4": "Precision-cut skirting boards and flush transition profiles",
    "tab_3_footer_meta": "Hardwood, Design Vinyl, Acoustic Ceilings",
    "tab_3_cta": "Inquire About Flooring & Fit-Out",

    // Tab 4: Maler- & Spachteltechnik
    "tab_4_title": "Surface Finishing & Q3/Q4 Smoothing",
    "tab_4_sub": "Smooth Plaster, Fleece & Lacquer",
    "tab_4_badge": "Surface Finish, Highest Craft Tier",
    "tab_4_heading": "Immaculate Surfaces Free of Raking Light Imperfections",
    "tab_4_desc": "High-grade skim coating to Q3/Q4 standards, unified non-woven fleece hanging, and durable finishes using low-emission mineral and silicate paints.",
    "tab_4_impact_meta": "QUALITY ASSURANCE",
    "tab_4_impact_text": "Low-dust mechanical sanding and rigorous raking light inspection",
    "tab_4_cap_title": "SCOPE OF WORK & MASTER QUALITY",
    "tab_4_cap_1": "Full-surface skimming engineered for contemporary architectural lighting",
    "tab_4_cap_2": "Crack-bridging fleece reinforcement for permanently smooth wall surfaces",
    "tab_4_cap_3": "High-grade spray coating of doors, trims, and radiators",
    "tab_4_cap_4": "Breathable, solvent-free coatings for optimal indoor air quality",
    "tab_4_footer_meta": "Q4-Finish, Silicate Paints, Master Painter",
    "tab_4_cta": "Inquire About Painting",

    // 4-Step Process
    "workflow_title": "Your Project Completed in 4 Clear Steps",
    "workflow_subtitle": "Transparent, dependable, and completely stress-free for property owners.",
    "step_1_num": "Step 1",
    "step_1_title": "Inquiry & On-Site Consultation",
    "step_1_desc": "Tell us about your project online or by phone. When helpful, we inspect the premises on-site free of charge.",
    "step_2_num": "Step 2",
    "step_2_title": "Binding Fixed-Price Quote",
    "step_2_desc": "You receive a transparent quote detailing material selection, execution timeline, and guaranteed pricing.",
    "step_3_num": "Step 3",
    "step_3_title": "Material Delivery & Execution",
    "step_3_desc": "We dispatch all building materials directly to the site. Certified craftspeople begin work on schedule across all trades.",
    "step_4_num": "Step 4",
    "step_4_title": "Joint Inspection & Handover",
    "step_4_desc": "Only when everything is cleanly executed, cleaned, and approved do we sign off, backed by full legal warranty.",

    // Calculator Section Teaser
    "calc_teaser_title": "Interactive Project & Cost Estimator",
    "calc_teaser_subtitle": "Calculate a realistic baseline cost estimate in 60 seconds — including trade labor, materials, and logistics.",
    "calc_cta_start": "Launch Cost Estimator",

    // Partner Section Teaser
    "partner_teaser_title": "For Trade Contractors & Retail Partners",
    "partner_teaser_subtitle": "Focus on your craft — we handle customer acquisition, site logistics, and punctual payments.",
    "partner_bullet_1": "Zero administrative or sales acquisition overhead",
    "partner_bullet_2": "Materials pre-delivered and staged at the job site",
    "partner_bullet_3": "Guaranteed, prompt milestone payments",
    "partner_bullet_4": "Retail Partnerships: Direct installation referrals for DIY customers",

    // Pitch Deck Specific
    "pitch_badge": "B2B Cooperation Concept",
    "pitch_title": "Partner Pitch Deck: Retailers & Trade Contractors",
    "pitch_subtitle": "How BAUBUND unlocks high-margin installation sales for hardware centers and provides trade contractors with steady, hassle-free projects.",

    // Calculator Page
    "calc_page_title": "Interactive Cost Estimator",
    "calc_page_intro": "Select your trade, specify your project dimensions, and instantly see a realistic baseline cost estimate for certified labor and quality materials.",
    "calc_step_service": "1. Select Trade / Service",
    "calc_opt_paint": "Painting & Surface Smoothing (Q3/Q4 Finish)",
    "calc_opt_floor": "Flooring (Parquet, Luxury Vinyl, Laminate)",
    "calc_opt_tiles": "Tiling & Sanitary Prep",
    "calc_opt_drywall": "Drywall Partition / Wall Framing",
    "calc_opt_garden": "Landscaping & Fencing (Paving, Fence)",
    "calc_opt_full": "Turnkey Complete Apartment Refurbishment",
    "calc_step_size": "2. Project Area / Dimensions",
    "calc_size_label": "Floor / Wall Area in Square Meters (m²):",
    "calc_step_quality": "3. Material Quality Tier",
    "calc_qual_standard": "Solid Brand Quality (e.g. Hornbach/OBI Standard)",
    "calc_qual_premium": "Premium Trade Grade (Higher durability & finish)",
    "calc_qual_eco": "Eco & Exclusive (Natural mineral paints, hardwood, luxury)",
    "calc_step_extras": "4. Additional Services",
    "calc_extra_removal": "Subfloor/wallpaper stripping & certified disposal",
    "calc_extra_express": "Express Scheduling (Job start within 5 business days)",
    "calc_extra_furniture": "Furniture repositioning, protective sheeting & final cleaning",
    "calc_res_title": "Your Estimated Cost Breakdown",
    "calc_res_labor": "Estimated Skilled Labor:",
    "calc_res_material": "Materials & Site Logistics (Hardware / Trade):",
    "calc_res_total": "Estimated Total (Incl. VAT / MwSt.):",
    "calc_res_note": "Note: This estimate provides an indicative budget range. For a binding fixed-price contract, we gladly conduct a free site assessment.",
    "calc_btn_adopt": "Inquire About This Estimate Without Obligation",

    // Contact Page
    "page_contact_title": "Contact & Project Inquiry",
    "page_contact_intro": "Have an upcoming project or questions about our general contracting model? Speak directly with our project coordinators.",
    "contact_info_title": "Direct Contact",
    "contact_phone_label": "Phone:",
    "contact_phone_val": "+49 (0) 711 4905 8230",
    "contact_email_label": "Email:",
    "contact_email_val": "kontakt@baubund-projekte.de",
    "contact_hours_label": "Business Hours:",
    "contact_hours_val": "Mon – Sat: 07:30 – 19:00 CET",
    "contact_form_title": "Request a Free Fixed-Price Quote",
    "form_name": "Full Name",
    "form_project_type": "Project Category",
    "form_address": "Postal Code & City of Job Site",
    "form_timeframe": "Desired Start Date",
    "form_timeframe_asap": "As soon as possible",
    "form_timeframe_month": "Within the next 4 weeks",
    "form_timeframe_later": "Later / Planning phase",
    "form_desc_placeholder": "Briefly describe your project (e.g. complete 85m² apartment renovation in Stuttgart, new bathroom and parquet)...",
    "form_consent": "I agree that my data will be processed to manage and respond to my project inquiry.",
    "form_submit_btn": "Submit Project Inquiry",

    // Cookie Banner
    "cookie_title": "Privacy & Preferences",
    "cookie_desc": "We exclusively use technically essential cookies to store core preferences such as your language choice. No third-party tracking scripts are loaded.",
    "cookie_accept": "Understood & Save",
    "cookie_privacy_link": "Privacy Policy",

    // Footer
    "footer_about": "BAUBUND is your accountable general partner for craftsmanship and renovation projects. Nationwide rollout starting in Stuttgart metropolitan area. We combine verified master craftspeople, smart material supply, and binding fixed pricing.",
    "footer_quicklinks": "Navigation",
    "footer_trades": "Trades",
    "footer_legal": "Legal",
    "footer_imprint": "Imprint / Impressum",
    "footer_privacy": "Privacy Policy",
    "footer_terms": "Terms & Conditions",
    "footer_copyright": "© 2026 BAUBUND Project Management. All rights reserved."
  }
};

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('baubund_lang') || 'de';
  }

  init() {
    this.applyLanguage(this.currentLang);
    this.bindEvents();
  }

  setLanguage(lang) {
    if (lang !== 'de' && lang !== 'en') return;
    this.currentLang = lang;
    localStorage.setItem('baubund_lang', lang);
    this.applyLanguage(lang);
    document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
  }

  toggleLanguage() {
    const nextLang = this.currentLang === 'de' ? 'en' : 'de';
    this.setLanguage(nextLang);
  }

  applyLanguage(lang) {
    const dict = translations[lang] || translations.de;
    document.documentElement.lang = lang;

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.placeholder = dict[key];
      }
    });

    // Update language toggle buttons UI state
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
      const deSpan = btn.querySelector('.lang-opt-de');
      const enSpan = btn.querySelector('.lang-opt-en');
      if (deSpan && enSpan) {
        if (lang === 'de') {
          deSpan.classList.add('active');
          enSpan.classList.remove('active');
        } else {
          deSpan.classList.remove('active');
          enSpan.classList.add('active');
        }
      }
    });
  }

  bindEvents() {
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleLanguage();
      });
    });
  }

  t(key) {
    const dict = translations[this.currentLang] || translations.de;
    return dict[key] || key;
  }
}

// Global instance
window.i18n = new I18nManager();
document.addEventListener('DOMContentLoaded', () => {
  window.i18n.init();
});
