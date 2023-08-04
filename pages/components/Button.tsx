import React, { useEffect, useState } from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  targetSectionId: string;
}

const Button: React.FC<ButtonProps> = ({ targetSectionId }) => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 6000);
    return () => clearTimeout(timer);
  });
  const scrollToSection = () => {
    const targetSection = document.getElementById(targetSectionId);
    if (targetSectionId) {
      targetSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button className={styles.button} onClick={scrollToSection}>
        explore
      </button>
    </div>
  );
};

export default Button;
