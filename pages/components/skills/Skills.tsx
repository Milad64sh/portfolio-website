import React, { useEffect, useState } from 'react';
import styles from './skills.module.scss';
import { useAppContext } from '../../../contexts/AppContext';
import SingleSkill from './SingleSkill';
import Heading from '../Heading';
import SkillsMobile from './SkillsMobile';

const Skills: React.FC = () => {
  const { skillsData } = useAppContext();

  // adding a scroll listener to the window
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const minScroll = 0;
  const maxScroll = 700;
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
      <div className={styles.ExpertiseMobileContainer}>
        <SkillsMobile />
      </div>
      <div
        className={styles.container}
        style={{
          ...calculateOpacityStyle(opacity),
          ['--skills-count' as any]: skillsData.length,
        }}
      >
        <Heading name='Skills' />
        {skillsData.map((skill: any, index: number) => (
          <SingleSkill
            key={skill.id}
            skill={skill}
            index={index}
            style={styles[`expertiseItem-${index}`]}
          />
        ))}
      </div>
    </>
  );
};

export default Skills;
