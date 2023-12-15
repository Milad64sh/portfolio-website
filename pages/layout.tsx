import { useState, useEffect } from 'react';
import Header from './components/header';
import { ReactNode } from 'react';
import Navigation from './components/Navigation';
import MobileNav from './components/MobileNav';
import styles from './index.module.scss';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth <= 767);
    });
  }, []);
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className={styles.layout}>
        <header className={styles.header}>
          {isMobile ? <MobileNav /> : <Navigation scroll={scroll} />}
          <Header />
        </header>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
