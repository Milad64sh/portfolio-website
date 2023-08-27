import React from 'react';
import styles from './navigation.module.scss';

import Link from 'next/link';

interface NavbarProps {
  scroll: boolean;
}
const navigation: React.FC<NavbarProps> = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href='/' legacyBehavior>
            <a className={styles.logoLink}>
              <span className={styles.logoSpan}>Milad</span>
              <span className={styles.logoSpan}>Shalikarian</span>
            </a>
          </Link>
        </div>

        <div className={styles.navList}>
          <ul className={styles.menu}>
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

      {/* <div className={styles.border}></div> */}
    </>
  );
};

export default navigation;
