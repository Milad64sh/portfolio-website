import React, { useState } from 'react';
import styles from './SingleSkill.module.scss';

interface SingleSkillProp {
  skill: {
    id: number;
    title: string;
    description: string;
  };
  style?: string;
}
const SingleSkill: React.FC<SingleSkillProp> = ({ skill, style }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <div className={style} onClick={toggleModal}>
      <div className={styles.expertiseItemContent}>
        <h4>{skill.title}</h4>
        <p>{skill.description}</p>
      </div>
    </div>
  );
};

export default SingleSkill;
