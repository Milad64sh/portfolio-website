import React from 'react';
import styles from './header.module.scss';

const header = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.HBG}>
          <div className={styles.HBGLightGrey}></div>
          <div className={styles.HBGDarkGrey}></div>
        </div>

        <div className={styles.vertical}>
          <div className={styles.title}>
            <h3 className={styles.headerH3}>journey of a web developer</h3>
            <h2 className={styles.headerH2}>milad</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
