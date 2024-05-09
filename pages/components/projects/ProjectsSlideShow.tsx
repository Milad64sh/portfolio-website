import React from 'react';
import styles from './slideshow.module.scss';
import { useAppContext } from '../../../contexts/AppContext';
import ProjectCard from './ProjectCard';
import ProjectImage from './ProjectImage';
import Project from './Project';

const ProjectsSlideShow = () => {
  const { projects } = useAppContext();
  return (
    <section className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content__detail}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlideShow;
