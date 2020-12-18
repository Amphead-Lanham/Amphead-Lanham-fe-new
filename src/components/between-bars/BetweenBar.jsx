import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import ampheadLogo from '../../assets/amphead-between.png';
import ampRepair from '../../assets/amp-repair-parallax.png';
import styles from './BetweenBar.css';


const BetweenBar = () => {
  return (
    
    <ParallaxBanner
      className={styles.bar}
      layers={[
        {
          image: ampheadLogo,
          amount: 0.1,
        },
        {
          image: ampRepair,
          amount: -0.1,
        },
      ]}
      style={{
        height: '170px',
        width: '100vh'
      }}
    >
    </ParallaxBanner>
    
  );
};





export default BetweenBar;
