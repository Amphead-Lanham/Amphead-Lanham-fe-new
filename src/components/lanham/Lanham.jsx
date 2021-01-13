import React from 'react';
import Header from './HeaderLanham';
import LandingPage from './LandingPage';
import FeaturesSection from './FeaturesSection';
import ModelsSplashElement from './ModelsSplashElement';
import styles from './Lanham.css';

const Lanham = () => {
  return (
    <div className={styles.bigBox} >
      <Header className={styles.header} />
      <LandingPage className={styles.landingPage} />
      <ModelsSplashElement className={styles.modelSplash} />
      <FeaturesSection className={styles.features} />
    </div>
  );
};

export default Lanham;
