/* Kuratierter Lernstoff aus den bereitgestellten BCSM-402-Unterlagen (SoSe 2026). */
const BCSM_DATA = {
  chapters: [
    {
      id: 0, title: "Modulkompass", short: "Aufbau, Lernziele und Prüfungslogik", pages: "1–23", color: "#d9d6ca", minutes: 20,
      objectives: ["Den roten Faden des Moduls erklären", "Wissen, welche Methode welche Frage beantwortet", "Die NGA-Fallstudie als durchgängiges Übungsmodell nutzen"],
      sections: [
        { title: "Der rote Faden", body: "BCM beginnt beim Auftrag der Leitung und dem Geltungsbereich. Danach werden kritische Prozesse durch die BIA bestimmt, Bedrohungen mit der Risikoanalyse bewertet, Strategien und Pläne entwickelt sowie durch Übungen, Audits und Verbesserungen wirksam gehalten.", bullets: ["Plan: Scope, Governance, Ziele und Ressourcen", "Do: BIA, Risikoanalyse, Strategien und Notfallpläne", "Check: Übungen, Kennzahlen, Audits und Managementbewertung", "Act: Korrekturen und kontinuierliche Verbesserung"], takeaway: "Merksatz: Scope → BIA → Risiko → Strategie → Plan → Üben → Verbessern." },
        { title: "Was du können musst", body: "Das Modul prüft nicht nur Begriffe. Entscheidend ist der Transfer: Du sollst für eine Organisation einen Scope setzen, Rollen verteilen, kritische Prozesse bewerten und passende Maßnahmen begründen.", bullets: ["Begriffe sauber abgrenzen", "Methoden in der richtigen Reihenfolge anwenden", "Ergebnisse nachvollziehbar dokumentieren", "Entscheidungen anhand der NGA-Fakten begründen"] }
      ]
    },
    {
      id: 1, title: "Grundlagen des BCM", short: "Begriffe, Nutzen, Standards und BCMS", pages: "24–60", color: "#bfe3ce", minutes: 55,
      objectives: ["BCM, Notfall-, Krisen- und ITSCM abgrenzen", "ISO 22301 und BSI 200-4 einordnen", "Kritische Zeitparameter erklären"],
      sections: [
        { title: "BCM und BCMS", body: "Business Continuity ist die Fähigkeit, Produkte oder Dienstleistungen während einer Unterbrechung innerhalb eines angemessenen Zeitrahmens auf einem vorher festgelegten Mindestniveau fortzuführen. Das BCMS ist das Managementsystem, das Leitlinien, Rollen, Prozesse und Ressourcen dafür organisiert.", bullets: ["BCM ist geschäftsorientiert und nicht nur IT", "Ein BCMS verbindet Mensch, Organisation und Technik", "Ziel ist Resilienz: vorbereiten, reagieren und fortbestehen"], takeaway: "BC ist die Fähigkeit; BCM ist der Steuerungsprozess; BCMS ist das gesamte Managementsystem." },
        { title: "Standards und Rechtsrahmen", body: "ISO 22301 beschreibt international zertifizierbare Anforderungen – das WAS. BSI 200-4 liefert eine praxisnahe deutsche Methodik – das WIE – und arbeitet mit Reaktiv-, Aufbau- und Standard-BCMS.", bullets: ["Gesetze, Verträge und Lieferketten können BCM verlangen", "ISO 22301 ist zertifizierbar", "BSI 200-4 ist eine Umsetzungshilfe mit Stufenmodell", "BCI Good Practice Guidelines sind ein Best-Practice-Werkzeugkasten"] },
        { title: "Struktur des BCMS", body: "Die zentralen Bausteine sind Governance, Awareness, BIA, Risikoanalyse, Strategie und Wiederanlauf, Tests sowie Überwachung und Verbesserung. Sie folgen dem PDCA-Zyklus.", bullets: ["Plan: Verantwortung, Leitlinie, Ziele", "Do: Analysen, Strategien, Pläne", "Check: Tests und Leistungsbewertung", "Act: Verbesserungsmaßnahmen"] },
        { title: "Zeitparameter", body: "Zeitparameter machen Kontinuitätsanforderungen messbar. Sie werden hauptsächlich aus der BIA abgeleitet.", bullets: ["MTPD: maximal tolerierbare Unterbrechungsdauer", "RTO: Zielzeit bis zum Notbetrieb; kleiner als MTPD", "RPO: maximal tolerierbarer Datenverlust in Zeit", "MBCO: minimales Leistungsniveau im Notbetrieb", "Notbetriebszeit: Dauer zwischen Wiederanlauf und Normalbetrieb"] }
      ]
    },
    {
      id: 2, title: "Standards & Scope", short: "ISO, BSI, Stakeholder und Geltungsbereich", pages: "61–122", color: "#f3c99e", minutes: 70,
      objectives: ["Normenlandschaft unterscheiden", "Scope in drei Dimensionen definieren", "Stakeholder und Anforderungen dokumentieren"],
      sections: [
        { title: "Normenlandschaft", body: "ISO 22301 enthält Muss-Anforderungen an ein BCMS. ISO 22313 erläutert die Umsetzung. BSI 200-4 bietet eine operative Methodik und das Stufenmodell. Die BCI Guidelines ergänzen Best Practices.", bullets: ["ISO 22301: Organisation zertifizierbar", "ISO 22313: Leitfaden, nicht zertifizierbar", "BSI 200-4: nationale Methodik", "BCI: Praxiswissen und Personenzertifizierung"] },
        { title: "BCMS initiieren", body: "Die Initiierung ist ein Top-down-Prozess. Ohne Auftrag, Ressourcen und Freigabe durch die Leitung bleibt BCM unverbindlich.", bullets: ["Leitung initiiert und verantwortet", "Motivation und Ziele festlegen", "Scope und Zeitraum bestimmen", "Leitlinie verabschieden und kommunizieren"] },
        { title: "Scope definieren", body: "Der Scope legt fest, welche Teile der Organisation geschützt werden. Er muss klar, begründet und mit den Zielen vereinbar sein.", bullets: ["Organisatorisch: Einheiten und Abteilungen", "Geografisch: Standorte, Gebäude, Rechenzentren", "Logisch: Produkte, Services und Prozesse", "Ausschlüsse begründen", "Kritische Abhängigkeiten und Schnittstellen niemals wegdefinieren"], takeaway: "Ein enger Scope ist erlaubt; ein widersprüchlicher Scope nicht." },
        { title: "Stakeholder", body: "Interessierte Parteien beeinflussen BCM oder werden davon beeinflusst. Ihre relevanten Bedürfnisse, rechtlichen Vorgaben und vertraglichen Anforderungen werden ermittelt und dokumentiert.", bullets: ["Intern: Leitung, Mitarbeitende, BCM-Team, Fachbereiche, Revision", "Extern: Kunden, Mutterkonzern, Behörden, Lieferanten, Dienstleister, Versicherer und Medien", "Normalbetrieb und Krise können unterschiedliche Stakeholder priorisieren"] },
        { title: "BCM-Leitlinie", body: "Die Leitlinie ist das ranghöchste BCM-Dokument. Sie beschreibt Motivation, Ziele, Geltungsbereich, Verantwortung, Ressourcen und grundlegende Begriffe beziehungsweise Eskalationsstufen.", bullets: ["Von der Leitung freigegeben", "Für alle Einheiten im Scope verbindlich", "Regelmäßig überprüft und aktuell gehalten"] }
      ]
    },
    {
      id: 3, title: "Governance & Rollen", short: "Leitung, BCB, BAO, RASCI und Ressourcen", pages: "123–170", color: "#d3e2e9", minutes: 65,
      objectives: ["Vorsorge- und Bewältigungsorganisation trennen", "Rollen mit RASCI eindeutig zuordnen", "BCM-Ziele und Ressourcen planen"],
      sections: [
        { title: "Governance", body: "BCM scheitert selten am fehlenden Backup, sondern an unklaren Entscheidungen. Governance schafft Mandat, Verantwortlichkeiten, Berichtswege und Ressourcen.", bullets: ["BCM ist ein Managementsystem", "Die Gesamtverantwortung der Leitung ist nicht delegierbar", "Rollen und Befugnisse müssen zugewiesen und kommuniziert werden"] },
        { title: "Vorsorge und Bewältigung", body: "Im Normalbetrieb baut die BC-Vorsorgeorganisation das BCMS auf und hält es aktuell. Bei Notfall oder Krise übernimmt die Besondere Aufbauorganisation (BAO) die schnelle Bewältigung.", bullets: ["Vorsorge: Leitung, BC-Beauftragter, Koordinatoren", "Bewältigung: Krisenstab, Notfallstab und operative Teams", "AAO optimiert Routine; BAO optimiert Entscheidungen unter Zeitdruck"], takeaway: "Der BC-Manager bereitet vor, führt aber nicht automatisch den Krisenstab." },
        { title: "Institutionsleitung", body: "Die oberste Leitung trägt die Gesamtverantwortung, stellt Personal, Zeit und Budget bereit, benennt den BCB, verabschiedet Leitlinie und Ziele und integriert das BCMS in die Geschäftsprozesse.", bullets: ["Commitment sichtbar zeigen", "Ressourcen bereitstellen", "Governance etablieren", "Wirksamkeit regelmäßig bewerten"] },
        { title: "BC-Beauftragter", body: "Der BCB beziehungsweise Business Continuity Manager ist zentrale Ansprechperson und Methodenwächter. Idealerweise berichtet die Rolle direkt an die Leitung und ist ausreichend unabhängig.", bullets: ["BCMS konzipieren, planen und steuern", "BIA- und Risikomethoden vorgeben", "Tests und Übungen koordinieren", "Überwachen, berichten und Verbesserungen verfolgen", "Kritische Prozesse über die IT hinaus verstehen"] },
        { title: "RASCI", body: "RASCI verhindert Lücken und Doppelzuständigkeiten.", bullets: ["R – Responsible: führt aus", "A – Accountable: trägt Rechenschaft; genau ein A pro Aufgabe", "S – Supportive: unterstützt mit Ressourcen", "C – Consulted: wird vorher fachlich einbezogen", "I – Informed: wird informiert"] },
        { title: "Ziele, Änderungen, Ressourcen", body: "BCM-Ziele müssen SMART, genehmigt, messbar, kommuniziert und überwacht sein. Organisatorische, technische oder prozessuale Änderungen können ein BCMS-Update auslösen.", bullets: ["Ressourcen: Personal, Budget, Technik, Gebäude, Informationen", "Kompetenzen und Schulungsnachweise sichern", "Kommunikation nach Was, Wann, An wen, Wie und Wer planen"] }
      ]
    },
    {
      id: 4, title: "Business Impact Analyse", short: "Kritikalität, Schäden, Zeitziele und Ressourcen", pages: "192–238", color: "#d8c9e8", minutes: 85,
      objectives: ["BIA und Risikoanalyse trennen", "Eine BIA in sieben Schritten durchführen", "MTPD, RTO, RPO und MBCO ableiten"],
      sections: [
        { title: "BIA-Vorfilter", body: "Bei vielen Prozessen reduziert der Vorfilter den Aufwand. Er trennt potenziell zeitkritische Prozesse von nicht zeitkritischen, bevor die Detailanalyse beginnt.", bullets: ["Prozessbasiert: präzise, aber potenziell aufwendig", "Organisationsbasiert: skalierbar über das Organigramm", "Produkt-/servicebasiert: stark für Wertschöpfungsprozesse", "Leitung definiert, was ein zu hoher Schaden ist", "BCB plausibilisiert; Leitung gibt Ergebnis frei"] },
        { title: "BIA versus Risikoanalyse", body: "Die BIA fragt, was ein Ausfall über die Zeit bewirkt. Die Risikoanalyse fragt, warum ein Ausfall entstehen könnte und wie wahrscheinlich er ist.", bullets: ["BIA: Impact, Kritikalität, Zeitziele und Ressourcen", "Risikoanalyse: Bedrohungen, Schwachstellen und Prävention", "Häufig zuerst BIA, dann Risikoanalyse"], takeaway: "BIA = Folgen; Risikoanalyse = Ursachen." },
        { title: "Sieben BIA-Schritte", body: "Eine nachvollziehbare BIA folgt einem festen Ablauf.", bullets: ["1. Einheiten und Prozesse festlegen", "2. Schäden über Zeit analysieren", "3. Wiederanlaufparameter definieren", "4. Interne und externe Abhängigkeiten erfassen", "5. Prozesse nach Kritikalität einstufen", "6. Ressourcen für Normal- und Notbetrieb erfassen", "7. Ressourcen-Kritikalität und Wiederherstellungszeit bestimmen"] },
        { title: "Schadensanalyse", body: "Bewertet wird der Bruttoschaden ohne bereits vorhandene Schutzmaßnahmen. Relevante Kategorien werden für klare Zeitfenster bewertet.", bullets: ["Finanzen", "Aufgabenerfüllung beziehungsweise Produktion", "Gesetze und Verträge", "Reputation", "Personensicherheit", "Besondere Termine im Worst Case berücksichtigen"] },
        { title: "Wiederanlaufparameter", body: "Die MTPD markiert die äußerste Grenze. Innerhalb dieser Grenze wird die RTO für den Notbetrieb festgelegt. Das MBCO definiert dessen Mindestleistung; das RPO den tolerierten Datenverlust.", bullets: ["RTO < MTPD", "Ressourcen-RTO darf den Prozess-RTO nicht gefährden", "Parameter müssen fachlich begründet sein"] },
        { title: "BIA-Ergebnis", body: "Der Bericht dokumentiert Methodik, Annahmen, kritische Prozesse, Zeitziele, Abhängigkeiten, Ressourcen und Freigaben. Er steuert Strategie und Notfallplanung und muss bei Änderungen aktualisiert werden.", bullets: ["Nicht nur Tabellen, sondern begründete Prioritäten", "Prozessverantwortliche validieren", "Leitung genehmigt die wesentlichen Ergebnisse"] }
      ]
    },
    {
      id: 5, title: "BCM-Risikomanagement", short: "Bedrohungen, Schwachstellen, Bewertung und Behandlung", pages: "327–365", color: "#f0bbb0", minutes: 70,
      objectives: ["Risiken strukturiert identifizieren", "Auswirkung und Wahrscheinlichkeit bewerten", "Kontinuitätsstrategien aus BIA und Risiko ableiten"],
      sections: [
        { title: "Risikologik", body: "Ein Risiko entsteht, wenn eine Bedrohung eine Schwachstelle ausnutzt und dadurch ein schädliches Ereignis verursacht. Bewertet werden Auswirkung und Eintrittswahrscheinlichkeit.", bullets: ["Bedrohung: mögliche Ursache", "Schwachstelle: ausnutzbare Verwundbarkeit", "Risiko: Kombination aus Szenario, Wahrscheinlichkeit und Wirkung", "Asset/Ressource: das zu schützende Element"] },
        { title: "Ablauf", body: "Das BCM-Risikomanagement grenzt den Analysebereich ein, identifiziert Gefährdungen und Schwachstellen, analysiert und bewertet Risiken, wählt Behandlung und überwacht Restrisiken.", bullets: ["Kontext und Kriterien vorab festlegen", "Einheitliche Skalen verwenden", "Annahmen dokumentieren", "Verantwortung und Termin für Maßnahmen vergeben"] },
        { title: "Brutto und Netto", body: "Das Bruttorisiko wird ohne bestehende Maßnahmen bewertet. Das Nettorisiko beziehungsweise Restrisiko bleibt nach wirksamen Maßnahmen übrig.", bullets: ["Brutto zeigt den ungeschützten Ausgangszustand", "Maßnahmen verändern Wahrscheinlichkeit oder Auswirkung", "Restrisiko muss akzeptiert, weiter behandelt oder übertragen werden"] },
        { title: "Risikobehandlung", body: "Vier Grundoptionen stehen zur Verfügung.", bullets: ["Vermeiden: riskante Aktivität beenden", "Reduzieren: Prävention oder Auswirkung begrenzen", "Übertragen/Teilen: Vertrag oder Versicherung", "Akzeptieren: bewusst tragen und überwachen"], takeaway: "Eine Maßnahme ohne Owner, Termin und Wirksamkeitsprüfung ist nur ein Wunsch." },
        { title: "Strategie und BIA", body: "BIA zeigt, was wie schnell wieder funktionieren muss. Risikoanalyse zeigt, wogegen abgesichert wird. Kontinuitätsstrategien müssen beides zusammenführen.", bullets: ["Personalausfall: Vertretung, Cross-Training, Remote Work", "Standortausfall: Ausweichstandort", "IT-Ausfall: Redundanz, Backup und Wiederanlauf", "Lieferantenausfall: Dual Sourcing, Lagerbestand und Verträge"] }
      ]
    },
    {
      id: 6, title: "Betrieb & Verbesserung", short: "Strategien, Pläne, Tests, KPIs, Audit und PDCA", pages: "368–438", color: "#c6ddd5", minutes: 90,
      objectives: ["BC-Strategien und Notfallpläne ableiten", "Übungen und Tests planen", "Leistung, Audits und Korrekturen erklären"],
      sections: [
        { title: "Von der Analyse zur Strategie", body: "Strategien legen fest, wie priorisierte Prozesse innerhalb ihrer Zeitziele auf Mindestniveau fortgeführt oder wiederhergestellt werden. Erst danach werden konkrete Pläne formuliert.", bullets: ["BIA liefert Priorität und Zeit", "Risikoanalyse liefert relevante Ausfallszenarien", "Kosten, Machbarkeit und Abhängigkeiten vergleichen", "Leitung entscheidet und finanziert"] },
        { title: "Notfallplan", body: "Ein Notfallplan übersetzt die Strategie in eindeutige Handlungen. Er muss auch unter Stress, Ausfall von IT und Personalmangel nutzbar sein.", bullets: ["Geltungsbereich und Aktivierungskriterien", "Rollen, Kontakte, Alarmierung und Eskalation", "Ressourcen und Notbesetzung", "Schritt-für-Schritt-Wiederanlauf", "Notbetrieb und Rückführung zum Normalbetrieb", "Deaktivierung, Nachbereitung und Dokumentation"] },
        { title: "Übungen und Tests", body: "Pläne werden erst durch Übungen realistisch. Formate reichen von Dokumentenprüfung und Tabletop bis zu technischen Wiederanlauf- und Vollübungen.", bullets: ["Ziele, Scope und Erfolgskriterien definieren", "Sicherheits- und Abbruchregeln festlegen", "Beobachter und Protokollierung einplanen", "Abweichungen in Maßnahmen überführen", "Ergebnisse und Nachweise dokumentieren"] },
        { title: "Leistungsbewertung", body: "Überwachung, Messung, Analyse und Bewertung zeigen, ob das BCMS seine Ziele erreicht.", bullets: ["KPIs müssen relevant und messbar sein", "Beispiele: Planaktualität, Übungsquote, offene Maßnahmen, RTO-Erreichung", "Ergebnisse fließen in Managementbewertung und Verbesserung"] },
        { title: "Audit und Managementreview", body: "Interne Audits prüfen unabhängig, ob Anforderungen erfüllt und Prozesse wirksam sind. Die Leitung bewertet regelmäßig Eignung, Angemessenheit und Wirksamkeit des gesamten BCMS.", bullets: ["Auditkriterien, Scope und Unabhängigkeit sichern", "Feststellungen mit Nachweisen belegen", "Managementreview betrachtet Veränderungen, Leistung, Audits, Ressourcen und Chancen"] },
        { title: "Abweichung und Korrektur", body: "Bei einer Nichtkonformität wird zunächst reagiert und die Auswirkung kontrolliert. Danach wird die Ursache analysiert, eine Korrekturmaßnahme umgesetzt und ihre Wirksamkeit geprüft.", bullets: ["Korrektur beseitigt den aktuellen Fehler", "Korrekturmaßnahme beseitigt die Ursache", "Lessons Learned schließen den PDCA-Kreis"] }
      ]
    },
    {
      id: 7, title: "Krisenmanagement", short: "AAO/BAO, Stabsarbeit, FOR-DEC und Kommunikation", pages: "441–485", color: "#e8d0a7", minutes: 75,
      objectives: ["Störung, Notfall und Krise unterscheiden", "Eine BAO und den Krisenstab erklären", "FOR-DEC und Krisenkommunikation anwenden"],
      sections: [
        { title: "Eskalationsstufen", body: "Eine Störung kann die Linienorganisation mit normalen Mitteln bewältigen. Ein Notfall unterbricht zeitkritische Prozesse erheblich, erfordert eine BAO und nutzt vorbereitete Pläne. In einer Krise reichen vorhandene Pläne oder Befugnisse nicht aus.", bullets: ["Störung: AAO bleibt ausreichend", "Notfall: planbare Bewältigung mit BAO und Notfallplänen", "Krise: außergewöhnliche, strategische Entscheidungen und erweiterte Befugnisse"] },
        { title: "AAO und BAO", body: "Die Allgemeine Aufbauorganisation ist der Normalbetrieb. Die BAO bündelt im Ereignisfall Entscheidungskompetenz, Fachwissen und operative Umsetzung.", bullets: ["Strategisch: Krisenentscheidungsgremium", "Taktisch: Stabsleitung und Krisenstab", "Operativ: Notfallteams und Spezialisten", "Befehle gehen nach unten, Lage- und Erfolgsmeldungen nach oben"] },
        { title: "Detektion bis Alarmierung", body: "Ereignisse werden gemeldet, qualifiziert und abhängig von der Einstufung eskaliert. Meldewege, zentrale Entscheidungsinstanz und Aktivierungskriterien müssen vorab feststehen.", bullets: ["1. Detektion und Meldung", "2. Ereignis qualifizieren", "3. BAO alarmieren", "4. Lage führen und Maßnahmen koordinieren"] },
        { title: "FOR-DEC", body: "FOR-DEC strukturiert Entscheidungen unter Unsicherheit.", bullets: ["Facts: Fakten ohne Interpretation", "Options: Handlungsoptionen", "Risks & Benefits: Chancen und Risiken", "Decision: Entscheidung", "Execution: Wer macht was bis wann?", "Check: Wirkung überprüfen"], takeaway: "FOR-DEC verhindert, dass der Krisenstab von der ersten Idee direkt zur Aktion springt." },
        { title: "Stabsarbeit", body: "Stabsmitglieder brauchen fachliche, persönliche und soziale Eignung sowie Stressresistenz. Räume, Kommunikation, Lagevisualisierung, Redundanzen und Versorgung müssen vorbereitet sein.", bullets: ["Kernteam plus situative Erweiterung", "Protokollant und Stabsassistenz", "Battlebox und alternative Kommunikation", "Entscheidungen und Lagebild dokumentieren"] },
        { title: "Krisenkommunikation", body: "Kommunikation beginnt früh und wird zentral koordiniert. Sie muss wahr, einheitlich und zielgruppenorientiert sein.", bullets: ["Intern: klare Handlungsanweisungen und Gerüchte vermeiden", "Extern: Vertrauen, Pflichten und Reputation berücksichtigen", "Single Point of Truth und autorisierte Sprecher", "Keine Spekulationen; bekannte Fakten und nächste Updates nennen"] },
        { title: "Deeskalation und Nachbereitung", body: "Die BAO wird anhand vorher definierter Kriterien schrittweise zurückgeführt. Nach dem Ereignis werden Eindrücke, Abläufe und Wirksamkeit der Pläne ausgewertet und in einen freigegebenen Abschlussbericht überführt.", bullets: ["BAO und AAO können vorübergehend parallel laufen", "Lessons Learned ohne Schuldzuweisung", "Maßnahmen verfolgen und BCMS aktualisieren"] }
      ]
    }
  ],

  flashcards: [
    [1,"Was bedeutet Business Continuity?","Fähigkeit, Produkte oder Dienstleistungen während einer Unterbrechung innerhalb eines angemessenen Zeitrahmens auf einem festgelegten Mindestniveau fortzuführen."],
    [1,"Was ist ein BCMS?","Das Managementsystem aus Struktur, Leitlinien, Rollen, Prozessen, Verfahren und Ressourcen zur Einführung, Steuerung und Verbesserung der Business Continuity."],
    [1,"Worin unterscheiden sich ISO 22301 und BSI 200-4?","ISO 22301 beschreibt zertifizierbare Anforderungen – das WAS. BSI 200-4 liefert eine praxisnahe Methodik – das WIE – inklusive Stufenmodell."],
    [1,"Was ist Resilienz?","Die Widerstandsfähigkeit einer Organisation, disruptive Risiken durch Vorbereitung und wirksame Reaktion zu vermeiden, abzumildern und den Fortbestand zu sichern."],
    [1,"Was bedeutet MTPD?","Maximum Tolerable Period of Disruption: maximal tolerierbare Unterbrechungsdauer, bevor der Schaden nicht mehr akzeptabel ist."],
    [1,"Was bedeutet RTO?","Recovery Time Objective: Zielzeit bis zur Wiederaufnahme einer Mindestfunktion beziehungsweise des Notbetriebs. RTO muss kleiner als MTPD sein."],
    [1,"Was bedeutet RPO?","Recovery Point Objective: maximal tolerierbarer Datenverlust, ausgedrückt als Zeitraum."],
    [1,"Was bedeutet MBCO?","Minimum Business Continuity Objective: das minimale Leistungs- oder Kapazitätsniveau, das im Notbetrieb erreicht werden muss."],
    [1,"Nenne den PDCA-Zyklus.","Plan – Do – Check – Act: planen, umsetzen, überprüfen und verbessern."],
    [2,"Was legt der Scope fest?","Welche organisatorischen, geografischen und logischen Teile einer Organisation durch das BCMS geschützt werden."],
    [2,"Welche drei Scope-Dimensionen gibt es?","Organisatorisch, geografisch/physisch und logisch beziehungsweise wertschöpfungsbezogen."],
    [2,"Was gilt bei Scope-Ausschlüssen?","Sie müssen nachvollziehbar begründet sein und dürfen kritische Funktionen oder Abhängigkeiten nicht gefährden."],
    [2,"Was ist ein Stakeholder?","Eine Person, Gruppe oder Organisation, die Aktivitäten und Ergebnisse beeinflusst oder davon beeinflusst wird."],
    [2,"Was ist die BCM-Leitlinie?","Das ranghöchste verbindliche BCM-Dokument mit Motivation, Zielen, Scope, Verantwortung und grundlegendem Rahmen."],
    [2,"Wer verabschiedet die BCM-Leitlinie?","Die oberste Leitung beziehungsweise Institutionsleitung."],
    [3,"Wer trägt die nicht delegierbare Gesamtverantwortung für BCM?","Die Institutionsleitung beziehungsweise das Top-Management."],
    [3,"Was macht der BC-Beauftragte?","Er konzipiert und steuert das BCMS, gibt Methoden vor, koordiniert Analysen und Übungen, überwacht und berichtet."],
    [3,"Führt der BC-Manager automatisch den Krisenstab?","Nein. Er ist häufig Berater und Methodenwächter; die Krisenstabsleitung ist eine eigene Rolle."],
    [3,"Was ist die AAO?","Allgemeine Aufbauorganisation: normale Linienorganisation für Routine und Regelbetrieb."],
    [3,"Was ist die BAO?","Besondere Aufbauorganisation: temporäre, schnelle Entscheidungs- und Bewältigungsstruktur für Notfälle und Krisen."],
    [3,"Wofür steht RASCI?","Responsible, Accountable, Supportive, Consulted, Informed."],
    [3,"Was ist die goldene RASCI-Regel?","Genau eine Rolle ist pro Aufgabe Accountable."],
    [3,"Welche Kriterien erfüllen gute BCM-Ziele?","Sie sind SMART: spezifisch, messbar, attraktiv/ausführbar, realistisch/relevant und terminiert."],
    [4,"Welche zentrale Frage beantwortet die BIA?","Was passiert mit der Organisation, wenn ein Prozess oder eine Ressource über eine bestimmte Zeit ausfällt?"],
    [4,"Welche zentrale Frage beantwortet die Risikoanalyse?","Warum könnte ein Prozess ausfallen, wie wahrscheinlich ist das und welche Schwachstellen bestehen?"],
    [4,"Wozu dient der BIA-Vorfilter?","Er reduziert den Analyseaufwand, indem potenziell zeitkritische Prozesse vor der Detail-BIA ausgewählt werden."],
    [4,"Welche drei Vorfilter-Ansätze gibt es?","Prozessbasiert, organisationsbasiert und produkt-/servicebasiert."],
    [4,"Wird in der BIA brutto oder netto bewertet?","Brutto: vorhandene Schutzmaßnahmen werden bei der Schadensbetrachtung zunächst nicht berücksichtigt."],
    [4,"Nenne typische BIA-Schadenskategorien.","Finanzen, Aufgabenerfüllung, Gesetze/Verträge, Reputation und Personensicherheit."],
    [4,"Welche Abhängigkeiten untersucht die BIA?","Interne Prozess- und Ressourcenabhängigkeiten sowie externe Lieferanten, Dienstleister und Partner."],
    [4,"Wer gibt die wesentlichen BIA-Ergebnisse frei?","Die Institutionsleitung; Prozessverantwortliche und BCB validieren beziehungsweise plausibilisieren."],
    [5,"Wie entsteht ein Risiko?","Eine Bedrohung nutzt eine Schwachstelle einer Ressource aus und verursacht mit bestimmter Wahrscheinlichkeit eine schädliche Auswirkung."],
    [5,"Was ist eine Bedrohung?","Eine potenzielle Ursache eines unerwünschten Ereignisses, etwa Feuer, Cyberangriff oder Lieferantenausfall."],
    [5,"Was ist eine Schwachstelle?","Eine ausnutzbare Verwundbarkeit, zum Beispiel fehlende Redundanz oder ungeschultes Personal."],
    [5,"Was ist Bruttorisiko?","Risiko vor Berücksichtigung vorhandener oder geplanter Schutzmaßnahmen."],
    [5,"Was ist Nettorisiko?","Das nach wirksamen Maßnahmen verbleibende Restrisiko."],
    [5,"Nenne vier Behandlungsoptionen.","Vermeiden, reduzieren, übertragen/teilen oder akzeptieren."],
    [6,"Was muss ein Notfallplan mindestens klären?","Scope, Aktivierung, Rollen, Kontakte, Alarmierung, Ressourcen, Wiederanlauf, Notbetrieb, Rückkehr und Deaktivierung."],
    [6,"Warum werden Notfallpläne geübt?","Um Annahmen, Handlungsfähigkeit, Zeitziele, Ressourcen und Schnittstellen realistisch zu prüfen und Lücken zu finden."],
    [6,"Was ist der Unterschied zwischen Korrektur und Korrekturmaßnahme?","Korrektur beseitigt den aktuellen Fehler; Korrekturmaßnahme beseitigt dessen Ursache und verhindert Wiederholung."],
    [6,"Was prüft ein internes Audit?","Ob Anforderungen erfüllt, Prozesse umgesetzt und das BCMS wirksam sind – unabhängig und nach definierten Kriterien."],
    [6,"Was bewertet das Managementreview?","Eignung, Angemessenheit, Wirksamkeit, Leistung, Veränderungen, Auditergebnisse, Ressourcen und Verbesserungsbedarf."],
    [7,"Wie unterscheidet sich eine Störung vom Notfall?","Eine Störung kann die AAO mit normalen Mitteln bewältigen; ein Notfall unterbricht zeitkritische Prozesse und benötigt die BAO."],
    [7,"Wie unterscheidet sich eine Krise vom Notfall?","Bei einer Krise reichen vorbereitete Pläne oder Befugnisse nicht aus; strategische Ad-hoc-Entscheidungen sind nötig."],
    [7,"Wofür steht FOR-DEC?","Facts, Options, Risks & Benefits, Decision, Execution, Check."],
    [7,"Wie muss Krisenkommunikation sein?","Früh, wahr, einheitlich, koordiniert und zielgruppenorientiert."],
    [7,"Was ist ein Single Point of Truth?","Eine zentral abgestimmte, autorisierte Informationsquelle, die widersprüchliche Aussagen und Gerüchte reduziert."],
    [7,"Wann kann die BAO aufgelöst werden?","Wenn BAO-pflichtige Ereignisse bewältigt sind, die AAO Restprobleme übernehmen kann und keine erneute Verschärfung zu erwarten ist."],
    [7,"Was passiert nach einer Krise?","Strukturierte Nachbereitung, Abschlussbericht, Lessons Learned, Korrekturmaßnahmen und Aktualisierung des BCMS."]
  ].map((x,i)=>({id:i+1,chapter:x[0],q:x[1],a:x[2]})),

  questions: [
    [1,"Welche Aussage beschreibt BCM am besten?",["Nur technische Datensicherung","Managementprozess zur Aufrechterhaltung zeitkritischer Leistungen","Ausschließlich Krisenkommunikation","Versicherung gegen Betriebsunterbrechung"],1,"BCM ist geschäftsorientiert und umfasst Organisation, Menschen und Technik."],
    [1,"Welche Beziehung ist korrekt?",["RTO muss größer als MTPD sein","RPO beschreibt Personalbedarf","RTO sollte kleiner als MTPD sein","MBCO ist die Schadenshöhe"],2,"Der Notbetrieb muss vor der maximal tolerierbaren Grenze erreicht werden."],
    [1,"Welcher Standard ist international zertifizierbar?",["BSI 200-4","ISO 22301","ISO 22313","BCI GPG"],1,"ISO 22301 enthält zertifizierbare Muss-Anforderungen."],
    [1,"Was ist das MBCO?",["Maximaler Datenverlust","Minimales Notbetriebsniveau","Maximale Schadenssumme","Auditintervall"],1,"MBCO legt die minimal erforderliche Leistung im Notbetrieb fest."],
    [2,"Welche Dimension gehört nicht zur Scope-Definition?",["Organisatorisch","Geografisch","Logisch","Biografisch"],3,"Der Scope wird organisatorisch, geografisch und logisch abgegrenzt."],
    [2,"Was ist bei Ausschlüssen entscheidend?",["Sie bleiben geheim","Sie werden begründet und gefährden keine kritischen Abhängigkeiten","Sie betreffen immer IT","Sie benötigen keine Dokumentation"],1,"Unbegründete oder widersprüchliche Ausschlüsse machen den Scope unbrauchbar."],
    [2,"Wer ist bei NGA ein externer Stakeholder?",["Ralf Dickel","Franz Fischer","IT-4all","Carl Enders"],2,"IT-4all betreibt als externer Dienstleister die Produktions-IT."],
    [2,"Wer gibt die BCM-Leitlinie frei?",["Jeder Mitarbeitende","Nur der IT-Leiter","Die Institutionsleitung","Der Lieferant"],2,"Die Leitlinie ist eine verbindliche Managemententscheidung."],
    [3,"Welche Verantwortung bleibt bei der Leitung?",["Nur die Protokollführung","Gesamtverantwortung für das BCMS","Technische Serveradministration","Jede operative Aufgabe"],1,"Gesamtverantwortung und Ressourcenentscheidung sind nicht delegierbar."],
    [3,"Welche RASCI-Rolle darf es pro Aufgabe nur einmal geben?",["Responsible","Accountable","Supportive","Informed"],1,"Ein eindeutiges A verhindert konkurrierende Rechenschaftspflichten."],
    [3,"Welche Aussage zum BCB ist richtig?",["Er ist immer Krisenstabsleiter","Er arbeitet nur an Backups","Er steuert Methoden und berichtet an die Leitung","Er ersetzt alle Fachbereiche"],2,"Der BCB ist zentrale Vorsorge- und Methodenrolle."],
    [3,"Was ist die BAO?",["Normale Linienorganisation","Besondere Struktur für schnelle Bewältigung","Externe Auditfirma","Backup-Archiv"],1,"Die BAO wird für Notfälle und Krisen aktiviert."],
    [3,"Welche Formulierung ist ein SMART-Ziel?",["BCM soll besser werden","Bis 30.09. sind 100 % der Scope-Prozesse mit freigegebtem Notfallplan versehen","Wir üben manchmal","IT soll sicher sein"],1,"Das Ziel ist spezifisch, messbar und terminiert."],
    [4,"Was untersucht eine BIA primär?",["Ursachen eines Angriffs","Auswirkungen eines Ausfalls im Zeitverlauf","Bewerberqualifikation","Versicherungsprämien"],1,"Die Ursache wird für die BIA grundsätzlich ausgeblendet."],
    [4,"Was untersucht die Risikoanalyse primär?",["Nur Umsatz","Ursachen, Schwachstellen und Wahrscheinlichkeit","Nur MTPD","Urlaubsplanung"],1,"Sie ergänzt die BIA um Gefährdungs- und Wahrscheinlichkeitsbetrachtung."],
    [4,"Warum nutzt man einen BIA-Vorfilter?",["Um alle Prozesse detaillierter zu analysieren","Um potenziell zeitkritische Prozesse einzugrenzen","Um Audits abzuschaffen","Um den Scope zu vergrößern"],1,"Der Vorfilter konzentriert Ressourcen auf relevante Prozesse."],
    [4,"Welche Betrachtung nutzt die BIA-Schadensanalyse?",["Netto nach allen Maßnahmen","Brutto ohne bestehende Schutzmaßnahmen","Nur Versicherungswerte","Nur IT-Schäden"],1,"So wird die inhärente Kritikalität vergleichbar."],
    [4,"NGA produziert 6 PKW pro Stunde à 20.000 €. Schaden bei 4 Stunden Totalausfall?",["120.000 €","240.000 €","480.000 €","960.000 €"],2,"6 × 20.000 € × 4 = 480.000 €."],
    [4,"Welche Reihenfolge ist sinnvoll?",["Strategie vor BIA","Häufig BIA vor Risikoanalyse","Audit vor Scope","Krise vor Governance"],1,"Die BIA liefert Schutzbedarf und Priorität als Input."],
    [5,"Was ist eine Schwachstelle?",["Ein potenzieller Angreifer","Eine ausnutzbare Verwundbarkeit","Die Schadenssumme","Ein Auditbericht"],1,"Beispiel: fehlende Redundanz bei einem Lieferanten."],
    [5,"Welche Option ist keine Risikobehandlung?",["Vermeiden","Reduzieren","Übertragen","Ignorieren ohne Entscheidung"],3,"Akzeptanz ist möglich, muss aber bewusst und dokumentiert sein."],
    [5,"Was ist das Restrisiko?",["Risiko vor Maßnahmen","Risiko nach wirksamen Maßnahmen","Risiko ohne Auswirkung","Nur das IT-Risiko"],1,"Restrisiko wird akzeptiert, weiter behandelt oder übertragen."],
    [5,"Welche Maßnahme passt zum Lieferantenausfall?",["Single Sourcing","Dual Sourcing und Sicherheitsbestand","Weniger Verträge","Keine Überwachung"],1,"Alternative Bezugsquellen reduzieren Abhängigkeit."],
    [5,"Was muss eine Maßnahme zusätzlich haben?",["Nur einen guten Namen","Owner, Termin und Wirksamkeitsprüfung","Nur Budget","Nur einen externen Berater"],1,"Sonst ist die Umsetzung nicht steuerbar."],
    [6,"Was folgt unmittelbar aus BIA und Risikoanalyse?",["Nur Werbung","BC-Strategien und Notfallplanung","Gehaltsabrechnung","Abschaffung der BAO"],1,"Strategien müssen Zeitziele und relevante Szenarien erfüllen."],
    [6,"Was gehört in einen Notfallplan?",["Nur Telefonnummern","Aktivierung, Rollen, Schritte, Notbetrieb und Rückkehr","Nur die Risikoformel","Nur Organigramm"],1,"Ein Plan muss im Ereignis direkt handlungsfähig machen."],
    [6,"Wozu dient ein Tabletop?",["Technische Vollabschaltung","Diskussionsbasierte Prüfung von Rollen, Entscheidungen und Plänen","Personalauswahl","Scope-Audit"],1,"Tabletops testen Abläufe ohne realen Eingriff in Systeme."],
    [6,"Was ist eine Korrekturmaßnahme?",["Beseitigung der Ursache einer Abweichung","Verbergen eines Fehlers","Nur eine Sofortreparatur","Eine neue Bedrohung"],0,"Sie soll die Wiederholung verhindern."],
    [6,"Wer sollte interne Audits durchführen?",["Möglichst unabhängig vom geprüften Bereich","Immer der Prozessbearbeiter selbst","Nur Lieferanten","Niemand"],0,"Objektivität und Unparteilichkeit sind zentral."],
    [6,"Was schließt den PDCA-Kreis?",["Act: Korrektur und Verbesserung","Plan: nur Ziele","Do: nur Technik","Check: ohne Nachweise"],0,"Aus Check-Ergebnissen werden Verbesserungen umgesetzt."],
    [7,"Wann reicht die AAO?",["Bei jeder Krise","Bei einer beherrschbaren Störung im Regelbetrieb","Nie","Nur bei Ransomware"],1,"Die AAO bewältigt Ereignisse mit normalen Mitteln und Befugnissen."],
    [7,"Wann liegt eher eine Krise vor?",["Plan greift vollständig","Vorhandene Pläne und Befugnisse reichen nicht aus","Drucker ist leer","Kurze Routineunterbrechung"],1,"Die Krise verlangt strategische Ad-hoc-Entscheidungen."],
    [7,"Was kommt bei FOR-DEC nach Options?",["Execution","Risks & Benefits","Check","Facts"],1,"Optionen werden vor der Entscheidung verglichen."],
    [7,"Was ist gute Krisenkommunikation?",["Spät und spekulativ","Früh, wahr, einheitlich und zielgruppenorientiert","Nur intern","Von allen gleichzeitig"],1,"Koordination und ein Single Point of Truth schützen Vertrauen."],
    [7,"Welche Ebene setzt operative Maßnahmen um?",["Strategische Ebene","Notfallbewältigungsteams","Aufsichtsrat allein","Presse"],1,"Operative Teams führen die beschlossenen Maßnahmen aus."],
    [7,"Was gehört zur Nachbereitung?",["Schuldige öffentlich suchen","Lessons Learned und Maßnahmen ableiten","Dokumente löschen","BAO dauerhaft aktiv lassen"],1,"Die Aufarbeitung soll konstruktiv und prozessorientiert sein."],
    [2,"Welcher NGA-Prozess ist laut Auftrag ausdrücklich im Scope?",["Marketing","Gehaltsabrechnung","Recruiting","Vertrieb Nord"],0,"Der Mutterkonzern fordert das BCMS für Produktion und Marketing."],
    [2,"Welche NGA-Abhängigkeit ist für die Produktion besonders kritisch?",["Zwei Lieferanten decken je 50 %; weitere gibt es nicht","Viele gleichwertige Lieferanten","Marketingradio","Gehaltsabrechnung"],0,"BuCa und ACT sind die einzigen Materiallieferanten."],
    [3,"Wer eignet sich als dedizierter IT-Ansprechpartner bei NGA?",["Franz Fischer mit Elsa Dohn für Produktions-IT","Nur der CEO","Der Vertrieb","Ein Kunde"],0,"Die Rollen decken Büro- und Produktions-IT ab."],
    [4,"Pro Stunde passieren nur 3 von 6 PKW die QS. Was zeigt das?",["Keine Abhängigkeit","Ein möglicher Engpass und Qualitäts-/Reputationswirkung","Marketingproblem","RPO ist null"],1,"Die Qualitätsprüfung beeinflusst sicheren Durchsatz und Schadenswirkung."],
    [5,"Welche NGA-Ressource passt zum Szenario Ausfall Gebäude?",["Fertigungshallen Brandenburg","Nur Website","Werbeslogan","Liefervertrag allein"],0,"Der Produktionsstandort ist eine zentrale physische Ressource."],
    [7,"Warum ist die geplante Chemiefabrik neben NGA relevant?",["Sie ist eine externe Gefährdung im Umfeld","Sie ersetzt IT-4all","Sie senkt automatisch MTPD","Sie ist ein Kunde"],0,"Standortumfeld und externe Gefährdungen gehören in die Risikobetrachtung."]
  ].map((x,i)=>({id:i+1,chapter:x[0],q:x[1],options:x[2],correct:x[3],explanation:x[4]})),

  exercises: [
    { id:1, original:true, title:"Anwendungsbereich des BCMS", pages:"531–534", duration:30, chapter:2,
      task:"1. Alle Prozesse von NGA bestimmen.\n2. Interessierte Parteien und Anforderungen identifizieren.\n3. Den BCMS-Scope aus Auftrag und Prozessen ableiten.\n4. Ausschlüsse nachvollziehbar begründen.",
      hints:["Nutze organisatorische, geografische und logische Scope-Dimensionen.","Unterscheide Prozess im Scope von notwendiger Abhängigkeit.","Der Mutterkonzern fordert ausdrücklich Produktion und Marketing."],
      solution:"Prozesse: Materialplanung/Einkauf, Zulieferung, Montage, Qualitätssicherung, Vertrieb, Auslieferung/Verkauf, Marketing und IT. Stakeholder: Leitung, Mitarbeitende, Luxury Automotive, Kunden, BuCa, ACT, IT-4all und Behörden. Scope-Kern: Produktions- und Marketingprozess an den Standorten Essen und Brandenburg inklusive notwendiger IT-, Lieferanten- und QS-Abhängigkeiten. Vertrieb, Verkaufsabwicklung und Auslieferung können gemäß Musterlösung ausgeschlossen werden; die Schnittstellen müssen trotzdem dokumentiert sein." },
    { id:2, original:true, title:"Rollen und Verantwortlichkeiten", pages:"535–537", duration:30, chapter:3,
      task:"1. Stellenausschreibung für den Business Continuity Manager erstellen.\n2. BCM-Governance für NGA entwerfen.\n3. Rollen, Verantwortlichkeiten, Berichts- und Meldewege festlegen.\n4. Dedizierten IT-Ansprechpartner benennen.",
      hints:["Trenne Vorsorgeorganisation und BAO.","Die Leitung bleibt Accountable.","Der BCB sollte direkt an den CEO berichten."],
      solution:"CEO Carl Enders: Gesamtverantwortung, Freigaben und Ressourcen. BCM-Manager: Konzeption, BIA/Risiko-Methodik, Übungen, Monitoring und direktes Reporting. Dezentrale Koordinatoren: Einkauf, Produktion, Marketing und IT. Krisenmanager/Stabsleitung: Führung im Ereignis. Franz Fischer ist zentraler IT-Ansprechpartner; Elsa Dohn koordiniert Produktions-IT und IT-4all. Meldeweg im Regelbetrieb: Koordinatoren → BCB → CEO. Im Ereignis: Meldestelle → Stabsleitung/BAO → strategische Leitung; der BCB berät." },
    { id:3, original:true, title:"Business-Continuity-Ziele", pages:"538–539", duration:30, chapter:3,
      task:"Strategische und taktische BCM-Ziele für NGA formulieren. Ziele müssen auf Scope, Stakeholder-Anforderungen und SMART basieren und dokumentierbar sein.",
      hints:["Strategisch = langfristiger Systemzustand.","Taktisch/operativ = konkreter Prozess, Messwert und Termin.","Verknüpfe Ziele mit Produktion, Marketing und Lieferkette."],
      solution:"Strategisch: Bis Ende des übernächsten Jahres betreibt NGA für Produktion und Marketing ein wirksames BCMS nach BSI 200-4, das die Anforderungen des Mutterkonzerns erfüllt. Taktisch: Bis 30.09. sind alle Scope-Prozesse bewertet; bis 31.10. besitzen alle zeitkritischen Prozesse freigegebene Notfallpläne; jährlich findet mindestens eine bereichsübergreifende Übung statt; alle relevanten Mitarbeitenden absolvieren bis Jahresende Awareness-Training. Für jedes Ziel: Owner, KPI, Termin, Ressourcen und Review festlegen." },
    { id:4, original:true, title:"Awarenessprogramm", pages:"540–541", duration:30, chapter:3,
      task:"Ein Awarenessprogramm für NGA konzipieren: Zielgruppen, Zeitpunkte, Formate, Inhalte und Umfang bestimmen. Ausgangslage: BCM wird neu eingeführt.",
      hints:["Nicht jede Zielgruppe braucht dieselbe Tiefe.","Onboarding plus regelmäßige Wiederholung.","Wirksamkeit muss messbar sein."],
      solution:"Alle Mitarbeitenden: BCM-Grundidee, Meldewege, eigenes Verhalten und Ansprechpartner. Scope-Bereiche: Rollen, Pläne und Übungen. Führungskräfte: Entscheidungen und Eskalation. BAO/Stab: intensive Szenario- und Stabstrainings. Formate: Kick-off, E-Learning, Kurzimpulse, Poster/Intranet, Phishing-/Alarmierungsübungen und jährliches Tabletop. KPIs: Teilnahmequote, Wissenstest, Meldezeit und Übungserkenntnisse." },
    { id:5, original:true, title:"Business Impact Analyse", pages:"542–544", duration:60, chapter:4,
      task:"1. Die vorhandene BIA-Verfahrensanweisung auf Vollständigkeit prüfen.\n2. BIA für Produktions- und Marketingprozesse durchführen. NGA produziert 6 PKW/h à 20.000 €, 8 h/Tag, 5 Tage/Woche. Nur 3 PKW/h durchlaufen die QS.",
      hints:["4 h Produktionsausfall = 480.000 € direkter Wertverlust.","Bewerte Schaden über mehrere Zeitfenster.","Definiere MTPD, RTO, MBCO, RPO, Abhängigkeiten und Ressourcen."],
      solution:"Die Methode sollte Scope, Rollen, Auswirkungsstufen, Zeitfenster, besondere Termine, Freigabe, Review und alle sieben BIA-Schritte enthalten. Produktion ist wegen 120.000 € Wertschöpfung pro Stunde und direkter Lieferwirkung hoch zeitkritisch. Material, Band, Personal, Produktions-IT, Hallen, Strom und QS sind zentrale Ressourcen. Marketing hat typischerweise längere Toleranzzeiten, kann bei Kampagnen oder Krisenkommunikation aber zeitkritisch werden. Werte müssen als begründete Annahmen dokumentiert und durch Owner freigegeben werden." },
    { id:6, original:true, title:"BCM-Risikomanagement", pages:"545–547", duration:30, chapter:5,
      task:"Für die Montage und ihre Ressourcen vier Szenarien brutto bewerten: Ausfall IT, Gebäude, Mitarbeitende und Zulieferer. Je Szenario Bedrohung, Schwachstelle, Risiko, Wirkung, Wahrscheinlichkeit, Stufe und Maßnahme bestimmen.",
      hints:["Brutto = noch keine Maßnahmen anrechnen.","NGA-Skala: finanziell niedrig bis 400.000 €, mittel ab 400.000 €, hoch ab 2 Mio. €, sehr hoch ab 4 Mio. €.","Eine Bedrohung ist nicht dasselbe wie das resultierende Risiko."],
      solution:"Beispiel Lieferant: Bedrohung = Insolvenz/Streik; Schwachstelle = nur zwei 50-%-Lieferanten ohne dritte Quelle; Risiko = Materialmangel stoppt Band; Behandlung = Sicherheitsbestand, Vertragsanforderungen, Lieferanten-BCM und zusätzliche Quelle. IT: Cyberangriff plus Abhängigkeit von IT-4all → Segmentierung, Wiederanlaufplan, SLA und Tests. Gebäude: Brand/Chemieunfall plus einziger Produktionsstandort → Ausweichkapazität und Evakuierungs-/Wiederanlaufplanung. Personal: Pandemie/Streik plus Schlüsselwissen → Cross-Training, Vertretung und Mindestbesetzung." },
    { id:7, original:false, title:"Notfallplan-Werkstatt", pages:"548–563", duration:45, chapter:6,
      task:"Erstelle für den NGA-Produktionsbereich einen einsatzfähigen Notfallplan für den Ausfall der Produktions-IT. Nutze Aktivierung, Rollen, Alarmierung, Notbetrieb, Wiederanlauf und Rückführung.",
      hints:["Schreibe Handlungen, keine Absichtserklärungen.","Berücksichtige Ausfall der normalen Kommunikationswege.","Jeder Schritt braucht Owner und Auslöser."],
      solution:"Planstruktur: Scope und kritische Prozesse; Planverantwortlicher und Stellvertretung; Meldekriterien; Kontaktliste IT-4all/Elsa Dohn/Franz Fischer; Sofortmaßnahmen zur Begrenzung; Aktivierung manueller Verfahren beziehungsweise sicherer Produktionsstopp; priorisierte Wiederherstellung; Validierung der Daten; Entscheidung zur Wiederaufnahme; Rückführung, Protokoll, Lessons Learned und Planupdate." },
    { id:8, original:false, title:"Tabletop & Audit", pages:"368–438", duration:40, chapter:6,
      task:"Plane eine Tabletop-Übung für einen Zuliefererausfall und leite anschließend Auditfragen sowie Korrekturmaßnahmen ab.",
      hints:["Definiere Lernziele, Teilnehmer, Injects und Erfolgskriterien.","Trenne Beobachtung, Nichtkonformität, Korrektur und Ursache.","Prüfe auch Entscheidungs- und Meldezeiten."],
      solution:"Szenario: ACT meldet 72 Stunden Lieferstopp, BuCa kann kurzfristig nicht erhöhen. Teilnehmer: Einkauf, Produktion, BCB, Leitung, Kommunikation und IT. Injects: Medienanfrage, Kundeneskalation, Qualitätsproblem bei Ersatzmaterial. KPIs: Aktivierungszeit, Entscheidungszeit, Vollständigkeit des Lagebilds. Auditfragen prüfen Planfreigabe, Lieferantenanforderungen, Bestandsdaten, Rollen und Übungsnachweise. Ursachenmaßnahmen erhalten Owner, Termin und Wirksamkeitskontrolle." },
    { id:9, original:false, title:"Krisenstab mit FOR-DEC", pages:"466–483", duration:45, chapter:7,
      task:"NGA wird durch Ransomware getroffen; Produktions- und Büro-IT sind gestört. Wende FOR-DEC an und entwirf die erste interne und externe Kommunikation.",
      hints:["Facts sind keine Vermutungen.","Bewerte Optionen vor der Entscheidung.","Kommunikation nennt bestätigte Fakten, Handlungen und nächsten Updatezeitpunkt."],
      solution:"Facts: bekannte Systeme, Produktionswirkung, Zeitpunkt, Backupstatus und möglicher Datenabfluss. Options: isolieren und wiederherstellen; Teilbetrieb; externe Forensik; keine vorschnelle Zahlung. Risiken/Nutzen je Option bewerten. Decision mit Leitungskompetenz, Execution als Wer-macht-was-bis-wann-Liste, Check anhand Wiederanlauf, Ausbreitung und Kommunikation. Intern klare Handlungsanweisung und Meldekanal; extern bestätigte Fakten, Schutzmaßnahmen, Ansprechpartner und Updatezeitpunkt." },
    { id:10, original:false, title:"Kompletter Transferfall", pages:"gesamtes Modul", duration:90, chapter:7,
      task:"Bearbeite NGA vom Scope bis zur Verbesserung: Scope, Stakeholder, Governance, SMART-Ziele, BIA-Prioritäten, Top-Risiken, Strategie, Plan, Übung und KPI in einem konsistenten Konzept.",
      hints:["Jedes Ergebnis ist Input für den nächsten Schritt.","Widersprüche zwischen Scope, RTO und Maßnahmen vermeiden.","Begründe Annahmen explizit."],
      solution:"Bewertet wird die Kette: klarer Scope → eindeutige Rollen → nachvollziehbare BIA → Risiken passend zu kritischen Ressourcen → Strategien innerhalb der Zeitziele → ausführbare Pläne → realistische Übungen → messbare Leistung → Korrektur und Managementreview. Nutze die Musterlösungen der Einzelübungen als Bausteine und prüfe am Ende alle Schnittstellen." }
  ],

  glossary: [
    ["AAO","Allgemeine Aufbauorganisation: normale Linienorganisation im Regelbetrieb."], ["BAO","Besondere Aufbauorganisation für schnelle Notfall- und Krisenbewältigung."],
    ["BC","Business Continuity: Fähigkeit zur Fortführung priorisierter Leistungen."], ["BCB","BC-Beauftragter; zentrale Rolle zur Konzeption und Steuerung des BCMS."],
    ["BCI GPG","Good Practice Guidelines des Business Continuity Institute."], ["BCM","Managementprozess zur Sicherung der Geschäftskontinuität."],
    ["BCMS","Managementsystem mit Leitlinien, Rollen, Prozessen und Ressourcen für BCM."], ["BIA","Business Impact Analyse: untersucht Auswirkungen von Ausfällen über die Zeit."],
    ["BIA-Vorfilter","Vorauswahl potenziell zeitkritischer Prozesse vor der Detailanalyse."], ["Bruttorisiko","Risiko ohne Berücksichtigung bestehender Schutzmaßnahmen."],
    ["Business-Continuity-Plan","Dokumentierte Verfahren zur Fortführung und Wiederherstellung."], ["Consulted","RASCI-Rolle, die vor einer Entscheidung fachlich konsultiert wird."],
    ["FOR-DEC","Entscheidungsmethode: Facts, Options, Risks & Benefits, Decision, Execution, Check."], ["Incident","Ereignis, das Leistungen beeinträchtigen oder eskalieren kann."],
    ["Informed","RASCI-Rolle, die über Ergebnis oder Fortschritt informiert wird."], ["ISO 22301","International zertifizierbare Anforderungsnorm für BCMS."],
    ["ISO 22313","Leitfaden zur Anwendung der ISO 22301."], ["KPI","Key Performance Indicator: messbare Leistungskennzahl."],
    ["Krise","Außergewöhnliche Lage, in der vorhandene Pläne oder Befugnisse nicht ausreichen."], ["Krisenstab","Taktisch-strategisches Führungsgremium der BAO."],
    ["MBCO","Minimum Business Continuity Objective: minimales Notbetriebsniveau."], ["MTPD","Maximum Tolerable Period of Disruption: äußerste tolerierbare Ausfallgrenze."],
    ["Nettorisiko","Nach Maßnahmen verbleibendes Restrisiko."], ["Nichtkonformität","Nichterfüllung einer festgelegten Anforderung."],
    ["Notbetrieb","Reduziertes, kontrolliertes Leistungsniveau nach einer Unterbrechung."], ["Notfall","Erhebliche Unterbrechung zeitkritischer Prozesse, die eine BAO und Pläne benötigt."],
    ["PDCA","Plan-Do-Check-Act: Zyklus kontinuierlicher Verbesserung."], ["Prozess-Owner","Person mit fachlicher Verantwortung für einen Geschäftsprozess."],
    ["RASCI","Methode zur eindeutigen Zuordnung von Ausführung, Verantwortung und Beteiligung."], ["Recovery","Vollständige Wiederherstellung des Normalbetriebs nach dem Notbetrieb."],
    ["Responsible","RASCI-Rolle, die eine Aufgabe praktisch ausführt."], ["Risikobehandlung","Vermeiden, reduzieren, übertragen/teilen oder akzeptieren eines Risikos."],
    ["RPO","Recovery Point Objective: maximal tolerierbarer Datenverlust in Zeit."], ["RTO","Recovery Time Objective: Zielzeit bis zum Notbetrieb."],
    ["Scope","Organisatorischer, geografischer und logischer Geltungsbereich des BCMS."], ["Stakeholder","Interessierte Partei, die BCM beeinflusst oder davon beeinflusst wird."],
    ["Störung","Beeinträchtigung, die von der AAO mit normalen Mitteln beherrscht wird."], ["Tabletop","Diskussionsbasierte Übung von Rollen, Entscheidungen und Abläufen."],
    ["Wiederanlauf","Aufnahme eines definierten Mindestbetriebs nach einem Ausfall."], ["Wirksamkeit","Grad, in dem geplante Aktivitäten und Ergebnisse tatsächlich erreicht werden."]
  ].map(x=>({term:x[0],definition:x[1]})),

  nga: {
    mission:"Luxury Automotive S.E. fordert bis Ende des übernächsten Jahres ein funktionsfähiges BCMS für Produktions- und Marketingprozess.",
    locations:["Essen: Geschäftsführung, Personal, Einkauf, Vertrieb, Marketing, Büro-IT und eigener Serverraum","Brandenburg: Fertigungshallen und Produktions-IT durch IT-4all","Umfeld Brandenburg: geplante Chemiefabrik ab 2026"],
    processes:["Materialplanung","Einkauf","Zulieferung","Montage am Band","Qualitätssicherung","Vertrieb","Auslieferung/Verkauf","Marketing","IT & Informationsverarbeitung"],
    suppliers:["Budapest Controls (BuCa), Ungarn – 50 % der Materialien","Automotive Components Turin (ACT), Italien – 50 %","Keine weiteren Zulieferer; gleiches Portfolio"],
    people:[
      ["Carl Enders","CEO"],["Helene Dorfer","Personal"],["Stefan Dribek","Einkauf"],["Ivonne Turner","Vertrieb"],["Ralf Dickel","Produktion"],["Oskar David","Marketing"],["Franz Fischer","IT"],["Elsa Dohn","Produktions-IT"],["Petra List","Büro-IT"],["Stefan Dietrich","Qualitätsmanagement"],["Guido Lampe","Produktionssteuerung"],["Tea Esch","ACT"],["Karl Klamm","BuCa"]
    ],
    numbers:["6 PKW pro Stunde","20.000 € Wert pro PKW","8 Stunden pro Tag","5 Tage pro Woche","Nur 3 PKW pro Stunde durchlaufen die Stichproben-QS","4 Stunden Produktionsausfall = 480.000 € direkter Wert"]
  }
};

