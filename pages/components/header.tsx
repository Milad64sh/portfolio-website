import React, { useState, useReducer } from 'react';
import styles from './header.module.scss';
import Skills from './skills/Skills';
import { IoIosArrowDown } from 'react-icons/io';
import Heading from './Heading';
import Projects from './projects/Projects';
import Footer from './Footer';

type State = {
  toggleSkillsIcon: boolean;
  toggleProjectsIcon: boolean;
  toggleMoreIcon: boolean;
  showLines: boolean;
  showMore: boolean;
};

type Action =
  | { type: 'TOGGLE_SKILLS_ICON' }
  | { type: 'TOGGLE_PROJECTS_ICON' }
  | { type: 'TOGGLE_LINES' }
  | { type: 'TOGGLE_MORE_ICON' };

const initialState: State = {
  toggleSkillsIcon: false,
  toggleProjectsIcon: false,
  toggleMoreIcon: false,
  showLines: false,
  showMore: false,
};
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'TOGGLE_SKILLS_ICON':
      return {
        ...state,
        toggleSkillsIcon: !state.toggleSkillsIcon,
        toggleProjectsIcon: false,
        showMore: false,
        toggleMoreIcon: false,
        showLines: false,
      };
    case 'TOGGLE_PROJECTS_ICON':
      return {
        ...state,
        toggleProjectsIcon: !state.toggleProjectsIcon,
        toggleSkillsIcon: false,
        showMore: false,
        toggleMoreIcon: false,
        showLines: false,
      };
    case 'TOGGLE_MORE_ICON':
      return {
        ...state,
        toggleMoreIcon: !state.toggleMoreIcon,
        toggleSkillsIcon: false,
        toggleProjectsIcon: false,
        showLines: !state.showLines,
        showMore: !state.showMore,
      };
    default:
      return state;
  }
};
const Header = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSkillsClick = () => {
    dispatch({ type: 'TOGGLE_SKILLS_ICON' });
  };

  const handleProjectsClick = () => {
    dispatch({ type: 'TOGGLE_PROJECTS_ICON' });
  };

  const handleMore = () => {
    dispatch({ type: 'TOGGLE_MORE_ICON' });
  };

  return (
    <>
      <header>
        <div className={styles.header}>
          <div className={styles.HBG}>
            <div className={styles.HBGLightGrey}></div>
            <div className={styles.HBGMediumGrey}></div>
            <div className={styles.HBGDarkGrey}></div>
            <div className={styles.HBGYellow}></div>
          </div>
          <div className={styles.vertical}>
            <div className={styles.titleSection}>
              <div className={styles.titleSection__title}>
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
                  <span className={styles.headerH3Span}>
                    frontend developer
                  </span>
                  <span className={styles.headerH3Span}>designer</span>
                  <span className={styles.headerH3Span}>creative</span>
                  <span className={styles.headerH3Span}>artist</span>
                  <div className={styles.headerH3Span}>
                    <span
                      onClick={handleMore}
                      className={`${styles.headerH3Span__span} ${
                        state.toggleMoreIcon ? styles.rotate : ''
                      }`}
                    >
                      <IoIosArrowDown />
                    </span>
                  </div>
                </h3>
              </div>
              <p
                className={`${styles.titleSection__mobile__p} ${
                  state.showMore ? styles.show__p : styles.close__p
                }`}
              >
                I'm Milad Shalikarian, a self-taught front-end web developer
                based in Reading, Berkshire, UK. With a strong track record in
                developing E-commerce projects and compelling landing pages, I
                am passionate about expanding my expertise in front-end
                technologies. Committed to constant growth, I stay abreast of
                industry trends to deliver innovative solutions in every project
                I undertake.
              </p>
            </div>
            <div className={styles.sections}>
              <div className={styles.section__content}>
                <div
                  onClick={handleSkillsClick}
                  className={styles.section__skills}
                >
                  <Heading name='skills' />{' '}
                  <span
                    className={`${styles.section__span} ${
                      state.toggleSkillsIcon ? styles.rotate : ''
                    }`}
                  >
                    <IoIosArrowDown />
                  </span>
                </div>
                <div
                  className={`${styles.section__skills__container} ${
                    state.toggleSkillsIcon
                      ? styles.showContainer
                      : styles.closeContainer
                  }`}
                >
                  <Skills toggle={state.toggleSkillsIcon} />
                </div>
              </div>
              <div className={styles.section__content}>
                <div
                  onClick={handleProjectsClick}
                  className={styles.section__projects}
                >
                  <Heading name='projects' />
                  <span
                    className={`${styles.section__span} ${
                      state.toggleProjectsIcon ? styles.rotate : ''
                    }`}
                  >
                    <IoIosArrowDown />
                  </span>
                </div>
                <div
                  className={`${styles.section__projects__container} ${
                    state.toggleProjectsIcon
                      ? styles.showContainer
                      : styles.closeContainer
                  }`}
                >
                  <Projects toggle={state.toggleProjectsIcon} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.lines}>
            <div className={styles.lines__twoFirstLine}>
              <div
                className={`${styles.lines__twoFirstLine__firstVerticalLine} ${
                  state.showLines ? styles.showLines : styles.closeLines
                }`}
              ></div>
              <div
                className={`${styles.lines__twoFirstLine__horizontalLine} ${
                  state.showLines ? styles.showLine : styles.closeLine
                }`}
              ></div>
            </div>
            <div
              className={`${styles.lines__secVerticalLine} ${
                state.showLines ? styles.showLine : styles.closeLine
              }`}
            ></div>
          </div>
          <div
            className={`${styles.more} ${
              state.showMore ? styles.showMore : styles.closeMore
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
