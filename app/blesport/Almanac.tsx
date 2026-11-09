"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Solar } from "lunar-typescript";
import styles from "./page.module.css";

type AlmanacDay = {
  date: string;
  weekday: string;
  lunarDate: string;
  yearGanzhi: string;
  zodiac: string;
  dayGanzhi: string;
  yi: string[];
  ji: string[];
  auspicious: string[];
  inauspicious: string[];
  clash: string;
  sha: string;
  term: string;
  directions: { label: string; value: string }[];
};

function getSingaporeDate(): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Singapore",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const part = (type: string) => parts.find((item) => item.type === type)?.value ?? "";
  return `${part("year")}-${part("month")}-${part("day")}`;
}

function getAlmanac(date: string): AlmanacDay {
  const [year, month, day] = date.split("-").map(Number);
  const solar = Solar.fromYmd(year, month, day);
  const lunar = solar.getLunar();
  const weekday = new Intl.DateTimeFormat("zh-SG", {
    timeZone: "Asia/Singapore",
    weekday: "long",
  }).format(new Date(`${date}T12:00:00+08:00`));

  return {
    date,
    weekday,
    lunarDate: `${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}`,
    yearGanzhi: lunar.getYearInGanZhi(),
    zodiac: lunar.getYearShengXiao(),
    dayGanzhi: lunar.getDayInGanZhi(),
    yi: lunar.getDayYi(),
    ji: lunar.getDayJi(),
    auspicious: lunar.getDayJiShen(),
    inauspicious: lunar.getDayXiongSha(),
    clash: lunar.getDayChongDesc(),
    sha: lunar.getDaySha(),
    term: lunar.getJieQi(),
    directions: [
      { label: "喜神", value: lunar.getDayPositionXiDesc() },
      { label: "财神", value: lunar.getDayPositionCaiDesc() },
      { label: "福神", value: lunar.getDayPositionFuDesc() },
    ].filter((item) => item.value),
  };
}

function DateSlip({ date }: { date: string }) {
  const [year, month, day] = date.split("-");
  return (
    <time className={styles.almanacDate} dateTime={date}>
      <span>{year} / {month}</span>
      <strong>{day}</strong>
    </time>
  );
}

function ListField({ title, items, tone }: { title: string; items: string[]; tone: "good" | "avoid" }) {
  return (
    <section className={`${styles.almanacList} ${tone === "good" ? styles.goodList : styles.avoidList}`} aria-label={title}>
      <h3><span aria-hidden="true">{tone === "good" ? "宜" : "忌"}</span>{title}</h3>
      {items.length ? (
        <ul>{items.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}</ul>
      ) : <p className={styles.noItems}>此日无列载</p>}
    </section>
  );
}

export default function Almanac() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const syncDate = () => setDate(getSingaporeDate());
    syncDate();
    const interval = window.setInterval(syncDate, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const day = date ? getAlmanac(date) : null;
  const [year, month, dayOfMonth] = date.split("-");
  const formattedDate = date ? `${year}年${month}月${dayOfMonth}日` : "新加坡日期载入中";

  return (
    <section className={styles.almanacSection} aria-labelledby="almanac-title">
      <div className={styles.almanacSectionHead}>
        <p className={styles.sectionIndex}><span>阴阳历法 / DAILY ALMANAC</span><span>正经黄历 · BLESPORT</span></p>
        <div className={styles.almanacIntro}>
          <div><p className={styles.eyebrow}>每日一签 · 新加坡时区</p><h2 id="almanac-title">今日黄历</h2><p>取传统历书之法，供日常文化参阅。</p></div>
          <div className={styles.almanacEmblem}>
            <Image className={styles.almanacSticker} src="/blesport/zombie-calendar.png" alt="" aria-hidden="true" width={1300} height={1300} />
          </div>
        </div>
      </div>

      <div className={styles.almanacPaper} aria-live="polite" aria-busy={!day}>
        <div className={styles.paperPerforation} aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
        <div className={styles.paperInner}>
          <div className={styles.paperMasthead}><span>民俗日历 · 每日一页</span><span>BLESPORT 阴司档案</span></div>
          <div className={styles.calendarTop}>
            <div className={styles.calendarDateBlock}>
              <p className={styles.calendarDateLabel}>公历 · {day?.weekday ?? ""}</p>
              {day ? <DateSlip date={day.date} /> : <div className={styles.datePlaceholder}>—</div>}
              <p className={styles.lunarDate}>{day ? `农历 ${day.lunarDate}` : "正在载入农历"}</p>
            </div>
            <div className={styles.cycleBlock}>
              <span className={styles.cycleLabel}>年柱 · 生肖</span>
              <strong>{day ? `${day.yearGanzhi}年` : "—"}</strong>
              <span>{day ? `${day.zodiac}年` : ""}</span>
              <i aria-hidden="true">☯</i>
              <small>日柱　{day?.dayGanzhi ?? "—"}</small>
            </div>
          </div>

          {day?.term && <p className={styles.termBadge}><span aria-hidden="true">☼</span> 今日节气 · {day.term}</p>}

          <div className={styles.yiJiGrid}>
            <ListField title="今日宜" items={day?.yi ?? []} tone="good" />
            <ListField title="今日忌" items={day?.ji ?? []} tone="avoid" />
          </div>

          <div className={styles.almanacDetails}>
            <section className={styles.detailBlock} aria-label="传统神煞参考">
              <h3>神煞参考 <span>LIBRARY FIELDS</span></h3>
              <p><b>吉神宜趋</b>{day?.auspicious.length ? day.auspicious.join(" · ") : "此日无列载"}</p>
              <p><b>凶煞宜忌</b>{day?.inauspicious.length ? day.inauspicious.join(" · ") : "此日无列载"}</p>
            </section>
            <section className={styles.detailBlock} aria-label="冲煞与吉神方位">
              <h3>日值 <span>DAILY MARKERS</span></h3>
              <p><b>冲</b>{day?.clash ?? "—"}</p>
              <p><b>煞</b>{day?.sha ?? "—"}</p>
              <p><b>方位</b>{day?.directions.map((item) => `${item.label}${item.value}`).join(" · ") || "—"}</p>
            </section>
          </div>

          <footer className={styles.paperFooter}>
            <span>{formattedDate} · {day?.dayGanzhi ?? "—"}日</span>
            <span>民俗文化参考 · 不作决策依据</span>
          </footer>
        </div>
      </div>
      <p className={styles.almanacDisclaimer}>黄历内容依传统历法算法推算，仅供民俗文化参考；不同历书流派可能存在差异，请勿作为医疗、法律、财务或其他重要决定的唯一依据。</p>
    </section>
  );
}
