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
        {skillsData.map((skill: any, index: number) =>
          // Check if skill has the expected structure before rendering
          skill && skill.id && skill.title && skill.description ? (
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
          ) : null
        )}
      </div>
    </>
  );
};

export default Skills;
