import styles from "./About.module.css";
import { useState, useEffect } from "react";

export const Experience = () => {
  const [experiences, setExperiences] = useState(null);
  useEffect(() => {
    const query = `{
      experienceCollection{
        items{
          role
          company
          endDate
        }
      }
    }`;
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_KEY}`,
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setExperiences(data.experienceCollection.items);

      });
  }, []);

  // show a loading screen case the data hasn't arrived yet
  if (!experiences) {
    return "Loading...";
  }

  return (
    <>
      {experiences.map((item, index) => {
        return (
          <div className={styles.card} key={index}>
            <div className={styles.info}>
              <h1 className={styles.title}>{item.role}</h1>
              <h3 className={styles.subtitle}>{item.company}</h3>
              <p className={styles.description}>{item.endDate}</p>
            </div>
            <div className={styles.info}>
              <img className={styles.icon} src="assets/about/experience.png" alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
};
