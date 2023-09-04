import React from 'react';
import styles from './projectsList.module.scss';
import SingleProject from './SingleProject';
import { useAppContext } from '../../../contexts/AppContext';
const ProjectsList = () => {
  const { videosData } = useAppContext();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h3>projects</h3>
        </div>
      </div>
      <div className={styles.singleProject}>
        {videosData.map((projectVideo) => (
          <SingleProject
            key={projectVideo.id}
            title={projectVideo.title}
            videoSrc={projectVideo.vidSrc}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsList;
