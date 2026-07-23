(() => {
  const STORAGE_KEY = "bcsm402-basecamp-v1";
  const defaultState = {
    route: "dashboard", theme: "light", completedSections: [], cardProgress: {},
    quizStats: { answered: 0, correct: 0, exams: 0 }, exerciseNotes: {}, completedExercises: [],
    streak: { last: null, days: 0 }, activeChapter: null, activeExercise: null, activePdfPage: null,
    custom: { chapters: [], cards: [], questions: [], exercises: [] }
  };
  let state = loadState();
  let cardSession = [];
  let cardIndex = 0;
  let cardFlipped = false;
  let quizSession = null;
  let glossaryTerm = "";
  const DEFAULT_PDF = "alles_zu_402.pdf";

  const view = document.getElementById("view");
  const pageTitle = document.getElementById("page-title");
  const pageEyebrow = document.getElementById("page-eyebrow");
  const toastEl = document.getElementById("toast");

  function loadState() {
    try { const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); return { ...defaultState, ...saved, custom: { ...defaultState.custom, ...(saved.custom || {}) } }; }
    catch { return { ...defaultState }; }
  }
  function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); updateStreakUI(); }
  function parsePdfRef(ref) {
    const raw = String(ref || "").trim();
    if (!raw) return { file: DEFAULT_PDF, page: "" };
    if (raw.includes("|")) {
      const [file, page] = raw.split("|");
      return { file: file || DEFAULT_PDF, page: page || "" };
    }
    if (raw.toLowerCase().endsWith(".pdf")) return { file: raw, page: "" };
    return { file: DEFAULT_PDF, page: raw };
  }
  function pdfHref(ref) {
    const { file, page } = parsePdfRef(ref);
    const href = `assets/${encodeURIComponent(file).replace(/%2F/g, "/")}`;
    return page ? `${href}#page=${encodeURIComponent(page)}` : href;
  }
  function openPdf(ref) {
    state.activePdfPage = ref || "1";
    saveState();
    render();
  }
  function today() { return new Date().toISOString().slice(0, 10); }
  function addDays(n) { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); }
  function touchActivity() {
    const t = today();
    if (state.streak.last === t) return;
    if (state.streak.last) {
      const gap = Math.round((new Date(t) - new Date(state.streak.last)) / 86400000);
      state.streak.days = gap === 1 ? state.streak.days + 1 : 1;
    } else state.streak.days = 1;
    state.streak.last = t; saveState();
  }
  function updateStreakUI() {
    const el = document.getElementById("streak-count");
    if (el) el.textContent = `${state.streak.days || 0} ${state.streak.days === 1 ? "Tag" : "Tage"}`;
  }
  function toast(message) { toastEl.textContent = message; toastEl.classList.add("show"); setTimeout(() => toastEl.classList.remove("show"), 2200); }
  function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }
  function esc(value) { return String(value ?? "").replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c])); }
  const chapters = () => [...BCSM_DATA.chapters, ...state.custom.chapters];
  const cards = () => [...BCSM_DATA.flashcards, ...state.custom.cards];
  const questions = () => [...BCSM_DATA.questions, ...state.custom.questions];
  const exercises = () => [...BCSM_DATA.exercises, ...state.custom.exercises];
  function chapterName(id) { return chapters().find(c => c.id === id)?.title || `Kapitel ${id}`; }
  function dueCards() { return cards().filter(c => !state.cardProgress[c.id] || state.cardProgress[c.id].due <= today()); }
  function learnedCards() { return Object.values(state.cardProgress).filter(p => p.level >= 2).length; }
  function totalSections() { return chapters().reduce((n, c) => n + c.sections.length, 0); }
  function overallProgress() {
    const lesson = state.completedSections.length / totalSections();
    const cardPart = learnedCards() / cards().length;
    const exercisePart = state.completedExercises.length / exercises().length;
    return Math.round((lesson * .45 + cardPart * .35 + exercisePart * .20) * 100);
  }

  const titles = {
    dashboard: ["DEIN LERNCOCKPIT", "Heute zählt der nächste Schritt."],
    focus: ["4 TAGE BIS ZUR PRÜFUNG", "Prof-Fokus, nicht Panik."],
    learn: ["VORLESUNGEN 00–07", "Verstehen, dann erinnern."],
    cards: ["AKTIVES ERINNERN", "Eine Karte nach der anderen."],
    quiz: ["PRÜFUNGSTRAINING", "Wissen unter Druck abrufen."],
    exercises: ["NGA-FALLSTUDIE", "Vom Stoff zur sauberen Lösung."],
    case: ["DEIN DURCHGÄNGIGER FALL", "New Generation Autos verstehen."],
    glossary: ["BEGRIFFE SICHER BEHERRSCHEN", "Das BCM-Wörterbuch."],
    source: ["564 SEITEN ORIGINALMATERIAL", "Jede Aussage zurückverfolgen."],
    manage: ["DEINE APP WÄCHST MIT", "Neue Inhalte ohne Programmieren."]
  };

  function navigate(route) {
    state.route = route; state.activeChapter = route === "learn" ? state.activeChapter : null;
    state.activeExercise = route === "exercises" ? state.activeExercise : null;
    state.activePdfPage = null;
    saveState(); render(); window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function render() {
    document.body.classList.toggle("dark", state.theme === "dark");
    const [eye, title] = titles[state.route] || titles.dashboard;
    pageEyebrow.textContent = eye; pageTitle.textContent = title;
    document.querySelectorAll("[data-route]").forEach(b => b.classList.toggle("active", b.dataset.route === state.route));
    const renders = { dashboard: renderDashboard, focus: renderFocus, learn: renderLearn, cards: renderCards, quiz: renderQuiz, exercises: renderExercises, case: renderCase, glossary: renderGlossary, source: renderSource, manage: renderManage };
    view.innerHTML = (renders[state.route] || renderDashboard)();
    document.getElementById("pdf-viewer")?.remove();
    if (state.activePdfPage) document.body.insertAdjacentHTML("beforeend", renderPdfViewer(state.activePdfPage));
    updateStreakUI();
  }

  function renderPdfViewer(ref) {
    const info = parsePdfRef(ref);
    const src = pdfHref(ref);
    return `<div class="pdf-viewer" id="pdf-viewer" role="dialog" aria-label="Originalfolien">
      <div class="pdf-viewer-bar">
        <div><span class="pill">Originalfolien</span><strong>${esc(info.file)}${info.page ? ` · Seite ${esc(info.page)}` : ""}</strong></div>
        <div class="button-row">
          <a class="btn btn-secondary" href="${src}" target="_blank" rel="noopener">Falls nötig extern öffnen</a>
          <button class="btn btn-primary" data-close-pdf>Zurück zur App</button>
        </div>
      </div>
      <iframe class="pdf-frame" src="${src}" title="${esc(info.file)}"></iframe>
    </div>`;
  }

  function renderDashboard() {
    const progress = overallProgress();
    const accuracy = state.quizStats.answered ? Math.round(state.quizStats.correct / state.quizStats.answered * 100) : 0;
    const nextChapter = chapters().find(c => c.sections.some((_, i) => !state.completedSections.includes(`${c.id}-${i}`))) || chapters().at(-1);
    return `
      <div class="hero-grid">
        <article class="hero-card">
          <div class="kicker">BCSM 402 · BUSINESS CONTINUITY MANAGEMENT</div>
          <h2>${progress < 15 ? "Baue zuerst das stabile Fundament." : progress < 70 ? "Du bist mitten im System – bleib dran." : "Jetzt wird Wissen prüfungsfest."}</h2>
          <p>Alle verfügbaren Vorlesungen, die komplette NGA-Fallstudie, ${exercises().length} Übungsfälle, ${cards().length} Karteikarten und ${questions().length} Prüfungsfragen – in einem Lernpfad.</p>
          <div class="hero-actions"><button class="btn btn-primary" data-go-chapter="${nextChapter.id}">Weiter mit Kapitel ${String(nextChapter.id).padStart(2,"0")}</button><button class="btn btn-ghost" data-route="cards">Fällige Karten: ${dueCards().length}</button></div>
        </article>
        <article class="progress-card panel">
          <div class="section-head" style="margin:0"><div><h2>Gesamtfortschritt</h2><p>Lernen · Erinnern · Anwenden</p></div></div>
          <div class="progress-ring" style="--p:${progress}"><div><strong>${progress}%</strong><small>geschafft</small></div></div>
          <div class="mini-metrics"><div><strong>${state.completedSections.length}</strong><small>Lektionen</small></div><div><strong>${learnedCards()}</strong><small>Karten</small></div><div><strong>${state.completedExercises.length}</strong><small>Übungen</small></div></div>
        </article>
      </div>
      <div class="section-head"><div><h2>Dein Stand</h2><p>Wiederholung schlägt Marathonlernen.</p></div></div>
      <div class="stats-grid">
        <article class="stat-card"><div class="stat-icon">◫</div><strong>${state.completedSections.length}/${totalSections()}</strong><span>Lerneinheiten abgeschlossen</span></article>
        <article class="stat-card"><div class="stat-icon">◈</div><strong>${dueCards().length}</strong><span>Karteikarten heute fällig</span></article>
        <article class="stat-card"><div class="stat-icon">✓</div><strong>${accuracy}%</strong><span>Quiz-Trefferquote</span></article>
        <article class="stat-card"><div class="stat-icon">🔥</div><strong>${state.streak.days || 0}</strong><span>Tage Lernserie</span></article>
      </div>
      <div class="section-head"><div><h2>Was willst du jetzt schaffen?</h2><p>Drei sinnvolle Einstiege – du entscheidest.</p></div></div>
      <div class="action-grid">
        <button class="action-card" data-route="focus"><span class="arrow">↗</span><small>4 Tage</small><b>Prüfungsfokus</b><small>Prof-Eingrenzung, Notfallplan und rote Themen.</small></button>
        <button class="action-card" data-route="learn"><span class="arrow">↗</span><small>25–45 Minuten</small><b>Vorlesung lernen</b><small>Kapitelweise mit Checkliste und Quellen.</small></button>
        <button class="action-card" data-route="exercises"><span class="arrow">↗</span><small>30–90 Minuten</small><b>NGA anwenden</b><small>Originalübungen plus Transferfälle.</small></button>
        <button class="action-card" data-start-quiz="10"><span class="arrow">↗</span><small>10 Fragen</small><b>Wissen testen</b><small>Sofortige Erklärungen statt blindem Raten.</small></button>
      </div>`;
  }

  function renderFocus() {
    const f = BCSM_DATA.examFocus;
    if (!f) return `<div class="empty">Noch kein Prüfungsfokus geladen.</div>`;
    return `<section class="focus-hero"><span class="pill">Prof-Eingrenzung · Stand 14.07.2026</span><h2>${esc(f.title)}</h2><p>${esc(f.subtitle)}</p><div class="button-row"><button class="btn btn-primary" data-open-pdf="EingrenzungThemen-2.pdf">Themeneingrenzung öffnen</button><button class="btn btn-secondary" data-open-pdf="Probeklausur.pdf">Probeklausur öffnen</button><button class="btn btn-warm" data-start-quiz="20">20-Fragen-Simulation</button></div></section>
      <div class="exam-grid">
        <article class="panel"><h2>Klausuraufbau</h2><div class="exam-points">${f.examStructure.map(x=>`<div><strong>${esc(x.points)}</strong><span>${esc(x.part)}</span><small>${esc(x.note)}</small></div>`).join("")}</div></article>
        <article class="panel danger-panel"><h2>Rote Liste</h2><ul>${f.redList.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></article>
      </div>
      <div class="section-head"><div><h2>4-Tage-Plan</h2><p>Wenn du wenig Zeit hast: exakt diese Reihenfolge.</p></div></div>
      <div class="plan-grid">${f.fourDayPlan.map(d=>`<article class="plan-card"><span class="pill">Tag ${d.day}</span><h3>${esc(d.title)}</h3><p>${esc(d.goal)}</p><ul>${d.blocks.map(b=>`<li>${esc(b)}</li>`).join("")}</ul></article>`).join("")}</div>
      <div class="section-head"><div><h2>Themeneingrenzung vom Prof</h2><p>Alles in Häppchen, damit du nichts übersiehst.</p></div></div>
      <div class="focus-list">${f.topics.map(t=>`<article class="focus-topic"><div><span class="chapter-number">Kapitel ${String(t.chapter).padStart(2,"0")}</span><h3>${esc(t.title)}</h3></div><ul>${t.items.map(i=>`<li>${esc(i)}</li>`).join("")}</ul><button class="btn btn-ghost" data-go-chapter="${t.chapter}">Kapitel lernen</button></article>`).join("")}</div>
      <div class="section-head"><div><h2>Neue offizielle Aufgaben</h2><p>Übung 6–9 sind jetzt prüfungsnah priorisiert.</p></div></div>
      <div class="exercise-grid">${f.officialExercises.map(e=>`<article class="exercise-card"><span class="exercise-no">PROF-ÜBUNG ${String(e.id).padStart(2,"0")}</span><h3>${esc(e.title)}</h3><p>${esc(e.focus)}</p><div class="button-row"><button class="btn btn-secondary" data-open-exercise="${e.appExerciseId}">In App bearbeiten</button><button class="btn btn-ghost" data-open-pdf="${esc(e.file)}">Original öffnen</button></div></article>`).join("")}</div>
      <div class="panel" style="margin-top:16px"><h2>Kollegen-Training</h2><p class="muted">Die Übungsklausuren A/B nutze ich nur als zusätzliche Simulation, nicht als Prof-Quelle.</p><div class="button-row"><button class="btn btn-secondary" data-open-pdf="BCSM402_Uebungsklausur_A.pdf">Klausur A</button><button class="btn btn-secondary" data-open-pdf="BCSM402_Uebungsklausur_A_Musterloesung.pdf">Lösung A</button><button class="btn btn-secondary" data-open-pdf="BCSM402_Uebungsklausur_B.pdf">Klausur B</button><button class="btn btn-secondary" data-open-pdf="BCSM402_Uebungsklausur_B_Musterloesung.pdf">Lösung B</button></div></div>`;
  }

  function renderLearn() {
    if (state.activeChapter !== null) return renderChapter(state.activeChapter);
    return `<div class="toolbar"><input class="search" id="chapter-search" placeholder="Kapitel oder Thema suchen …"><span class="pill">Original 00–07 · Ergänzungen 08–09</span></div>
      <div class="chapter-grid">${chapters().map(c => {
        const done = c.sections.filter((_, i) => state.completedSections.includes(`${c.id}-${i}`)).length;
        const pct = Math.round(done / c.sections.length * 100);
        return `<article class="chapter-card" data-chapter-card="${c.id}"><div class="chapter-stripe" style="--chapter-color:${c.color}"></div><div class="chapter-body"><span class="chapter-number">KAPITEL ${String(c.id).padStart(2,"0")}</span><h3>${c.title}</h3><p>${c.short}</p><div class="chapter-meta"><span>${c.minutes} Min.</span><span>PDF ${c.pages}</span><span>${pct}%</span></div><div class="bar"><span style="width:${pct}%"></span></div></div><button class="card-link" data-open-chapter="${c.id}">Kapitel öffnen →</button></article>`;
      }).join("")}</div>`;
  }

  function renderChapter(id) {
    const c = chapters().find(x => x.id === Number(id)) || chapters()[0];
    const completed = c.sections.filter((_, i) => state.completedSections.includes(`${c.id}-${i}`)).length;
    const chapterPdfRef = c.pdf ? `${c.pdf}|${c.pdfPage || 1}` : String(c.pages).split("–")[0];
    return `<button class="btn btn-ghost" data-back-learn>← Alle Kapitel</button>
      <div class="lesson-layout" style="margin-top:16px">
        <aside class="lesson-menu panel"><div style="padding:10px"><span class="chapter-number">KAPITEL ${String(c.id).padStart(2,"0")}</span><h3 style="margin:6px 0">${c.title}</h3><small class="muted">${completed}/${c.sections.length} Einheiten · PDF ${c.pages}</small></div>${c.sections.map((s,i)=>`<button data-scroll-section="lesson-${i}">${i+1}. ${s.title}</button>`).join("")}<button data-route="cards">Passende Karten →</button></aside>
        <article class="lesson-content panel">
          <span class="source-ref">Original-PDF Seiten ${c.pages}</span><h2>${c.title}</h2><p class="muted">${c.short}</p>
          <h3>Lernziele</h3><ul>${c.objectives.map(x=>`<li>${x}</li>`).join("")}</ul>
          ${c.sections.map((s,i)=>`<section id="lesson-${i}"><h3>${i+1}. ${s.title}</h3><p>${s.body}</p>${s.bullets ? `<ul>${s.bullets.map(x=>`<li>${x}</li>`).join("")}</ul>` : ""}${s.takeaway ? `<div class="takeaway"><strong>Prüfungsanker</strong><br>${s.takeaway}</div>` : ""}<label class="check-row"><input type="checkbox" data-section-check="${c.id}-${i}" ${state.completedSections.includes(`${c.id}-${i}`) ? "checked" : ""}><span><strong>Das kann ich erklären.</strong><br><small class="muted">Markiere erst, wenn du es ohne Folie in eigenen Worten schaffst.</small></span></label></section>`).join("")}
          <div class="button-row"><button class="btn btn-primary" data-route="cards">Karteikarten starten</button><button class="btn btn-secondary" data-start-chapter-quiz="${c.id}">Kapitelquiz</button>${c.custom ? "" : `<button class="btn btn-ghost" data-open-pdf="${chapterPdfRef}">Originalfolien</button>`}</div>
        </article>
      </div>`;
  }

  function resetCardSession(filter = "due") {
    const chapter = Number(document.getElementById("card-filter")?.value || 0);
    let pool = chapter ? cards().filter(c => c.chapter === chapter) : cards();
    if (filter === "due") pool = pool.filter(c => !state.cardProgress[c.id] || state.cardProgress[c.id].due <= today());
    cardSession = shuffle(pool); cardIndex = 0; cardFlipped = false;
  }
  function renderCards() {
    if (!cardSession.length) resetCardSession("due");
    const card = cardSession[cardIndex];
    const header = `<div class="toolbar"><select class="select" id="card-filter"><option value="0">Alle Kapitel</option>${chapters().slice(1).map(c=>`<option value="${c.id}">Kapitel ${c.id}: ${c.title}</option>`).join("")}</select><button class="btn btn-secondary" data-card-mode="all">Alle mischen</button><button class="btn btn-ghost" data-card-mode="due">Nur fällige</button><span class="pill">${learnedCards()}/${cards().length} gelernt</span></div>`;
    if (!card) return header + `<div class="panel empty"><h2>Heute nichts mehr fällig. Stark.</h2><p>Du kannst trotzdem alle Karten mischen oder ein Kapitel auswählen.</p><button class="btn btn-primary" data-card-mode="all">Alle Karten wiederholen</button></div>`;
    return header + `<div class="flash-layout"><div class="flash-header"><span>${chapterName(card.chapter)}</span><span>${cardIndex+1} / ${cardSession.length}</span></div><div class="bar" style="margin-bottom:14px"><span style="width:${(cardIndex+1)/cardSession.length*100}%"></span></div>
      <button class="flashcard ${cardFlipped ? "flipped" : ""}" id="flashcard"><div class="flash-inner"><div class="flash-face front"><span class="tag">FRAGE · KAPITEL ${card.chapter}</span><h2>${card.q}</h2><span class="flip-hint">Antippen zum Aufdecken</span></div><div class="flash-face back"><span class="tag">ANTWORT</span><p>${card.a}</p><span class="flip-hint">Bewerte ehrlich – das steuert die Wiederholung.</span></div></div></button>
      ${cardFlipped ? `<div class="rating-row"><button data-rate="0">↺ Nochmal<br><small>heute</small></button><button data-rate="1">~ Unsicher<br><small>morgen</small></button><button data-rate="2">✓ Gewusst<br><small>später</small></button></div>` : ""}</div>`;
  }

  function startQuiz(count = 10, chapter = null) {
    let pool = chapter !== null ? questions().filter(q => q.chapter === Number(chapter)) : questions();
    quizSession = { questions: shuffle(pool).slice(0, Math.min(count, pool.length)), index: 0, score: 0, selected: [], locked: false, done: false, chapter };
    state.route = "quiz"; saveState(); render();
  }
  function gradeCurrentQuestion() {
    if (!quizSession || quizSession.locked) return;
    const q = quizSession.questions[quizSession.index];
    const correct = Array.isArray(q.correct) ? q.correct : [q.correct];
    const picked = quizSession.selected || [];
    const right = picked.length === correct.length && picked.every(i => correct.includes(i));
    quizSession.locked = true;
    if (right) quizSession.score++;
    state.quizStats.answered++;
    if (right) state.quizStats.correct++;
    touchActivity(); saveState(); render();
  }
  function renderQuiz() {
    if (!quizSession) return `<div class="quiz-wrap"><article class="quiz-card result-hero"><span class="pill">${questions().length} Single- & Multiple-Choice-Fragen</span><h2>Wähle deinen Modus</h2><p class="muted">Nach jeder Antwort bekommst du die Begründung. Die Prüfungssimulation mischt das gesamte Modul.</p><div class="button-row" style="justify-content:center"><button class="btn btn-primary" data-start-quiz="10">Schnelltest · 10</button><button class="btn btn-warm" data-start-quiz="20">Prüfung · 20</button><button class="btn btn-secondary" data-start-quiz="40">Volltest · 40</button></div></article></div>`;
    if (quizSession.done) {
      const pct = Math.round(quizSession.score / quizSession.questions.length * 100);
      return `<div class="quiz-wrap"><article class="quiz-card result-hero"><span class="pill">ERGEBNIS</span><div class="result-score">${pct}%</div><h2>${pct >= 80 ? "Prüfungsreif – stark." : pct >= 60 ? "Solide Basis. Jetzt Lücken schließen." : "Noch nicht stabil – das ist messbar und lösbar."}</h2><p>${quizSession.score} von ${quizSession.questions.length} richtig.</p><div class="button-row" style="justify-content:center"><button class="btn btn-primary" data-retry-quiz>Nochmal</button><button class="btn btn-secondary" data-route="cards">Karteikarten</button><button class="btn btn-ghost" data-route="learn">Lernpfad</button></div></article></div>`;
    }
    const q = quizSession.questions[quizSession.index];
    const correct = Array.isArray(q.correct) ? q.correct : [q.correct];
    const isMultiple = q.type === "multiple" || correct.length > 1;
    const picked = quizSession.selected || [];
    const isCorrect = quizSession.locked && picked.length === correct.length && picked.every(i => correct.includes(i));
    return `<div class="quiz-wrap"><div class="bar" style="margin-bottom:15px"><span style="width:${(quizSession.index+1)/quizSession.questions.length*100}%"></span></div><article class="quiz-card"><div class="quiz-top"><span>KAPITEL ${q.chapter} · ${chapterName(q.chapter)}</span><span>${isMultiple ? "MULTIPLE CHOICE" : "SINGLE CHOICE"} · ${quizSession.index+1}/${quizSession.questions.length}</span></div><h2>${q.q}</h2>${isMultiple && !quizSession.locked ? `<p class="muted">Mehrere Antworten können richtig sein.</p>` : ""}<div class="answer-list">${q.options.map((o,i)=>{
      let cls = picked.includes(i) ? "selected" : "";
      if (quizSession.locked && correct.includes(i)) cls = "correct";
      else if (quizSession.locked && picked.includes(i)) cls = "wrong";
      return `<button class="answer ${cls}" data-answer="${i}" ${quizSession.locked ? "disabled" : ""}><strong>${String.fromCharCode(65+i)}.</strong> ${o}</button>`;
    }).join("")}</div>${isMultiple && !quizSession.locked ? `<div class="button-row"><button class="btn btn-secondary" data-submit-multiple ${picked.length ? "" : "disabled"}>Antwort prüfen</button></div>` : ""}${quizSession.locked ? `<div class="explanation"><strong>${isCorrect ? "Richtig." : "Nicht ganz."}</strong> ${q.explanation}</div><div class="button-row"><button class="btn btn-primary" data-next-question>${quizSession.index+1 === quizSession.questions.length ? "Ergebnis" : "Nächste Frage"} →</button></div>` : ""}</article></div>`;
  }

  function renderExercises() {
    if (state.activeExercise !== null) return renderExerciseDetail(state.activeExercise);
    return `<div class="toolbar"><span class="pill">6 Originalübungen</span><span class="pill">${exercises().length-6} zusätzliche/eigene Fälle</span><span class="pill">Antworten lokal gespeichert</span></div><div class="exercise-grid">${exercises().map(e=>`<article class="exercise-card"><span class="exercise-no">${e.original ? "ORIGINALÜBUNG" : "PRÜFUNGSTRAINER"} ${String(e.id).padStart(2,"0")}</span><h3>${e.title}</h3><p>${e.task.split("\n")[0]}</p><div class="chapter-meta"><span>${e.duration} Min.</span><span>Kapitel ${e.chapter}</span><span>PDF ${e.pages}</span></div><div class="button-row"><button class="btn btn-secondary" data-open-exercise="${e.id}">Bearbeiten</button>${state.completedExercises.includes(e.id) ? `<span class="pill">✓ erledigt</span>` : ""}</div></article>`).join("")}</div>`;
  }
  function renderExerciseDetail(id) {
    const e = exercises().find(x => x.id === Number(id));
    if (!e) { state.activeExercise = null; return renderExercises(); }
    return `<button class="btn btn-ghost" data-back-exercises>← Alle Übungen</button><article class="exercise-detail panel" style="margin-top:16px"><span class="exercise-no">${e.original ? "ORIGINALÜBUNG" : "PRÜFUNGSTRAINER"} ${String(e.id).padStart(2,"0")}</span><h2>${e.title}</h2><div class="chapter-meta"><span>${e.duration} Minuten</span><span>Kapitel ${e.chapter}</span><span>PDF ${e.pages}</span></div><h3>Aufgabe</h3><div class="task-box">${esc(e.task)}</div><h3>Denkanstöße</h3><ul>${e.hints.map(h=>`<li>${h}</li>`).join("")}</ul><h3>Deine Lösung</h3><textarea class="notes" id="exercise-notes" data-exercise-note="${e.id}" placeholder="Arbeite hier deine eigene Lösung aus …">${esc(state.exerciseNotes[e.id] || "")}</textarea><div class="button-row"><button class="btn btn-primary" data-save-exercise="${e.id}">Speichern</button><button class="btn btn-warm" data-show-solution="${e.id}">Musterweg anzeigen</button><button class="btn btn-ghost" data-open-pdf="${String(e.pages).split("–")[0]}">Originalseite</button></div><div id="solution-${e.id}"></div></article>`;
  }

  function renderCase() {
    const n = BCSM_DATA.nga;
    return `<section class="case-hero"><span class="eyebrow">FALLSTUDIE · PDF 528–530</span><h2>New Generation Autos</h2><p>${n.mission}</p></section>
      <div class="section-head"><div><h2>Prozesskette</h2><p>Diese Kette steckt hinter fast jeder Übung.</p></div></div><div class="process-flow">${n.processes.map((p,i)=>`${i ? `<span class="flow-arrow">→</span>` : ""}<span class="process-step">${p}</span>`).join("")}</div>
      <div class="case-grid">
        <article class="panel"><h2>Standorte</h2><ul class="fact-list">${n.locations.map(x=>`<li>${x}</li>`).join("")}</ul></article>
        <article class="panel"><h2>Lieferkette</h2><ul class="fact-list">${n.suppliers.map(x=>`<li>${x}</li>`).join("")}</ul></article>
        <article class="panel"><h2>BIA-Zahlen</h2><ul class="fact-list">${n.numbers.map(x=>`<li>${x}</li>`).join("")}</ul></article>
      </div>
      <div class="section-head"><div><h2>Organigramm kompakt</h2><p>Die Namen helfen bei Governance und RASCI.</p></div></div><div class="glossary-list">${n.people.map(p=>`<article class="glossary-item"><h3>${p[0]}</h3><p>${p[1]}</p></article>`).join("")}</div>
      <div class="panel" style="margin-top:16px"><h2>Produktionsausfall berechnen</h2><div class="formula">Schaden = 20.000 € × 6 PKW/h × Ausfallstunden<br><br>4 Stunden = 480.000 € · 8 Stunden = 960.000 €</div><p class="muted">Das ist der direkte Produktionswert. Recht, Reputation, Folge- und Vertragskosten kommen je nach Analyse zusätzlich hinzu.</p></div>`;
  }

  function renderGlossary() {
    const items = BCSM_DATA.glossary.filter(x => `${x.term} ${x.definition}`.toLowerCase().includes(glossaryTerm.toLowerCase()));
    return `<div class="toolbar"><input class="search" id="glossary-search" value="${esc(glossaryTerm)}" placeholder="Begriff suchen …"><span class="pill">${items.length} Begriffe</span></div><div class="glossary-list">${items.map(x=>`<article class="glossary-item"><h3>${x.term}</h3><p>${x.definition}</p></article>`).join("")}</div>`;
  }

  function renderSource() {
    const extraSources = BCSM_DATA.sourceFiles || [];
    return `<div class="source-grid"><article class="source-card"><span class="pill">IN DER APP</span><h2>Originalunterlagen</h2><p>Die komplette Sammel-PDF plus neue Prof-Unterlagen sind eingebunden. Du kannst sie direkt im App-Viewer öffnen.</p><div class="button-row"><button class="btn btn-primary" data-open-pdf="alles_zu_402.pdf">Gesamte PDF öffnen</button><button class="btn btn-secondary" data-open-pdf="EingrenzungThemen-2.pdf">Themeneingrenzung</button><button class="btn btn-warm" data-open-pdf="Probeklausur.pdf">Probeklausur</button></div><p class="muted"><small>Prof-Quellen sind als Prüfungsfokus markiert. Die zwei Übungsklausuren A/B sind als Kollegen-Training gekennzeichnet.</small></p></article><article class="source-card"><h2>Seitenkarte</h2><div class="page-map">${chapters().map(c=>`<div><span>Kapitel ${String(c.id).padStart(2,"0")} · ${c.title}</span>${c.custom ? `<span class="pill">eigener Inhalt</span>` : c.pdf ? `<button class="text-button" style="color:var(--mint-strong)" data-open-pdf="${c.pdf}|${c.pdfPage || 1}">${c.pdf} ↗</button>` : `<button class="text-button" style="color:var(--mint-strong)" data-open-pdf="${String(c.pages).split("–")[0]}">${c.pages} ↗</button>`}</div>`).join("")}<div><span>NGA-Fallstudie</span><button class="text-button" style="color:var(--mint-strong)" data-open-pdf="528">528–530 ↗</button></div><div><span>Übungen & Vorlagen</span><button class="text-button" style="color:var(--mint-strong)" data-open-pdf="531">531–563 ↗</button></div>${extraSources.map(s=>`<div><span>${esc(s.title)}</span><button class="text-button" style="color:var(--mint-strong)" data-open-pdf="${esc(s.file)}">${esc(s.badge || "öffnen")} ↗</button></div>`).join("")}</div></article></div>
      <div class="panel" style="margin-top:16px"><h2>Deine Lerndaten</h2><p class="muted">Fortschritt, Notizen, Wiederholungen und Quizwerte bleiben ausschließlich in deinem Browser.</p><div class="button-row"><button class="btn btn-secondary" id="export-progress-inline">Fortschritt als Datei sichern</button><button class="btn btn-primary" data-route="manage">Inhalte hinzufügen</button><button class="btn btn-danger" id="reset-progress">Lerndaten zurücksetzen</button></div></div>`;
  }

  function chapterOptions() {
    return chapters().map(c => `<option value="${c.id}">Kapitel ${c.id}: ${c.title}</option>`).join("");
  }
  function renderManage() {
    const customCount = Object.values(state.custom).reduce((n, arr) => n + arr.length, 0);
    return `<div class="panel" style="padding:24px;margin-bottom:16px"><span class="pill">${customCount} eigene Inhalte</span><h2>Die Lernapp bleibt erweiterbar.</h2><p class="muted">Neue Inhalte werden nur in deinem Browser gespeichert und erscheinen sofort in Lernpfad, Karteikarten, Prüfung oder Übungen. Mit der Inhaltssicherung kannst du sie auf einen anderen Browser übertragen.</p><div class="button-row"><button class="btn btn-secondary" id="export-content">Eigene Inhalte exportieren</button><label class="btn btn-primary" style="cursor:pointer">Inhalte importieren<input id="import-content" type="file" accept="application/json" hidden></label></div></div>
      <div class="manage-grid">
        <form class="panel manage-form" id="add-chapter-form"><h2>Vorlesung hinzufügen</h2><div class="field"><label>TITEL</label><input name="title" required placeholder="z. B. Kapitel 08: Auditierung"></div><div class="field"><label>KURZBESCHREIBUNG</label><input name="short" required placeholder="Worum geht es?"></div><div class="field"><label>QUELLE / SEITEN</label><input name="pages" placeholder="z. B. neue Folien"></div><div class="field"><label>LERNINHALT</label><textarea name="content" required placeholder="Füge hier deine Zusammenfassung oder Vorlesungsnotizen ein …"></textarea></div><button class="btn btn-secondary" type="submit">Vorlesung speichern</button></form>
        <form class="panel manage-form" id="add-card-form"><h2>Karteikarte hinzufügen</h2><div class="field"><label>KAPITEL</label><select name="chapter">${chapterOptions()}</select></div><div class="field"><label>FRAGE</label><textarea name="question" required></textarea></div><div class="field"><label>ANTWORT</label><textarea name="answer" required></textarea></div><button class="btn btn-secondary" type="submit">Karte speichern</button></form>
        <form class="panel manage-form" id="add-question-form"><h2>Prüfungsfrage hinzufügen</h2><div class="field"><label>KAPITEL</label><select name="chapter">${chapterOptions()}</select></div><div class="field"><label>FRAGE</label><textarea name="question" required></textarea></div><div class="field"><label>ANTWORTEN – EINE PRO ZEILE</label><textarea name="options" required placeholder="Antwort A&#10;Antwort B&#10;Antwort C"></textarea></div><div class="field"><label>RICHTIGE NUMMERN (z. B. 1 oder 1,3)</label><input name="correct" required placeholder="1,3"></div><div class="field"><label>ERKLÄRUNG</label><textarea name="explanation" required></textarea></div><button class="btn btn-secondary" type="submit">Frage speichern</button></form>
        <form class="panel manage-form" id="add-exercise-form"><h2>Übung hinzufügen</h2><div class="field"><label>KAPITEL</label><select name="chapter">${chapterOptions()}</select></div><div class="field"><label>TITEL</label><input name="title" required></div><div class="field"><label>AUFGABE</label><textarea name="task" required></textarea></div><div class="field"><label>HINWEISE – EINER PRO ZEILE</label><textarea name="hints"></textarea></div><div class="field"><label>MUSTERWEG</label><textarea name="solution" required></textarea></div><button class="btn btn-secondary" type="submit">Übung speichern</button></form>
      </div>
      ${customCount ? `<div class="panel" style="padding:24px;margin-top:16px"><h2>Eigene Inhalte</h2><div class="custom-list">${[
        ...state.custom.chapters.map(x=>["chapters",x.id,`Vorlesung · ${x.title}`]),
        ...state.custom.cards.map(x=>["cards",x.id,`Karte · ${x.q}`]),
        ...state.custom.questions.map(x=>["questions",x.id,`Frage · ${x.q}`]),
        ...state.custom.exercises.map(x=>["exercises",x.id,`Übung · ${x.title}`])
      ].map(x=>`<div class="custom-item"><span>${esc(x[2])}</span><button class="btn btn-danger" data-delete-custom="${x[0]}:${x[1]}">Löschen</button></div>`).join("")}</div></div>` : ""}`;
  }

  function exportContent() {
    const blob = new Blob([JSON.stringify({ format:"bcsm402-content-v1", custom:state.custom }, null, 2)], { type:"application/json" });
    const a = Object.assign(document.createElement("a"), { href:URL.createObjectURL(blob), download:`bcsm402-eigene-inhalte-${today()}.json` });
    a.click(); URL.revokeObjectURL(a.href); toast("Eigene Inhalte wurden exportiert.");
  }

  function exportProgress() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(blob), download: `bcsm402-fortschritt-${today()}.json` });
    a.click(); URL.revokeObjectURL(a.href); toast("Fortschritt wurde gesichert.");
  }

  document.addEventListener("click", e => {
    const pdfLink = e.target.closest('a[href="assets/alles_zu_402.pdf"]');
    if (pdfLink) { e.preventDefault(); openPdf(); return; }
    const routeBtn = e.target.closest("[data-route]");
    if (routeBtn) { navigate(routeBtn.dataset.route); return; }
    if (e.target.closest("[data-close-pdf]")) { state.activePdfPage = null; saveState(); render(); return; }
    const chapterBtn = e.target.closest("[data-open-chapter], [data-go-chapter]");
    if (chapterBtn) { state.route = "learn"; state.activeChapter = Number(chapterBtn.dataset.openChapter ?? chapterBtn.dataset.goChapter); saveState(); render(); return; }
    if (e.target.closest("[data-back-learn]")) { state.activeChapter = null; saveState(); render(); return; }
    const scroll = e.target.closest("[data-scroll-section]");
    if (scroll) { document.getElementById(scroll.dataset.scrollSection)?.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
    const check = e.target.closest("[data-section-check]");
    if (check) {
      const key = check.dataset.sectionCheck;
      state.completedSections = check.checked ? [...new Set([...state.completedSections,key])] : state.completedSections.filter(x=>x!==key);
      touchActivity(); saveState(); return;
    }
    const start = e.target.closest("[data-start-quiz]");
    if (start) { startQuiz(Number(start.dataset.startQuiz)); return; }
    const chQuiz = e.target.closest("[data-start-chapter-quiz]");
    if (chQuiz) { startQuiz(10, Number(chQuiz.dataset.startChapterQuiz)); return; }
    if (e.target.closest("#flashcard")) { cardFlipped = !cardFlipped; render(); return; }
    const mode = e.target.closest("[data-card-mode]");
    if (mode) { resetCardSession(mode.dataset.cardMode); render(); return; }
    const rate = e.target.closest("[data-rate]");
    if (rate) {
      const card = cardSession[cardIndex], rating = Number(rate.dataset.rate), prev = state.cardProgress[card.id]?.level || 0;
      const level = rating === 0 ? 0 : Math.min(6, prev + rating);
      const intervals = [0,1,3,7,14,30,60];
      state.cardProgress[card.id] = { level, due: addDays(rating === 0 ? 0 : intervals[level]) };
      touchActivity(); saveState(); cardIndex++; cardFlipped = false; render(); return;
    }
    const ans = e.target.closest("[data-answer]");
    if (ans && quizSession && !quizSession.locked) {
      const q = quizSession.questions[quizSession.index];
      const correct = Array.isArray(q.correct) ? q.correct : [q.correct];
      const value = Number(ans.dataset.answer);
      if (q.type === "multiple" || correct.length > 1) {
        quizSession.selected = quizSession.selected.includes(value) ? quizSession.selected.filter(x=>x!==value) : [...quizSession.selected,value];
        render();
      } else { quizSession.selected = [value]; gradeCurrentQuestion(); }
      return;
    }
    if (e.target.closest("[data-submit-multiple]")) { gradeCurrentQuestion(); return; }
    if (e.target.closest("[data-next-question]") && quizSession) {
      if (quizSession.index + 1 >= quizSession.questions.length) { quizSession.done = true; state.quizStats.exams++; saveState(); }
      else { quizSession.index++; quizSession.selected = []; quizSession.locked = false; }
      render(); return;
    }
    if (e.target.closest("[data-retry-quiz]")) { const n = quizSession?.questions.length || 10, ch = quizSession?.chapter ?? null; startQuiz(n, ch); return; }
    const ex = e.target.closest("[data-open-exercise]");
    if (ex) { state.route = "exercises"; state.activeExercise = Number(ex.dataset.openExercise); saveState(); render(); return; }
    if (e.target.closest("[data-back-exercises]")) { state.activeExercise = null; saveState(); render(); return; }
    const save = e.target.closest("[data-save-exercise]");
    if (save) {
      const id = Number(save.dataset.saveExercise), notes = document.getElementById("exercise-notes")?.value || "";
      state.exerciseNotes[id] = notes;
      if (notes.trim().length >= 30) state.completedExercises = [...new Set([...state.completedExercises,id])];
      touchActivity(); saveState(); toast(notes.trim().length >= 30 ? "Lösung gespeichert und als bearbeitet markiert." : "Notiz gespeichert. Für 'erledigt' noch etwas ausführlicher antworten."); render(); return;
    }
    const sol = e.target.closest("[data-show-solution]");
    if (sol) { const id=Number(sol.dataset.showSolution), item=exercises().find(x=>x.id===id), box=document.getElementById(`solution-${id}`); if(box) box.innerHTML=`<div class="solution"><strong>Musterweg</strong><p>${item.solution}</p><small>Es sind auch andere begründete Lösungen möglich.</small></div>`; return; }
    const pdf = e.target.closest("[data-open-pdf]");
    if (pdf) { openPdf(pdf.dataset.openPdf); return; }
    if (e.target.closest("#export-progress") || e.target.closest("#export-progress-inline")) { exportProgress(); return; }
    if (e.target.closest("#export-content")) { exportContent(); return; }
    const del = e.target.closest("[data-delete-custom]");
    if (del) { const [kind,id] = del.dataset.deleteCustom.split(":"); state.custom[kind] = state.custom[kind].filter(x=>String(x.id)!==id); saveState(); render(); toast("Eigener Inhalt gelöscht."); return; }
    if (e.target.closest("#reset-progress")) { if (confirm("Wirklich alle Lernstände und Notizen löschen? Eigene Inhalte bleiben erhalten.")) { const custom=state.custom; state = { ...defaultState, custom, route:"dashboard" }; saveState(); render(); toast("Lerndaten wurden zurückgesetzt."); } return; }
  });

  document.addEventListener("submit", e => {
    e.preventDefault(); const f = new FormData(e.target); const now = Date.now();
    if (e.target.id === "add-chapter-form") {
      const id = Math.max(...chapters().map(c=>Number(c.id)||0)) + 1;
      state.custom.chapters.push({ id, title:f.get("title").trim(), short:f.get("short").trim(), pages:f.get("pages").trim()||"eigene Unterlagen", color:"#bfe3ce", minutes:45, custom:true, objectives:["Den ergänzten Inhalt sicher erklären und anwenden"], sections:[{title:"Eigener Lerninhalt",body:f.get("content").trim(),bullets:[],takeaway:"Erkläre diesen Inhalt ohne Unterlagen in eigenen Worten."}] });
    } else if (e.target.id === "add-card-form") {
      state.custom.cards.push({ id:now, chapter:Number(f.get("chapter")), q:f.get("question").trim(), a:f.get("answer").trim() });
    } else if (e.target.id === "add-question-form") {
      const opts=f.get("options").split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
      const correct=f.get("correct").split(",").map(x=>Number(x.trim())-1).filter(x=>x>=0&&x<opts.length);
      if (!correct.length) { toast("Bitte mindestens eine gültige Antwortnummer angeben."); return; }
      state.custom.questions.push({ id:now, chapter:Number(f.get("chapter")), q:f.get("question").trim(), options:opts, correct:correct.length===1?correct[0]:correct, explanation:f.get("explanation").trim(), type:correct.length>1?"multiple":"single" });
    } else if (e.target.id === "add-exercise-form") {
      state.custom.exercises.push({ id:Math.max(...exercises().map(x=>Number(x.id)||0))+1, original:false, custom:true, title:f.get("title").trim(), pages:"eigene Übung", duration:45, chapter:Number(f.get("chapter")), task:f.get("task").trim(), hints:f.get("hints").split(/\r?\n/).map(x=>x.trim()).filter(Boolean), solution:f.get("solution").trim() });
    } else return;
    touchActivity(); saveState(); e.target.reset(); render(); toast("Inhalt wurde hinzugefügt.");
  });

  document.addEventListener("input", e => {
    if (e.target.id === "glossary-search") { glossaryTerm = e.target.value; render(); const el=document.getElementById("glossary-search"); el?.focus(); el?.setSelectionRange(glossaryTerm.length,glossaryTerm.length); }
    if (e.target.id === "chapter-search") {
      const q=e.target.value.toLowerCase(); document.querySelectorAll("[data-chapter-card]").forEach(card=>card.style.display=card.textContent.toLowerCase().includes(q)?"":"none");
    }
  });
  document.addEventListener("change", async e => {
    if (e.target.id === "card-filter") { resetCardSession("all"); render(); }
    if (e.target.id === "import-content" && e.target.files?.[0]) {
      try {
        const imported = JSON.parse(await e.target.files[0].text());
        if (!imported.custom) throw new Error("Format");
        for (const key of ["chapters","cards","questions","exercises"]) state.custom[key] = [...state.custom[key], ...(imported.custom[key] || [])];
        saveState(); render(); toast("Inhalte wurden importiert.");
      } catch { toast("Diese Datei ist keine gültige BCSM-Inhaltssicherung."); }
    }
  });
  document.getElementById("theme-toggle").addEventListener("click", () => { state.theme = state.theme === "dark" ? "light" : "dark"; saveState(); render(); });
  document.getElementById("export-progress").addEventListener("click", exportProgress);

  render();
})();
