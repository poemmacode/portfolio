import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <h1 className={styles.title}>Emma Estrada</h1>
      <p>
        +52 322 309 4304 |{" "}
        <a href="mailto:contact@contact@supremma.dev">
          contact@supremma.dev
        </a>
      </p>
      <div className={styles.socials}>
        <a href="https://twitter.com/supremmadev">
          <img
            src="/assets/socials/twitter.png"
            alt="social-icon"
            className={styles.icon}
          />
        </a>
        <a href="https://www.linkedin.com/in/emma-estrada-madera/">
          <img
            src="/assets/socials/linkedin.png"
            alt="social-icon"
            className={styles.icon}
          />
        </a>
        <a href="https://github.com/poemmacode">
          <img
            src="/assets/socials/github.png"
            alt="social-icon"
            className={styles.icon}
          />
        </a>
      </div>
    </footer>
  );
};
