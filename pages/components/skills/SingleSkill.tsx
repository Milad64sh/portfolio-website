import React, { useState } from 'react';
import SingleSkillModal from './SingleSkillModal';
import styles from './SingleSkill.module.scss';

interface SingleSkillProp {
  skill: {
    id: number;
    title: string;
    description: string;
  };
  style?: string;
  index: number;
}
const SingleSkill: React.FC<SingleSkillProp> = ({ skill, style, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // modal function
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    document.body.style.overflow = isModalOpen ? 'auto' : 'hidden';
  };
  return (
    <>
      <div className={style} onClick={toggleModal}>
        <div className={styles.expertiseItemContent}>
          <h4>{skill.title}</h4>
          <p>{skill.description}</p>
        </div>
      </div>
      <SingleSkillModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        skill={skill}
        index={index}
      />
    </>
  );
};

export default SingleSkill;
