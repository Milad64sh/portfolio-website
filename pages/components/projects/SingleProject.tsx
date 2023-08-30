import React from 'react';
import styles from './singleProject.module.scss';

interface Project {
  videoFileName: {
    id: number;
    videoName: string;
  };
}
const SingleProject: React.FC<Project> = ({ videoFileName }) => {
  return (
    <div className={styles.container}>
      <video autoPlay muted loop playsInline className={styles.video}>
        <source
          src={`../../../public/videos/real estate-start.mp4/${videoFileName.videoName}`}
        />
      </video>
    </div>
  );
};

export default SingleProject;
