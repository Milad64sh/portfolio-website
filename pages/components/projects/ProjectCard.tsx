import React from 'react';
import styles from './projectCard.module.scss';

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
const ProjectCard: React.FC<ProjectDetail> = ({ project }) => {
  return (
    <>
      <aside className={styles.aside}>
        <nav>
          <ul>
            <li>
              <h3>{project?.title}</h3>
            </li>
          </ul>
        </nav>
        <main>
          <img src={project?.prjImg} alt='' />
        </main>
      </aside>
    </>
  );
};

export default ProjectCard;
