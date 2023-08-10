import React from 'react';
import styles from '../expertise.module.scss';

interface SingleSkillProp {
  skill: {
    id: number;
    title: string;
    description: string;
  };
  className?: string;
}
const SingleSkill: React.FC<SingleSkillProp> = ({ skill, className }) => {
  return (
    <div className={`${styles.expertiseItem} ${className}`}>
      <h4>{skill.title}</h4>
      <p>{skill.description}</p>
    </div>
  );
};

export default SingleSkill;
