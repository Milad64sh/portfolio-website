import React, { useState } from 'react';
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

  return (
    <>
      <Heading name='skills' />
      <div className={styles.container}>
        <div className={styles.container__skills}>
          {skillsData.map((skill: Skill, index: number) =>
            // Check if skill has the expected structure before rendering
            skill && skill.id && skill.title && skill.description ? (
              <SingleSkillMobile
                key={skill.id}
                skill={skill}
                style={styles[`skill-${index}`]}
              />
            ) : null
          )}
        </div>
      </div>
    </>
  );
};

export default SkillsMobile;
