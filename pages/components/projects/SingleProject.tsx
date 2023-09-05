import React from 'react';
import styles from './singleProject.module.scss';

interface SingleProject {
  title: string;
  videoSrc: string;
}
const SingleProject: React.FC<SingleProject> = ({ title, videoSrc }) => {
  return (
    <div className={styles.container}>
      <div className={styles.singleProject}>
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>
        <div className={styles.video}>
          <video autoPlay muted loop playsInline className={styles.video}>
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>
      <button className={styles.singlePrjBtn}>details</button>
      {/* <div className={styles.borderLine}></div> */}
    </div>
  );
};

export default SingleProject;
