import React from 'react';
import { useAppContext } from '../../../contexts/AppContext';
import SingleSkillMobile from './SingleSkillMobile';
import Heading from '../Heading';
import styles from './skillsMobile.module.scss';

const SkillsMobile = () => {
  const { skillsData } = useAppContext();
  return (
    <>
      <Heading name='skills' />
      <div className={styles.container}>
        <div className={styles.container__btns}>
          <button className={styles.container__btns__btn}></button>
          <button className={styles.container__btns__btn}></button>
        </div>
        {skillsData.map((skill: any, index: number) => (
          <SingleSkillMobile key={skill.id} skill={skill} index={index} />
        ))}
      </div>
    </>
  );
};

export default SkillsMobile;
