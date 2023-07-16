import Header from './components/header';
import Footer from './components/footer';
import { ReactNode } from 'react';
import Navigation from './components/Navigation';
import styles from './index.module.scss';

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navigation />
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
