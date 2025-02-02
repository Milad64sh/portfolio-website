import React from 'react';
import styles from './task1.module.scss';
import Link from 'next/link';

const Task1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content__header}>
          <h2>Task1</h2>
        </div>
        <div className={styles.container__content__desc}>
          <p>
            This web application provides real-time Earthquake data, Weather
            information, and Country details using the Geonames API. Built with
            PHP and deployed on Heroku, it allows users to retrieve information
            via AJAX requests{' '}
            <span>
              <Link
                href='https://geonames-api-requests-a22d16a04475.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                view task 1
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

export default Task1;
