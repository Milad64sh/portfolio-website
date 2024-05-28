import React, { useState } from 'react';
import styles from './footer.module.scss';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
  const [isRotating, setIsRotating] = useState(false);

  const myEmailAddress = 'm.shalikarian@gmail.com';
  const githubProfileLink = 'https://github.com/Milad64sh';
  const linkedinProfileLink = 'https://www.linkedin.com/in/miladshalikarian/';
  const twitterProfileLink = 'https://x.com/mlshbNaam';
  const handleClick = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000); // Reset after animation duration
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__content}>
          <div className={styles.container__content__logo}>
            <div className={styles.logo}>
              <Link href='/' legacyBehavior>
                <a
                  className={`${styles.logoLink} ${
                    isRotating ? styles.rotate : ''
                  }`}
                  onClick={handleClick}
                >
                  <span className={styles.logoLink__square}></span>
                  <span className={styles.logoLink__m}>m</span>
                  <span className={styles.logoLink__i}>i</span>
                  <span className={styles.logoLink__s}>s</span>
                  <span className={styles.logoLink__h}>h</span>
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.container__content__links}>
            <div className={styles.container__content__links__question}>
              <p className={styles.container__content__links__question__p}>
                LETS CONNECT:
              </p>
            </div>
            <div className={styles.container__content__links__items}>
              <Link href={linkedinProfileLink} legacyBehavior>
                <a className={styles.container__content__links__items__a}>
                  <FaLinkedin />
                </a>
              </Link>
              <Link href={myEmailAddress} legacyBehavior>
                <a className={styles.container__content__links__items__a}>
                  <IoMdMail />
                </a>
              </Link>
              <Link href={githubProfileLink} legacyBehavior>
                <a className={styles.container__content__links__items__a}>
                  <FaGithubSquare />
                </a>
              </Link>
              <Link href={twitterProfileLink} legacyBehavior>
                <a className={styles.container__content__links__items__a}>
                  <FaXTwitter />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.container__content__copyright}>
            &copy; {new Date().getFullYear()} Milad.S1985
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
