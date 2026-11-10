import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Almanac from "./Almanac";
import AnswerBookPopup from "./AnswerBookPopup";
import IncenseOffering from "./IncenseOffering";

export const metadata: Metadata = {
  title: "BLESPORT 摆烂超六 — 阴司有约",
  description: "BLESPORT 摆烂超六：赢是本事，输也是修行。六位师兄与道士的民俗怪谈式电竞门派。",
};

const trigrams = ["乾", "兑", "离", "震", "巽", "坎", "艮", "坤"];
const members = [
  { name: "大师兄", src: "/blesport/gamers1.png", alt: "大师兄角色插画", width: 233, height: 325 },
  { name: "二师兄", src: "/blesport/gamers2.png", alt: "二师兄角色插画", width: 242, height: 319 },
  { name: "三师兄", src: "/blesport/gamers3.png", alt: "三师兄角色插画", width: 248, height: 318 },
  { name: "四师兄", src: "/blesport/gamers4.png", alt: "四师兄角色插画", width: 243, height: 330 },
  { name: "五师兄", src: "/blesport/gamers5.png", alt: "五师兄角色插画", width: 242, height: 326 },
  { name: "六师兄", src: "/blesport/gamers6.png", alt: "六师兄角色插画", width: 244, height: 338 },
];

function SkullSeal() {
  return (
    <div className={styles.seal}>
      <Image
        src="/blesport/6X-GAMING-LOGO-v1.png"
        alt="BLESPORT skull mascot wearing a red cap and yellow talisman"
        width={1714}
        height={2547}
      />
    </div>
  );
}