/* Im Modulplan vorgesehene Kapitel, deren Originalfolien in der gelieferten Sammel-PDF noch fehlen. */
BCSM_DATA.chapters.push(
  { id:8, title:"Zertifizierung & Audit", short:"Auditprogramm, Nachweise, Nichtkonformitäten und Zertifizierungsreife", pages:"Prüfungsergänzung", color:"#cbd6ea", minutes:55, supplemental:true,
    objectives:["Audit und Zertifizierung unterscheiden","Auditnachweise und Nichtkonformitäten bewerten","Ein BCMS auf Zertifizierungsreife prüfen"],
    sections:[
      {title:"Auditprinzip",body:"Ein Audit ist ein systematischer, unabhängiger und dokumentierter Prozess. Es sammelt objektive Nachweise und bewertet sie gegen festgelegte Kriterien.",bullets:["Kriterien können ISO 22301, interne Leitlinien oder Verträge sein","Scope, Ziel, Kriterien und Methode vorab festlegen","Unabhängigkeit und Kompetenz der Auditoren sichern"]},
      {title:"Intern versus Zertifizierung",body:"Interne Audits dienen der eigenen Steuerung und Verbesserung. Eine unabhängige Zertifizierungsstelle bewertet die Konformität mit ISO 22301 und erteilt bei Erfolg ein zeitlich überwachtes Zertifikat.",bullets:["Stufe 1: Dokumentation und Bereitschaft","Stufe 2: Umsetzung und Wirksamkeit in der Praxis","Überwachungsaudits und spätere Rezertifizierung"]},
      {title:"Feststellungen und Maßnahmen",body:"Feststellungen werden mit objektiven Nachweisen belegt. Nichtkonformitäten brauchen Ursachenanalyse, Korrekturmaßnahme, Verantwortliche, Termin und Wirksamkeitsprüfung.",bullets:["Keine Schuldzuweisung, sondern Systemursache","Beobachtung ist nicht automatisch Nichtkonformität","Wesentliche Abweichungen können Zertifizierung verhindern"],takeaway:"Audit fragt nicht nur: Ist ein Dokument vorhanden? Sondern: Wird es angewendet und wirkt es?"},
      {title:"Auditbereitschaft",body:"Zertifizierungsreife entsteht durch konsistenten Scope, freigegebene Dokumentation, Kompetenznachweise, durchgeführte BIA und Risikoanalyse, getestete Pläne, interne Audits sowie Managementbewertung.",bullets:["Nachweise müssen nachvollziehbar, aktuell und gelenkt sein","Interviews und Stichproben müssen Dokumente bestätigen","Offene Maßnahmen transparent steuern"]}
    ]},
  { id:9, title:"IT Service Continuity Management", short:"IT-Abhängigkeiten, Recovery-Strategien, RTO/RPO und Disaster Recovery", pages:"Prüfungsergänzung", color:"#b8d9df", minutes:65, supplemental:true,
    objectives:["ITSCM im BCM einordnen","IT-Zeitziele aus Geschäftsanforderungen ableiten","Recovery-Strategien und Tests begründen"],
    sections:[
      {title:"ITSCM im BCM",body:"ITSCM stellt sicher, dass IT-Services die Kontinuitätsanforderungen der Geschäftsprozesse erfüllen. Es ist ein Teil des BCM und kein Ersatz für das gesamte BCMS.",bullets:["Geschäftsprozess bestimmt Priorität","Service-Komponenten werden den Prozessen zugeordnet","IT-RTO und IT-RPO müssen die fachlichen Zeitziele unterstützen"]},
      {title:"Service-Abhängigkeiten",body:"Ein IT-Service besteht aus Anwendungen, Daten, Infrastruktur, Netzen, Identitäten, Personal und externen Providern. Die schwächste kritische Komponente kann den gesamten Wiederanlauf blockieren.",bullets:["Abhängigkeitskarte und Service-Owner","Single Points of Failure erkennen","Provider-SLAs gegen BCM-Ziele prüfen"]},
      {title:"Recovery-Strategien",body:"Strategien werden nach Zeitvorgaben, Risiken, Kosten und Machbarkeit gewählt.",bullets:["Redundanz und Hochverfügbarkeit","Backup, Replikation und unveränderbare Kopien","Cold-, Warm- oder Hot-Standby","Cloud- oder Ausweichrechenzentrum","Manuelle Ersatzverfahren und priorisierter Wiederanlauf"]},
      {title:"Tests und Wiederanlauf",body:"Ein Backup ist erst wertvoll, wenn Wiederherstellung, Integrität und benötigte Zeit nachgewiesen sind. IT-Wiederanlauf wird technisch und mit den Fachbereichen Ende-zu-Ende getestet.",bullets:["Runbooks und Reihenfolge der Services","DNS, Identitäten, Netze und Schnittstellen mitprüfen","RTO/RPO tatsächlich messen","Erkenntnisse in Architektur und Pläne zurückführen"],takeaway:"Backup ≠ Business Continuity. Entscheidend ist die nachgewiesene Wiederherstellung des benötigten Services."}
    ]}
);

