// pages/index.js
import Footer from './components/Footer';
import styles from './index.module.scss';
import Layout from './layout';

const Home = () => {
  return (
    <>
      <Layout>
        <div className={styles.container}></div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </Layout>
    </>
  );
};

export default Home;
