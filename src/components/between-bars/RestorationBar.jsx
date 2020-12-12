import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import ampheadLogo from '../../assets/amphead-between.png';
import restoration from '../../assets/restoration-parallax.png';
import styles from './BetweenBar.css';

const RestorationBar = () => {
  return (
    <ParallaxBanner
      className={styles.betweenBar}
      layers={[
        {
          image: ampheadLogo,
          amount: 0.1,
        },
        {
          image: restoration,
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

export default RestorationBar;
