import React from 'react';
import styles from './singleProject.module.scss';

const SingleProject = () => {
  return (
    <>
      <div className={styles.project}>
        <div className={styles.desc}>
          <h3>ecommerce</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
            dolores!
          </p>
        </div>
        <div className={styles.details}>
          <button>view details</button>
        </div>
      </div>
    </>
  );
};

export default SingleProject;