BCSM_DATA.flashcards.push(...[
  [8,"Was ist ein Audit?","Ein systematischer, unabhängiger und dokumentierter Prozess zur Gewinnung objektiver Nachweise und Bewertung gegen Auditkriterien."],
  [8,"Was unterscheidet internes Audit und Zertifizierung?","Das interne Audit steuert und verbessert das eigene BCMS; die externe Zertifizierungsstelle bestätigt Konformität mit ISO 22301."],
  [8,"Was braucht eine Nichtkonformität nach der Sofortkorrektur?","Ursachenanalyse, Korrekturmaßnahme, Owner, Termin und Wirksamkeitsprüfung."],
  [8,"Welche Nachweise zeigen Zertifizierungsreife?","Konsistenter Scope, gelenkte Dokumente, Kompetenz, BIA/Risiko, getestete Pläne, interne Audits und Managementreview."],
  [9,"Wie verhält sich ITSCM zu BCM?","ITSCM ist der Teil des BCM, der die Kontinuität der benötigten IT-Services sicherstellt."],
  [9,"Wer bestimmt die IT-Recovery-Ziele?","Die Anforderungen der unterstützten Geschäftsprozesse aus der BIA; IT setzt sie technisch um."],
  [9,"Warum reicht ein Backup nicht?","Weil Verfügbarkeit, Integrität, Wiederherstellungsdauer und vollständige Service-Abhängigkeiten erst getestet werden müssen."],
  [9,"Was ist ein Hot-Standby?","Eine nahezu sofort verfügbare, synchron oder sehr aktuell gehaltene Ausweichumgebung mit hohen Kosten."],
  [9,"Was ist ein Single Point of Failure?","Eine einzelne Komponente, deren Ausfall den gesamten Service unterbricht."],
  [9,"Was prüft ein Ende-zu-Ende-Recovery-Test?","Ob der Geschäftsprozess mit Anwendung, Daten, Identitäten, Netz, Schnittstellen und Personal innerhalb der Ziele funktioniert."]
].map((x,i)=>({id:BCSM_DATA.flashcards.length+i+1,chapter:x[0],q:x[1],a:x[2]})));

