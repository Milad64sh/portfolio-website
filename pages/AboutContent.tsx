import React from 'react';
import styles from './about.module.scss';

const AboutContent = () => {
  return (
    <>
      <div className={styles.HBG}>
        <div className={styles.HBGLightGrey}></div>
        <div className={styles.HBGMediumGrey}></div>
        <div className={styles.HBGDarkGrey}></div>
        <div className={styles.HBGYellow}></div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.aboutH3}>I am</h3>
        <p className={styles.aboutP}>
          Hello, I'm a self-taught software developer based in Reading,
          Berkshire, UK. Passionate about creativity and design, I've spent the
          last three years mastering technologies like HTML, CSS, JavaScript,
          React, SCSS, Git, GitHub, DSA, Webpack, Jest, TypeScript, and Next.js.
          My portfolio website, built with Next.js, TypeScript, and SCSS,
          showcases my dedication to unique design and attention to detail. As a
          creative and hardworking individual, I'm committed to delivering
          results and embracing new challenges. While I'm currently focused on
          frontend, I briefly delved into backend technologies (Node.js,
          Express, MongoDB, SQL) before immigration matters redirected my
          attention. Rest assured, backend is my next venture. If my skills
          align with your team's needs, let's connect and explore possibilities!
        </p>
      </div>
    </>
  );
};

export default AboutContent;
