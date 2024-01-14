import styles from "./HeroArea.module.css";
import { Button } from "./Button";

export const HeroArea = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <img
          className={styles.profile}
          src="/assets/joseestradamadera.jpeg"
          alt="profile"
        />
        <h1 className="title">Hi, I'm Jose Estrada</h1>
        <p className="description">
          A Software Engineer always looking for new challenges and new adventures
        </p>
        <div className={styles.buttonBox}>
          <Button id="projects" label="Proyects" />
          <Button id="contact" label="Get in touch" secondary/>
        </div>
      </div>
    </section>
  );
};
