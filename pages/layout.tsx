import React, { useState, useEffect, useRef } from 'react';
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
  // const contentRef = useRef<HTMLDivElement>(null);
  // const [isFixed, setIsFixed] = useState(false);
  // const [isSticky, setIsSticky] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY || document.documentElement.scrollTop;
  //     const maxScroll = window.innerHeight;

  //     if (scrollTop >= 635 && scrollTop < 1450) {
  //       setIsFixed(true);
  //       setIsSticky(false);
  //     } else if (scrollTop >= 1450) {
  //       const opacity = Math.max(0, 1 - (scrollTop - 950) / (maxScroll - 950));
  //       if (contentRef.current) {
  //         contentRef.current.style.opacity = opacity.toString();
  //       }
  //       setIsFixed(false);
  //       setIsSticky(true);
  //     } else {
  //       setIsFixed(false);
  //       setIsSticky(false);
  //     }

  //     if (scrollTop >= 950) {
  //       const opacity = Math.max(0, 1 - (scrollTop - 950) / (maxScroll - 950));
  //       if (contentRef.current) {
  //         contentRef.current.style.opacity = opacity.toString();
  //       }
  //     } else {
  //       if (contentRef.current) {
  //         contentRef.current.style.opacity = '1';
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const description = document.querySelector('#description');
        const slideShow = document.querySelector('#projectsSlideShowSection');
        const header = document.querySelector('#header');
        const layout = document.querySelector('#layout');

        if (description) {
          const scrollPosition = window.scrollY;
          if (scrollPosition >= 635) {
            description.classList.add(styles.fixed);
          } else {
            description.classList.remove(styles.fixed);
          }
          // console.log('scroll position:', scrollPosition);
        }
        // console.log(description?.clientHeight);
        console.log('layout:', layout?.clientHeight);
        console.log('header:', header?.clientHeight);
        // console.log(slideShow?.clientHeight);
        // console.log(description?);
      };
      window.addEventListener('scroll', handleScroll);

      // Cleanup on unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

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
      <div id='layout' className={styles.layout}>
        <div className={`${styles.layout__nav} ${show ? styles.show : ''}`}>
          {isMobile ? <MobileNav /> : <Navigation />}
        </div>
        <span className={styles.layout__1}></span>
        <span className={styles.layout__2}></span>
        <span className={styles.layout__3}></span>
        <span className={styles.layout__4}></span>
        <span className={styles.layout__5}></span>

        <header id='header' className={styles.header}>
          <Header />
        </header>
        <section id='description' className={styles.description}>
          <Description />
        </section>
        <section id='projectsSlideShowSection' className={styles.slideShow}>
          <ProjectsSlideShow />
        </section>
      </div>
    </>
  );
};

export default Layout;