BCSM_DATA.questions.push(...[
  [8,"Was ist ein zentrales Auditprinzip?",["Abhängigkeit vom geprüften Bereich","Objektive Nachweise und Unabhängigkeit","Nur Dokumentenprüfung","Keine Kriterien"],1,"Audits bewerten objektive Nachweise gegen definierte Kriterien."],
  [8,"Was folgt auf eine Nichtkonformität?",["Nur umbenennen","Ursache analysieren und Wirksamkeit der Maßnahme prüfen","Nachweis löschen","Audit abbrechen"],1,"Korrekturmaßnahmen sollen die Ursache beseitigen und Wiederholung verhindern."],
  [8,"Welche Elemente stützen Zertifizierungsreife?",["BIA und Risikoanalyse","Interne Audits","Managementreview","Getestete Notfallpläne"],[0,1,2,3],"Zertifizierungsreife zeigt sich in einem vollständig betriebenen und nachgewiesenen System."],
  [9,"Welche Aussage ist richtig?",["ITSCM ersetzt BCM vollständig","Geschäftsziele bestimmen IT-Recovery-Ziele","Backup garantiert Wiederanlauf","RPO beschreibt Gebäudeausfall"],1,"IT-Zeitziele werden aus der BIA der Geschäftsprozesse abgeleitet."],
  [9,"Was muss ein IT-Recovery-Test berücksichtigen?",["Nur die Serverhardware","Anwendungen, Daten, Identitäten, Netze und Schnittstellen","Nur den Einkauf","Nur das Handbuch"],1,"Ein Service funktioniert nur mit allen kritischen Komponenten."],
  [9,"Welche Strategien können IT-Continuity unterstützen?",["Redundanz","Replikation und Backups","Ausweichumgebung","Manuelle Ersatzverfahren"],[0,1,2,3],"Die passende Kombination hängt von RTO, RPO, Risiko und Kosten ab."]
].map((x,i)=>({id:BCSM_DATA.questions.length+i+1,chapter:x[0],q:x[1],options:x[2],correct:x[3],explanation:x[4],type:Array.isArray(x[3])?"multiple":"single"})));

