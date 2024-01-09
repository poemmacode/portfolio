import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <h1 className={styles.title}>Jose Estrada</h1>
      <p>+52 322 309 4304 | <a href="mailto:contact@joseestrada.engineer">contact@joseestrada.engineer</a></p>
      <div className={styles.socials}>
        <a href="https://twitter.com/ItriMakena">
          <img
          src="/assets/socials/twitter.png"
          alt="social-icon"
          className={styles.icon}
        /></a>
         <a href="https://www.linkedin.com/in/jose-maria-estrada-madera/">
          <img
          src="/assets/socials/linkedin.png"
          alt="social-icon"
          className={styles.icon}
        /></a>
         <a href="https://github.com/jestradadeveloper">
          <img
          src="/assets/socials/github.png"
          alt="social-icon"
          className={styles.icon}
        /></a>

      </div>
    </footer>
  );
};
