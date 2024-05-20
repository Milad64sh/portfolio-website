import React, { useState, useEffect, useRef } from 'react';
import styles from './description.module.scss';

const Description = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = window.innerHeight;

      if (scrollTop >= 635 && scrollTop < 1450) {
        setIsFixed(true);
        setIsSticky(false);
      } else if (scrollTop >= 1450) {
        const opacity = Math.max(0, 1 - (scrollTop - 950) / (maxScroll - 950));
        if (contentRef.current) {
          contentRef.current.style.opacity = opacity.toString();
        }
        setIsFixed(false);
        setIsSticky(true);
      } else {
        setIsFixed(false);
        setIsSticky(false);
      }

      if (scrollTop >= 950) {
        const opacity = Math.max(0, 1 - (scrollTop - 950) / (maxScroll - 950));
        if (contentRef.current) {
          contentRef.current.style.opacity = opacity.toString();
        }
      } else {
        if (contentRef.current) {
          contentRef.current.style.opacity = '1';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        ref={contentRef}
        className={`${styles.container__content} ${
          isFixed ? styles.fixed : ''
        } ${isSticky ? styles.sticky : ''}`}
      >
        <p>
          Hi. I am M<span className={styles.i}>i</span>lad. a{' '}
          <span className={styles.wordFlipper}>
            web Des<span className={styles.i}>i</span>gner{' '}
          </span>
          based in Berkshire. Just creat<span className={styles.i}>i</span>ve.
        </p>
      </div>
    </div>
  );
};

export default Description;
