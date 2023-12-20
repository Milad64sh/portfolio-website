import React from 'react';
import styles from './navigation.module.scss';
import { SiAboutdotme } from 'react-icons/si';
import { BiLogoGmail } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const navigation: React.FC = () => {
  const myEmailAddress = 'm.shalikarian@gmail.com';
  const githubProfileLink = 'https://github.com/Milad64sh';

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
