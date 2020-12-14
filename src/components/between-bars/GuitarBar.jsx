import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import ampheadLogo from '../../assets/amphead-between.png';
import guitar from '../../assets/guitar-service-parallax.png';
import styles from './BetweenBar.css';

const GuitarBar = () => {
  return (
    <ParallaxBanner
      className={styles.bar}
      layers={[
        {
          image: ampheadLogo,
          amount: 0.1,
        },
        {
          image: guitar,
          amount: -0.1,
        },
      ]}
      style={{
        height: '200px',
        width: '100vh'
      }}
    >
    </ParallaxBanner>
  );
};

export default GuitarBar;
