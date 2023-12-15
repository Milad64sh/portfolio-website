import React, { useState } from 'react';
import styles from './header.module.scss';
import Skills from './skills/Skills';
import { IoIosArrowDown } from 'react-icons/io';
import Heading from './Heading';

const Header = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [toggleMoreIcon, setToggleMoreIcon] = useState(false);
  const [showLines, setShowLines] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setToggleIcon((prevToggleIcon) => !prevToggleIcon);
  };
  const handleMore = () => {
    setToggleMoreIcon((prevToggle) => !prevToggle);
    setShowLines((prevState) => !prevState);
    setShowMore((prevState) => !prevState);
  };

  return (
    <>
      <header>
        <div className={styles.header}>
          <div className={styles.HBG}>
            <div className={styles.HBGLightGrey}></div>
            <div className={styles.HBGMediumGrey}></div>
            <div className={styles.HBGDarkGrey}></div>
          </div>
          <div className={styles.vertical}>
            <p className={styles.more__mobile__p}>
              I'm Milad Shalikarian, a self-taught front-end web developer based
              in Reading, Berkshire, UK. With a strong track record in
              developing E-commerce projects and compelling landing pages, I am
              passionate about expanding my expertise in front-end technologies.
              Committed to constant growth, I stay abreast of industry trends to
              deliver innovative solutions in every project I undertake.
            </p>
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
                <div className={styles.headerH3Span}>
                  <span
                    onClick={handleMore}
                    className={`${styles.headerH3Span__span} ${
                      toggleMoreIcon ? styles.rotate : ''
                    }`}
                  >
                    <IoIosArrowDown />
                  </span>
                </div>
              </h3>
            </div>

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
                    toggleIcon ? styles.showContainer : styles.closeContainer
                  }`}
                >
                  <Skills toggle={toggleIcon} />
                </div>
              </div>
              <div className={styles.section__projects}>
                <Heading name='projects' />
                <span className={styles.section__span}>
                  <IoIosArrowDown />
                </span>
              </div>
            </div>
          </div>
          <div className={styles.lines}>
            <div className={styles.lines__twoFirstLine}>
              <div
                className={`${styles.lines__twoFirstLine__firstVerticalLine} ${
                  showLines ? styles.showLine : ''
                }`}
              ></div>
              <div
                className={`${styles.lines__twoFirstLine__horizontalLine} ${
                  showLines ? styles.showLine : styles.closeLine
                }`}
              ></div>
            </div>
            <div
              className={`${styles.lines__secVerticalLine} ${
                showLines ? styles.showLine : styles.closeLine
              }`}
            ></div>
          </div>
          <div
            className={`${styles.more} ${
              showMore ? styles.showMore : styles.closeMore
            }`}
          >
            <p className={styles.more__p}>
              My name is Milad Shalikarian, a self-taught front-end web
              developer based in Reading, Berkshire, UK. With a rich portfolio
              of successfully completed E-commerce projects and engaging landing
              pages, I bring expertise and creativity to every endeavor.
            </p>
            <p className={styles.more__p}>
              Driven by a passion for exploring new front-end technologies, I am
              dedicated to continuous. My commitment to excellence fuels my
              journey as a developer, ensuring that I deliver innovative and
              cutting-edge solutions to every project I undertake.
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
