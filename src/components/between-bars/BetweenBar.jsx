import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import styles from './BetweenBar.css';
import ampheadLogo from '../../../assets/amphead-parallax.png';
import PropTypes from 'prop-types';

const BetweenBar = ({ section }) => {
  return (

    <div className={styles.root}>
      <Parallax className={styles.section}  x={[140, 60]} tagOuter="figure"
        offsetYMax={50}
        offsetYMin={-50}
        // offsetXMax={40}
        // offsetXMin={-20}
      >
        <h1 className={styles.barCategory}>{section}</h1>
      </Parallax>
      
      <Parallax className={styles.logo}  x={[-90, 8]} tagOuter="figure"
        offsetYMax={50}
        offsetYMin={-90}
        // offsetXMax={-40}
        // offsetXMin={20}
      >
        <img src={ampheadLogo} alt="ok" />
       
      </Parallax>
      
    </div>
  );
  
  
};

BetweenBar.propTypes = {
  section: PropTypes.string.isRequired
};

export default BetweenBar;
