import React, { useState, useEffect, useRef } from 'react';
import styles from './description.module.scss';

const Description = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const words = ['Web Designer', 'Web developer', 'photographer', 'Designer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % words.length);
    }, 1500); // Change word every 1.5 seconds

    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <p>
          A{' '}
          <span className={styles.container__content__flipper}>
            {words.map((word, index) => (
              <span
                key={index}
                className={`${styles.container__content__flipper__step} ${
                  index === currentStep ? styles.set : ''
                } ${index < currentStep ? styles.down : ''}`}
              >
                {word}
              </span>
            ))}
          </span>
          <br />
          based in Berkshire, working hard to turn idea into design.
        </p>
      </div>
    </div>
  );
};

export default Description;
