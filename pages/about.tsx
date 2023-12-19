import React, { useEffect, useState } from 'react';
import MobileNav from './components/MobileNav';
import Navigation from './components/Navigation';
import styles from './about.module.scss';
import layout from './index.module.scss';
import AboutContent from './AboutContent';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

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
      {isMobile ? <MobileNav /> : <Navigation />}
      <div className={styles.header}>
        <AboutContent />
      </div>
    </>
  );
};

export default About;
