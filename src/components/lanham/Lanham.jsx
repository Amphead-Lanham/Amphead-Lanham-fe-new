import React, { useLayoutEffect } from 'react';
import HeaderLanham from './HeaderLanham';
import LandingPage from './LandingPage';
import FeaturesSection from './FeaturesSection';
import AboutSection from './AboutSection';
import styles from './Lanham.css';
import Carousel from './Carousel';
// import Models from './Models';


const Lanham = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={styles.outer} >
      <div className={styles.header}>
        <HeaderLanham  forHome={true}/>
      </div>
      <div className={styles.lanhamBox} >
        <div className={styles.bigBox} >
          <LandingPage className={styles.landingPage} />
        </div>
        <div className={styles.carouselBox}>
          <Carousel />
        </div>
        <div className={styles.secondBox}>
          <div className={styles.modelsMainPage} >
            {/* <Models forMainPage /> */}
          </div>
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
