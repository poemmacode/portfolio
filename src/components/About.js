import styles from "./About.module.css";
import { Education } from "./Education";
import { Experience } from "./Experience";

export const About = () => {

  return (
    <section className={styles.wrapper}>
      <Experience />
      <Education />

    </section>
  );
};
