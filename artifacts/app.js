const STORAGE_KEY = "ha_unit1_correct_ids_v1";

const LECTURES = [
  { id: "ALL", title: "All lectures", sub: "Full Unit 1 bank" },
  { id: "L1", title: "L1 Foundations", sub: "Terms, planes, systems" },
  { id: "L2", title: "L2 Body chemistry", sub: "Water, macromolecules, membrane" },
  { id: "L3", title: "L3 The cell", sub: "Junctions, organelles, mitosis" },
  { id: "L4", title: "L4 Tissues part 1", sub: "Embryo + epithelium" },
  { id: "L5", title: "L5 Tissues part 2", sub: "Membranes, CT, muscle, nerve" }
];

const state = {
  lecture: "ALL",
  queue: [],
  index: 0,
  selected: null,
  locked: false,
  correctThisRun: 0,
  answeredThisRun: 0
};

function loadCorrect() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); }
  catch { return []; }
}
function saveCorrect(ids) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...new Set(ids)]));
}

function norm(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9+\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesAccept(user, accept) {
  const u = norm(user);
  if (!u) return false;
  return (accept || []).some(a => {
    const n = norm(a);
    return u === n || u.includes(n) || n.includes(u);
  });
}

function poolFor(lecture, skipCorrect) {
  const correct = new Set(loadCorrect());
  return QUESTIONS.filter(q => {
    if (lecture !== "ALL" && q.lecture !== lecture) return false;
    if (skipCorrect && correct.has(q.id)) return false;
    return true;
  });
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderPicker() {
  const box = document.getElementById("lecture-picker");
  box.innerHTML = "";
  const correct = new Set(loadCorrect());
  LECTURES.forEach(L => {
    const total = QUESTIONS.filter(q => L.id === "ALL" || q.lecture === L.id).length;
    const done = QUESTIONS.filter(q => (L.id === "ALL" || q.lecture === L.id) && correct.has(q.id)).length;
    const btn = document.createElement("button");
    btn.className = "pick" + (state.lecture === L.id ? " active" : "");
    btn.innerHTML = `<strong>${L.title}</strong><small>${L.sub} · ${done}/${total} mastered</small>`;
    btn.onclick = () => { state.lecture = L.id; renderPicker(); };
    box.appendChild(btn);
  });
  const all = QUESTIONS.length;
  document.getElementById("start-stats").textContent =
    `${correct.size} of ${all} questions marked correct on this device.`;
}

function show(id) {
  ["start-screen", "quiz-screen", "end-screen"].forEach(s => {
    document.getElementById(s).classList.toggle("hidden", s !== id);
  });
}

function startQuiz() {
  const skip = document.getElementById("skip-correct").checked;
  let pool = poolFor(state.lecture, skip);
  if (!pool.length) pool = poolFor(state.lecture, false);
  state.queue = shuffle(pool);
  state.index = 0;
  state.correctThisRun = 0;
  state.answeredThisRun = 0;
  if (!state.queue.length) {
    alert("No questions in this lecture.");
    return;
  }
  show("quiz-screen");
  drawQuestion();
}

function currentQ() {
  return state.queue[state.index];
}

function drawQuestion() {
  const q = currentQ();
  state.selected = null;
  state.locked = false;
  document.getElementById("q-tag").textContent = q.tag;
  document.getElementById("q-progress").textContent =
    `Question ${state.index + 1} of ${state.queue.length}`;
  const typeLabel = { mc: "Multiple choice", tf: "True / False", short: "Short answer", application: "Application" };
  document.getElementById("q-type").textContent = typeLabel[q.type] || q.type;
  document.getElementById("q-prompt").textContent = q.prompt;
  const choices = document.getElementById("q-choices");
  const shortWrap = document.getElementById("q-short");
  const feedback = document.getElementById("feedback");
  feedback.className = "feedback hidden";
  feedback.textContent = "";
  document.getElementById("submit-btn").classList.remove("hidden");
  document.getElementById("next-btn").classList.add("hidden");
  document.getElementById("short-input").value = "";

  if (q.type === "short") {
    choices.innerHTML = "";
    shortWrap.classList.remove("hidden");
  } else {
    shortWrap.classList.add("hidden");
    choices.innerHTML = "";
    q.choices.forEach((c, i) => {
      const b = document.createElement("button");
      b.className = "choice";
      b.textContent = (q.type === "tf" ? "" : String.fromCharCode(65 + i) + ". ") + c;
      b.onclick = () => {
        if (state.locked) return;
        state.selected = i;
        [...choices.children].forEach(el => el.classList.remove("selected"));
        b.classList.add("selected");
      };
      choices.appendChild(b);
    });
  }
}

function checkAnswer() {
  const q = currentQ();
  if (state.locked) return;
  let ok = false;
  let userText = "";
  if (q.type === "short") {
    userText = document.getElementById("short-input").value;
    ok = matchesAccept(userText, q.accept);
  } else {
    if (state.selected === null) {
      alert("Pick an answer first.");
      return;
    }
    userText = q.choices[state.selected];
    ok = state.selected === q.answer;
    const nodes = [...document.getElementById("q-choices").children];
    nodes.forEach((el, i) => {
      if (i === q.answer) el.classList.add("right");
      if (i === state.selected && !ok) el.classList.add("wrong");
    });
  }
  state.locked = true;
  state.answeredThisRun += 1;
  if (ok) {
    state.correctThisRun += 1;
    const ids = loadCorrect();
    ids.push(q.id);
    saveCorrect(ids);
  }
  const fb = document.getElementById("feedback");
  fb.className = "feedback " + (ok ? "ok" : "bad");
  const correctText = q.type === "short"
    ? (q.accept && q.accept[0] ? q.accept[0] : "")
    : q.choices[q.answer];
  fb.innerHTML = `<strong>${ok ? "Correct" : "Incorrect"}</strong> · tagged ${q.tag}<br>` +
    (ok ? "" : `Expected: ${correctText}<br>`) +
    q.explain;
  document.getElementById("submit-btn").classList.add("hidden");
  document.getElementById("next-btn").classList.remove("hidden");
}

function nextQuestion() {
  if (state.index + 1 >= state.queue.length) {
    endQuiz();
    return;
  }
  state.index += 1;
  drawQuestion();
}

function endQuiz() {
  show("end-screen");
  document.getElementById("end-summary").textContent =
    `You answered ${state.correctThisRun} of ${state.answeredThisRun} correctly this session. ` +
    `Mastered items stay excluded until you reset progress.`;
}

document.getElementById("start-btn").onclick = startQuiz;
document.getElementById("reset-btn").onclick = () => {
  localStorage.removeItem(STORAGE_KEY);
  renderPicker();
};
document.getElementById("submit-btn").onclick = checkAnswer;
document.getElementById("next-btn").onclick = nextQuestion;
document.getElementById("quit-btn").onclick = endQuiz;
document.getElementById("again-btn").onclick = () => { renderPicker(); show("start-screen"); };
document.getElementById("short-input").addEventListener("keydown", e => {
  if (e.key === "Enter") checkAnswer();
});

renderPicker();
