import React, { useState } from 'react';
import styles from './mobileNav.module.scss';
import Link from 'next/link';

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
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
          <div
            className={`${styles.menuIcon} ${isMenuOpen && styles.open}`}
            onClick={toggleMenu}
          >
            <div className={styles.iconBar} />
            <div className={styles.iconBar} />
            <div className={styles.iconBar} />
          </div>
        </div>
        <div className={`${styles.navList} ${isMenuOpen && styles.open}`}>
          <ul className={styles.menu}>
            <li className={styles.menuLi}>
              <Link href='/home' legacyBehavior>
                <a className={styles.menuItem}>
                  Home
                  <span className={styles.linkBorder}></span>
                </a>
              </Link>
            </li>
            <li className={styles.menuLi}>
              <Link href='/about' legacyBehavior>
                <a className={styles.menuItem}>
                  About
                  <span className={styles.linkBorder}></span>
                </a>
              </Link>
            </li>
            <li className={styles.menuLi}>
              <Link href='/contact' legacyBehavior>
                <a className={styles.menuItem}>
                  Contact
                  <span className={styles.linkBorder}></span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
