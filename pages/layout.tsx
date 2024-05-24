import React, { useState, useEffect, useRef } from 'react';
import Header from './components/header';
import { ReactNode } from 'react';
import Navigation from './components/Navigation';
import MobileNav from './components/MobileNav';
import styles from './index.module.scss';
import ProjectsSlideShow from './components/projects/ProjectsSlideShow';
import Description from './components/Description';
import Footer from './components/Footer';

const Layout = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const slideShow = document.querySelector(
        '#projectsSlideShowSection'
      ) as HTMLElement | null;
      // const slideShowPlaceholder = document.querySelector(
      //   '#slideShowPlaceholder'
      // ) as HTMLElement | null;
      const description = document.querySelector(
        '#description'
      ) as HTMLElement | null;

      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const maxScroll = window.innerHeight;
        const opacity = Math.max(0, 1 - (scrollTop / maxScroll) * 2);
        const scrollPosition = window.scrollY;

        if (description) {
          if (scrollPosition >= 635) {
            description.classList.add(styles.fixed768);
            description.classList.remove(styles.fixed480);
          } else {
            description.classList.remove(styles.fixed768);
          }
          if (scrollPosition >= 1850) {
            description.style.opacity = opacity.toString();
          } else {
            description.style.opacity = '1';
          }
        }
        // if (description) {
        //   if (scrollPosition >= 710) {
        //     description.classList.remove(styles.fixed768);
        //     description.classList.add(styles.fixed480);
        //   } else {
        //     description.classList.remove(styles.fixed480);
        //   }
        //   if (scrollPosition >= 1850) {
        //     description.style.opacity = opacity.toString();
        //   } else {
        //     description.style.opacity = '1';
        //   }
        // }

        console.log(description?.classList);
        if (slideShow) {
          if (scrollPosition >= 1720) {
            slideShow.classList.add(styles.fixed);
            // slideShowPlaceholder.style.display = 'block';
          } else {
            slideShow.classList.remove(styles.fixed);
            // slideShowPlaceholder.style.display = 'none';
          }
        }
        if (slideShow) {
          if (scrollPosition >= 1420) {
            slideShow.classList.add(styles.fi);
            // slideShowPlaceholder.style.display = 'block';
          } else {
            slideShow.classList.remove(styles.fixed);
            // slideShowPlaceholder.style.display = 'none';
          }
        }
        console.log(scrollPosition);
      };
      window.addEventListener('scroll', handleScroll);

      // Cleanup on unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  useEffect(() => {}, []);

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
        <div
          id='slideShowPlaceholder'
          className={styles.slideShowPlaceholder}
        ></div>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
