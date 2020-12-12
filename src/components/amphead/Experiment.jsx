import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import styles from './Experiment.css'
import ampheadLogo from '../assets/amphead-parallax.png'
import ampRepair from '../assets/amp-repair-parallax.png'

const Experiment = () => {
  return (

    <div className={styles.root}>
    <div className={styles.container}>
    <Parallax className={styles.logo}  x={[-40, 20]} tagOuter="figure"
    offsetYMax={150}
    offsetYMin={-50}
    offsetXMax={-40}
    offsetXMin={20}
    >
        <img src={ampheadLogo} alt='ok' />
       
    </Parallax>
    <Parallax className={styles.section}  x={[125, -20]} tagOuter="figure"
    offsetYMax={150}
    offsetYMin={-50}
    offsetXMax={40}
    offsetXMin={-20}
    >
        <img src={ampRepair} alt='ok' />
    </Parallax>
    </div>
    </div>
);

}

export default Experiment
