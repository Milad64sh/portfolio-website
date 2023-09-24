import React from 'react';
import styles from './projectsList.module.scss';
import SingleProject from './SingleProject';
import { useAppContext } from '../../../contexts/AppContext';
import Heading from '../Heading';
import ProjectsListMobile from './ProjectsListMobile';
const ProjectsList = () => {
  const { videosData } = useAppContext();
  return (
    <>
      <div className={styles.projectMobileContainer}>
        <ProjectsListMobile />
      </div>
      <div className={styles.container}>
        <Heading name='projects' />
        <div className={styles.singleProject}>
          {videosData.map((projectVideo) => (
            <SingleProject
              key={projectVideo.id}
              title={projectVideo.title}
              videoSrc={projectVideo.vidSrc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsList;
