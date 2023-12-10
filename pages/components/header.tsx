import React, { useState } from 'react';
import styles from './header.module.scss';
import Skills from './skills/Skills';
import { IoIosArrowDown } from 'react-icons/io';
import Heading from './Heading';

const header = () => {
  const [toggleIcon, setToggleIcon] = useState(true);

  const handleClick = () => {
    setToggleIcon((prevToggleIcon) => !prevToggleIcon);
  };

  return (
    <>
      <header>
        <div className={styles.header}>
          <div className={styles.HBG}>
            <div className={styles.HBGLightGrey}></div>
            <div className={styles.HBGDarkGrey}></div>
          </div>
          <div className={styles.vertical}>
            <div className={styles.sections}>
              <div className={styles.section__content}>
                <div onClick={handleClick} className={styles.section__skills}>
                  <Heading name='skills' />{' '}
                  <span
                    className={`${styles.section__span} ${
                      toggleIcon ? styles.rotate : ''
                    }`}
                  >
                    <IoIosArrowDown />
                  </span>
                </div>
                <div
                  className={`${styles.section__skills__container} ${
                    toggleIcon ? styles.showContainer : ''
                  }`}
                >
                  <Skills />
                </div>
              </div>
              <div className={styles.section__projects}>
                <Heading name='projects' />
                <span className={styles.section__span}>
                  <IoIosArrowDown />
                </span>
              </div>
            </div>
            <div className={styles.title}>
              <h2 className={styles.headerH2}>Milad</h2>
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
