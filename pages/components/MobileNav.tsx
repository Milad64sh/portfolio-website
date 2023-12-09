import React, { useState, useEffect } from 'react';
import styles from './mobileNav.module.scss';
import { SiAboutdotme } from 'react-icons/si';
import { GoMail } from 'react-icons/go';
import Link from 'next/link';

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
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
                <span className={styles.logoSpan}>Milad</span>
                <span className={styles.logoSpan}>Shalikarian</span>
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
                <Link href='/contact' legacyBehavior>
                  <a className={styles.menuItem}>
                    <GoMail />
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
