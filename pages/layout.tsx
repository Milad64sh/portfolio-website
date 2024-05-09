import React, { useState, useEffect } from 'react';
import Header from './components/header';
import { ReactNode } from 'react';
import Navigation from './components/Navigation';
import MobileNav from './components/MobileNav';
import styles from './index.module.scss';
import ProjectsSlideShow from './components/projects/ProjectsSlideShow';

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const scrollToNextSection: () => void = () => {
    // Scroll to the ProjectsSlideShow section
    const projectsSlideShowSection = document.getElementById(
      'projectsSlideShowSection'
    );
    if (projectsSlideShowSection !== null) {
      projectsSlideShowSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('projectsSlideShowSection not found');
    }
  };

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
        <header className={styles.header}>
          {isMobile ? <MobileNav /> : <Navigation />}
          <Header scrollToNextSection={scrollToNextSection} />
        </header>
        <section id='projectsSlideShowSection' className={styles.section}>
          <ProjectsSlideShow />
        </section>
      </div>
    </>
  );
};

export default Layout;
