import React, { useState, useEffect } from 'react';
import styles from './mobileNav.module.scss';
import { SiAboutdotme } from 'react-icons/si';
import { BiLogoGmail } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  const myEmailAddress = 'm.shalikarian@gmail.com';
  const githubProfileLink = 'https://github.com/Milad64sh';

  const handleLinkClick = () => {
    const mailToLink = `mailto:${myEmailAddress}`;
    window.open(mailToLink, '_blank');
    console.log('email pop up opened');
  };
  const toggleMenu = () => {
    setShowIcons((showIcons) => !showIcons);
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className={styles.mobileNav}>
        <div className={styles.logoMenu}>
          <div className={styles.logo}>
            <Link href='/' legacyBehavior>
              <a className={styles.logoLink}>
                <span className={styles.logoSpan__m}>mi</span>
                <span className={styles.logoSpan__s}>sh</span>
              </a>
            </Link>
          </div>
          <div className={`${styles.navList} ${isMenuOpen && styles.open}`}>
            <ul className={styles.menu}>
              <li
                className={`${styles.menuLi} ${
                  showIcons ? styles.visible : ''
                }`}
              >
                <Link href='/about' legacyBehavior>
                  <a className={styles.menuItem}>
                    <SiAboutdotme />
                  </a>
                </Link>
              </li>
              <li
                className={`${styles.menuLi} ${
                  showIcons ? styles.visible : ''
                }`}
              >
                <Link href='#' legacyBehavior passHref>
                  <a className={styles.menuItem} onClick={handleLinkClick}>
                    <BiLogoGmail />
                  </a>
                </Link>
              </li>
              <li
                className={`${styles.menuLi} ${
                  showIcons ? styles.visible : ''
                }`}
              >
                <Link href={githubProfileLink} legacyBehavior passHref>
                  <a className={styles.menuItem} target='_blank'>
                    <FaGithub />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={`${styles.menuIcon} ${isMenuOpen && styles.open}`}
            onClick={toggleMenu}
          >
            <div className={styles.iconBar} />
            <div className={styles.iconBar} />
            <div className={styles.iconBar} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
