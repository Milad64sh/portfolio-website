import React from 'react';
import styles from './heading.module.scss';

interface HeadingName {
  name: string;
}

const Heading: React.FC<HeadingName> = ({ name }) => {
  return (
    <div className={styles.heading}>
      <h3 className={styles.headingH3}>{name}</h3>
    </div>
  );
};

export default Heading;
