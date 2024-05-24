import React, { useState } from 'react';
import styles from './navigation.module.scss';
import { SiAboutdotme } from 'react-icons/si';
import { BiLogoGmail } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const navigation: React.FC = () => {
  const myEmailAddress = 'm.shalikarian@gmail.com';
  const githubProfileLink = 'https://github.com/Milad64sh';
  const [isRotating, setIsRotating] = useState(false);
  const handleClick = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000); // Reset after animation duration
  };

  const handleLinkClick = () => {
    const mailToLink = `mailto:${myEmailAddress}`;
    window.open(mailToLink, '_blank');
    console.log('email pop up opened');
  };

  return (
    <>
      <nav className={styles.nav}>
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
        <div className={styles.navList}>
          <ul className={styles.menu}>
            <li>
              <Link href='/about' legacyBehavior>
                <a className={styles.menuItem}>
                  <SiAboutdotme />
                </a>
              </Link>
            </li>
            <li>
              <Link href='#' legacyBehavior passHref>
                <a className={styles.menuItem} onClick={handleLinkClick}>
                  <BiLogoGmail />
                </a>
              </Link>
            </li>
            <li>
              <Link href={githubProfileLink} legacyBehavior passHref>
                <a className={styles.menuItem} target='_blank'>
                  <FaGithub />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default navigation;
