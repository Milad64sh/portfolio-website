import React from 'react';
import styles from './projects.module.scss';
import { useAppContext } from '../../../contexts/AppContext';
import Project from './Project';

interface ProjectsProp {
  toggle: boolean;
}
const Projects: React.FC<ProjectsProp> = ({ toggle }) => {
  const { projects } = useAppContext();
  return (
    <div className={styles.container}>
      {projects.map((project: any, index: number) =>
        project && project.id && project.title && project.prjDesc ? (
          <Project
            key={project.id}
            project={project}
            index={index}
            style={
              toggle
                ? styles[`project-${index}--showProject`]
                : styles[`project-${index}--closeProject`]
            }
          />
        ) : null
      )}
    </div>
  );
};

export default Projects;
