import React, { useLayoutEffect } from 'react';
import HeaderLanham from './HeaderLanham';
import LandingPage from './LandingPage';
import FeaturesSection from './FeaturesSection';
import ModelsSplashElement from './ModelsSplashElement';
import AboutSection from './AboutSection';
import styles from './Lanham.css';



const Lanham = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={styles.fart} >
      <div className={styles.header}>
        <HeaderLanham  forHome={true}/>
      </div>
      <div className={styles.lanhamBox} >
        
        
        <div className={styles.bigBox} >
          <LandingPage className={styles.landingPage} />
        </div>
        <div className={styles.secondBox}>
          <ModelsSplashElement className={styles.modelSplash} />
          <FeaturesSection className={styles.features} />
        </div>
        <div className={styles.thirdBox} id={'about-section'}>
          <AboutSection />
        </div>
      </div>
    </div>
  );
};

export default Lanham;
