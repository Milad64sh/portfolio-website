import React from 'react';
import styles from './heading.module.scss';

interface HeadingName {
  name: string;
}

const Heading: React.FC<HeadingName> = ({ name }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Heading;
