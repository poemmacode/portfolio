import styles from "./Projects.module.css";
export const ProjectItem = ({project}) => {
  const description = project.description.json.content[0].content[0].value
  return (
    <a href={project.link} target="_blank" rel="noreferrer">
      <div className={styles.card}>
        <div className={styles.cover}>
          <img className={styles.image} src={project.poster.url} alt="cover" />
        </div>

        <div className={styles.info}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </a>
  );
};
