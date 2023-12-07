import React from 'react';
import styles from './singleSkillMobile.module.scss';

interface SingleSkill {
  skill: {
    id: number;
    title: string;
    description: string;
  };
  style?: any;
}
const SingleSkillMobile: React.FC<SingleSkill> = ({ skill, style }) => {
  return (
    <>
      <div className={`${styles.container} ${style}`}>
        <div className={styles.container__content}>
          <div className={styles.container__content__title}>{skill.title}</div>
          <div className={styles.container__content__desc}>
            {skill.description}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSkillMobile;
