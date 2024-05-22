import React, { useState, useEffect, useRef } from 'react';
import styles from './description.module.scss';

const Description = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <p>
          Hi. I am M<span className={styles.i}>i</span>lad. a{' '}
          <span className={styles.wordFlipper}>
            web Des<span className={styles.i}>i</span>gner{' '}
          </span>
          based in Berkshire. Just creat<span className={styles.i}>i</span>ve.
        </p>
      </div>
    </div>
  );
};

export default Description;
