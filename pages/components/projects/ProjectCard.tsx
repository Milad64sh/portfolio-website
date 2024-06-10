import React, { useEffect, useState } from 'react';
import styles from './projectCard.module.scss';
import { title } from 'process';

interface ProjectDescriptions {
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
  handleClick: (
    projectId: number,
    mouseEvent: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => void;
  isSelected: boolean;
}
const ProjectCard: React.FC<ProjectDescriptions> = ({
  project,
  handleClick,
  isSelected,
}) => {
  const [clicked, setClicked] = useState<boolean>(false);
  useEffect(() => {
    setClicked(isSelected);
  }, [isSelected]);
  const handleClickImage = (
    mouseEvent: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    if (project) {
      handleClick(project.id, mouseEvent);
      setClicked(true);
    }
  };
  return (
    <>
      <main className={styles.container}>
        <nav className={styles.container__nav}>
          <div
            onClick={handleClickImage}
            style={{ backgroundImage: `url(${project?.prjImg})` }}
            className={styles.container__nav__imgContainer}
          >
            <h3 className={styles.container__nav__imgContainer__h3}>
              {project?.title}
            </h3>
          </div>
        </nav>
      </main>
    </>
  );
};

export default ProjectCard;
