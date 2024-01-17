import styles from "./About.module.css";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Player } from "@lottiefiles/react-lottie-player";
export const About = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.aboutRow}>
        <h2>Professional Experience</h2>
        <span className={styles.reverse}>
          <Player
            className={styles.playerIcon}
            autoplay
            loop
            src="https://lottie.host/97849360-a347-4997-90aa-08ce80b5c5d5/nmlLBrgzlu.json"
          />
        </span>
      </div>

      <Experience />
     
      <div className={styles.aboutRow}>
      <h2>Academic Background</h2>
        <span className={styles.reverse}>
          <Player
            className={styles.playerIcon}
            autoplay
            loop
            src="https://lottie.host/62293395-8c49-4c9a-b742-b5d6a9dcc4b8/xDMCfZNAuM.json"
          />
        </span>
      </div>
      <Education />
    </section>
  );
};
