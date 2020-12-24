import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import ampheadLogo from '../../assets/amphead-parallax-left.png';
import modification from '../../assets/modification-parallax-II.png';
import styles from './BetweenBar.css';

const ModificationBar = () => {
  return (
    <ParallaxBanner
      className={styles.bar}
      layers={[
        {
          image: ampheadLogo,
          amount: 0.1,
        },
        {
          image: modification,
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

export default ModificationBar;
