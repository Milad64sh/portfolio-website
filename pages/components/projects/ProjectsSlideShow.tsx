import React, { useState, useEffect } from 'react';
import Transition from 'react-transition-group/Transition';
import styles from './slideshow.module.scss';
import { useAppContext } from '../../../contexts/AppContext';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';

const ProjectsSlideShow = () => {
  const { projects } = useAppContext();
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const selectProjectById = (projectId: number) => {
    setSelectedProjectId(projectId === selectedProjectId ? null : projectId);
    setShowDetail(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowDetail(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className={styles.container}>
        <div className={styles.container__content}>
          <div className={styles.container__content__nav}>
            <div className={styles.container__content__nav__scrollable}>
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`${
                    styles.container__content__nav__projectContainer
                  } ${
                    hoveredIndex === index
                      ? styles.hovered
                      : (hoveredIndex === index - 1 ||
                          hoveredIndex === index + 1) &&
                        hoveredIndex !== null
                      ? styles.adjacentHovered
                      : ''
                  }`}
                >
                  <ProjectCard
                    key={project.id}
                    project={project}
                    handleClick={(projectId: number) => {
                      selectProjectById(projectId);
                    }}
                    isSelected={selectedProjectId === project.id}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Render only the selected ProjectDetail */}
        </div>
        {projects.map((project) => (
          <Transition
            in={selectedProjectId === project.id}
            timeout={{ enter: 0 }}
            unmountOnExit
            mountOnEnter
          >
            {(state) => {
              // console.log('Transition state:', state);
              console.log('Click position:');
              return (
                <div className={`${styles.container__detail} ${styles[state]}`}>
                  {selectedProjectId && showDetail && (
                    <ProjectDetail
                      project={projects.find(
                        (project) => project.id === selectedProjectId
                      )}
                    />
                  )}
                </div>
              );
            }}
          </Transition>
        ))}
      </section>
    </>
  );
};

export default ProjectsSlideShow;
