import React from 'react';
import styles from './singleSkillMobile.module.scss';

interface SingleSkill {
  skill: {
    id: number;
    title: string;
    description: string;
  };
  index: number;
}
const SingleSkillMobile: React.FC<SingleSkill> = ({ skill, index }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__content}>
          <div className={styles.container__content__title}>{skill.title}</div>
          <div className={styles.container__content__desc}>
            {skill.description}
          </div>
        </div>
        <button className={styles.container__btn}>details</button>
      </div>
    </>
  );
};

export default SingleSkillMobile;
