import React, { useState } from 'react';
import styles from './navigation.module.scss';
import Link from 'next/link';

interface NavbarProps {
  isMobile: boolean;
}
const navigation: React.FC<NavbarProps> = ({ isMobile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      <nav className={`${styles.nav} ${isMobile ? styles.mobile : ''}`}>
        <div className={styles.logo}>
          <Link href='/' legacyBehavior>
            <a className={styles.logoLink}>logo</a>
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
        <div className={styles.navList}>
          <ul
            className={`${styles.menu} ${
              isMenuOpen ? styles.open : styles.close
            }`}
          >
            <li>
              <Link href='/home' legacyBehavior>
                <a className={styles.menuItem}>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/about' legacyBehavior>
                <a className={styles.menuItem}>About</a>
              </Link>
            </li>
            <li>
              <Link href='/contact' legacyBehavior>
                <a className={styles.menuItem}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.border}></div>
    </>
  );
};

export default navigation;
