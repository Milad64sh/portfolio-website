import React from 'react';
import styles from './projectDetail.module.scss';

interface ProjectDetail {
  project?: {
    id: number;
    title: string;
    prjDesc: string;
    longDesc: string;
    prjLink: string;
    prjImg: string;
  };
}
const ProjectDetail: React.FC<ProjectDetail> = ({ project }) => {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.container__section}>
          <h3>{project?.title}</h3>
          <p>{project?.longDesc}</p>
        </section>
      </main>
    </>
  );
};

export default ProjectDetail;
