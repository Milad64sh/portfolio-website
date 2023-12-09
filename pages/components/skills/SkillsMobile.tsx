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

  return (
    <>
      <Heading name='skills' />
      <div className={styles.container}>
        <div className={styles.container__skills}>
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
