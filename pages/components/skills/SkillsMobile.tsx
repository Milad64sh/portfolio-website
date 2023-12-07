import React, { useRef, useState } from 'react';
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
  const [positions, setPositions] = useState<number[]>(() => [1, 2, 3, 4, 5]);

  const updatedSkillsData = [...skills];
  const updatedPositions = [...positions];

  const containerRef = useRef<HTMLDivElement>(null);

  const prevBtnClicked = () => {
    if (updatedSkillsData.length > 0) {
      updatedSkillsData.unshift(updatedSkillsData.pop()!);
      updatedPositions.push(updatedPositions.shift()!);
    }

    console.log(containerRef.current?.children);
    setSkills(updatedSkillsData);
    setPositions(updatedPositions);
  };

  const nextBtnClicked = () => {
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
          {skills.map((skill: any, index: number) => (
            <SingleSkillMobile
              key={skill.id}
              skill={skill}
              style={styles[`skill-${index}`]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsMobile;
