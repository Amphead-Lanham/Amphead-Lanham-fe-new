import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import ampheadLogo from '../../assets/amphead-between.png';
import overhaul from '../../assets/overhaul-parallax.png';
import styles from './BetweenBar.css';

const OverhaulBar = () => {
  return (
    
    <ParallaxBanner
      className={styles.bar}
      layers={[
        {
          image: ampheadLogo,
          amount: 0.1,
        },
        {
          image: overhaul,
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

export default OverhaulBar;
