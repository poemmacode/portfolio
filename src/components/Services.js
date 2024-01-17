import styles from "./Services.module.css";
import { Player } from '@lottiefiles/react-lottie-player';

import { useState, useEffect } from "react";


export const Services = () => {
  const [services, setServices] = useState(null);
useEffect(() => {
  const query = `{
    serviceCollection{
      items{
        title
        description {
          json
        }
        icon
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
      setServices(data.serviceCollection.items);

    });
}, []);

// show a loading screen case the data hasn't arrived yet
if (!services) {
  return "Loading...";
}
  return (
    <section className={styles.wrapper}>
      {services.map((service, index) => {
        const description = service.description.json.content[0].content[0].value
        return (
          <div className={styles.card} key={index}>
            <Player
              src={service.icon}
              loop
              className={styles.playerIcon}
              autoplay
            />
            <h2 className={styles.title}>{service.title}</h2>
            <p className={styles.description}>{description}</p>
          </div>
        );
      })}
    </section>
  );
};
