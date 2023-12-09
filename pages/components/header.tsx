import React from 'react';
import styles from './header.module.scss';

const header = () => {
  return (
    <>
      <header>
        <div className={styles.header}>
          <div className={styles.HBG}>
            <div className={styles.HBGLightGrey}></div>
            <div className={styles.HBGDarkGrey}></div>
          </div>

          <div className={styles.vertical}>
            <div className={styles.title}>
              <h2 className={styles.headerH2}>m.sh</h2>
              <h3 className={styles.headerH3}>
                <span className={styles.headerH3Span}>
                  fullstack (<div className={styles.loadingTxt}>loading</div>
                  <div className={styles.loadingContainer}>
                    <div className={styles.loadingSpan}></div>
                    <div className={styles.loadingSpan}></div>
                    <div className={styles.loadingSpan}></div>)
                  </div>
                </span>
                <span className={styles.headerH3Span}>frontend developer</span>
                <span className={styles.headerH3Span}>designer</span>
                <span className={styles.headerH3Span}>creative</span>
                <span className={styles.headerH3Span}>artist</span>
              </h3>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default header;
