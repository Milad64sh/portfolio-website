import React, { useState, useEffect, useRef } from 'react';
import styles from './header.module.scss';
import { useAppContext } from '../../contexts/AppContext';

const Header = () => {
  const { projects } = useAppContext();

  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight;
      const header = document.getElementById('headerH2') as HTMLElement | null;
      if (header) {
        const opacity = Math.max(0, 1 - scrollTop / maxScroll);
        header.style.opacity = opacity.toString();
      }
      console.log('maxscroll:', maxScroll);
      console.log('scrollTop:', scrollTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div
            className={`${styles.header__container__title} ${
              show ? styles.show : ''
            }`}
          >
            <h2
              id='headerH2'
              className={styles.header__container__title__headerH2}
            >
              <span className={styles.m}>m</span>
              <span className={styles.i}>i</span>
              <span className={styles.s}>s</span>
              <span className={styles.h}>h</span>
            </h2>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
