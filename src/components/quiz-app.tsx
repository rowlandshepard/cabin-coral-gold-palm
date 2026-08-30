import { useMemo, useState } from "react";
import { BookOpen, Check, RotateCcw, X } from "lucide-react";
import { QUESTIONS, type Question } from "@/lib/questions";
import { LECTURES, countByLecture, type LectureFilter } from "@/lib/lectures";
import { loadCorrectIds, markCorrect, resetProgress } from "@/lib/progress";
import { matchesAccept, shuffle } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Screen = "start" | "quiz" | "end";

const TYPE_LABEL: Record<Question["type"], string> = {
  mc: "Multiple choice",
  tf: "True / False",
  short: "Short answer",
  application: "Application",
};

export function QuizApp() {
  const [screen, setScreen] = useState<Screen>("start");
  const [lecture, setLecture] = useState<LectureFilter>("ALL");
  const [skipCorrect, setSkipCorrect] = useState(true);
  const [correctIds, setCorrectIds] = useState<string[]>(() => loadCorrectIds());
  const [queue, setQueue] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [shortValue, setShortValue] = useState("");
  const [locked, setLocked] = useState(false);
  const [wasCorrect, setWasCorrect] = useState<boolean | null>(null);
  const [runCorrect, setRunCorrect] = useState(0);
  const [runAnswered, setRunAnswered] = useState(0);

  const current = queue[index];

  const masteredCounts = useMemo(() => {
    const set = new Set(correctIds);
    return Object.fromEntries(
      LECTURES.map((item) => [
        item.id,
        QUESTIONS.filter((q) => (item.id === "ALL" || q.lecture === item.id) && set.has(q.id)).length,
      ]),
    ) as Record<LectureFilter, number>;
  }, [correctIds]);

  function startQuiz() {
    const skipSet = new Set(correctIds);
    let pool = QUESTIONS.filter((q) => {
      if (lecture !== "ALL" && q.lecture !== lecture) return false;
      if (skipCorrect && skipSet.has(q.id)) return false;
      return true;
    });
    if (pool.length === 0) {
      pool = QUESTIONS.filter((q) => lecture === "ALL" || q.lecture === lecture);
    }
    setQueue(shuffle(pool));
    setIndex(0);
    setSelected(null);
    setShortValue("");
    setLocked(false);
    setWasCorrect(null);
    setRunCorrect(0);
    setRunAnswered(0);
    setScreen("quiz");
  }

  function checkAnswer() {
    if (!current || locked) return;
    let ok = false;
    if (current.type === "short") {
      ok = matchesAccept(shortValue, current.accept);
    } else {
      if (selected === null) return;
      ok = selected === current.answer;
    }
    setLocked(true);
    setWasCorrect(ok);
    setRunAnswered((n) => n + 1);
    if (ok) {
      setRunCorrect((n) => n + 1);
      setCorrectIds(markCorrect(current.id));
    }
  }

  function nextQuestion() {
    if (index + 1 >= queue.length) {
      setScreen("end");
      return;
    }
    setIndex((n) => n + 1);
    setSelected(null);
    setShortValue("");
    setLocked(false);
    setWasCorrect(null);
  }

  return (
    <div className="quiz-shell">
      <div className="quiz-wrap">
        <header className="flex items-start justify-between gap-4">
          <div>
            <p className="quiz-kicker">Human Anatomy · Unit 1</p>
            <h1 className="quiz-title">Core Study Quiz</h1>
            <p className="quiz-lede">
              One question at a time. Answers stay tagged by lecture, such as L4 1 A.
            </p>
          </div>
          <BookOpen className="mt-1 size-7 shrink-0 text-primary" aria-hidden />
        </header>

        {screen === "start" && (
          <section className="quiz-card">
            <h2 className="text-lg font-medium">Lecture picker</h2>
            <p className="quiz-lede" style={{ marginTop: 4 }}>
              Questions come from the Unit 1 study guide; keys are taken from the lecture decks.
            </p>
            <div className="quiz-pick">
              {LECTURES.map((item) => {
                const total = countByLecture(item.id);
                const done = masteredCounts[item.id] ?? 0;
                const active = lecture === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    data-active={active}
                    onClick={() => setLecture(item.id)}
                  >
                    <span className="block font-medium">{item.title}</span>
                    <span className="mt-1 block font-mono text-xs text-muted-foreground">
                      {item.subtitle} · {done}/{total} mastered
                    </span>
                  </button>
                );
              })}
            </div>
            <label className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
              <input
                type="checkbox"
                className="mt-1 size-4 accent-primary"
                checked={skipCorrect}
                onChange={(e) => setSkipCorrect(e.target.checked)}
              />
              Subsequent quizzes exclude questions you already answered correctly
            </label>
            <p className="mt-3 font-mono text-xs text-muted-foreground">
              {correctIds.length} of {QUESTIONS.length} questions marked correct on this device.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button onClick={startQuiz}>Start quiz</Button>
              <Button
                variant="ghost"
                onClick={() => {
                  resetProgress();
                  setCorrectIds([]);
                }}
              >
                <RotateCcw className="size-4" />
                Reset saved progress
              </Button>
            </div>
          </section>
        )}

        {screen === "quiz" && current && (
          <section className="quiz-card">
            <div className="flex items-center justify-between gap-3">
              <span className="quiz-tag">{current.tag}</span>
              <span className="font-mono text-xs text-muted-foreground">
                Question {index + 1} of {queue.length}
              </span>
            </div>
            <p className="mt-4 text-xs font-medium tracking-[0.14em] text-warn uppercase">
              {TYPE_LABEL[current.type]}
            </p>
            <h2 className="mt-2 text-xl leading-snug sm:text-2xl">{current.prompt}</h2>

            {current.type === "short" ? (
              <input
                value={shortValue}
                onChange={(e) => setShortValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") checkAnswer();
                }}
                disabled={locked}
                placeholder="Type your answer"
                className="quiz-input"
              />
            ) : (
              <div className="mt-5 flex flex-col gap-2">
                {(current.choices ?? []).map((choice, i) => {
                  const letter = String.fromCharCode(65 + i);
                  let state = "";
                  if (locked && i === current.answer) state = "right";
                  else if (locked && selected === i && i !== current.answer) state = "wrong";
                  else if (!locked && selected === i) state = "selected";
                  return (
                    <button
                      key={choice}
                      type="button"
                      disabled={locked}
                      data-state={state}
                      className="quiz-choice"
                      onClick={() => setSelected(i)}
                    >
                      {current.type === "tf" ? choice : `${letter}. ${choice}`}
                    </button>
                  );
                })}
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              {!locked && (
                <Button
                  onClick={checkAnswer}
                  disabled={current.type === "short" ? shortValue.trim().length === 0 : selected === null}
                >
                  Check answer
                </Button>
              )}
              {locked && (
                <Button onClick={nextQuestion}>
                  {index + 1 >= queue.length ? "Finish" : "Next question"}
                </Button>
              )}
              <Button variant="ghost" onClick={() => setScreen("end")}>
                End quiz
              </Button>
            </div>

            {locked && wasCorrect !== null && (
              <div className={`quiz-feedback ${wasCorrect ? "ok" : "bad"}`}>
                <p className="flex items-center gap-2 font-medium">
                  {wasCorrect ? <Check className="size-4 text-ok" /> : <X className="size-4 text-bad" />}
                  {wasCorrect ? "Correct" : "Incorrect"} · tagged {current.tag}
                </p>
                {!wasCorrect && (
                  <p className="mt-2 text-sm">
                    Expected:{" "}
                    {current.type === "short"
                      ? current.accept[0]
                      : (current.choices?.[current.answer ?? 0] ?? "")}
                  </p>
                )}
                <p className="mt-2 text-sm text-muted-foreground">{current.explain}</p>
              </div>
            )}
          </section>
        )}

        {screen === "end" && (
          <section className="quiz-card">
            <h2 className="text-lg font-medium">Session complete</h2>
            <p className="quiz-lede">
              You answered {runCorrect} of {runAnswered} correctly this session. Mastered items stay
              excluded until you reset progress.
            </p>
            <div className="mt-5">
              <Button
                onClick={() => {
                  setScreen("start");
                  setCorrectIds(loadCorrectIds());
                }}
              >
                Back to lecture picker
              </Button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
