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
          <li><a href="/faded-archive">Faded Archive</a></li>
          <li><a href="/hbc">Hidup Bola Club</a></li>
          <li><a href="/breakfast-club">Breakfast Club</a></li>
          <li><a href="/blesport">BLesport</a></li>
          <li><a href="/funhey-lucks">Funhey Lucks Co.</a></li>
        </ul>
      </section>

      <section id="member-club" className={styles.memberClub} aria-labelledby="mac-title">
        <div className={styles.memberClubNoise} aria-hidden="true" />
        <div className={styles.memberClubHeading}>
          <p className={styles.sectionLabel}>Our Member Club</p>
          <p className={styles.catalogue}>MAC / MAMAK ARCHIVE CLUB</p>
        </div>

        <div className={styles.memberClubIntro}>
          <h2 id="mac-title" className={styles.memberClubWordmark}>
            <img src="/mac.png" alt="MAC — Mamak Archive Club" width={1792} height={1024} />
          </h2>
          <p className={styles.memberClubCopy}>
            Mamak Archive Club keeps the character of the kopitiam close — its familiar signs,
            everyday objects, shared tables and rituals, gathered into a living cultural archive.
          </p>
          <p className={styles.memberClubNote}>A NEW MEMBER OF THE HOUSE</p>
        </div>

        <div className={styles.memberClubPreview}>
          <div className={styles.memberClubTicket}>
            <div className={`${styles.memberClubTicketFace} ${styles.memberClubTicketFront}`}>
              <p className={styles.memberClubTicketLabel}>MEMBER PASS <span>MAC / 6X</span></p>
              <img src="/mac.png" alt="" width={1792} height={1024} />
              <div className={styles.memberClubTicketFooter}>
                <span>KOPITIAM CULTURE ARCHIVE</span>
                <span className={styles.memberClubTicketSlashes} aria-hidden="true">////</span>
              </div>
            </div>
            <div className={`${styles.memberClubTicketFace} ${styles.memberClubTicketBack}`} aria-hidden="true">
              <p className={styles.memberClubTicketLabel}>MAMAK ARCHIVE CLUB <span>6XARCHIVE</span></p>
              <p className={styles.memberClubTicketMessage}>A place for the stories, objects and rituals found around the kopitiam table.</p>
              <div className={styles.memberClubTicketFooter}>
                <span>MADE FOR THE EVERYDAY ARCHIVE</span>
                <span className={styles.memberClubTicketSlashes}>////</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
