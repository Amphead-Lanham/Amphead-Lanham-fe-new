import React from 'react';
import lanhamLogo from '../../assets/lanham-logo.png';
import styles from './LandingPage.css';


const LandingPage = () => {
  return (
    <div className={styles.landingBox} >
      <img src={lanhamLogo} className={styles.logo} />
      
    </div>
  );
};

export default LandingPage;