BCSM_DATA.exercises.push(
  {id:11,original:false,title:"Zertifizierungs-Readiness",pages:"Prüfungsergänzung",duration:45,chapter:8,task:"Führe für NGA einen Readiness-Check für ISO 22301 durch. Lege Auditkriterien, Stichproben, Interviewpartner und notwendige Nachweise fest.",hints:["Prüfe Dokumentation und gelebte Wirksamkeit.","Nutze Scope, BIA, Pläne, Übungen, Audit und Managementreview."],solution:"Auditprogramm mit Scope Produktion/Marketing, Kriterien ISO 22301 und interne Vorgaben. Stichproben bei Produktion, Marketing, IT-4all-Schnittstelle und Lieferanten. Interviews mit CEO, BCB, Prozess-Ownern und IT. Nachweise: Leitlinie, Rollen, Kompetenz, BIA/Risiko, Strategien, Pläne, Übungsberichte, KPIs, internes Audit, Managementreview und abgeschlossene Korrekturmaßnahmen."},
  {id:12,original:false,title:"ITSCM-Recovery-Design",pages:"Prüfungsergänzung",duration:50,chapter:9,task:"Entwirf für die Produktions-IT von NGA eine ITSCM-Strategie. Ordne Services und Komponenten dem Montageprozess zu und plane einen Ende-zu-Ende-Test.",hints:["Fachliche RTO/RPO bestimmen technische Ziele.","Beziehe IT-4all und Elsa Dohn ein.","Teste nicht nur Backup, sondern den nutzbaren Prozess."],solution:"Service-Mapping für Produktionssteuerung, Identitäten, Netzwerk, Datenbanken, Bandsteuerung und Provider. Strategie aus Redundanz, unveränderbaren Backups, Wiederanlaufumgebung, SLAs und manueller sicherer Betriebsweise. Test: Ausfall simulieren, BAO/IT alarmieren, Umgebung wiederherstellen, Datenstand gegen RPO prüfen, Fachtest durch Produktion, tatsächliche RTO messen, Rückführung und Lessons Learned dokumentieren."}
);

