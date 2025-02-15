import React from 'react';
import styles from './task1.module.scss';
import Link from 'next/link';

const projectOne = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content__header}>
          <h2>Project 1</h2>
        </div>
        <div className={styles.container__content__desc}>
          <p>
            The Gazetteer App is a mobile-first, interactive web application
            that provides detailed country profiles using real-time data from
            multiple APIs. It features a full-screen interactive map that
            auto-detects user location, allowing users to explore demographic,
            climatic, geographical, cultural, and economic information about any
            country.{' '}
            <span>
              <Link
                href='https://gazetteer.miladshalikarian.co.uk/'
                target='_blank'
                rel='noopener noreferrer'
              >
                view project 1
              </Link>
            </span>
            .
          </p>
        </div>
        <div className={styles.container__content__link}></div>
      </div>
    </div>
  );
};

export default projectOne;
