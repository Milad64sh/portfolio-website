import React from 'react';
import styles from './project.module.scss';

interface ProjectProp {
  project?: {
    id: number;
    title: string;
    prjDesc: string;
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
          <h4>{project.title}</h4>
        </div>
      </div>
    </>
  );
};

export default Project;