/* Fragen mit mehreren richtigen Antworten für die Prüfungssimulation. */
BCSM_DATA.questions.push(...[
  [2,"Welche Aspekte müssen bei einer belastbaren Scope-Definition berücksichtigt werden?",["Organisationseinheiten","Standorte","Produkte und Prozesse","Kritische Abhängigkeiten"],[0,1,2,3],"Ein Scope wird organisatorisch, geografisch und logisch abgegrenzt; Abhängigkeiten dürfen nicht verschwinden."],
  [3,"Welche Aufgaben gehören zur Institutionsleitung?",["Gesamtverantwortung tragen","Ressourcen bereitstellen","BCM-Leitlinie freigeben","Jeden Notfallplan selbst schreiben"],[0,1,2],"Operative Dokumentation kann delegiert werden, Gesamtverantwortung und Freigaben nicht."],
  [3,"Welche Aussagen zu RASCI stimmen?",["R führt aus","A trägt Rechenschaft","C wird konsultiert","Es können beliebig viele A vergeben werden"],[0,1,2],"Die goldene Regel lautet: genau ein Accountable pro Aufgabe."],
  [4,"Welche Ergebnisse liefert eine BIA?",["Kritische Prozesse","MTPD und RTO","Ressourcenabhängigkeiten","Eintrittswahrscheinlichkeit jedes Cyberangriffs"],[0,1,2],"Eintrittswahrscheinlichkeiten gehören primär in die Risikoanalyse."],
  [5,"Welche Optionen sind anerkannte Risikobehandlungen?",["Vermeiden","Reduzieren","Übertragen oder teilen","Bewusst akzeptieren"],[0,1,2,3],"Alle vier sind möglich, sofern die Entscheidung begründet und überwacht wird."],
  [6,"Welche Bestandteile gehören in einen einsatzfähigen Notfallplan?",["Aktivierungs- und Eskalationskriterien","Rollen und Kontakte","Wiederanlauf und Notbetrieb","Rückführung in den Normalbetrieb"],[0,1,2,3],"Ein Plan deckt den gesamten Ablauf von Aktivierung bis Rückführung ab."],
  [7,"Welche Grundsätze gelten für Krisenkommunikation?",["Früh beginnen","Wahr und abgestimmt kommunizieren","Zielgruppen berücksichtigen","Unbestätigte Vermutungen als Fakten senden"],[0,1,2],"Spekulationen gefährden Vertrauen und Lagebeherrschung."],
  [7,"Welche Schritte gehören zu FOR-DEC?",["Facts","Options","Risks & Benefits","Decision, Execution und Check"],[0,1,2,3],"FOR-DEC strukturiert die gesamte Entscheidung von der Faktenlage bis zur Wirksamkeitskontrolle."]
].map((x,i)=>({id:BCSM_DATA.questions.length+i+1,chapter:x[0],q:x[1],options:x[2],correct:x[3],explanation:x[4],type:"multiple"})));

/* Prüfungsupdate aus dem neuen SSD-Ordner: Prof-Eingrenzung vom 14.07.2026,
   neue Übungen 6-9, Probeklausur und getrennt gekennzeichnete Kollegen-Übungsklausuren. */
Object.assign(BCSM_DATA.chapters.find(c => c.id === 8), {
  supplemental: false,
  pages: "Kapitel_8.pdf",
  pdf: "Kapitel_8.pdf",
  pdfPage: 1,
  short: "Zertifizierungsaudit, Auditarten, Stage I/II, Bericht und Nichtkonformitäten",
  objectives: ["Auditarten sicher unterscheiden", "Stage I und Stage II erklären", "Nichtkonformitäten mit Anforderung, Abweichung und Nachweis formulieren", "Korrekturmaßnahmen und Wirksamkeitsprüfung begründen"],
  sections: [
    {title:"Warum Zertifizierung?",body:"Eine ISO-22301-Zertifizierung zeigt nach außen, dass ein BCMS nicht nur geplant, sondern nach Anforderungen aufgebaut, betrieben und überprüft wird. Für die Prüfung ist wichtig: Zertifiziert wird gegen ISO 22301; BSI 200-4 ist eine Methodik und kein eigenes ISO-Zertifikat.",bullets:["Zertifizierung schafft Vertrauen bei Kunden, Mutterkonzern und Partnern","Voraussetzung sind gelenkte Dokumente, gelebte Prozesse und Nachweise","Nicht das schöne Handbuch zählt allein, sondern nachweisbare Wirksamkeit"],takeaway:"Merksatz: ISO 22301 = prüfbare Anforderungen; Audit = Nachweise gegen Anforderungen."},
    {title:"Auditarten",body:"Audits können nach Beziehung zwischen Auditor und Organisation unterschieden werden.",bullets:["1st Party: internes Audit der eigenen Organisation","2nd Party: Audit durch Kunden, Partner oder Auftraggeber","3rd Party: unabhängige Zertifizierungsstelle","Internes Audit braucht Unabhängigkeit vom geprüften Bereich"]},
    {title:"Stage I und Stage II",body:"Beim Zertifizierungsaudit prüft Stage I vor allem Dokumentation, Scope und Zertifizierungsbereitschaft. Stage II prüft vor Ort beziehungsweise anhand von Interviews, Stichproben und Nachweisen, ob das BCMS umgesetzt und wirksam ist.",bullets:["Stage I: Dokumentenreview, Reife, Auditplanung","Stage II: gelebte Praxis, Interviews, Beobachtung, Nachweise","Methoden: Dokumentenprüfung, Interviews, Begehung, Stichproben, Aufzeichnungsprüfung"],takeaway:"Stage I fragt: Ist das System auditbereit? Stage II fragt: Funktioniert es wirklich?"},
    {title:"Nichtkonformitäten",body:"Eine belastbare Nichtkonformität besteht aus drei Elementen: Anforderung, tatsächliche Abweichung und objektiver Nachweis. Danach folgen Ursachenanalyse, Korrekturmaßnahme, Owner, Termin und Wirksamkeitsprüfung.",bullets:["Major: zentrales Systemelement fehlt oder wirkt nicht","Minor: einzelne, begrenzte Abweichung ohne systemisches Versagen","Beobachtung: Hinweis auf mögliche Verbesserung, noch keine Abweichung","Korrektur behebt den Fehler; Korrekturmaßnahme behebt die Ursache"]},
    {title:"Auditplan für NGA",body:"Bei NGA sind besonders ISO 22301 7.2 Competence, 7.3 Awareness und 8.5 Exercise Programme prüfungsrelevant. Typische Interviewpartner sind BCM Manager und Ralf Dickel als Produktionsleiter/Notfallteam-Rolle.",bullets:["Frage nach Kompetenznachweisen und Schulungen","Frage nach Awareness-Inhalten und Zielgruppen","Frage nach Übungsprogramm, Übungszielen, Protokollen und Lessons Learned","Ohne Ausdrucke: gezielt Nachweise anfordern und Interviews nutzen"]}
  ]
});

