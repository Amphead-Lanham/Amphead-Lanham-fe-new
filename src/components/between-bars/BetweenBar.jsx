import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import ampheadLogo from '../../assets/amphead-parallax-left.png';
import ampRepair from '../../assets/amp-repair-parallax-II.png';
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
          amount: -0.2,
        },
      ]}
      style={{
        height: '25vh',
        width: '100vh',
      
      }}
    >
    </ParallaxBanner>
    
  );
};





export default BetweenBar;
