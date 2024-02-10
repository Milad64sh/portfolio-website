import React, { useState, useReducer, useContext } from 'react';

import styles from './header.module.scss';
import Skills from './skills/Skills';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Heading from './Heading';
import Projects from './projects/Projects';
import { useAppContext } from '../../contexts/AppContext';
import ProjectDetailDesc from './ProjectDetailDesc';
type State = {
  toggleSkillsIcon: boolean;
  toggleProjectsIcon: boolean;
  toggleMoreIcon: boolean;
  toggleProjectDetail: boolean;
  toggleTitleSection: boolean;
  toggleTitleItems: boolean;
  showLines: boolean;
  showMore: boolean;
  selectedProjectId: number;
};

type ToggleProjectDetailAction = {
  type: 'TOGGLE_PROJECT_DETAIL';
  payload: {
    id: number;
  };
};

type SelectProjectAction = {
  type: 'SELECT_PROJECT';
  payload: {
    id: number;
  };
};

type Action =
  | { type: 'TOGGLE_SKILLS_ICON' }
  | { type: 'TOGGLE_PROJECTS_ICON' }
  | { type: 'TOGGLE_LINES' }
  | { type: 'RESET_TOGGLE_TITLE_SECTION' }
  | { type: 'TOGGLE_TITLE_ITEMS' }
  | SelectProjectAction
  | ToggleProjectDetailAction
  | { type: 'TOGGLE_MORE_ICON' };

const Header = () => {
  const { projects } = useAppContext();

  const initialState: State = {
    toggleSkillsIcon: false,
    toggleProjectsIcon: false,
    toggleProjectDetail: false,
    toggleTitleSection: true,
    toggleTitleItems: false,
    toggleMoreIcon: false,
    showLines: false,
    showMore: false,
    selectedProjectId: 0,
  };
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'TOGGLE_SKILLS_ICON':
        return {
          ...state,
          toggleSkillsIcon: !state.toggleSkillsIcon,
          toggleProjectDetail: false,
          toggleTitleSection: true,
          toggleTitleItems: false,
          selectedProjectId: 0,
          toggleProjectsIcon: false,
          showMore: false,
          toggleMoreIcon: false,
          showLines: false,
        };
      case 'TOGGLE_PROJECTS_ICON':
        return {
          ...state,
          toggleProjectsIcon: !state.toggleProjectsIcon,
          selectedProjectId: 0,
          toggleSkillsIcon: false,
          toggleTitleSection: true,
          toggleTitleItems: false,
          showMore: false,
          toggleMoreIcon: false,
          showLines: false,
        };
      case 'TOGGLE_MORE_ICON':
        return {
          ...state,
          toggleMoreIcon: !state.toggleMoreIcon,
          selectedProjectId: 0,
          toggleSkillsIcon: false,
          toggleProjectsIcon: false,
          toggleTitleSection: true,
          showLines: !state.showLines,
          showMore: !state.showMore,
        };
      case 'TOGGLE_PROJECT_DETAIL':
        return {
          ...state,
          selectedProjectId: action.payload.id,
          toggleProjectDetail: !state.toggleProjectDetail,
          toggleMoreIcon: false,
          toggleSkillsIcon: false,
          showLines: !state.showLines,
          showMore: false,
        };
      case 'SELECT_PROJECT':
        return {
          ...state,
          selectedProjectId: action.payload.id,
          toggleTitleSection: !state.toggleTitleSection,
        };
      case 'RESET_TOGGLE_TITLE_SECTION':
        console.log(state.selectedProjectId);
        console.log(state.toggleTitleSection);
        return {
          ...state,
          toggleTitleSection: false,
        };
      case 'TOGGLE_TITLE_ITEMS':
        return {
          ...state,
          toggleTitleItems: !state.toggleTitleItems,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSkillsClick = () => {
    dispatch({ type: 'TOGGLE_SKILLS_ICON' });
  };

  const handleProjectsClick = () => {
    dispatch({ type: 'TOGGLE_PROJECTS_ICON' });
  };
  const handleProjectDetail = (id: number) => {
    dispatch({
      type: 'TOGGLE_PROJECT_DETAIL',
      payload: { id },
    });
    dispatch({ type: 'SELECT_PROJECT', payload: { id } });
    setTimeout(() => {
      dispatch({ type: 'RESET_TOGGLE_TITLE_SECTION' });
    }, 1000);
  };

  const handleMore = () => {
    dispatch({ type: 'TOGGLE_TITLE_ITEMS' });
    dispatch({ type: 'TOGGLE_MORE_ICON' });
  };

  return (
    <>
      <header>
        <div className={styles.header}>
          <div className={styles.HBG}>
            <div className={styles.square}></div>
            <div className={styles.triangle2}></div>
            <div className={styles.triangle3}></div>
            <div className={styles.triangle4}></div>
          </div>
          <div className={styles.container}>
            <div className={styles.container__sections}>
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
                  <Projects
                    toggle={state.toggleProjectsIcon}
                    handleProjectDetail={handleProjectDetail}
                  />
                </div>
              </div>
            </div>
            <div className={styles.container__titleSection}>
              <div
                className={`${styles.titleSection__title} ${
                  state.toggleTitleSection ? styles.active : styles.inactive
                } `}
              >
                <h2 className={styles.headerH2} onClick={handleMore}>
                  Mish{' '}
                  <span
                    className={`${styles.headerH2__span} ${
                      state.toggleTitleItems ? styles.active : styles.inactive
                    }`}
                  >
                    <IoIosArrowUp />
                  </span>
                </h2>
                <h3
                  className={`${styles.headerH3} ${
                    state.toggleTitleItems ? styles.moveUp : styles.moveDown
                  }`}
                >
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

              <div>
                {projects.map((project) =>
                  project.id === state.selectedProjectId ? (
                    <div
                      key={project.id}
                      className={`${styles.titleSection__descContainer} ${
                        !state.toggleTitleSection && state.selectedProjectId
                          ? styles.active
                          : styles.inactive
                      } `}
                    >
                      <ProjectDetailDesc project={project} />
                    </div>
                  ) : null
                )}
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