Object.assign(BCSM_DATA.chapters.find(c => c.id === 9), {
  supplemental: false,
  pages: "Kapitel_9.pdf",
  pdf: "Kapitel_9.pdf",
  pdfPage: 1,
  short: "ITSCM, Kritikalitätsanalyse, IT-Notfallvorsorge und IT-Notfallbewältigung",
  objectives: ["BCM und ITSCM trennen", "ITSCM-Kritikalitätsanalyse erklären", "IT-Notfallvorsorge und IT-Notfallbewältigung unterscheiden", "RTO/RPO fachlich in IT-Anforderungen übersetzen"],
  sections: [
    {title:"Abgrenzung ITSCM und BCM",body:"BCM betrachtet die Fortführung kritischer Geschäftsprozesse. ITSCM betrachtet die dafür notwendigen IT-Services, Infrastruktur, Daten, Anwendungen, Netze, Identitäten und Provider. ITSCM ist damit Teil des BCM, aber kein Ersatz für BCM.",bullets:["BCM = Business-Prozesse und Organisation","ITSCM = technische Kontinuität der benötigten IT-Services","BIA gibt fachliche RTO/RPO/MBCO vor","IT muss zeigen, dass Services diese Ziele technisch erreichen können"],takeaway:"Die Fachseite sagt, wie kritisch ein Prozess ist; ITSCM übersetzt das in Service-Recovery."},
    {title:"ITSCM-Kritikalitätsanalyse",body:"Die Kritikalitätsanalyse wird bei neuen, geänderten, ersetzten oder zurückgebauten IT-Services relevant. Sie nimmt fachliche BIA-Anforderungen auf, prüft Abhängigkeiten und ordnet IT-Services Kritikalitätsklassen zu.",bullets:["Auslöser: neuer IT-Service, geänderte RTO-Anforderung, Ersatz oder Rückbau","Fachbezogene und unterstützende IT-Services identifizieren","Sequenzielle und parallele Abhängigkeiten berücksichtigen","Abweichungen zur BIA dokumentieren und melden"]},
    {title:"IT-Notfallvorsorge",body:"Vorsorge umfasst alles, was vor dem Ereignis vorbereitet wird: Strategien, Notfalldokumente, technische Architektur, Training, Tests und Beseitigung erkannter Lücken.",bullets:["Kritikalitätsanalyse und Service-Mapping","Backup, Replikation, Redundanz, Ausweichumgebung","Runbooks, Kontaktlisten und Priorisierung","Tests, Übungen, Gap Remediation und kontinuierliche Verbesserung"]},
    {title:"IT-Notfallbewältigung",body:"Bewältigung ist die Reaktion im Ereignis. Ziel ist Schadensminderung, operative Handlungsfähigkeit und koordinierter Wiederanlauf der priorisierten IT-Services.",bullets:["Erkennen, alarmieren, eskalieren","IT-verantwortende Einheiten koordinieren","Systeme isolieren, Datenintegrität prüfen, Wiederanlauf starten","RTO/RPO messen und Lessons Learned dokumentieren"]},
    {title:"Typische ITSCM-Szenarien",body:"Prüfungsnahe Beispiele sind DDoS, Stromausfall, Konsistenzverlust, Ransomware, Provider-Ausfall oder Ausfall kritischer Infrastruktur. Wichtig ist, immer Auswirkung, Abhängigkeit und Wiederherstellbarkeit zu begründen.",bullets:["Backup allein reicht nicht","Online-Backups können bei Ransomware kompromittiert sein","Provider-SLAs müssen zum Prozess-RTO passen","Ende-zu-Ende-Test beweist Nutzbarkeit für den Fachprozess"]}
  ]
});

BCSM_DATA.examFocus = {
  title: "BCSM 402 Prüfungs-Rettungsplan",
  subtitle: "Fokus auf die Prof-Eingrenzung, neue Übungen und die echte Klausurlogik: 20 Single-Choice, 5 Freitext, Case Study. Ziel: bestehen, dann Punkte sammeln.",
  examStructure: [
    {part:"Prüfungsabschnitt 1: 20 Single-Choice-Fragen", points:"40 P.", note:"Genau eine Antwort; mehrere Markierungen = 0 Punkte."},
    {part:"Prüfungsabschnitt 2: 5 Freitextaufgaben", points:"40 P.", note:"Kurze, strukturierte Antworten mit Begriffen, Reihenfolgen und Begründung."},
    {part:"Prüfungsabschnitt 3: Case Study", points:"40 P.", note:"Transfer auf NGA/MagicBox: Scope, BIA, Risiko, Strategie, Krise, ITSCM."},
    {part:"Bestehensgrenze laut Deckblatt", points:"61 P.", note:"Du brauchst nicht Perfektion, sondern sichere Standardpunkte plus Falllogik."}
  ],
  redList: [
    "MTPD/RTO/RPO/MBCO verwechseln",
    "BIA und Risikoanalyse vermischen",
    "Stage I und Stage II beim Audit vertauschen",
    "RASCI mit mehreren Accountable-Rollen pro Aufgabe",
    "Scope ohne organisatorisch/geografisch/logische Abgrenzung",
    "ITSCM als Ersatz für BCM erklären statt als Teilbereich",
    "FOR-DEC-Reihenfolge nicht können",
    "Nichtkonformität ohne Anforderung + Abweichung + Nachweis formulieren"
  ],
  fourDayPlan: [
    {day:1,title:"Grundgerüst sichern",goal:"Kapitel 1-3 so lernen, dass du MC und kurze Freitexte sicher triffst.",blocks:["Begriffe: BC, BCM, BCMS, Resilienz, MTPD, RTO, RPO, MBCO","ISO 22301 vs. BSI 200-4 vs. BCI GPG","Scope-Dimensionen und Stakeholder","Governance, Leitlinie, BCB, RASCI","Am Ende: 30 Karteikarten + 20 Quizfragen"]},
    {day:2,title:"Methoden können",goal:"BIA und Risikomanagement prüfungsreif anwenden.",blocks:["BIA-Ziel, Voranalyse, Durchführung, Bericht","BIA vs. Risikoanalyse laut Merksatz: Folgen vs. Ursachen","NGA-Rechnung: 6 PKW/h x 20.000 EUR","Risiko: Bedrohung, Schwachstelle, Risiko, Auswirkung, Wahrscheinlichkeit, Maßnahme","Übung 5 und Übung 6 bearbeiten"]},
    {day:3,title:"Betrieb, Krise, Audit, ITSCM",goal:"Die späten Kapitel 6-9 punktereif machen.",blocks:["Notfallplan-Mindestinhalte und BC-Strategien","KPIs: Zweck, Messobjekt, Messung, Datenquelle, Interpretation, Reporting, Frequenz","FOR-DEC + AAO/BAO/BOS + Störung/Notfall/Krise","Auditarten, Stage I/II, Nichtkonformitäten","ITSCM-Kritikalitätsanalyse, Vorsorge und Bewältigung"]},
    {day:4,title:"Simulation und Lücken schließen",goal:"Nicht mehr alles lesen, sondern abrufen und schreiben.",blocks:["Probeklausur bearbeiten","20-Fragen-Simulation in der App","Eine Freitextantwort pro Hauptthema schreiben","Case Study einmal komplett: Scope -> BIA -> Risiko -> Strategie -> Plan","Nur rote Fehlerliste wiederholen"]}
  ],
  topics: [
    {chapter:1,title:"Grundlagen BCM",items:["Praxisbeispiele und Schadensszenarien","Rechtliche Anforderungen","ISO 22301 und BSI 100-4/200-4","BCMS-Strukturelemente und relevante Dokumente","MTPD, RTO, RPO, MBCO","Vorteile von BCM"]},
    {chapter:2,title:"Standards & Scope",items:["Entstehung und Relevanz von BCM-Standards","BSI 100-4/200-4: Struktur, Inhalte, Stufenmodell","ISO 22301 als internationaler Standard","BCI Good Practice Guidelines","Anwendungsbereich des BCMS"]},
    {chapter:3,title:"Rollen & Governance",items:["Top Management: Leitlinie unterschreiben, Commitment, Ressourcen","BCM-Leitlinie und Governance","Dokumentation","RASCI-Methode","Risiken und Chancen im BCMS","Zielformulierung, Zielerreichung, Änderungen, Ressourcen"]},
    {chapter:4,title:"Business Impact Analyse",items:["Voranalyse","Verfahren für BIA und Risikoanalyse","Ziele und Definition der BIA","Durchführung der BIA","BIA-Bericht und Dokumentation"]},
    {chapter:5,title:"BCM-Risikomanagement",items:["Abgrenzung BCM-Risikomanagement","Ansatz","Risikoidentifikation und Analyse","Risikobewertung und Beurteilung","Risikominimierung und Kontrolle","Dokumentation"]},
    {chapter:6,title:"Betrieb & Verbesserung",items:["Kontinuität des Geschäftsbetriebs","Maßnahmen für Kontinuität","Leistungsüberprüfung und Kennzahlen"]},
    {chapter:7,title:"Krisenmanagement",items:["AAO, BAO, BOS","BSI-Standards","Ablauf Krisenmanagement","FOR-DEC-Methode"]},
    {chapter:8,title:"Zertifizierung & Auditierung",items:["Einleitung Zertifizierung","Auditarten: extern, intern, 1st/2nd/3rd Party","Stage I und Stage II","Berichterstattung","Nichtkonformitäten"]},
    {chapter:9,title:"ITSCM",items:["Praxisbeispiele","Abgrenzung ITSCM und BCM","Managementsystem und ITSCM-Standards","ITSCM in der Organisation","Life Cycle und Kritikalitätsanalyse","IT-Notfallvorsorge und IT-Notfallbewältigung"]}
  ],
  officialExercises: [
    {id:6, appExerciseId:13, title:"BCM-Risikomanagement", file:"Übung_6.pdf", focus:"Montage/Ressourcen: IT, Gebäude, Mitarbeitende, Zulieferer brutto bewerten."},
    {id:7, appExerciseId:14, title:"Business Continuity Strategie", file:"Übung_7.pdf", focus:"Notfallplan-Inhalte für NGA anhand Template ableiten."},
    {id:8, appExerciseId:15, title:"Effektivität des BCMS messen", file:"Übung_8.pdf", focus:"Zwei Kennzahlen sauber mit Zweck, Messung, Quelle, Reporting und Frequenz ausfüllen."},
    {id:9, appExerciseId:16, title:"Auditplan", file:"Übung_9.pdf", focus:"ISO 22301 7.2, 7.3, 8.5: Auditplan + Fragenkatalog für BCM Manager und Ralf Dickel."}
  ]
};

BCSM_DATA.sourceFiles = [
  {title:"Prof-Themeneingrenzung", file:"EingrenzungThemen-2.pdf", badge:"2 Seiten"},
  {title:"Deckblatt/Klausurstruktur", file:"Fragestunde-Klausur_Deckblatt.pdf", badge:"120 Punkte"},
  {title:"Prof-Probeklausur", file:"Probeklausur.pdf", badge:"5 Seiten"},
  {title:"Prüfungsrelevante Vorlesungsseiten", file:"Prüfungsrelevante_Vorlesungsseiten.pdf", badge:"244 Seiten"},
  {title:"Übung 6 Risikomanagement", file:"Übung_6.pdf", badge:"offiziell"},
  {title:"Übung 7 BC-Strategie", file:"Übung_7.pdf", badge:"offiziell"},
  {title:"Übung 8 KPIs", file:"Übung_8.pdf", badge:"offiziell"},
  {title:"Übung 9 Auditplan", file:"Übung_9.pdf", badge:"offiziell"}
];

