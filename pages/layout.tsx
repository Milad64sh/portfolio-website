import React, { useState, useEffect } from 'react';
import Header from './components/header';
import { ReactNode } from 'react';
import Navigation from './components/Navigation';
import MobileNav from './components/MobileNav';
import styles from './index.module.scss';
import ProjectsSlideShow from './components/projects/ProjectsSlideShow';
import Description from './components/Description';

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Initial call to set the initial state
    handleResize();

    // Attach event listener
    window.addEventListener('resize', handleResize);

    // Detach event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles.layout}>
        <div className={`${styles.layout__nav} ${show ? styles.show : ''}`}>
          {isMobile ? <MobileNav /> : <Navigation />}
        </div>
        <span className={styles.layout__1}></span>
        <span className={styles.layout__2}></span>
        <span className={styles.layout__3}></span>
        <span className={styles.layout__4}></span>
        <span className={styles.layout__5}></span>

        <header className={styles.header}>
          <Header />
        </header>
        <section id='description' className={styles.description}>
          <Description />
        </section>
        <section id='projectsSlideShowSection' className={styles.section}>
          <ProjectsSlideShow />
        </section>
      </div>
    </>
  );
};

export default Layout;
