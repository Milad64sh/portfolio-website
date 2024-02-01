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
  handleDetail: (id: number) => void;
  style?: string;
  index: number;
}

const Project: React.FC<ProjectProp> = ({ project, style, handleDetail }) => {
  if (!project) {
    return <div>Error: Skill data not provided</div>;
  }
  return (
    <>
      <div className={styles.skill}>
        <div className={style}>
          <h4>
            <button
              className={styles.projectItem}
              onClick={() => {
                handleDetail(project.id);
              }}
            >
              {project.title}
            </button>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Project;
