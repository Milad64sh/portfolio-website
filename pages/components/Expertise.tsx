import React, { useEffect, useState, useRef } from 'react';
import styles from './expertise.module.scss';
import { useAppContext } from '../../contexts/AppContext';
import SingleSkill from './skills/SingleSkill';
import 'swiper/css/swiper.css'; // Import Swiper CSS
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
import './swiper-styles.scss';

const Expertise: React.FC = () => {
  const { skillsData } = useAppContext();

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
  const calculateOpacityStyle = (opacity: number): React.CSSProperties => {
    return { opacity };
  };
  return (
    <>
      <div className={styles.sliderContainer}>
        <div className={styles.heading}>
          <h3>expertise</h3>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          direction='vertical'
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          <div className={styles.mobileContainer}>
            {skillsData.map((skill: any, index: number) => (
              <SwiperSlide key={index} className={styles.slide}>
                <SingleSkill
                  key={skill.id}
                  skill={skill}
                  index={index}
                  style={styles.singleSkill}
                />
              </SwiperSlide>
            ))}
          </div>
          <div className='swiper-button-next'></div>
          <div className='swiper-button-prev'></div>
        </Swiper>
      </div>
      <div
        className={styles.container}
        style={{
          ...calculateOpacityStyle(opacity),
          ['--skills-count' as any]: skillsData.length,
        }}
      >
        <div className={styles.heading}>
          <h3>expertise</h3>
        </div>
        {skillsData.map((skill: any, index: number) => (
          <SingleSkill
            key={skill.id}
            skill={skill}
            index={index}
            style={styles[`expertiseItem-${index}`]}
          />
        ))}
      </div>
    </>
  );
};

export default Expertise;
