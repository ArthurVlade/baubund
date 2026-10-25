/**
 * BAUBUND - Bilingual Translation Engine (DE / EN)
 * Complete dictionary for all pages, interactive calculators, showcase boxes, pitch deck, and customer app.
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
    "nav_app": "Kundenportal",
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

    // High-Margin Showcase Section
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
    "tab_3_cap_2": "Schwimmende oder vollflächig elastische Verklebung für optimale Akustik",
    "tab_3_cap_3": "Akustikdämmung und integrierte Installationskanäle im Trockenbau",
    "tab_3_cap_4": "Oberflächenbehandlung mit schadstofffreien Naturölen oder Mattlacken",
    "tab_3_footer_meta": "Schreinerhandwerk, Trockenbaumeister, Parkettleger",
    "tab_3_cta": "Boden- & Ausbauprojekt starten",

    // Tab 4: Maler & Q4-Spachtelung
    "tab_4_title": "Maler-, Spachtel- & Lackierarbeiten (Q4)",
    "tab_4_sub": "Glattvlies, Farbkonzepte & Lack",
    "tab_4_badge": "Perfektion, Höchste Oberflächengüte",
    "tab_4_heading": "Makellose Wände im Streiflicht",
    "tab_4_desc": "Perfekt gespachtelte Wandflächen in Gütestufe Q4, rissüberbrückendes Malervlies und hochwertige ökologische Silikat- und Dispersionsfarben führender Hersteller.",
    "tab_4_impact_meta": "QUALITÄTSGARANTIE",
    "tab_4_impact_text": "Streiflichtfreie Oberflächen mit professioneller Baustellen-Ausleuchtung",
    "tab_4_cap_title": "LEISTUNGSUMFANG & MEISTERQUALITÄT",
    "tab_4_cap_1": "Vollflächige Spachtelung aller Wand- und Deckenflächen auf Qualitätsstufe Q4",
    "tab_4_cap_2": "Präzise Tapezierung von feinstem Glattvlies zur dauerhaften Rissprävention",
    "tab_4_cap_3": "Airless-Spritztechnik oder Handanstrich mit geruchsneutralen Premiumfarben",
    "tab_4_cap_4": "Sauberes Abkleben und professionelle Folienabdeckung aller Einbauten",
    "tab_4_footer_meta": "Malermeister, Farbberatung, Q4-Finish",
    "tab_4_cta": "Malerarbeiten anfragen",

    // Workflow
    "workflow_title": "In 4 Schritten zu Ihrem fertigen Projekt",
    "workflow_subtitle": "Transparent, verlässlich und ohne Stress für Sie als Auftraggeber.",
    "step_1_num": "01",
    "step_1_title": "Anfrage & Erstbesichtigung",
    "step_1_desc": "Sie schildern Ihr Vorhaben online oder per Telefon. Bei Bedarf prüfen wir die Gegebenheiten vor Ort kostenfrei.",
    "step_2_num": "02",
    "step_2_title": "Verbindliches Festpreisangebot",
    "step_2_desc": "Sie erhalten ein transparentes Angebot mit Materialauswahl, Ausführungszeitraum und garantierten Kosten.",
    "step_3_num": "03",
    "step_3_title": "Koordination & Ausführung",
    "step_3_desc": "Wir liefern alle Materialien auf die Baustelle. Unsere geprüften Fachhandwerker starten pünktlich und arbeiten gewerkübergreifend.",
    "step_4_num": "04",
    "step_4_title": "Abnahme & Gewährleistung",
    "step_4_desc": "Erst wenn alles makellos ausgeführt und gereinigt ist, erfolgt die offizielle Abnahme inklusive Gewährleistung.",

    // Material Logistics Section
    "material_feature_title": "Direkte Baumarkt- & Fachhandelslogistik",
    "material_feature_text": "Kein Schleppen, keine falschen Schrauben. Wir bestellen passende Qualitätsbaustoffe direkt über unsere Partnerkontingente (Baumärkte wie Hornbach, OBI, Bauhaus & Baustofffachhandel) und bringen alles auf die Baustelle.",
    "material_stores_label": "Material- & Handelskooperationen",
    "store_tag_hornbach": "Hornbach Baumarkt",
    "store_tag_obi": "OBI Fachmarkt",
    "store_tag_bauhaus": "Bauhaus",
    "store_tag_trade": "Baustoff-Fachhandel",
    "store_tag_wholesale": "Meister-Großhandel",

    // Calculator Teaser
    "calc_teaser_title": "Was kostet Ihr Sanierungs- oder Renovierungsprojekt?",
    "calc_teaser_subtitle": "Kalkulieren Sie in 60 Sekunden eine erste Kostenschätzung für Ihr Vorhaben – inklusive Material und Arbeitszeit.",
    "calc_cta_start": "Zum interaktiven Kostenrechner",

    // Partner Teaser
    "partner_teaser_title": "Kooperation für Handwerksbetriebe & Baumärkte",
    "partner_teaser_subtitle": "Gemeinsam mehr erreichen: Werden Sie Teil unseres Netzwerks für reibungslose Baukoordination.",
    "partner_bullet_1": "Pünktliche Bezahlung und klare Leistungsbeschreibungen",
    "partner_bullet_2": "Material ist bei Baubeginn bereits am Objekt vorhanden",
    "partner_bullet_3": "Konzentration aufs Handwerk – wir übernehmen die Bauleitung und Kundenkommunikation",
    "partner_bullet_4": "Baumärkte steigern ihren Warenumsatz durch schlüsselfertige Einbauangebote",

    // Pitch Teaser
    "pitch_badge": "Investoren- & B2B-Präsentation",
    "pitch_title": "Das BAUBUND-Konzept für Partner im Detail",
    "pitch_subtitle": "Erfahren Sie, wie wir die Fragmentierung des Handwerks lösen und warum die Kombination aus Baumarkt-Logistik und digitaler Bauleitung ein zukunftssicheres Modell ist.",

    // Interactive Calculator
    "calc_page_title": "Interaktiver Kostenrechner",
    "calc_page_intro": "Ermitteln Sie mit wenigen Klicks einen realistischen Kostenrahmen für Ihr Vorhaben. Basis sind geprüfte Meister-Stundensätze und aktuelle Materialpreise aus dem Baustoff-Fachhandel.",
    "calc_step_service": "1. Gewerk auswählen",
    "calc_opt_paint": "Maler- & Spachtelarbeiten",
    "calc_opt_floor": "Bodenbeläge (Parkett / Vinyl / Laminat)",
    "calc_opt_tiles": "Badsanierung & Fliesen",
    "calc_opt_drywall": "Trockenbau & Raumtrennung",
    "calc_opt_garden": "Garten- & Außenanlagen",
    "calc_opt_full": "Komplettsanierung (Wohnung schlüsselfertig)",
    "calc_step_size": "2. Raum- oder Projektgröße",
    "calc_size_label": "Fläche in Quadratmetern (m²):",
    "calc_step_quality": "3. Material- & Ausstattungsstandard",
    "calc_qual_standard": "Standard-Qualität",
    "calc_qual_std_desc": "Bewährte Markenprodukte für solide Beanspruchung",
    "calc_qual_premium": "Premium Meister-Qualität",
    "calc_qual_prem_desc": "Höhere Abriebklassen, feinere Pigmentierung, längere Lebensdauer",
    "calc_qual_eco": "Ökologisch & Exklusiv",
    "calc_qual_eco_desc": "Emissionsarm, mineralische Naturwerkstoffe, Design-Oberflächen",
    "calc_step_extras": "4. Zusätzliche Leistungen",
    "calc_extra_removal": "Altmaterial entfernen & fachgerecht entsorgen",
    "calc_extra_express": "Express-Ausführung (Start innerhalb 14 Tagen)",
    "calc_extra_furniture": "Möbelrücken, Abdecken & Staubschutzwände",
    "calc_res_title": "Ihre unverbindliche Kostenschätzung",
    "calc_res_labor": "Fachhandwerker-Arbeitszeit:",
    "calc_res_material": "Baustoffe & Material (inkl. Logistik):",
    "calc_res_total": "Geschätzter Festpreis (inkl. MwSt.):",
    "calc_res_note": "Hinweis: Dies ist eine transparente Orientierungskalkulation. Das finale Festpreisangebot erhalten Sie nach kurzer Vor-Ort-Besichtigung oder digitaler Grundrissprüfung.",
    "calc_btn_adopt": "Dieses Projekt jetzt unverbindlich anfragen",

    // Comparison Table (leistungen.html)
    "comparison_title": "Warum BAUBUND statt Einzelvergabe?",
    "comp_col_metric": "Vergleichskriterium",
    "comp_col_diy": "Klassische Einzelvergabe",
    "comp_col_baubund": "BAUBUND Generalabwicklung",
    "comp_row_contacts": "Ansprechpartner",
    "comp_row_contacts_diy": "5–12 verschiedene Handwerker und Händler",
    "comp_row_contacts_bb": "1 fester Bauleiter für alle Gewerke",
    "comp_row_materials": "Materialbeschaffung",
    "comp_row_materials_diy": "Selbst kaufen, transportieren, Verschnitt tragen",
    "comp_row_materials_bb": "Zentrale Vor-Ort-Lieferung ab Baumarkt / Großhandel",
    "comp_row_schedule": "Terminabsprache & Taktung",
    "comp_row_schedule_diy": "Verzögerungen, Stillstand bei Vorarbeit-Verzug",
    "comp_row_schedule_bb": "Garantierter Fertigstellungstermin nach Bauzeitenplan",
    "comp_row_liability": "Gewährleistung & Mängelhaftung",
    "comp_row_liability_diy": "Schuldzuweisung zwischen Gewerken bei Problemen",
    "comp_row_liability_bb": "Volle 5 Jahre Gewährleistung aus einer Hand (BGB)",

    // Trade Bullet Points (leistungen.html)
    "trade_1_bullet_1": "✓ Ein persönlicher Bauleiter vor Ort als alleiniger Ansprechpartner",
    "trade_1_bullet_2": "✓ Zentrale Materialbeschaffung (Hornbach, OBI, Fachhandel)",
    "trade_1_bullet_3": "✓ Verbindlicher Meilensteinplan mit 5 Jahren Gewährleistung",
    "trade_2_bullet_1": "✓ Verbundabdichtung nach DIN 18534 gegen Wasserschäden",
    "trade_2_bullet_2": "✓ Großformatige Fliesen & mitered Jolly-Kanten",
    "trade_2_bullet_3": "✓ Moderne Unterputz-Armaturen & Fußbodenerwärmung",
    "trade_3_bullet_1": "✓ Faserverstärkter Untergrundausgleich für planebene Böden",
    "trade_3_bullet_2": "✓ Akustisch entkoppelte Trockenbau-Ständerwände",
    "trade_3_bullet_3": "✓ Trittschalldämmung & staubarme Kappschnitte",
    "trade_4_bullet_1": "✓ Staubarmes Maschinenschleifen & Streiflichtprüfung",
    "trade_4_bullet_2": "✓ Rissüberbrückendes Malervlies für glatte Wandflächen",
    "trade_4_bullet_3": "✓ Atmungsaktive Silikatfarben für optimales Raumklima",

    // Process Page (ablauf.html)
    "page_process_title": "Strukturierter Bauablauf ohne Überraschungen",
    "page_process_intro": "Unser 4-Phasen-Modell garantiert lückenlose Koordination, pünktliche Bereitstellung aller Baustoffe und verbindliche Bauzeiten.",
    "step_1_b1": "• Detailliertes Aufmaß",
    "step_1_b2": "• Prüfung von Untergrund & Bausubstanz",
    "step_1_b3": "• Klärung von Sonderwünschen",
    "step_2_b1": "• Keine versteckten Positionen",
    "step_2_b2": "• Verbindlicher Bauzeitenplan",
    "step_2_b3": "• Klare Meilenstein-Zahlungsstaffel",
    "step_3_b1": "• Baumarkt- & Fachhandelslogistik",
    "step_3_b2": "• Pünktliche Bereitstellung am Objekt",
    "step_3_b3": "• Staubschutz & Bodenschutz inklusive",
    "step_4_b1": "• Gemeinsame Mängelfreiheitsprüfung",
    "step_4_b2": "• Dokumentiertes Übergabeprotokoll",
    "step_4_b3": "• 5 Jahre BGB-Gewährleistung",
    "proc_faq_title": "Häufige Fragen zum Ablauf",
    "faq_q1": "Wer haftet bei Schäden oder Mängeln?",
    "faq_a1": "BAUBUND haftet Ihnen gegenüber als Generalunternehmer vollumfänglich nach deutschem BGB. Bei Problemen müssen Sie nicht mit einzelnen Handwerkern streiten – wir tragen die Verantwortung und sorgen für sofortige Mängelbeseitigung.",
    "faq_q2": "Wie wird das Baumarktmaterial bestellt?",
    "faq_a2": "Wir stimmen Materiallisten direkt mit den regionalen Partnerfilialen (Hornbach, OBI, Bauhaus) und Großhändlern ab. Wir bündeln den Transport, prüfen die Ware auf Vollständigkeit und liefern alles just-in-time zur Baustelle.",
    "faq_q3": "Muss ich eine Vorauszahlung leisten?",
    "faq_a3": "Nein. Wir arbeiten mit einer fairen, transparenten Meilenstein-Zahlungsstaffel. Sie zahlen Abschläge erst nach nachweisbarer Fertigstellung vereinbarter Bauabschnitte.",
    "faq_q4": "Welche Regionen bedient BAUBUND aktuell?",
    "faq_a4": "Unser operativer Start erfolgt im Großraum Stuttgart (inkl. Esslingen, Ludwigsburg, Böblingen, Göppingen). Der überregionale und bundesweite Rollout wird sukzessive mit neuen Meisterpartnern und Baumarkt-Hubs ausgebaut.",

    // Partner Page (partner.html)
    "page_partners_title": "Werden Sie Partner von BAUBUND",
    "page_partners_intro": "Für Handwerksmeisterbetriebe und Baumärkte: Mehr planbare Aufträge, null Zahlungsrisiko und strukturierte Baustellenabläufe.",
    "part_pitch_btn": "B2B Partner-Pitch-Deck ansehen",
    "part_benefits_craftsmen": "Vorteile für Meister- & Fachbetriebe",
    "part_c1_title": "Kein Akquiseaufwand & pünktliche Bezahlung",
    "part_c1_desc": "Sie erhalten fertig vorbereitete Aufträge mit klarem Leistungsverzeichnis. Wir zahlen zuverlässig nach VOB/BGB.",
    "part_c2_title": "Material liegt pünktlich vor Ort bereit",
    "part_c2_desc": "Keine zeitraubenden Fahrten in den Baumarkt während der Arbeitszeit. Alles ist disponiert und montagefertig.",
    "part_c3_title": "Koordination durch professionelle Bauleitung",
    "part_c3_desc": "Vorarbeiten anderer Gewerke sind rechtzeitig abgeschlossen. Kein Leerlauf auf der Baustelle.",
    "part_benefits_stores": "Vorteile für Baumärkte & Baustoffhandel",
    "part_s1_title": "Höhere Warenkörbe & geringere Retouren",
    "part_s1_desc": "Kunden kaufen hochwertige Produkte (Bäder, Fliesen, Parkett), wenn die professionelle Montage garantiert ist.",
    "part_s2_title": "Entlastung der Fachberater & null Haftung",
    "part_s2_desc": "BAUBUND übernimmt die Vermessung, Einbaukoordination und haftet als Generalunternehmer vollumfänglich.",
    "part_form_title": "Partnerbetrieb werden",
    "part_form_subtitle": "Bewerben Sie sich unkompliziert für unser Handwerker- und Lieferantennetzwerk.",
    "form_company": "Firma / Unternehmensname",
    "form_trade": "Gewerk / Fachbereich",
    "form_phone": "Telefonnummer",
    "form_email": "E-Mail-Adresse",
    "form_city": "Einsatzort / Region",
    "form_message": "Nachricht / Kurzbeschreibung Ihres Betriebs",
    "form_submit_partner": "Partner-Bewerbung absenden",
    "part_opt_sanierung": "Komplettsanierung",
    "part_opt_bad": "Badsanierung & Fliesen",
    "part_opt_boden": "Bodenleger / Parkett",
    "part_opt_maler": "Maler & Lackierer (Q3/Q4)",
    "part_opt_trockenbau": "Trockenbau & Akustik",
    "part_opt_baumarkt": "Baumarkt / Fachhandel",

    // B2B Pitch Deck (pitch-deck.html)
    "pitch_print_btn": "Drucken / Als PDF speichern",
    "pitch_s1_tag": "01 / Ausgangslage & Marktlücke",
    "pitch_s1_title": "Die ungenutzte Wertschöpfungslücke im Baumarkt & Handwerk",
    "pitch_s1_intro": "Täglich stehen Kunden in deutschen Baumärkten vor hochwertigen Fliesen, Parkettböden und Sanitäranlagen. Über 40% brechen den Kauf ab oder reduzieren den Warenkorb, weil sie niemanden haben, der die Montage fachgerecht übernimmt. Gleichzeitig ersticken Meister- und Fachbetriebe in unbezahlter Büroarbeit.",
    "pitch_s1_diy_problem_title": "Problem des Baumarkts:",
    "pitch_s1_diy_p1": "• Entgangene Großwarenkörbe bei beratungsintensiven Gewerken",
    "pitch_s1_diy_p2": "• Hohe Retourenquoten durch fehlerhafte Do-It-Yourself-Montagen",
    "pitch_s1_diy_p3": "• Fehlender zertifizierter Einbauservice vor Ort",
    "pitch_s1_craft_problem_title": "Problem des Handwerkers:",
    "pitch_s1_craft_p1": "• Bis zu 35% unproduktive Arbeitszeit für Akquise & Angebote",
    "pitch_s1_craft_p2": "• Rechnungsstreitigkeiten und Zahlungsverzögerungen",
    "pitch_s1_craft_p3": "• Zeitaufwändige Materialbeschaffung während der Arbeitszeit",
    "pitch_s2_tag": "02 / Das BAUBUND Lösungsmodell",
    "pitch_s2_title": "Die verbindende Plattform für Handel, Handwerk & Kunde",
    "pitch_s2_desc": "BAUBUND schließt die Lücke: Wir sind kein Konkurrent zum Baumarkt oder Meisterbetrieb, sondern die verbindende Schnittstelle. Der Baumarkt verkauft das Material – BAUBUND übernimmt die Koordination, liefert termingerecht und setzt zertifizierte Fachhandwerker ein.",
    "pitch_s2_step1_title": "1. Materialverkauf am PoS",
    "pitch_s2_step1_desc": "Kunde wählt Fliesen, Farben oder Sanitär im Markt. Der Mitarbeiter empfiehlt den BAUBUND-Festpreis-Montageservice.",
    "pitch_s2_step2_title": "2. Logistik & Taktung",
    "pitch_s2_step2_desc": "BAUBUND disponiert den gesamten Materialeinkauf direkt über den Markt und stellt alles termingenau auf der Baustelle bereit.",
    "pitch_s2_step3_title": "3. Meisterausführung",
    "pitch_s2_step3_desc": "Geprüfte Fachhandwerker montieren fachgerecht nach DIN-Norm. BAUBUND übernimmt Gesamtabnahme & 5 Jahre Gewährleistung.",
    "pitch_s3_tag": "03 / Mehrwert für Baumarktpartner",
    "pitch_s3_title": "Höhere Margen & null Reklamationsrisiko",
    "pitch_s3_kpi1_val": "+28%",
    "pitch_s3_kpi1_label": "Höhere Warenkörbe",
    "pitch_s3_kpi1_desc": "Kunden kaufen Komplettbäder und Edelhölzer statt günstiger Notlösungen, da der Einbau gesichert ist.",
    "pitch_s3_kpi2_val": "-80%",
    "pitch_s3_kpi2_label": "Geringere Retouren",
    "pitch_s3_kpi2_desc": "Professionelle Ausführung verhindert typische Heimwerker-Fehler und Materialbeschädigungen.",
    "pitch_s3_kpi3_val": "0%",
    "pitch_s3_kpi3_label": "Haftungsrisiko für den Markt",
    "pitch_s3_kpi3_desc": "BAUBUND haftet als Generalpartner vollumfänglich mit 5 Mio. € Betriebshaftpflichtversicherung.",
    "pitch_s4_tag": "04 / Rollout-Fahrplan",
    "pitch_s4_title": "Vom Pilotstandort Stuttgart zum bundesweiten Netzwerk",
    "pitch_s4_phase1_title": "Startregion Stuttgart",
    "pitch_s4_phase1_desc": "Pilot-Partnerschaften mit regionalen Baumärkten (Hornbach, OBI, Bauhaus) & Pool aus 25 geprüften Meisterbetrieben für Sanierung, Bad und Boden.",
    "pitch_s4_phase2_title": "Süd- & Westdeutschland",
    "pitch_s4_phase2_desc": "Expansion nach München, Frankfurt Rhein-Main und Rhein-Neckar mit skalierter digitaler Bauleitung und zentraler Logistik.",
    "pitch_s4_phase3_title": "Bundesweiter Rollout",
    "pitch_s4_phase3_desc": "Bundesweites Netzwerk mit über 200 Handwerkspartnern und strategischen Rahmenverträgen der großen Handelsketten.",
    "pitch_s4_cta": "Kooperationsgespräch jetzt vereinbaren",

    // Contact & Inquiry Page (kontakt.html)
    "page_contact_title": "Kontakt & Projektanfrage",
    "page_contact_intro": "Starten Sie Ihr Vorhaben mit einer kostenlosen Beratung oder Vor-Ort-Besichtigung. Wir melden uns innerhalb von 24 Stunden mit einem verbindlichen Zeit- und Kostenrahmen.",
    "contact_info_title": "Direkter Draht zu unserer Bauleitung",
    "contact_phone_label": "Telefonzentrale:",
    "contact_phone_val": "+49 (0) 711 4905 8230",
    "contact_email_label": "E-Mail für Anfragen:",
    "contact_email_val": "kontakt@baubund-projekte.de",
    "contact_hours_label": "Servicezeiten:",
    "contact_hours_val": "Mo–Fr: 07:30 – 18:30 Uhr, Sa: 08:30 – 14:00 Uhr",
    "contact_hq_label": "Startregion & Zentrale:",
    "contact_form_title": "Projekt unverbindlich anfragen",
    "form_name": "Vollständiger Name",
    "form_project_type": "Gewünschtes Gewerk / Projektart",
    "form_address": "PLZ & Ort des Projekts",
    "form_timeframe": "Gewünschter Starttermin",
    "form_timeframe_asap": "Schnellstmöglich (innerhalb 2-4 Wochen)",
    "form_timeframe_month": "In den nächsten 1-3 Monaten",
    "form_timeframe_later": "Flexibel / spätere Planung",
    "form_desc_label": "Vorhaben beschreiben",
    "form_desc_placeholder": "Beschreiben Sie kurz Ihr Vorhaben (z. B. 3-Zimmer-Wohnung in Stuttgart, ca. 75 m², neuer Parkettboden, Wände in Q4 spachteln und Bad komplett sanieren)...",
    "form_consent": "Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden. Keine Weitergabe an Dritte.",
    "form_submit_btn": "Projektanfrage jetzt absenden",
    "form_opt_drywall": "Trockenbauwand / Raumteiler",
    "form_opt_garden": "Garten & Außenanlagen",
    "contact_promise_title": "Unser Leistungsversprechen",
    "contact_p1": "✓ Kostenlose Vor-Ort-Besichtigung im Raum Stuttgart & bundesweit",
    "contact_p2": "✓ 100% verbindliche Festpreisbindung",
    "contact_p3": "✓ Zentraler Bauleiter als alleiniger Ansprechpartner",
    "contact_p4": "✓ 5 Jahre Gewährleistung nach BGB",
    "contact_legal_tmg": "Angaben gemäß § 5 TMG: BAUBUND Projektgesellschaft, Königstraße 28, 70173 Stuttgart",
    "contact_legal_rep": "Vertreten durch: Die Geschäftsführung, E-Mail: kontakt@baubund-projekte.de, Tel: +49 (0) 711 4905 8230",
    "contact_legal_liability": "Haftung für Inhalte & Gewerke: Die Baudienstleistungen werden über geprüfte Meister- und Fachbetriebe koordiniert. BAUBUND haftet im Rahmen der vertraglich vereinbarten Bauleitung und Gewährleistung.",
    "contact_legal_privacy": "Datenschutzhinweis: Ihre über das Kontaktformular übermittelten Daten werden ausschließlich zur Bearbeitung und Beantwortung Ihrer konkreten Projektanfrage verarbeitet und nicht an unberechtigte Dritte weitergegeben.",

    // Cookie Banner
    "cookie_title": "Privatsphäre & Transparenz",
    "cookie_desc": "Wir nutzen ausschließlich technisch essenzielle Cookies, um Grundfunktionen wie Ihre Spracheinstellungen zu speichern. Es werden keine externen Werbe-Tracker geladen.",
    "cookie_accept": "Verstanden & Speichern",
    "cookie_privacy_link": "Datenschutzerklärung",

    // Footer
    "footer_about": "BAUBUND ist Ihr verlässlicher Generalpartner für Handwerks- und Bauprojekte. Deutschlandweiter Rollout ab Metropolregion Stuttgart. Wir verbinden Meisterbetriebe, smarte Baumarkt-Logistik und verbindliche Festpreise.",
    "footer_quicklinks": "Navigation",
    "footer_trades": "Fokus-Gewerke",
    "footer_legal": "Rechtliches",
    "footer_imprint": "Impressum",
    "footer_privacy": "Datenschutz",
    "footer_terms": "AGB / BGB-Garantie",
    "footer_copyright": "© 2026 BAUBUND Projektgesellschaft. Alle Rechte vorbehalten.",

    // ==========================================
    // Dedicated Web Application (app.html)
    // ==========================================
    "app_title": "BAUBUND Kundenportal",
    "app_tagline": "Handwerk & Baukoordination digital buchen",
    "app_tab_dashboard": "Übersicht",
    "app_tab_book": "Service buchen",
    "app_tab_projects": "Projekte",
    "app_tab_contact": "Kontakt",
    "app_theme_toggle": "Design wechseln",
    "app_dash_greeting": "Guten Tag, Herr Schneider",
    "app_dash_active_job": "Aktives Bauprojekt",
    "app_dash_project_name": "Komplettsanierung Altbauwohnung (85 m²)",
    "app_dash_project_loc": "Stuttgart-Mitte, Marienstraße 14",
    "app_dash_status_badge": "In Ausführung (Schritt 3/5)",
    "app_dash_next_event": "Nächster Termin: Meister-Begehung Fliesen morgen 09:30 Uhr",
    "app_dash_progress_label": "Baufortschritt: 60%",
    "app_dash_mat_title": "Material-Logistik Live-Status",
    "app_dash_mat_store": "Partner: Hornbach Stuttgart-Feuerbach",
    "app_dash_mat_status": "Geliefert & auf Baustelle bereitgestellt",
    "app_dash_quick_book": "Weiteres Gewerk buchen",
    "app_dash_quick_call": "Bauleiter anrufen",
    "app_dash_quick_docs": "Dokumente & BGB",
    "app_book_heading": "Gewerk auswählen & buchen",
    "app_book_sub": "Verbindlicher Festpreis, geprüfte Meisterbetriebe, Material inklusive.",
    "app_book_trade_full": "Komplettsanierung",
    "app_book_trade_full_desc": "Schlüsselfertig für gesamte Wohnung",
    "app_book_trade_bath": "Badsanierung",
    "app_book_trade_bath_desc": "Sanitär, barrierefreie Dusche, Fliesen",
    "app_book_trade_floor": "Parkett & Boden",
    "app_book_trade_floor_desc": "Echtholz, Vinyl & Untergrundausgleich",
    "app_book_trade_paint": "Malerarbeiten Q4",
    "app_book_trade_paint_desc": "Streiflichtfreie Wände & Malervlies",
    "app_book_sqm_label": "Geschätzte Fläche (m²)",
    "app_book_mat_quality": "Material-Standard",
    "app_book_mat_standard": "Solide Fachmarkt-Qualität (Hornbach / OBI)",
    "app_book_mat_premium": "Meistermarke & Designer-Kollektion",
    "app_book_city_label": "Projekt-Standort",
    "app_book_date_label": "Wunsch-Starttermin / Besichtigung",
    "app_book_time_label": "Zeitfenster",
    "app_book_time_morning": "Vormittags (08:00 - 12:00 Uhr)",
    "app_book_time_afternoon": "Nachmittags (13:00 - 17:00 Uhr)",
    "app_book_summary_title": "Verbindliche Festpreis-Kalkulation",
    "app_book_sum_labor": "Meister-Arbeitszeit & Baustellenleitung",
    "app_book_sum_material": "Baustoffe & Logistik (Hornbach / OBI)",
    "app_book_sum_warranty": "5 Jahre BGB-Gewährleistung & Abnahme",
    "app_book_sum_total": "Gesamter Festpreis (inkl. 19% MwSt.)",
    "app_book_btn_confirm": "Gewerk jetzt verbindlich anfragen",
    "app_book_success_title": "Buchungsanfrage erfolgreich erfasst!",
    "app_book_success_desc": "Ihr persönlicher Bauleiter prüft das Zeitfenster und kontaktiert Sie innerhalb von 2 Stunden.",
    "app_proj_heading": "Meine Projekte & Unterlagen",
    "app_proj_tab_active": "Laufende Baustelle",
    "app_proj_tab_history": "Historie & Archiv",
    "app_proj_milestone_1": "1. Laseraufmaß & Substanzprüfung",
    "app_proj_milestone_2": "2. Materialbestellung & Baustellenlager",
    "app_proj_milestone_3": "3. Ausführung Sanitär & Fliesenmeister",
    "app_proj_milestone_4": "4. Endabnahme & Protokollübergabe",
    "app_doc_contract": "Bauvertrag & Festpreis-Garantie (PDF)",
    "app_doc_material": "Materialschein Hornbach Stuttgart (PDF)",
    "app_doc_warranty": "5 Jahre BGB-Garantiezertifikat (PDF)",
    "app_doc_view": "Herunterladen",
    "app_contact_heading": "Ihr persönlicher Bauleiter vor Ort",
    "app_contact_manager_name": "Dipl.-Ing. Markus Lindner",
    "app_contact_manager_role": "Zertifizierter Bauleiter Region Stuttgart",
    "app_contact_btn_call": "Direkt anrufen (+49 711 4905 8230)",
    "app_contact_btn_msg": "Nachricht an Bauleitung senden",
    "app_contact_chat_placeholder": "Kurze Nachricht oder Frage zur Baustelle...",
    "app_contact_chat_send": "Senden",
    "app_contact_hotline_title": "24/7 Notfall-Leitstelle für aktive Baustellen",
    "app_contact_hotline_desc": "Bei dringenden technischen Notfällen (z.B. Rohrbruch, Stromausfall) erreichen Sie uns rund um die Uhr.",
    "app_back_to_site": "Zurück zur Hauptwebsite"
  },

  en: {
    // Navigation & Common
    "brand_name": "BAUBUND",
    "brand_tagline": "Craftsmanship, Materials & Construction Coordination from a Single Source",
    "nav_home": "Home",
    "nav_services": "Trades",
    "nav_process": "Process",
    "nav_partners": "For Partners",
    "nav_calculator": "Cost Calculator",
    "nav_pitch": "B2B Pitch Deck",
    "nav_contact": "Contact",
    "nav_app": "Client App",
    "nav_cta": "Request Project",
    "lang_toggle_label": "Switch Language",
    "nav_location_badge": "Stuttgart & Nationwide",

    // Common CTAs & Trust Badges
    "cta_request_quote": "Request Free Estimate",
    "cta_calculate_now": "Calculate Costs Now",
    "cta_become_partner": "Become a Partner Business",
    "cta_contact_us": "Schedule Consultation",
    "cta_send_inquiry": "Submit Inquiry Without Obligation",
    "trust_fixed_price": "Fixed Price Guarantee",
    "trust_licensed_pros": "Certified Master Craftsmen",
    "trust_insured": "Fully Insured up to €5M",
    "trust_materials": "Quality Materials Included",

    // Homepage Hero
    "hero_badge": "Germany-Wide Rollout, Launch Region Stuttgart",
    "hero_title": "No More Contractor Chaos. One Single Partner for Your Entire Project.",
    "hero_subtitle": "Whether comprehensive apartment renovation, modern bathroom remodeling, or premium interior finishing: We coordinate certified master craftsmen, procure hardware retail and commercial materials, and guarantee binding fixed prices.",
    "hero_stat_1_val": "100%",
    "hero_stat_1_txt": "Reliable fixed prices with zero unexpected extras",
    "hero_stat_2_val": "1 Point of Contact",
    "hero_stat_2_txt": "Instead of coordinating dozens of trades on your own",
    "hero_stat_3_val": "Certified Quality",
    "hero_stat_3_txt": "Vetted master craftspeople and trade specialists",

    // Three Pillars / Problem Solver
    "pillars_title": "The Modern Way to Manage Renovation & Construction",
    "pillars_subtitle": "Conventional renovations often fail due to miscommunication between trades, expensive material mistakes, and exhausting coordination. BAUBUND solves these issues from the ground up.",
    "pillar_1_title": "Centralized Project Management",
    "pillar_1_desc": "No need to chase electricians, tilers, and painters separately. We synchronize all trades in close coordination and supervise the site daily.",
    "pillar_2_title": "Direct Material Procurement",
    "pillar_2_desc": "Through direct partnerships with leading hardware chains (such as Hornbach, OBI, Bauhaus) and wholesalers, we deliver trade materials on time without markup bloat.",
    "pillar_3_title": "Binding Fixed Price & Warranty",
    "pillar_3_desc": "No nasty surprises on the final invoice. Before work begins, the transparent total price is locked in. You only pay upon clean final sign-off.",

    // High-Margin Showcase Section
    "showcase_section_tag": "Focus Trades & Core Capabilities",
    "showcase_section_title": "First-Class Execution for High-Value Properties",
    "showcase_section_subtitle": "We concentrate on high-margin, quality-intensive trades demanding the highest standards of coordination and material integrity.",
    
    // Tab 1: Komplett-Wohnungssanierung
    "tab_1_title": "Full Apartment Renovation",
    "tab_1_sub": "Turnkey, All Trades Coordinated",
    "tab_1_badge": "Core Competence, Highest Added Value",
    "tab_1_heading": "Holistic Renovation from a Single Master Hand",
    "tab_1_desc": "From initial demolition and new electrical/piping through floors and walls to final move-in. Our site manager orchestrates every trade with a binding schedule.",
    "tab_1_impact_meta": "TIME & COST ADVANTAGE",
    "tab_1_impact_text": "Up to 35% shorter construction time through gapless trade scheduling",
    "tab_1_cap_title": "SCOPE OF SERVICES & MASTER CRAFT QUALITY",
    "tab_1_cap_1": "Complete project management with a dedicated on-site contact",
    "tab_1_cap_2": "Centralized material logistics via wholesale and DIY store volume quotas",
    "tab_1_cap_3": "Fixed completion milestones with guaranteed official handover",
    "tab_1_cap_4": "Full single-source liability and 5-year statutory German BGB warranty",
    "tab_1_footer_meta": "Turnkey, Material Logistics, Master Acceptance",
    "tab_1_cta": "Request Renovation Estimate",

    // Tab 2: Badsanierung
    "tab_2_title": "Bathroom Remodeling & Sanitary",
    "tab_2_sub": "Barrier-Free, Tiles & Plumbing",
    "tab_2_badge": "Specialization, Wet-Room Certified",
    "tab_2_heading": "Modern Bathrooms Without Coordination Overhead",
    "tab_2_desc": "Tilers, plumbers, and electricians working in sync. We transform outdated wet rooms into serene spa spaces featuring level-entry walk-in showers.",
    "tab_2_impact_meta": "FIXED PRICE SECURITY",
    "tab_2_impact_text": "Binding lump-sum quote including all sanitaryware and tiling materials",
    "tab_2_cap_title": "SCOPE OF SERVICES & MASTER CRAFT QUALITY",
    "tab_2_cap_1": "Certified bonded waterproofing to DIN 18534 against moisture damage",
    "tab_2_cap_2": "Large-format tiling with precision mitered Jolly edges",
    "tab_2_cap_3": "Installation of sleek concealed valves and underfloor warming systems",
    "tab_2_cap_4": "Dust protection barriers and air filtration throughout the construction phase",
    "tab_2_footer_meta": "Design, Sanitary Engineering, Master Tiler",
    "tab_2_cta": "Calculate Bathroom Estimate",

    // Tab 3: Innenausbau & Parkett
    "tab_3_title": "Premium Flooring & Interior Finishing",
    "tab_3_sub": "Hardwood, Vinyl & Drywall",
    "tab_3_badge": "Precision, Sustainable Materials",
    "tab_3_heading": "Flooring and Spatial Architecture in Harmony",
    "tab_3_desc": "Custom drywall partitions for fresh floorplans combined with professionally installed oak parquet, wide planks, or heavy-duty luxury vinyl.",
    "tab_3_impact_meta": "LOGISTICS ADVANTAGE",
    "tab_3_impact_text": "Direct delivery from hardware store / central warehouse without hauling or waste loss",
    "tab_3_cap_title": "SCOPE OF SERVICES & MASTER CRAFT QUALITY",
    "tab_3_cap_1": "Professional subfloor leveling using fiber-reinforced compound",
    "tab_3_cap_2": "Floating or full-surface adhesive bonding for optimal acoustic isolation",
    "tab_3_cap_3": "Acoustic damping and integrated cable conduits within drywall framing",
    "tab_3_cap_4": "Surface treatment with zero-emission natural oils or matte varnishes",
    "tab_3_footer_meta": "Joinery, Master Drywallers, Parquet Specialists",
    "tab_3_cta": "Start Flooring & Interior Project",

    // Tab 4: Maler & Q4-Spachtelung
    "tab_4_title": "Painting, Plastering & Finishing (Q4)",
    "tab_4_sub": "Smooth Fleece, Color Design & Lacquer",
    "tab_4_badge": "Perfection, Highest Surface Grade",
    "tab_4_heading": "Flawless Walls Under Raking Light",
    "tab_4_desc": "Meticulously skimmed Q4 surfaces, crack-bridging smooth non-woven fleece, and premium eco-friendly silicate and emulsion paints from leading manufacturers.",
    "tab_4_impact_meta": "QUALITY COMMITMENT",
    "tab_4_impact_text": "Glare-free surfaces inspected under specialized site lighting",
    "tab_4_cap_title": "SCOPE OF SERVICES & MASTER CRAFT QUALITY",
    "tab_4_cap_1": "Full-surface skimming of walls and ceilings to Grade Q4 standard",
    "tab_4_cap_2": "Precision application of fine smooth fleece for permanent crack resistance",
    "tab_4_cap_3": "Airless spray application or brushwork with low-odor premium paints",
    "tab_4_cap_4": "Clean edge masking and full protective floor covering across all rooms",
    "tab_4_footer_meta": "Master Painter, Color Consulting, Q4 Finish",
    "tab_4_cta": "Request Painting Service",

    // Workflow
    "workflow_title": "In 4 Steps to Your Completed Project",
    "workflow_subtitle": "Transparent, dependable, and stress-free for you as property owner.",
    "step_1_num": "01",
    "step_1_title": "Inquiry & Initial On-Site Survey",
    "step_1_desc": "Describe your plans online or by phone. We inspect site conditions on-site free of charge when required.",
    "step_2_num": "02",
    "step_2_title": "Binding Fixed-Price Quote",
    "step_2_desc": "Receive a transparent proposal itemizing material selection, construction timeline, and guaranteed total costs.",
    "step_3_num": "03",
    "step_3_title": "Coordination & Skilled Execution",
    "step_3_desc": "We deliver all materials straight to the job site. Certified master craftsmen start punctually and work in close coordination.",
    "step_4_num": "04",
    "step_4_title": "Final Handover & 5-Year Warranty",
    "step_4_desc": "Only when every detail is flawlessly executed and cleaned do we complete formal handover with full statutory warranty.",

    // Material Logistics Section
    "material_feature_title": "Direct Hardware Store & Wholesale Logistics",
    "material_feature_text": "No heavy lifting, no wrong parts. We order matching quality building materials directly through our retail quotas (stores like Hornbach, OBI, Bauhaus & specialty trade) and deliver everything right to the site.",
    "material_stores_label": "Material & Retail Partnerships",
    "store_tag_hornbach": "Hornbach DIY Center",
    "store_tag_obi": "OBI Retail Store",
    "store_tag_bauhaus": "Bauhaus",
    "store_tag_trade": "Building Material Trade",
    "store_tag_wholesale": "Master Wholesale",

    // Calculator Teaser
    "calc_teaser_title": "What Does Your Renovation Project Cost?",
    "calc_teaser_subtitle": "Calculate a reliable cost estimate for your project in 60 seconds – including materials and labor.",
    "calc_cta_start": "Open Interactive Cost Calculator",

    // Partner Teaser
    "partner_teaser_title": "Partnership for Craft Businesses & DIY Stores",
    "partner_teaser_subtitle": "Achieve more together: Join our network for streamlined construction coordination.",
    "partner_bullet_1": "Punctual payments and crystal-clear bills of quantities",
    "partner_bullet_2": "Materials staged on-site before craftsmen arrive",
    "partner_bullet_3": "Focus on the craft – we handle site management and customer communications",
    "partner_bullet_4": "DIY retailers increase basket size with turnkey installation packages",

    // Pitch Teaser
    "pitch_badge": "Investor & B2B Presentation",
    "pitch_title": "The BAUBUND Concept for Partners in Detail",
    "pitch_subtitle": "Discover how we solve trade fragmentation and why blending DIY retail logistics with digital site management is a future-proof model.",

    // Interactive Calculator
    "calc_page_title": "Interactive Cost Calculator",
    "calc_page_intro": "Estimate a realistic budget for your project in just a few clicks. Based on verified master-level hourly rates and current material prices from building wholesalers.",
    "calc_step_service": "1. Select Trade",
    "calc_opt_paint": "Painting & Plastering",
    "calc_opt_floor": "Flooring (Parquet / Vinyl / Laminate)",
    "calc_opt_tiles": "Bathroom Remodeling & Tiles",
    "calc_opt_drywall": "Drywall & Space Partitioning",
    "calc_opt_garden": "Garden & Exterior Landscaping",
    "calc_opt_full": "Full Turnkey Apartment Renovation",
    "calc_step_size": "2. Room or Project Size",
    "calc_size_label": "Floor area in square meters (m²):",
    "calc_step_quality": "3. Material & Equipment Standard",
    "calc_qual_standard": "Standard Quality",
    "calc_qual_std_desc": "Proven brand products for solid everyday wear",
    "calc_qual_premium": "Premium Master Quality",
    "calc_qual_prem_desc": "Higher wear classes, finer pigmentation, enhanced longevity",
    "calc_qual_eco": "Eco-Friendly & Exclusive",
    "calc_qual_eco_desc": "Low-emission, natural mineral materials, designer finishes",
    "calc_step_extras": "4. Additional Services",
    "calc_extra_removal": "Demolish and responsibly dispose of old material",
    "calc_extra_express": "Express start (within 14 calendar days)",
    "calc_extra_furniture": "Furniture shifting, heavy masking & dust barriers",
    "calc_res_title": "Your Estimated Fixed-Price Range",
    "calc_res_labor": "Master craftsman labor:",
    "calc_res_material": "Building materials & logistics:",
    "calc_res_total": "Estimated Fixed Price (incl. VAT):",
    "calc_res_note": "Note: This is a transparent preliminary guide. You will receive a binding fixed-price contract after a brief on-site survey or digital floorplan review.",
    "calc_btn_adopt": "Inquire About This Project Now",

    // Comparison Table (leistungen.html)
    "comparison_title": "Why BAUBUND Instead of Individual Contractors?",
    "comp_col_metric": "Comparison Criterion",
    "comp_col_diy": "Conventional Individual Contracting",
    "comp_col_baubund": "BAUBUND Turnkey Coordination",
    "comp_row_contacts": "Points of Contact",
    "comp_row_contacts_diy": "5–12 separate contractors and retail suppliers",
    "comp_row_contacts_bb": "1 dedicated site manager for all trades",
    "comp_row_materials": "Material Procurement",
    "comp_row_materials_diy": "Self-purchased, self-hauled, taking waste risk",
    "comp_row_materials_bb": "Direct on-site delivery from hardware store & wholesale",
    "comp_row_schedule": "Scheduling & Inter-Trade Timing",
    "comp_row_schedule_diy": "Frequent delays, idle waiting between trades",
    "comp_row_schedule_bb": "Guaranteed completion date with synchronized milestone plan",
    "comp_row_liability": "Warranty & Defect Liability",
    "comp_row_liability_diy": "Blame game between separate trades if defects occur",
    "comp_row_liability_bb": "Full 5-year single-source warranty under German BGB",

    // Trade Bullet Points (leistungen.html)
    "trade_1_bullet_1": "✓ Dedicated site manager on-site as your sole point of contact",
    "trade_1_bullet_2": "✓ Central material procurement (Hornbach, OBI, wholesale)",
    "trade_1_bullet_3": "✓ Binding milestone schedule with 5-year warranty",
    "trade_2_bullet_1": "✓ Bonded waterproofing according to DIN 18534 against water damage",
    "trade_2_bullet_2": "✓ Large-format tiles & precision mitered Jolly edges",
    "trade_2_bullet_3": "✓ Modern concealed fittings & underfloor heating",
    "trade_3_bullet_1": "✓ Fiber-reinforced floor leveling for flat subfloors",
    "trade_3_bullet_2": "✓ Acoustically decoupled drywall stud walls",
    "trade_3_bullet_3": "✓ Impact sound insulation & low-dust precision miter cuts",
    "trade_4_bullet_1": "✓ Low-dust machine sanding & raking-light inspection",
    "trade_4_bullet_2": "✓ Crack-bridging non-woven lining paper for smooth walls",
    "trade_4_bullet_3": "✓ Breathable silicate mineral paints for optimal indoor air quality",

    // Process Page (ablauf.html)
    "page_process_title": "Structured Renovation Workflow Without Surprises",
    "page_process_intro": "Our 4-phase model guarantees disciplined coordination, timely delivery of all building materials, and reliable construction timetables.",
    "step_1_b1": "• Detailed laser measurement",
    "step_1_b2": "• Inspection of subfloors & building fabric",
    "step_1_b3": "• Consultation on custom preferences",
    "step_2_b1": "• No hidden charges",
    "step_2_b2": "• Binding construction timetable",
    "step_2_b3": "• Transparent milestone payment schedule",
    "step_3_b1": "• Hardware store & wholesale logistics",
    "step_3_b2": "• Punctual on-site staging",
    "step_3_b3": "• Dust protection & floor shielding included",
    "step_4_b1": "• Joint defect-free inspection",
    "step_4_b2": "• Documented handover protocol",
    "step_4_b3": "• 5-year statutory German BGB warranty",
    "proc_faq_title": "Frequently Asked Questions About Our Process",
    "faq_q1": "Who is liable for damages or defects?",
    "faq_a1": "BAUBUND is fully liable to you as general contractor under German BGB law. If any issue arises, you do not need to dispute with individual craftsmen – we bear full responsibility and rectify deficiencies promptly.",
    "faq_q2": "How is hardware store material ordered?",
    "faq_a2": "We coordinate material lists directly with regional partner stores (Hornbach, OBI, Bauhaus) and wholesalers. We bundle transport, verify completeness, and deliver just-in-time to the project site.",
    "faq_q3": "Do I have to pay upfront?",
    "faq_a3": "No. We operate with a fair, transparent milestone payment schedule. You only pay installments after verified completion of agreed construction milestones.",
    "faq_q4": "Which regions does BAUBUND currently serve?",
    "faq_a4": "Our operational launch covers the greater Stuttgart metropolitan area (including Esslingen, Ludwigsburg, Böblingen, Göppingen). Nationwide rollout is scaling progressively with certified master partners and hardware store hubs.",

    // Partner Page (partner.html)
    "page_partners_title": "Become a Partner with BAUBUND",
    "page_partners_intro": "For master craft businesses and hardware stores: Predictable jobs, zero payment risk, and structured site coordination.",
    "part_pitch_btn": "View B2B Partner Pitch Deck",
    "part_benefits_craftsmen": "Benefits for Master Craftsmen & Trade Specialists",
    "part_c1_title": "Zero Acquisition Overhead & Punctual Payment",
    "part_c1_desc": "You receive fully scoped jobs with exact bills of quantities. We pay punctually according to VOB/BGB standards.",
    "part_c2_title": "Materials staged on-site right on time",
    "part_c2_desc": "No time wasted driving to hardware stores during billable hours. All materials are staged and ready to install.",
    "part_c3_title": "Coordination through Professional Site Management",
    "part_c3_desc": "Preceding trade work is completed on schedule. No costly downtime on the job site.",
    "part_benefits_stores": "Benefits for Hardware Stores & Building Suppliers",
    "part_s1_title": "Larger Baskets & Lower Return Rates",
    "part_s1_desc": "Customers buy premium products (bathrooms, tiles, parquet) when professional installation is guaranteed.",
    "part_s2_title": "Relief for In-Store Advisors & Zero Liability",
    "part_s2_desc": "BAUBUND handles measurements, installation coordination, and assumes full general contractor liability.",
    "part_form_title": "Become a Partner Business",
    "part_form_subtitle": "Apply easily to join our certified contractor and supplier network.",
    "form_company": "Company / Business Name",
    "form_trade": "Trade / Specialization",
    "form_phone": "Phone Number",
    "form_email": "Email Address",
    "form_city": "Operating Region / City",
    "form_message": "Message / Brief description of your business",
    "form_submit_partner": "Submit Partner Application",
    "part_opt_sanierung": "Full Renovation",
    "part_opt_bad": "Bathroom Renovation & Tiling",
    "part_opt_boden": "Flooring / Parquet",
    "part_opt_maler": "Painter & Decorator (Q3/Q4)",
    "part_opt_trockenbau": "Drywall & Acoustics",
    "part_opt_baumarkt": "Hardware Store / Specialty Trade",

    // B2B Pitch Deck (pitch-deck.html)
    "pitch_print_btn": "Print / Save as PDF",
    "pitch_s1_tag": "01 / Market Opportunity & Problem",
    "pitch_s1_title": "The Untapped Value Pool in DIY Retail & Craftsmanship",
    "pitch_s1_intro": "Every day, customers in German DIY stores stand in front of premium tiles, parquet flooring, and sanitary installations. Over 40% abandon the purchase or downscale their basket because they have no certified professional to install it. Meanwhile, master craft businesses drown in unpaid administrative overhead.",
    "pitch_s1_diy_problem_title": "Hardware Store Problem:",
    "pitch_s1_diy_p1": "• Lost high-ticket shopping baskets in installation-heavy trades",
    "pitch_s1_diy_p2": "• High return rates caused by flawed DIY installations",
    "pitch_s1_diy_p3": "• Lack of certified local installation and fitting services",
    "pitch_s1_craft_problem_title": "Craftsman Problem:",
    "pitch_s1_craft_p1": "• Up to 35% unproductive hours spent on bidding & sales",
    "pitch_s1_craft_p2": "• Payment disputes and delayed cash flow",
    "pitch_s1_craft_p3": "• Time-consuming trips for materials during billable hours",
    "pitch_s2_tag": "02 / The BAUBUND Solution",
    "pitch_s2_title": "The Connecting Platform for Retail, Crafts & Clients",
    "pitch_s2_desc": "BAUBUND bridges the gap: We do not compete with hardware stores or craft businesses; we are the connecting interface. The store sells the materials – BAUBUND handles the coordination, punctual delivery, and deployment of vetted master trades.",
    "pitch_s2_step1_title": "1. Material Sale at PoS",
    "pitch_s2_step1_desc": "Customer selects tiles, paints, or sanitaryware in store. Staff recommends the BAUBUND fixed-price installation service.",
    "pitch_s2_step2_title": "2. Logistics & Scheduling",
    "pitch_s2_step2_desc": "BAUBUND routes all material purchases directly through the store and stages everything right on the job site.",
    "pitch_s2_step3_title": "3. Master Craft Execution",
    "pitch_s2_step3_desc": "Certified trades install strictly to DIN standards. BAUBUND provides final acceptance & 5-year warranty.",
    "pitch_s3_tag": "03 / Value for Retail Partners",
    "pitch_s3_title": "Higher Margins & Zero Defect Liability",
    "pitch_s3_kpi1_val": "+28%",
    "pitch_s3_kpi1_label": "Higher Basket Sizes",
    "pitch_s3_kpi1_desc": "Clients purchase complete designer bathrooms and luxury hardwoods instead of budget compromises.",
    "pitch_s3_kpi2_val": "-80%",
    "pitch_s3_kpi2_label": "Lower Return Rates",
    "pitch_s3_kpi2_desc": "Professional fitting prevents common DIY errors and damaged building materials.",
    "pitch_s3_kpi3_val": "0%",
    "pitch_s3_kpi3_label": "Liability for Retailer",
    "pitch_s3_kpi3_desc": "BAUBUND assumes full general contractor liability backed by €5M operational insurance.",
    "pitch_s4_tag": "04 / Rollout Roadmap",
    "pitch_s4_title": "From Pilot Hub Stuttgart to Nationwide Network",
    "pitch_s4_phase1_title": "Launch Hub Stuttgart",
    "pitch_s4_phase1_desc": "Pilot partnerships with regional hardware stores (Hornbach, OBI, Bauhaus) & pool of 25 certified master businesses for renovation, bath, and flooring.",
    "pitch_s4_phase2_title": "South & West Germany",
    "pitch_s4_phase2_desc": "Expansion to Munich, Frankfurt Rhine-Main, and Rhine-Neckar with scaled digital site management and centralized logistics.",
    "pitch_s4_phase3_title": "Nationwide Rollout",
    "pitch_s4_phase3_desc": "Nationwide network of over 200 craft partners and strategic master framework agreements with major retail chains.",
    "pitch_s4_cta": "Schedule Partnership Discussion",

    // Contact & Inquiry Page (kontakt.html)
    "page_contact_title": "Contact & Project Inquiry",
    "page_contact_intro": "Begin your project with a free consultation or on-site survey. We respond within 24 hours with a binding timeline and cost estimate.",
    "contact_info_title": "Direct Contact to Our Site Management",
    "contact_phone_label": "Direct Phone:",
    "contact_phone_val": "+49 (0) 711 4905 8230",
    "contact_email_label": "Email Inquiries:",
    "contact_email_val": "kontakt@baubund-projekte.de",
    "contact_hours_label": "Service Hours:",
    "contact_hours_val": "Mon–Fri: 7:30 AM – 6:30 PM, Sat: 8:30 AM – 2:00 PM",
    "contact_hq_label": "Launch Hub & Headquarters:",
    "contact_form_title": "Request Project Estimate",
    "form_name": "Full Name",
    "form_project_type": "Desired Trade / Project Type",
    "form_address": "Postal Code & City of Project",
    "form_timeframe": "Desired Start Date",
    "form_timeframe_asap": "As soon as possible (within 2-4 weeks)",
    "form_timeframe_month": "Within the next 1-3 months",
    "form_timeframe_later": "Flexible / future planning",
    "form_desc_label": "Describe Your Project",
    "form_desc_placeholder": "Briefly describe your plans (e.g. 3-room apartment in Stuttgart, approx. 75 m², new oak parquet, skim walls to Q4 and remodel bathroom)...",
    "form_consent": "I agree that my submitted information will be processed to handle my inquiry. No data sharing with unauthorized third parties.",
    "form_submit_btn": "Submit Project Inquiry Now",
    "form_opt_drywall": "Drywall Partition / Room Divider",
    "form_opt_garden": "Garden & Exterior Landscaping",
    "contact_promise_title": "Our Service Promise",
    "contact_p1": "✓ Free on-site survey in the Stuttgart region & nationwide",
    "contact_p2": "✓ 100% binding fixed-price guarantee",
    "contact_p3": "✓ Dedicated site manager as your sole contact",
    "contact_p4": "✓ 5-year statutory German BGB warranty",
    "contact_legal_tmg": "Information pursuant to § 5 TMG: BAUBUND Projektgesellschaft, Königstraße 28, 70173 Stuttgart, Germany",
    "contact_legal_rep": "Represented by: Executive Management, Email: kontakt@baubund-projekte.de, Tel: +49 (0) 711 4905 8230",
    "contact_legal_liability": "Liability for Content & Trades: Construction services are coordinated via certified master businesses. BAUBUND assumes full liability within the scope of agreed site management and warranty.",
    "contact_legal_privacy": "Privacy Notice: Data submitted via the contact form will be processed solely to handle your specific project inquiry and will not be disclosed to unauthorized third parties.",

    // Cookie Banner
    "cookie_title": "Privacy & Transparency",
    "cookie_desc": "We only use strictly essential cookies to remember preferences like your chosen language. No third-party advertising trackers are used.",
    "cookie_accept": "Understood & Save",
    "cookie_privacy_link": "Privacy Policy",

    // Footer
    "footer_about": "BAUBUND is your dependable general contractor for craft and construction projects. Nationwide rollout starting from the Stuttgart metropolitan hub. We connect master trades, smart hardware retail logistics, and binding fixed prices.",
    "footer_quicklinks": "Navigation",
    "footer_trades": "Focus Trades",
    "footer_legal": "Legal",
    "footer_imprint": "Imprint",
    "footer_privacy": "Privacy Policy",
    "footer_terms": "Terms & Conditions / BGB Warranty",
    "footer_copyright": "© 2026 BAUBUND Projektgesellschaft. All rights reserved.",

    // ==========================================
    // Dedicated Web Application (app.html)
    // ==========================================
    "app_title": "BAUBUND Client Portal",
    "app_tagline": "Book craft & construction coordination digitally",
    "app_tab_dashboard": "Dashboard",
    "app_tab_book": "Book Services",
    "app_tab_projects": "My Projects",
    "app_tab_contact": "Support",
    "app_theme_toggle": "Switch Theme",
    "app_dash_greeting": "Good day, Mr. Schneider",
    "app_dash_active_job": "Active Construction Project",
    "app_dash_project_name": "Full Turnkey Apartment Renovation (85 m²)",
    "app_dash_project_loc": "Stuttgart-Mitte, Marienstraße 14",
    "app_dash_status_badge": "In Progress (Step 3/5)",
    "app_dash_next_event": "Next visit: Master tiler inspection tomorrow 9:30 AM",
    "app_dash_progress_label": "Site progress: 60%",
    "app_dash_mat_title": "Material Logistics Live Status",
    "app_dash_mat_store": "Partner: Hornbach Stuttgart-Feuerbach",
    "app_dash_mat_status": "Delivered & staged on-site",
    "app_dash_quick_book": "Book Another Trade",
    "app_dash_quick_call": "Call Site Manager",
    "app_dash_quick_docs": "Documents & BGB",
    "app_book_heading": "Select & Book Trade",
    "app_book_sub": "Binding fixed price, certified master businesses, materials included.",
    "app_book_trade_full": "Full Renovation",
    "app_book_trade_full_desc": "Turnkey renovation for entire apartment",
    "app_book_trade_bath": "Bathroom Remodel",
    "app_book_trade_bath_desc": "Plumbing, walk-in shower, tiles",
    "app_book_trade_floor": "Parquet & Flooring",
    "app_book_trade_floor_desc": "Hardwood, vinyl & subfloor prep",
    "app_book_trade_paint": "Painting & Q4 Plaster",
    "app_book_trade_paint_desc": "Raking-light smooth walls & lining paper",
    "app_book_sqm_label": "Estimated Area (m²)",
    "app_book_mat_quality": "Material Standard",
    "app_book_mat_standard": "Solid DIY Retail Quality (Hornbach / OBI)",
    "app_book_mat_premium": "Master Brand & Designer Collection",
    "app_book_city_label": "Project Location",
    "app_book_date_label": "Preferred Start Date / Inspection",
    "app_book_time_label": "Time Window",
    "app_book_time_morning": "Morning (8:00 AM - 12:00 PM)",
    "app_book_time_afternoon": "Afternoon (1:00 PM - 5:00 PM)",
    "app_book_summary_title": "Binding Fixed-Price Calculation",
    "app_book_sum_labor": "Master Craftsmen Labor & Site Supervision",
    "app_book_sum_material": "Building Materials & Logistics (Hornbach / OBI)",
    "app_book_sum_warranty": "5-Year Statutory Warranty & Handover",
    "app_book_sum_total": "Total Fixed Price (incl. 19% VAT)",
    "app_book_btn_confirm": "Confirm Trade Booking Request",
    "app_book_success_title": "Booking Request Successfully Received!",
    "app_book_success_desc": "Your personal site manager is reviewing the time window and will contact you within 2 hours.",
    "app_proj_heading": "My Projects & Documents",
    "app_proj_tab_active": "Active Job Site",
    "app_proj_tab_history": "History & Archive",
    "app_proj_milestone_1": "1. Laser Measurement & Site Inspection",
    "app_proj_milestone_2": "2. Material Order & Staging",
    "app_proj_milestone_3": "3. Master Plumbing & Tile Execution",
    "app_proj_milestone_4": "4. Final Inspection & Handover Protocol",
    "app_doc_contract": "Construction Contract & Fixed-Price Guarantee (PDF)",
    "app_doc_material": "Material Delivery Bill Hornbach Stuttgart (PDF)",
    "app_doc_warranty": "5-Year Statutory Warranty Certificate (PDF)",
    "app_doc_view": "Download",
    "app_contact_heading": "Your Dedicated On-Site Manager",
    "app_contact_manager_name": "Dipl.-Ing. Markus Lindner",
    "app_contact_manager_role": "Certified Site Manager Stuttgart Region",
    "app_contact_btn_call": "Direct Call (+49 711 4905 8230)",
    "app_contact_btn_msg": "Send Message to Site Manager",
    "app_contact_chat_placeholder": "Short note or question regarding the construction site...",
    "app_contact_chat_send": "Send",
    "app_contact_hotline_title": "24/7 Emergency Dispatch for Active Sites",
    "app_contact_hotline_desc": "For urgent technical emergencies (e.g. pipe burst, power failure) you can reach us around the clock.",
    "app_back_to_site": "Back to Main Website"
  }
};

class I18nManager {
  constructor() {
    this.currentLang = 'de';
    try {
      this.currentLang = localStorage.getItem('baubund_lang') || 'de';
    } catch (e) {
      this.currentLang = 'de';
    }
  }

  init() {
    this.applyLanguage(this.currentLang);
    this.bindEvents();
  }

  setLanguage(lang) {
    if (!translations[lang]) return;
    this.currentLang = lang;
    try {
      localStorage.setItem('baubund_lang', lang);
    } catch (e) {}
    this.applyLanguage(lang);
    document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
  }

  toggleLanguage() {
    const nextLang = this.currentLang === 'de' ? 'en' : 'de';
    this.setLanguage(nextLang);
  }

  applyLanguage(lang) {
    const dict = translations[lang] || translations.de;
    if (document.documentElement) {
      document.documentElement.lang = lang;
    }

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update HTML content for formatted strings
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.placeholder = dict[key];
      }
    });

    // Update titles
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) {
        el.title = dict[key];
      }
    });

    // Update form values if attribute specified
    document.querySelectorAll('[data-i18n-value]').forEach(el => {
      const key = el.getAttribute('data-i18n-value');
      if (dict[key] !== undefined) {
        el.value = dict[key];
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
