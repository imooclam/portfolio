import { useGlobalContext } from '../GlobalContext';
import React from 'react';

const Project = () => {
  const { projects } = useGlobalContext();
  console.log(projects);
  return (
    <section>
      <article className="container">
        <h1 className="section-title py-5 project">
          My Project = {projects.length}
        </h1>
        <article className="card">
          {projects.map(project => {
            const { name, img, id, icon, link } = project;
            return (
              <a key={id} href={link} target={'_blank'} className="link">
                <img src={img} alt={name} className="img" />
                <article className="card__footer">
                  <p>{name}</p>
                  <p>{icon}</p>
                </article>
              </a>
            );
          })}
        </article>
      </article>
    </section>
  );
};
export default Project;