BCSM_DATA.exercises.push(
  {id:13, original:true, official:true, title:"Übung 06: BCM-Risikomanagement", pages:"Übung_6.pdf", duration:45, chapter:5,
    task:"Führe für Prozess 3 „Zusammenbau/Montage des PKW“ eine Brutto-Risikobewertung durch. Bewerte die Szenarien Ausfall IT, Ausfall Gebäude, Ausfall Mitarbeitende und Ausfall Zulieferer mit Bedrohung, Schwachstelle, Risiko, Auswirkung, Wahrscheinlichkeit, Risikostufe und Maßnahmen.",
    hints:["Brutto heißt: vorhandene Maßnahmen noch nicht anrechnen.","Nutze die NGA-Skala: niedrig bis 400.000 EUR, mittel ab 400.000 EUR, hoch ab 2 Mio. EUR, sehr hoch ab 4 Mio. EUR.","Formuliere Risiko als Wenn-dann-Zusammenhang."],
    solution:"IT: Bedrohung Cyberangriff/Störung IT-4all; Schwachstelle Abhängigkeit von Produktions-IT und ggf. ungetesteter Wiederanlauf; Risiko Stillstand Montage; Auswirkung hoch/sehr hoch je Dauer; Maßnahmen SLA, Wiederanlauftest, Segmentierung, Offline-Backup, Notbetrieb. Gebäude: Bedrohung Brand/Chemieunfall; Schwachstelle einzelner Fertigungsstandort; Risiko Produktionsstillstand; Maßnahmen Brandschutz, Evakuierung, Ausweichkapazität, Liefer-/Kundenpriorisierung. Mitarbeitende: Bedrohung Pandemie/Streik; Schwachstelle Schlüsselwissen/Mindestbesetzung; Risiko Montage kann nicht betrieben werden; Maßnahmen Vertretung, Cross-Training, Schichtplanung. Zulieferer: Bedrohung Hochwasser/Insolvenz/Streik; Schwachstelle BuCa/ACT je 50 Prozent, keine dritte Quelle; Risiko Materialmangel stoppt Band; Maßnahmen Dual-/Multi-Sourcing, Sicherheitsbestand, Lieferanten-BCM, Vertragsklauseln."},
  {id:14, original:true, official:true, title:"Übung 07: Business Continuity Strategie", pages:"Übung_7.pdf", duration:35, chapter:6,
    task:"Lies das Template Notfallplan und überlege erste Inhalte für NGA. Fokus: Notfallpläne für Ausfall Mitarbeitende, Gebäudeausfall, Ausfall IT und Dienstleisterausfall; Prozesse mit ähnlichen Ressourcen/RTO/Abhängigkeiten können gebündelt werden.",
    hints:["Notfallplan = konkrete Handlungsanweisung, kein Theorieaufsatz.","Geltungsbereich kann mehrere Prozesse bündeln.","Denke von Aktivierung bis Rückführung."],
    solution:"Ein guter NGA-Notfallplan enthält: Zweck und Geltungsbereich, betroffene Prozesse/Ressourcen, Aktivierungs- und Eskalationskriterien, Rollen und Stellvertretungen, Kontaktlisten, Sofortmaßnahmen, Kommunikation, Notbetrieb/Mindestbesetzung, Wiederanlaufreihenfolge, benötigte Ressourcen, Schnittstellen zu IT-4all/Lieferanten, Dokumentation, Deaktivierung, Rückführung und Lessons Learned. Für IT-Ausfall: Produktions-IT isolieren, IT-4all/Elsa Dohn alarmieren, Datenstand prüfen, priorisierten Wiederanlauf starten und Fachtest durchführen. Für Zulieferer/Dienstleister: Alternativlieferung, Lagerbestand, Kundenpriorisierung und Eskalation an Leitung."},
  {id:15, original:true, official:true, title:"Übung 08: Messen der Effektivität des BCMS", pages:"Übung_8.pdf", duration:40, chapter:6,
    task:"Entwickle zwei Kennzahlen zur Überwachung der Effektivität des BCMS. Fülle je Kennzahl Zweck/Ziel, Messobjekt, Messung, Datenquelle, Interpretation, Berichterstattung und Frequenz aus.",
    hints:["Eine Kennzahl muss steuerbar sein, nicht nur hübsch aussehen.","Nimm eine Vorsorge-KPI und eine Wirksamkeits-KPI.","Interpretation immer mit Schwellenwert/Handlung verbinden."],
    solution:"Kennzahl 1 Planaktualität: Zweck Sicherstellung aktueller Notfallpläne; Messobjekt alle freigegebenen Notfallpläne im Scope; Messung Anteil Pläne mit Review innerhalb der letzten 12 Monate in Prozent; Datenquelle Dokumentenlenkung/BCM-Register; Interpretation <90 Prozent = Maßnahmenplan; Reporting monatlich an BCM Manager und quartalsweise Leitung; Frequenz monatlich. Kennzahl 2 Übungswirksamkeit/RTO-Erreichung: Zweck Nachweis, ob Wiederanlaufziele erreichbar sind; Messobjekt Übungen kritischer Prozesse/IT-Services; Messung Anteil Übungen, in denen RTO und definierte Erfolgskriterien erreicht wurden; Datenquelle Übungsprotokolle, Messzeiten, Lessons Learned; Interpretation Nichterreichung = Ursachenanalyse und Korrekturmaßnahme; Reporting an BCM Manager, Prozess-Owner, Leitung; Frequenz nach jeder Übung plus Quartalsauswertung."},
  {id:16, original:true, official:true, title:"Übung 09: Auditplan", pages:"Übung_9.pdf", duration:45, chapter:8,
    task:"Führe als externer Auditor ein Audit bei NGA durch. Fokus ISO 22301: Competence 7.2, Awareness 7.3 und Exercise programme 8.5. Erstelle Auditplan und Fragenkatalog für den Business Continuity Manager und Ralf Dickel.",
    hints:["Frage immer nach Nachweisen, nicht nur nach Meinungen.","BCM Manager = System-/Methodenebene; Ralf Dickel = gelebte Praxis in Produktion/Notfallteam.","Stage-II-Logik: Interviews und Stichproben prüfen Umsetzung."],
    solution:"Auditplan: Opening Meeting 09:00; Interview BCM Manager zu 7.2 Kompetenzmatrix, Schulungsnachweisen, Rollenbeschreibung, Awareness-Konzept, Übungsprogramm, Protokollen und Maßnahmenverfolgung; Interview Ralf Dickel zu eigener Rolle, erhaltenem Training, Kenntnis von Alarmierung, Notfallplan, Übungen, Lessons Learned und praktischer Umsetzbarkeit; Nachweise: Trainingsmatrix, Teilnehmerlisten, Awareness-Material, Übungsplan, Übungsberichte, offene Maßnahmen, Kompetenznachweise. Fragen BCM Manager: Wie werden Kompetenzen bestimmt? Welche Awareness-Zielgruppen gibt es? Wie wird Wirksamkeit gemessen? Welche Übungen wurden durchgeführt? Fragen Dickel: Welche Rolle haben Sie im Notfallteam? Wann alarmieren Sie? Welche Übung haben Sie absolviert? Wo finden Sie den Plan? Welche Verbesserungen wurden umgesetzt?"}
);

BCSM_DATA.flashcards.push(...[
  [8,"Welche drei Bausteine braucht eine Nichtkonformität?","Anforderung, tatsächliche Abweichung und objektiver Nachweis."],
  [8,"Was prüft Stage I?","Dokumentation, Scope, Auditbereitschaft und grundsätzliche Eignung des BCMS."],
  [8,"Was prüft Stage II?","Gelebte Umsetzung und Wirksamkeit durch Interviews, Begehung, Stichproben und Aufzeichnungen."],
  [8,"Was ist 1st-/2nd-/3rd-Party-Audit?","1st = internes Audit, 2nd = Kunde/Partner auditiert, 3rd = unabhängige Zertifizierungsstelle."],
  [9,"Wann ist eine ITSCM-Kritikalitätsanalyse durchzuführen?","Bei neuem IT-Service, Änderung von RTO/RPO-Anforderungen, Ersatz unterstützender Services oder Rückbau."],
  [9,"Was ist Ziel der IT-Notfallbewältigung?","Schadensminderung und Sicherstellung operativer Handlungsfähigkeit im IT-Notfall."],
  [6,"Welche Felder braucht eine gute BCM-Kennzahl?","Zweck, Messobjekt, Messung/Einheit, Datenquelle, Interpretation, Reporting und Frequenz."],
  [7,"Wie lautet FOR-DEC?","Facts, Options, Risks & Benefits, Decision, Execution, Check."]
].map((x,i)=>({id:BCSM_DATA.flashcards.length+i+1,chapter:x[0],q:x[1],a:x[2]})));

BCSM_DATA.questions.push(...[
  [9,"Wann ist laut Probeklausur eine ITSCM-Kritikalitätsanalyse durchzuführen?",["Nur beim Rückbau eines IT-Services","Nur bei Änderung der RTO","Nur bei Beantragung eines neuen IT-Services","Bei Rückbau, RTO-Änderung, neuem Service und Ersatz unterstützender Services"],3,"Die Probeklausur fasst alle genannten Auslöser zusammen."],
  [1,"Welche Aussage zu RTO und MTPD ist korrekt?",["MBCO ist immer gleich MTPD","RTO ist kleiner oder gleich MTPD","RPO ist immer größer gleich RTO","Alle Aussagen sind richtig"],1,"Der Wiederanlauf muss spätestens vor der maximal tolerierbaren Ausfallgrenze liegen."],
  [6,"Was muss das Management im Management Review berücksichtigen?",["Rückmeldungen interessierter Parteien","Ergebnisse des Risiko-Assessments","Möglichkeiten kontinuierlicher Verbesserung","Alle genannten Punkte"],3,"Managementreview bewertet Eignung, Angemessenheit und Wirksamkeit mit vielen Inputs."],
  [3,"Welche Aussage zur Business Continuity Leitlinie ist sicher richtig?",["Sie muss vom Top-Management genehmigt werden","Sie darf nie interessierten Parteien bereitgestellt werden","Sie muss exakt Leitlinie heißen","Sie darf keine Ziele enthalten"],0,"Die Leitlinie braucht Freigabe und Commitment der obersten Leitung."],
  [5,"Wie lautet die Reihenfolge der Risikoanalyse?",["Identifizieren, Analysieren, Evaluieren, Behandeln","Analysieren, Identifizieren, Behandeln, Evaluieren","Evaluieren, Identifizieren, Analysieren, Behandeln","Behandeln, Evaluieren, Analysieren, Identifizieren"],0,"Diese Reihenfolge ist in der Probeklausur abgefragt."],
  [9,"Was ist ein typisches Schadensszenario im ITSCM?",["DDoS-Angriff","Identifizierte Anomalie im Benutzerverhalten","Stromausfall","Konsistenzverlust"],0,"Die Probeklausur wertet DDoS als typisches ITSCM-Schadensszenario."],
  [9,"Welche Aussage zur ITSCM-Kritikalitätsanalyse ist nicht richtig?",["Sequenzielle und parallele Abhängigkeiten sind zu berücksichtigen","Wiederanlaufzeit beginnt erst nach Bearbeitung des Incidents","Sie wird bei neuem IT-Service durchgeführt","Abweichungen zur BIA werden dokumentiert"],1,"Die Aussage zur Wiederanlaufzeit ist in dieser Form falsch."],
  [4,"Was ist Ziel der BIA?",["Den Prozess vom Ereignis bis zur Wiederherstellung beschreiben","Den Schaden durch Prozessausfälle bestimmen","Auditressourcen planen","Nur IT-Risiken identifizieren"],1,"Die BIA bestimmt Auswirkungen/Schaden im Zeitverlauf und leitet Kritikalität ab."],
  [5,"Welche Ziele hat die BCM-Risikoanalyse?",["Risiken transparent machen","Strategien/Gegenmaßnahmen ableiten","Szenarien für Notfallpläne identifizieren","Den Schaden durch Prozessausfälle bestimmen"],[0,1,2],"Schadensbestimmung durch Prozessausfälle ist Kern der BIA, nicht der Risikoanalyse."],
  [9,"Ziel der IT-Notfallbewältigung ist ...",["Schadensminderung","operative Handlungsfähigkeit im IT-Notfall","Steuerung IT-verantwortender Einheiten","Erstellung aller Vorsorgemaßnahmen"],[0,1,2],"Vorsorgemaßnahmen gehören eher zur IT-Notfallvorsorge; Bewältigung ist Reaktion im Ereignis."]
].map((x,i)=>({id:BCSM_DATA.questions.length+i+1,chapter:x[0],q:x[1],options:x[2],correct:x[3],explanation:x[4],type:Array.isArray(x[3])?"multiple":"single",source:"Prof-Probeklausur"})));
