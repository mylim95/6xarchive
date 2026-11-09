"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const blessings = [
  { title: "贵人相助", mark: "上吉", text: "近期自有同路人伸手相扶。稳住阵脚，好机会会在恰当时机出现。" },
  { title: "稳步向前", mark: "中吉", text: "今日不必急着求胜。把眼前一局打好，下一步自然看得更清楚。" },
  { title: "否极泰来", mark: "转运", text: "低谷只是换气的间隙。收拾心情再出发，转机已在路上。" },
  { title: "心想事成", mark: "吉", text: "所求之事正在聚势。保持耐心，也别忘了给自己留一点余地。" },
  { title: "顺风顺水", mark: "大吉", text: "今日气运平顺，宜把握手边机会。该休息时也安心休息。" },
  { title: "今日宜静", mark: "平签", text: "不争一时高低，先把心神安顿好。静下来，答案会慢慢浮现。" },
];

type OfferingState = "idle" | "burning" | "revealed";

export default function IncenseOffering() {
  const [state, setState] = useState<OfferingState>("idle");
  const [fortune, setFortune] = useState<(typeof blessings)[number] | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  function offerIncense() {
    if (state === "burning") return;
    if (timer.current) clearTimeout(timer.current);

    const nextFortune = blessings[Math.floor(Math.random() * blessings.length)];
    setFortune(nextFortune);
    setState("burning");

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    timer.current = setTimeout(() => setState("revealed"), prefersReducedMotion ? 0 : 1700);
  }

  return (
    <section className={styles.incenseSection} aria-labelledby="incense-title">
      <div className={styles.incenseArtwork} aria-hidden="true">
        <div className={styles.incenseSticks + " " + (state !== "idle" ? styles.incenseLit : "") + " " + (state === "burning" ? styles.incenseBurning : "")}>
          <span /><span /><span />
          <i /><i /><i />
        </div>
      </div>
      <div className={styles.incenseShade} aria-hidden="true" />
      <div className={styles.incenseContent}>
        <div className={styles.sectionIndex}><span>香火延续</span><span>BLESPORT · OFFERING</span></div>
        <p className={styles.eyebrow}>心诚则灵 · 一炷清香</p>
        <h2 id="incense-title">上香祈愿</h2>
        <p className={styles.incenseIntro}>在坛前静一静，许下心愿，再听今日一签。</p>

        {state === "revealed" && fortune ? (
          <div className={styles.fortuneCard} key={fortune.title + "-" + fortune.mark}>
            <span className={styles.fortuneMark}>{fortune.mark}</span>
            <p>BLESPORT · 今日香火有示</p>
            <h3>{fortune.title}</h3>
            <span className={styles.fortuneRule} aria-hidden="true" />
            <p className={styles.fortuneText}>{fortune.text}</p>
          </div>
        ) : (
          <p className={styles.incensePrompt} aria-live="polite">
            {state === "burning" ? "香火已燃，静候天机……" : "一炷清香 · 一份心愿 · 一句天机"}
          </p>
        )}

        <button className={styles.incenseButton} type="button" onClick={offerIncense} disabled={state === "burning"} aria-describedby="incense-hint">
          {state === "revealed" ? "再上一炷香" : state === "burning" ? "正在祈愿…" : "上香祈愿"}
          <span aria-hidden="true">　↗</span>
        </button>
        <span className={styles.incenseHint} id="incense-hint">
          {state === "revealed" ? "再许一愿，续一炷香火" : "本签随机抽取 · 仅供趣味"}
        </span>
        <p className={styles.incenseStatus} role="status" aria-live="polite">
          {state === "burning" ? "香火已点燃，祝愿正在送达。" : state === "revealed" && fortune ? "今日签文：" + fortune.title + "。" + fortune.text : ""}
        </p>
      </div>
    </section>
  );
}
