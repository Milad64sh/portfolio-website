import React from 'react';
import styles from './projects.module.scss';
import { useAppContext } from '../../../contexts/AppContext';
import Project from './Project';

interface ProjectsProps {
  toggle: boolean;
  handleProjectDetail: (id: number) => void;
}
const Projects: React.FC<ProjectsProps> = ({ toggle, handleProjectDetail }) => {
  const { projects } = useAppContext();
  return (
    <div className={styles.container}>
      {projects.map((project: any, index: number) =>
        project && project.id && project.title && project.prjDesc ? (
          <Project
            key={project.id}
            project={project}
            index={index}
            handleDetail={handleProjectDetail}
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
