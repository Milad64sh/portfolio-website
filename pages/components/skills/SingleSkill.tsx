import React, { useState } from 'react';
import styles from './SingleSkill.module.scss';

interface SingleSkillProp {
  skill: {
    id: number;
    title: string;
    description: string;
  };
  style?: any;
  index: number;
}
const SingleSkill: React.FC<SingleSkillProp> = ({ skill, style, index }) => {
  return (
    <>
      <div className={styles.skill}>
        <div className={style}>
          <h4>{skill.title}</h4>
        </div>
      </div>
    </>
  );
};

export default SingleSkill;