export default function BlesportPage() {
  return (
    <main className={styles.page}>
      <div className={styles.grain} aria-hidden="true" />
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark}>6X / ARCHIVE</Link>
        <p>阴司档案 · 卷宗 006</p>
        <a href="#join" className={styles.navJoin}>入队上香 <span aria-hidden="true">↗</span></a>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroFog} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span /> 民俗电竞门派 · EST. 2022</p>
          <h1 id="hero-title"><span>BL</span>ESPORT</h1>
          <p className={styles.cnTitle}>摆烂超六</p>
          <p className={styles.heroLine}>赢是本事，输也是修行。</p>
          <p className={styles.heroNote}>此间不问胜负，只问香火够不够旺。</p>
          <a className={styles.primaryCta} href="#join">递上名帖 <span aria-hidden="true">↓</span></a>
        </div>
        <div className={styles.altar} role="img" aria-label="BLESPORT骷髅标志与乾、兑、离、震、巽、坎、艮、坤八卦阵一同旋转">
          <div className={styles.rotatingDisc} aria-hidden="true">
            <div className={styles.outerSeal}><span>乾坤八卦 · 阴阳轮转 · 摆烂超六 · </span></div>
            <div className={styles.bagua}>
              <div className={styles.baguaLabels}>{trigrams.map((t, i) => <span key={i}>{t}</span>)}</div>
              <div className={styles.baguaInner}><i /><b /><i /></div>
            </div>
            <SkullSeal />
          </div>
          <span className={styles.altarCaption}>乾坤八卦阵 · 常转不息</span>
        </div>
        <div className={styles.heroFoot}><span>阴司档案 / 006</span><span>香火不断 · 恭候有缘人</span><span>向下入殿 ↓</span></div>
      </section>

      <IncenseOffering />

      <Almanac />

      <section className={styles.manifesto} aria-labelledby="manifesto-title">
        <div className={styles.sectionIndex}><span>01 / 门规</span><span>THE WAY OF BLESPORT</span></div>
        <div className={styles.manifestoBody}>
          <p className={styles.redStamp}>本门宗旨</p>
          <h2 id="manifesto-title">认真摆烂，<br /><em>随缘超神。</em></h2>
          <div className={styles.manifestoText}><p>我们相信，胜负自有天意，心态才是修行。香要烧，局要打，输了记得把心放宽；赢了也别飘，回去继续上香。</p><p>BLESPORT 摆烂超六，是一群把游戏当道场、把队友当师兄弟的怪人。六位师兄镇守阵眼，道士负责看香。</p></div>
          <p className={styles.sealQuote}>「香火未尽，诸位皆有翻盘之日。」</p>
        </div>
        <Image
          className={styles.manifestoCharm}
          src="/blesport/6X-GAMING-LOGO-fu.png"
          alt="BLESPORT 摆烂超六符纸标志"
          width={665}
          height={1560}
        />
        <div className={styles.manifestoMark} aria-hidden="true">道</div>
      </section>

      <section className={styles.members} aria-labelledby="members-title">
        <div className={styles.sectionIndex}><span>02 / 六位师兄</span><span>THE SIX BROTHERS</span></div>
        <div className={styles.membersHead}><div><p className={styles.eyebrow}>六道阵眼 · 六位一体</p><h2 id="members-title">师兄请留步。</h2></div><p>名号各有不同，辈分一视同仁。<br />门中不排座次，只论谁先添香。</p></div>
        <div className={styles.memberGrid}>{members.map((member, i) => <article className={styles.memberCard} key={member.name}>
          <div className={styles.memberPortrait}>
            <Image className={styles.memberImage} src={member.src} alt={member.alt} width={member.width} height={member.height} />
          </div>
          <div className={styles.memberInfo}><span>师兄 · 阵位 {String(i + 1).padStart(2, "0")}</span><h3>{member.name}</h3><span className={styles.incense}>☼　香火已续</span></div>
        </article>)}</div>
      </section>

      <section className={styles.master} aria-labelledby="master-title">
        <div className={styles.sectionIndex}><span>03 / 掌坛道士</span><span>THE TAOIST</span></div>
        <div className={styles.masterPanel}>
          <div className={styles.masterPortrait}>
            <Image src="/blesport/Taoist Zombie Exorcist.png" alt="BLESPORT 道士经理形象，手持镇邪符令" width={1312} height={1199} />
          </div>
          <div className={styles.masterCopy}><p className={styles.eyebrow}>看香 · 排阵 · 管饭</p><h2 id="master-title">道士在此，<br /><em>诸邪退散。</em></h2><p>负责带队，也负责把六位师兄从走火入魔边缘请回来。开局前先净手，上分前先上香；若还是不顺，那一定是香没烧旺。</p><span className={styles.masterSignature}>掌坛道士　敬上</span></div>
        </div>
      </section>

      <section className={styles.answerBook} aria-labelledby="answer-book-title">
        <div className={styles.sectionIndex}><span>04 / 答疑手册</span><span>ANSWER BOOK</span></div>
        <div className={styles.answerBookHeading}>
          <p className={styles.eyebrow}>入门须知 · 香火礼数</p>
          <h2 id="answer-book-title">答疑手册</h2>
        </div>
        <div className={styles.answerBookStage}>
          <Image className={styles.answerBookLantern} src="/blesport/lantern.png" alt="" aria-hidden="true" width={1024} height={1536} />
          <div className={styles.answerBookMedia}>
            <video src="/blesport/answer-book-video.mp4" autoPlay muted loop playsInline controls={false} preload="auto" disablePictureInPicture disableRemotePlayback aria-label="BLESPORT 答疑手册循环视频" />
            <AnswerBookPopup />
          </div>
          <Image className={styles.answerBookLantern} src="/blesport/lantern.png" alt="" aria-hidden="true" width={1024} height={1536} />
        </div>
      </section>

      <section className={styles.join} id="join" aria-labelledby="join-title">
        <div className={styles.joinSmoke} aria-hidden="true" />
        <p className={styles.eyebrow}>05 / 有缘便来 · JOIN THE RITUAL</p>
        <h2 id="join-title">入队上香</h2>
        <p>心诚则灵，来者是客。<br />想和师兄们一起修行？来信留下名帖，道士会替你看香。</p>
        <a className={styles.primaryCta} href="#members-title"><b>先拜见师兄</b> <span aria-hidden="true">↗</span></a>
        <figure className={styles.joinArtwork}>
          <video src="/blesport/join-us-zombie-animation.mp4" autoPlay muted loop playsInline controls={false} preload="auto" disablePictureInPicture disableRemotePlayback aria-label="BLESPORT 僵尸上香循环动画" />
        </figure>
        <span className={styles.joinDisclaimer}>入门前请自备一点幽默感</span>
      </section>

      <footer className={styles.footer}><span>BLESPORT 摆烂超六</span><span>香火不断 · 平安喜乐</span><a href="#hero-title">回到坛前 ↑</a></footer>
    </main>
  );
}
