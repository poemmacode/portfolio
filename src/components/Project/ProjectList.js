import styles from "./Projects.module.css";
import { useState, useEffect } from "react";
import { ProjectItem } from "./ProjectItem";

const ProjectList = () => {
  const [projects, setProjects] = useState([])

  useEffect(()=>{
    const query = `{
      projectCollection{
        items{
          title
          link
          description {
            json
          }
          poster{
            url
          }
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
          //console.error(errors);
        }

        //console.log(data.projectCollection.items)
        // rerender the entire component with new data
        setProjects(data.projectCollection.items);

      });
  }, [])


 return (
  <section className={styles.wrapper}>
      {projects.length === 0 ? <>Cargando...</> : (projects.map((project,index) => <ProjectItem key={index} project={project}/>))}
  </section>
  )
};

export {ProjectList}
