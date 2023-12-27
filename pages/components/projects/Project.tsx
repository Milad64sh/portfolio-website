import React from 'react';
import styles from './project.module.scss';
import Link from 'next/link';

interface ProjectProp {
  project?: {
    id: number;
    title: string;
    prjDesc: string;
    prjLink: string;
  };
  style?: string;
  index: number;
}

const Project: React.FC<ProjectProp> = ({ project, style }) => {
  if (!project) {
    return <div>Error: Skill data not provided</div>;
  }
  return (
    <>
      <div className={styles.skill}>
        <div className={style}>
          <h4>
            <Link href={project.prjLink} legacyBehavior>
              <a className={styles.projectItem} target='_blank'>
                {project.title}
              </a>
            </Link>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Project;
