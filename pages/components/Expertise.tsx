import React, { useEffect, useState, useRef } from 'react';
import styles from './expertise.module.scss';
import { useAppContext } from '../../contexts/AppContext';
import SingleSkill from './skills/SingleSkill';

const Expertise: React.FC = () => {
  const { skillsData } = useAppContext();
  // adding a scroll listener to the window
  const [scrollY, setScrollY] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // modal function
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const minScroll = 0;
  const maxScroll = 2000;
  const normalizedScroll = Math.min(maxScroll, Math.max(minScroll, scrollY));
  const progress = (normalizedScroll - minScroll) / (maxScroll - minScroll);
  const opacity = cubicBezier(progress);
  function cubicBezier(progress: number): number {
    return 1 - (1 - progress) ** 2;
  }
  const calculateOpacityStyle = (opacity: number): React.CSSProperties => {
    return { opacity };
  };
  return (
    <>
      <div
        className={styles.container}
        style={{
          ...calculateOpacityStyle(opacity),
          ['--skills-count' as any]: skillsData.length,
        }}
      >
        <div className={styles.heading}>
          <h3>expertise</h3>
        </div>
        {skillsData.map((skill: any, index: number) => (
          <SingleSkill
            key={skill.id}
            skill={skill}
            style={
              !isModalOpen
                ? styles[`expertiseItem-${index}`]
                : styles.expertiseItemModal
            }
            toggleModal={toggleModal}
          />
        ))}
      </div>
    </>
  );
};

export default Expertise;
