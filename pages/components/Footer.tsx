import React, { useState } from 'react';
import styles from './footer.module.scss';
import Link from 'next/link';
const Footer = () => {
  const [isRotating, setIsRotating] = useState(false);
  const handleClick = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000); // Reset after animation duration
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__logo}>
          <div className={styles.logo}>
            <Link href='/' legacyBehavior>
              <a
                className={`${styles.logoLink} ${
                  isRotating ? styles.rotate : ''
                }`}
                onClick={handleClick}
              >
                <span className={styles.logoLink__m}>m</span>
                <span className={styles.logoLink__i}>i</span>
                <span className={styles.logoLink__s}>s</span>
                <span className={styles.logoLink__h}>h</span>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.container__copyright}>
          &copy; {new Date().getFullYear()} Milad.S1985
        </div>
      </div>
    </>
  );
};

export default Footer;
