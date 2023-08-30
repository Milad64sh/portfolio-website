import React from 'react';
import styles from './projectsList.module.scss';
import SingleProject from './SingleProject';
import { useAppContext } from '../../../contexts/AppContext';
const ProjectsList = () => {
  const { projectsVideo } = useAppContext();
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h3>projects</h3>
      </div>
      <div className={styles.singleProject}>
        {projectsVideo.map((projectVideo) => (
          <SingleProject key={projectVideo.id} videoFileName={projectVideo} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
