import React, { useState } from 'react';
import styles from './SingleSkillModal.module.scss';

interface ModalProps {
  skill: {
    id: number;
    title: string;
    description: string;
  };
  isOpen: boolean;
  style?: string;
  onClose: () => void;
}

const SingleSkillModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  skill,
  style,
}) => {
  if (!isOpen) return null;
  return (
    <div className={style}>
      <div className={styles.modalContent}>
        <p>{skill.title}</p>
        <button className={styles.modalBtn} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SingleSkillModal;
