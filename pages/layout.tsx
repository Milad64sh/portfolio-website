import { useState, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Expertise from './components/Expertise';
import ProjectsList from './components/projects/ProjectsList';
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
        {scroll ? (
          <div className={styles.sideNav}>
            <div className={styles.logo}>
              <Link href='/' legacyBehavior>
                <a className={styles.logoLink}>
                  <span className={styles.logoSpan}>Milad</span>
                  <span className={styles.logoSpan}>Shalikarian</span>
                </a>
              </Link>
            </div>
            <div className={styles.navList}>
              <ul className={styles.menu}>
                <li>
                  <Link href='/home' legacyBehavior>
                    <a className={styles.menuItem}>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href='/about' legacyBehavior>
                    <a className={styles.menuItem}>About</a>
                  </Link>
                </li>
                <li>
                  <Link href='/contact' legacyBehavior>
                    <a className={styles.menuItem}>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          ''
        )}
        <header className={styles.header}>
          {isMobile ? <MobileNav /> : <Navigation scroll={scroll} />}
          <Header />
        </header>
        <main>
          <section id='sectionCourses'>
            <Expertise />
          </section>
          <section id='sectionProjects'>
            <ProjectsList />
          </section>
          {children}
        </main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
