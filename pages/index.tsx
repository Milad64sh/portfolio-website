// pages/index.js
import styles from './index.module.scss';
import Layout from './layout';

const Home = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Welcome to My Portfolio</h1>
      </div>
    </Layout>
  );
};

export default Home;
