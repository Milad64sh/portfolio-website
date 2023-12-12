import React from 'react';
import styles from './skills.module.scss';
import { useAppContext } from '../../../contexts/AppContext';
import SingleSkill from './SingleSkill';

interface SkillsProp {
  toggle: boolean;
}
const Skills: React.FC<SkillsProp> = ({ toggle }) => {
  const { skillsData } = useAppContext();

  return (
    <>
      <div className={styles.container}>
        {skillsData.map((skill: any, index: number) => (
          <SingleSkill
            key={skill.id}
            skill={skill}
            index={index}
            style={
              toggle
                ? styles[`skill-${index}--showSkill`]
                : styles[`skill-${index}--closeSkill`]
            }
          />
        ))}
      </div>
    </>
  );
};

export default Skills;
