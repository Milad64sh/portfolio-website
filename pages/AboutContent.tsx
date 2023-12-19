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
      <p className={styles.aboutP}>
        My name is Milad Shalikarian, and I am a self-taught tech enthusiast
        known for my reliability and passion for learning. Around four years
        ago, I excelled in the field of conservation and restoration, serving as
        the head of the conservation laboratory in an archaeological museum and
        establishing myself as a trusted contractor for the Cultural Heritage
        Organization in Golestan province, Iran. However, I found myself
        yearning for more creativity and a deeper connection to my true passion
        for art and elegant design. As a front-end developer, I discovered the
        perfect outlet for my creativity and an opportunity to utilize modern
        technology to deliver exceptional designs to users. Driven by an
        insatiable desire to expand my knowledge, I independently pursued
        various fields in a remarkably short period. As reflected in my resume,
        I actively participated in multiple online courses, delving into
        HTML/CSS, JavaScript, Sass, React, TypeScript, Node.js, Next.js, Git &
        GitHub. With each milestone achieved, my fascination for this field only
        grew stronger. The perpetual learning journey is what truly energizes
        me. Although my previous career may seem unrelated, it endowed me with
        invaluable skills. I honed my communication and interpersonal abilities,
        developed adept problem-solving techniques, and fostered essential
        qualities like time management, unwavering dedication, and teamwork.
        Confident in my ability to thrive in a creative and progressive
        environment, I perpetually seek opportunities to elevate my skill set.
        In conclusion, I possess the requisite experience and skills that make
        me a reliable and enthusiastic candidate. It would be an honor to
        contribute my talents as a productive member of your team and
        organization. Thank you for your time and consideration. I eagerly await
        the opportunity to connect with you.
      </p>
    </>
  );
};

export default AboutContent;
