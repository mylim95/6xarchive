"use client";

import { useEffect, useRef, useState } from "react";
import answers from "./answers.json";
import styles from "./page.module.css";

type Answer = (typeof answers)[number];

export default function AnswerBookPopup() {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState<Answer | null>(null);
  const previousIndex = useRef(-1);

  function reveal() {
    let index = Math.floor(Math.random() * answers.length);
    if (answers.length > 1 && index === previousIndex.current) index = (index + 1) % answers.length;
    previousIndex.current = index;
    setAnswer(answers[index]);
  }

  function openBook() {
    reveal();
    setOpen(true);
  }

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = ""; };
  }, [open]);

  return <>
    <button type="button" className={styles.answerBookTrigger} onClick={openBook} aria-label="打开答案之书" />
    {open && <div className={styles.answerOverlay} onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
      <section className={styles.answerPopup} role="dialog" aria-modal="true" aria-label="BLESPORT 答案之书">
        <button type="button" className={styles.answerClose} onClick={() => setOpen(false)} aria-label="关闭答案之书">×</button>
        <div className={styles.answerArtwork}>
          <div className={styles.answerTalisman} aria-live="polite" aria-atomic="true">
            {answer && <><span className={styles.answerTitle}>{answer.title}</span><strong>{answer.answer}</strong><span className={styles.answerGuidance}>{answer.guidance}</span></>}
          </div>
        </div>
        <button type="button" className={styles.answerAgain} onClick={reveal}>再求一答 <span aria-hidden="true">↻</span></button>
      </section>
    </div>}
  </>;
}
