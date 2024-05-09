import React from 'react';
import styles from './projectImage.module.scss';

interface ProjectDetail {
  project?:
    | {
        id: number;
        title: string;
        prjDesc: string;
        longDesc: string;
        prjLink: string;
        prjImg: string;
      }
    | undefined;
}
const ProjectImage: React.FC<ProjectDetail> = ({ project }) => {
  return (
    <div className={styles.container}>
      <img src={project?.prjImg} alt='first Project' />
    </div>
  );
};

export default ProjectImage;
