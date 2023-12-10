import React from 'react';
import styles from './skills.module.scss';
import { useAppContext } from '../../../contexts/AppContext';
import SingleSkill from './SingleSkill';

const Skills: React.FC = () => {
  const { skillsData } = useAppContext();

  return (
    <>
      <div className={styles.container}>
        {skillsData.map((skill: any, index: number) => (
          <SingleSkill
            key={skill.id}
            skill={skill}
            index={index}
            style={styles[`skill-${index}`]}
          />
        ))}
      </div>
    </>
  );
};

export default Skills;
