import React, { useState, useReducer, useContext, useEffect } from 'react';

import styles from './header.module.scss';
import { useAppContext } from '../../contexts/AppContext';

// type State = {
//   toggleSkillsIcon: boolean;
//   toggleProjectsIcon: boolean;
//   toggleMoreIcon: boolean;
//   toggleProjectDetail: boolean;
//   toggleTitleSection: boolean;
//   toggleTitleItems: boolean;
//   showLines: boolean;
//   showMore: boolean;
//   selectedProjectId: number;
// };

// type ToggleProjectDetailAction = {
//   type: 'TOGGLE_PROJECT_DETAIL';
//   payload: {
//     id: number;
//   };
// };

// type SelectProjectAction = {
//   type: 'SELECT_PROJECT';
//   payload: {
//     id: number;
//   };
// };

// type Action =
//   | { type: 'TOGGLE_SKILLS_ICON' }
//   | { type: 'TOGGLE_PROJECTS_ICON' }
//   | { type: 'TOGGLE_LINES' }
//   | { type: 'RESET_TOGGLE_TITLE_SECTION' }
//   | { type: 'TOGGLE_TITLE_ITEMS' }
//   | SelectProjectAction
//   | ToggleProjectDetailAction
//   | { type: 'TOGGLE_MORE_ICON' };

interface HeaderProps {
  scrollToNextSection: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToNextSection }) => {
  const { projects } = useAppContext();

  useEffect(() => {
    const handlescroll = () => {
      const headerH2 = document.querySelector(
        `.${styles.header__container__title__headerH2}`
      ) as HTMLElement | null;
      if (headerH2) {
        const scrollTop = window.scrollY;
        const maxScroll = window.innerHeight;
        const opacity = Math.max(0, 1 - scrollTop / maxScroll);
        headerH2.style.opacity = opacity.toString();
      }
    };
    window.addEventListener('scroll', handlescroll);
    return () => {
      window.removeEventListener('scroll', handlescroll);
    };
  }, []);

  // const initialState: State = {
  //   toggleSkillsIcon: false,
  //   toggleProjectsIcon: false,
  //   toggleProjectDetail: false,
  //   toggleTitleSection: true,
  //   toggleTitleItems: false,
  //   toggleMoreIcon: false,
  //   showLines: false,
  //   showMore: false,
  //   selectedProjectId: 0,
  // };
  // const reducer = (state: State, action: Action): State => {
  //   switch (action.type) {
  //     case 'TOGGLE_SKILLS_ICON':
  //       return {
  //         ...state,
  //         toggleSkillsIcon: !state.toggleSkillsIcon,
  //         toggleProjectDetail: false,
  //         toggleTitleSection: true,
  //         toggleTitleItems: false,
  //         selectedProjectId: 0,
  //         toggleProjectsIcon: false,
  //         showMore: false,
  //         toggleMoreIcon: false,
  //         showLines: false,
  //       };
  //     case 'TOGGLE_PROJECTS_ICON':
  //       return {
  //         ...state,
  //         toggleProjectsIcon: !state.toggleProjectsIcon,
  //         selectedProjectId: 0,
  //         toggleSkillsIcon: false,
  //         toggleTitleSection: true,
  //         toggleTitleItems: false,
  //         showMore: false,
  //         toggleMoreIcon: false,
  //         showLines: false,
  //       };
  //     case 'TOGGLE_MORE_ICON':
  //       return {
  //         ...state,
  //         toggleMoreIcon: !state.toggleMoreIcon,
  //         selectedProjectId: 0,
  //         toggleSkillsIcon: false,
  //         toggleProjectsIcon: false,
  //         toggleTitleSection: true,
  //         showLines: !state.showLines,
  //         showMore: !state.showMore,
  //       };
  //     case 'TOGGLE_PROJECT_DETAIL':
  //       return {
  //         ...state,
  //         selectedProjectId: action.payload.id,
  //         toggleProjectDetail: !state.toggleProjectDetail,
  //         toggleMoreIcon: false,
  //         toggleSkillsIcon: false,
  //         showLines: !state.showLines,
  //         showMore: false,
  //       };
  //     case 'SELECT_PROJECT':
  //       return {
  //         ...state,
  //         selectedProjectId: action.payload.id,
  //         toggleTitleSection: !state.toggleTitleSection,
  //       };
  //     case 'RESET_TOGGLE_TITLE_SECTION':
  //       console.log(state.selectedProjectId);
  //       console.log(state.toggleTitleSection);
  //       return {
  //         ...state,
  //         toggleTitleSection: false,
  //       };
  //     case 'TOGGLE_TITLE_ITEMS':
  //       return {
  //         ...state,
  //         toggleTitleItems: !state.toggleTitleItems,
  //       };
  //     default:
  //       return state;
  //   }
  // };
  // const [state, dispatch] = useReducer(reducer, initialState);

  // const handleSkillsClick = () => {
  //   dispatch({ type: 'TOGGLE_SKILLS_ICON' });
  // };

  // const handleProjectsClick = () => {
  //   dispatch({ type: 'TOGGLE_PROJECTS_ICON' });
  // };
  // const handleProjectDetail = (id: number) => {
  //   dispatch({
  //     type: 'TOGGLE_PROJECT_DETAIL',
  //     payload: { id },
  //   });
  //   dispatch({ type: 'SELECT_PROJECT', payload: { id } });
  //   setTimeout(() => {
  //     dispatch({ type: 'RESET_TOGGLE_TITLE_SECTION' });
  //   }, 1000);
  // };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__container__title}>
            <h2 className={styles.header__container__title__headerH2}>mish</h2>
          </div>
          <div className={styles.header__container__titleSection}>
            {/* <h3
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
                </h3> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
