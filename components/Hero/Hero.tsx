import Navigation from "@/components/layout/Navigation/Navigation";
import Spotlight from "@/components/Ui/Spotlight/Spotlight";
import styles from "./Hero.module.css";
import { specimens } from "@/data/faded-archive";

export default function Hero() {
  const preview = specimens.slice(0, 3);
  return (
    <div className={styles.exhibition}>
      <Spotlight />
      <section id="entrance" className={styles.entrance} aria-labelledby="archive-title">
        <Navigation />
        <div className={styles.noise} aria-hidden="true" />
        <div className={styles.heroLight} aria-hidden="true" />

        <div className={styles.intro}>
          <p className={styles.eyebrow}>A DIGITAL MUSEUM OF SELECTED MATTER</p>
          <h1 id="archive-title">6XARCHIVE</h1>
          <p className={styles.statement}>Every object deserves<br />its own story.</p>
        </div>

        <a className={styles.scrollPrompt} href="#threshold">
          <span className={styles.scrollRule} aria-hidden="true" />
          <span>ENTER THE ARCHIVE</span>
        </a>
        <p className={styles.status}>LIGHT SYSTEM / ONLINE</p>
      </section>

      <section id="threshold" className={styles.threshold} aria-labelledby="threshold-title">
        <div className={styles.thresholdCopy}>
          <p className={styles.sectionLabel}>00 / THE THRESHOLD</p>
          <h2 id="threshold-title">There is no<br /><em>ordinary</em> entry.</h2>
          <p className={styles.bodyCopy}>Step beyond the surface. This is a living record of collected images, curious objects, and the work that connects them.</p>
        </div>
        <div className={styles.corridor} aria-hidden="true">
          <div className={styles.frameOne} />
          <div className={styles.frameTwo} />
          <div className={styles.frameThree} />
          <div className={styles.floorLine} />
          <p>FOLLOW THE LIGHT</p>
        </div>
      </section>

      <section id="idx-000" className={styles.index} aria-labelledby="curator-title">
        <div className={styles.indexHeading}>
          <p className={styles.sectionLabel}>FIRST INDEXED OBJECT</p>
          <p className={styles.catalogue}>ACCESSION / IDX-000</p>
        </div>
        <article className={styles.file}>
          <div className={styles.fileTab}>PERSONAL RECORD</div>
          <div className={styles.fileBody}>
            <p className={styles.fileCode}>IDX-000 / ACTIVE FILE</p>
            <h2 id="curator-title">THE CURATOR</h2>
            <p>The archive begins with the hand behind its selections: a creative practice arranged as an evolving personal record.</p>
            <a href="/idx-000" className={styles.fileLink}>OPEN RECORD <b aria-hidden="true">↗</b></a>
          </div>
          <div className={styles.fileStamp}>6X<br />ARCHIVE</div>
        </article>
      </section>

      <section id="arc-001" className={styles.exhibit} aria-labelledby="exhibit-title">
        <div className={styles.exhibitNoise} aria-hidden="true" />
        <div className={styles.exhibitHeading}>
          <p className={styles.sectionLabel}>NEXT EXHIBITION</p>
          <p className={styles.catalogue}>ARC-001 / FADED ARCHIVE</p>
        </div>

        <div className={styles.exhibitIntro}>
          <h2 id="exhibit-title">FADED<br /><em>ARCHIVE</em></h2>
          <p className={styles.exhibitCopy}>
            A collectible card series, catalogued. {specimens.length} specimens preserved
            and on display, each one treated as a recovered object rather than a finished
            product.
          </p>
          <a href="/faded-archive" className={styles.exhibitLink}>
            ENTER EXHIBITION <b aria-hidden="true">↗</b>
          </a>
        </div>

   <div className={styles.previewGrid}>
          {preview.map((item) => (
            <div className={styles.previewCard} key={item.id}>
              <div className={styles.previewFrame}>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.previewImage}
                  />
                ) : (
                  <span>IMAGE PENDING</span>
                )}
              </div>
              
            </div>
          ))}
        </div>
      </section>

      <section id="the-house" className={styles.house} aria-labelledby="house-title">
        <div className={styles.houseNoise} aria-hidden="true" />
        <div className={styles.houseHeading}>
          <p className={styles.sectionLabel}>THE STRUCTURE</p>
          <p className={styles.catalogue}>THE HOUSE / ALL DIVISIONS</p>
        </div>

        <div className={styles.houseIntro}>
          <h2 id="house-title">One archive,<br /><em>five divisions.</em></h2>
          <p className={styles.houseCopy}>
            6X Archives is the gallery and archive layer of the house — five creative
            divisions, each with its own world, living under one roof.
          </p>
          <a href="/about" className={styles.houseLink}>
            VIEW THE STRUCTURE <b aria-hidden="true">↗</b>
          </a>
        </div>

        <ul className={styles.houseList}>
          <li>Faded Archive</li>
          <li>Hidup Bola Club</li>
          <li>Breakfast Club</li>
          <li>BLesport</li>
          <li>Funhey Lucks Co.</li>
        </ul>
      </section>

      <section id="div-02" className={styles.hbc} aria-labelledby="hbc-title">
        <div className={styles.hbcNoise} aria-hidden="true" />
        <div className={styles.hbcHeading}>
          <p className={styles.sectionLabel}>Our Club</p>
          <p className={styles.catalogue}>DIV-02 / HIDUP BOLA CLUB</p>
        </div>

        <div className={styles.hbcIntro}>
          <h2 id="hbc-title">HIDUP BOLA<br /><em>CLUB</em></h2>
          <p className={styles.hbcCopy}>
            Football is more than a game. It&apos;s a culture. Born in Batu Pahat, Johor —
            friendship first, football second.
          </p>
          <a href="/hbc" className={styles.hbcLink}>
            ENTER HBC <b aria-hidden="true">↗</b>
          </a>
        </div>

        <div className={styles.hbcPreview}>
          <img
            src="/hbc/HB-mascot-white.png"
            alt="HBC club badge"
            width={1933}
            height={1932}
          />
        </div>
      </section>
    </div>
  );
}