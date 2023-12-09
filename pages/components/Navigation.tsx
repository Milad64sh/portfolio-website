import React from 'react';
import styles from './navigation.module.scss';
import { SiAboutdotme } from 'react-icons/si';
import { BiLogoGmail } from 'react-icons/bi';
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
              <Link href='/about' legacyBehavior>
                <a className={styles.menuItem}>
                  <SiAboutdotme />
                </a>
              </Link>
            </li>
            <li>
              <Link href='/contact' legacyBehavior>
                <a className={styles.menuItem}>
                  <BiLogoGmail />
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
