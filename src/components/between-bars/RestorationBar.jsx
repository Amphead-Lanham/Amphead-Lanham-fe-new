import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import ampheadLogo from '../../assets/amphead-parallax-left.png';
import restoration from '../../assets/restoration-parallax-II.png';
import styles from './BetweenBar.css';

const RestorationBar = () => {
  return (
    <ParallaxBanner
      className={styles.bar}
      layers={[
        {
          image: ampheadLogo,
          amount: 0.1,
        },
        {
          image: restoration,
          amount: -0.2,
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
