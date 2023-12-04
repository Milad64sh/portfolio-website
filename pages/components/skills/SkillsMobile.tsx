import React, { useEffect, useRef, useState } from 'react';
import { useAppContext } from '../../../contexts/AppContext';
import SingleSkillMobile from './SingleSkillMobile';
import Heading from '../Heading';
import styles from './skillsMobile.module.scss';

interface Skill {
  id: number;
  title: string;
  description: string;
}

const SkillsMobile: React.FC = () => {
  const { skillsData } = useAppContext();
  const [skills, setSkills] = useState<Skill[]>(skillsData);
  const [positions, setPositions] = useState<number[]>(() => [
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const containerRef = useRef<HTMLDivElement>(null);

  const prevBtnClicked = () => {
    const updatedSkillsData = [...skills];
    const updatedPositions = [...positions];

    if (updatedSkillsData.length > 0) {
      updatedSkillsData.unshift(updatedSkillsData.pop()!);
      updatedPositions.push(updatedPositions.shift()!);
    }
    setSkills(updatedSkillsData);
    setPositions(updatedPositions);
    if (containerRef) {
      positions.forEach((position, index) => {
        if (containerRef.current) {
          const child = containerRef.current.children[index];
          if (child) {
            child.className = `container__skills skill-${position}`;
          }
        }
      });
    }
  };

  const nextBtnClicked = () => {
    const updatedSkillsData = [...skills];
    const updatedPositions = [...positions];
    if (updatedSkillsData.length > 0) {
      updatedSkillsData.push(updatedSkillsData.shift()!);
      updatedPositions.unshift(updatedPositions.pop()!);
    }
    setSkills(updatedSkillsData);
    setPositions(updatedPositions);
  };

  return (
    <>
      <Heading name='skills' />
      <div className={styles.container}>
        <button
          className={styles.container__btnPrev}
          onClick={prevBtnClicked}
        ></button>
        <button
          className={styles.container__btnNext}
          onClick={nextBtnClicked}
        ></button>
        <div ref={containerRef} className={styles.container__skills}>
          {skillsData.map((skill: any, index: number) => (
            <SingleSkillMobile
              key={skill.id}
              skill={skill}
              index={index}
              style={styles[`skill-${index}`]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsMobile;
