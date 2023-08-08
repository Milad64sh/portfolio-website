import React, { useEffect, useState, useRef } from 'react';
import styles from './expertise.module.scss';
import HtmlSkill from './skills/HtmlSkill';

const Expertise: React.FC = () => {
  // adding a scroll listener to the window
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const minScroll = 0;
  const maxScroll = 2000;
  const normalizedScroll = Math.min(maxScroll, Math.max(minScroll, scrollY));
  const progress = (normalizedScroll - minScroll) / (maxScroll - minScroll);
  const opacity = cubicBezier(progress);
  function cubicBezier(progress: number): number {
    return 1 - (1 - progress) ** 2;
  }
  return (
    <>
      <div className={styles.container} style={{ opacity: opacity }}>
        <div className={styles.heading}>
          <h3>expertise</h3>
        </div>
        <div className={`${styles.expertiseItem} ${styles.html}`}>
          <HtmlSkill />
        </div>
        <div className={`${styles.expertiseItem} ${styles.css}`}>
          <div className={styles.expertiseItemContent}>
            <h4>css3</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ab
              dignissimos, temporibus praesentium odio ipsa veritatis? Placeat,
              animi? Facilis, provident.
            </p>
          </div>
        </div>
        <div className={`${styles.expertiseItem} ${styles.js}`}>
          <div className={styles.expertiseItemContent}>
            <h4>javascript</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
              ipsam alias amet magnam cumque, officiis quaerat incidunt corrupti
              explicabo, officia quidem temporibus? Voluptatum, deleniti
              aspernatur!
            </p>
          </div>
        </div>
        <div className={`${styles.expertiseItem} ${styles.react}`}>
          <div className={styles.expertiseItemContent}>
            <h4>react</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos rerum laborum, hic voluptas quo ut maiores molestiae
              cum placeat. Sapiente ad similique alias veniam natus, porro atque
              sit iusto possimus.
            </p>
          </div>
        </div>
        <div className={`${styles.expertiseItem} ${styles.ts}`}>
          <div className={styles.expertiseItemContent}>
            <h4>typescript</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos rerum laborum, hic voluptas quo ut maiores molestiae
              cum placeat. Sapiente ad similique alias veniam natus, porro atque
              sit iusto possimus.
            </p>
          </div>
        </div>
        <div className={`${styles.expertiseItem} ${styles.git}`}>
          <div className={styles.expertiseItemContent}>
            <h4>git-github</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos rerum laborum, hic voluptas quo ut maiores molestiae
              cum placeat. Sapiente ad similique alias veniam natus, porro atque
              sit iusto possimus.
            </p>
          </div>
        </div>
        <div className={`${styles.expertiseItem} ${styles.node}`}>
          <div className={styles.expertiseItemContent}>
            <h4>node.js</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos rerum laborum, hic voluptas quo ut maiores molestiae
              cum placeat. Sapiente ad similique alias veniam natus, porro atque
              sit iusto possimus.
            </p>
          </div>
        </div>
        <div className={`${styles.expertiseItem} ${styles.jest}`}>
          <div className={styles.expertiseItemContent}>
            <h4>jest</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos rerum laborum, hic voluptas quo ut maiores molestiae
              cum placeat. Sapiente ad similique alias veniam natus, porro atque
              sit iusto possimus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
