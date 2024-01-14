import styles from './Button.module.css'
export const Button = ({ id, label, secondary }) => {
  const handleClick = () => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <button
        className={`${styles.button} ${secondary ? styles.btnGradSecondary : styles.btnGradPrimary}`}
        onClick={handleClick}
      >
        {label}
      </button>
    </>
  );
};
