import React, { useState } from 'react';
import styles from './SingleSkillModal.module.scss';

interface ModalProps {
  skill: {
    id: number;
    title: string;
    description: string;
  };
  isOpen: boolean;
  index: number;
  onClose: () => void;
}

const SingleSkillModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  skill,
  index,
}) => {
  if (!isOpen) return null;
  return (
    <div className={styles.modalContainer}>
      <div className={styles[`expertiseItem-${index}`]}>
        <div className={styles.expertiseItemModalContent}>
          <button className={styles.modalBtn} onClick={onClose}>
            X
          </button>
          <h4>{skill.title}</h4>
          <p>{skill.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleSkillModal;
