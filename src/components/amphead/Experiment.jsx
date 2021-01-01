import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import styles from './Experiment.css';
import ampheadLogo from '../../assets/amphead-parallax.png';
import ampRepair from '../../assets/amp-repair-parallax.png';

const Experiment = () => {
  return (

    <div className={styles.root}>
      <Parallax className={styles.section}  x={[150, 85]} tagOuter="figure"
        offsetYMax={150}
        offsetYMin={-50}
        offsetXMax={40}
        offsetXMin={-20}
      >
        <img src={ampRepair} alt="ok" />
      </Parallax>
      <div className={styles.container}>
        <Parallax className={styles.logo}  x={[-70, -10]} tagOuter="figure"
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

export default Experiment;
