import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import styles from './MobileBar.css';
import ampheadLogo from '../../assets/amphead-parallax.png';
import ampRestoration from '../../assets/restoration-parallax.png';

const MobileRestorationBar = () => {
  return (

    <div className={styles.root}>
      <Parallax className={styles.section}  x={[150, 80]} tagOuter="figure"
        offsetYMax={150}
        offsetYMin={-50}
        offsetXMax={40}
        offsetXMin={-20}
      >
        <img src={ampRestoration} alt="ok" />
      </Parallax>
      <div className={styles.container}>
        <Parallax className={styles.logo}  x={[-70, 90]} tagOuter="figure"
          offsetYMax={150}
          offsetYMin={-50}
          offsetXMax={-40}
          offsetXMin={20}
        >
          <img src={ampheadLogo} alt="ok" />
       
        </Parallax>
      </div>
    </div>
  );

};

export default MobileRestorationBar;
