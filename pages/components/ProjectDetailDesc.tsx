import React from 'react';
import styles from './projectDetailDesc.module.scss';
import Link from 'next/link';

interface ProjectDetail {
  project?:
    | {
        id: number;
        title: string;
        prjDesc: string;
        prjLink: string;
      }
    | undefined;
}

const ProjectDetailDesc: React.FC<ProjectDetail> = ({ project }) => {
  return (
    <div className={styles.descContainer}>
      <p className={styles.descContainer__p}>{project?.prjDesc}</p>
      {project?.prjLink && (
        <Link href={project.prjLink} legacyBehavior>
          <a className={styles.descContainer__href}>view Site</a>
        </Link>
      )}
    </div>
  );
};

export default ProjectDetailDesc;
