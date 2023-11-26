import React, { useContext, useEffect, useState } from 'react';
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
  const [skills, setSkills] = useState<Skill[]>();
  const [positions, setPositions] = useState<number[]>(() => [
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  useEffect(() => {
    setSkills(skillsData);
  }, [skillsData]);

  const prevBtnClicked = () => {
    setSkills((prevSkills: Skill[] | undefined) => {
      if (!prevSkills) {
        return prevSkills;
      }
      const newSkills = [...prevSkills];
      newSkills.unshift(newSkills.pop() as Skill);
      return newSkills;
    });

    setPositions((prevPositions) => {
      if (!prevPositions) {
        return prevPositions;
      }
      const newPositions = [...prevPositions];
      newPositions.push(newPositions.shift() as number);
      return newPositions;
    });
  };

  const nextBtnClicked = () => {
    setSkills((prevSkills: Skill[] | undefined) => {
      if (!prevSkills) {
        return prevSkills;
      }
      const newSkills = [...prevSkills];
      newSkills.push(newSkills.shift() as Skill);
      return newSkills;
    });

    setPositions((prevPositions) => {
      if (!prevPositions) {
        return prevPositions;
      }
      const newPositions = [...prevPositions];
      newPositions.unshift(newPositions.pop() as number);
      return newPositions;
    });
  };

  return (
    <>
      <Heading name='skills' />
      <div className={styles.container}>
        <div className={styles.container__btns}>
          <button
            className={styles.container__btns__btn}
            onClick={prevBtnClicked}
          ></button>
          <button
            className={styles.container__btns__btn}
            onClick={nextBtnClicked}
          ></button>
        </div>
        {skillsData.map((skill: any, index: number) => (
          <SingleSkillMobile key={skill.id} skill={skill} index={index} />
        ))}
      </div>
    </>
  );
};

export default SkillsMobile;
