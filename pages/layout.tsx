import { useState, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Expertise from './components/Expertise';
import { ReactNode } from 'react';
import Navigation from './components/Navigation';
import MobileNav from './components/MobileNav';
import styles from './index.module.scss';

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
    if (window.scrollY > 100) {
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
    <div className={styles.layout}>
      <header className={styles.header}>
        {isMobile ? <MobileNav /> : <Navigation scroll={scroll} />}
        <Header />
      </header>
      <main>
        <section id='sectionCourses'>
          <Expertise />
        </section>
        {children}
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
