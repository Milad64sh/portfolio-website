import React from 'react';
import styles from './projectDetail.module.scss';
import Link from 'next/link';

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
        {/* <header className={styles.container__header}>
          {project?.prjLink && (
            <Link href={project.prjLink} legacyBehavior>
              <a>
                <img src={project.prjImg} alt='' />
              </a>
            </Link>
          )}
        </header> */}
        <section className={styles.container__section}>
          <h3>{project?.title}</h3>
          <p>{project?.longDesc}</p>
        </section>
      </main>
    </>
  );
};

export default ProjectDetail;
