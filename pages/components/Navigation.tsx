import Link from 'next/link';
import styles from './navigation.module.scss';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      <nav className={styles.nav}>
        <Link href='/' legacyBehavior>
          <a className={styles.logo}>logo</a>
        </Link>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <div className={`${styles.iconBar} ${isMenuOpen && styles.open}`} />
          <div className={`${styles.iconBar} ${isMenuOpen && styles.open}`} />
          <div className={`${styles.iconBar} ${isMenuOpen && styles.open}`} />
        </div>

        <ul className={`${styles.menu} ${isMenuOpen && styles.open}`}>
          <li>
            <Link href='/' legacyBehavior>
              <a href='' className={styles.li}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href='/about' legacyBehavior>
              <a className={styles.li}>About</a>
            </Link>
          </li>
          <li>
            <Link href='/contact' legacyBehavior>
              <a className={styles.li}>contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.border}></div>
    </>
  );
};

export default Navigation;
