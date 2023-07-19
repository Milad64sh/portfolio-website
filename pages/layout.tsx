import { useState, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
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
      setIsMobile(window.innerWidth <= 767); // Adjust the breakpoint according
    });
  }, []);
  return (
    <div className={styles.container}>
      {isMobile ? <MobileNav /> : <Navigation isMobile={isMobile} />}
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
