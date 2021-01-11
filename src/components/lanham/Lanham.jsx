import React from 'react';
import Header from './HeaderLanham';
import LandingPage from './LandingPage';
import FeaturesSection from './FeaturesSection';
import styles from './Lanham.css';

const Lanham = () => {
  return (
    <div className={styles.bigBox} >
      <Header />
      <LandingPage />
      <FeaturesSection />
    </div>
  );
};

export default Lanham;
