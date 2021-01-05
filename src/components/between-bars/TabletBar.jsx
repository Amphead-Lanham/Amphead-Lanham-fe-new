import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import styles from './TabletBar.css';
import ampheadLogo from '../../assets/amphead-parallax.png';
import PropTypes from 'prop-types';

const TabletBar = ({ section }) => {
  return (

    <div className={styles.root}>
      <Parallax className={styles.section}  x={[90, 35]} tagOuter="figure"
        offsetYMax={50}
        offsetYMin={-50}
        // offsetXMax={40}
        // offsetXMin={-20}
      >
        <h1 className={styles.barCategory}>{section}</h1>
      </Parallax>
      
      <Parallax className={styles.logo}  x={[-40, 10]} tagOuter="figure"
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

TabletBar.propTypes = {
  section: PropTypes.string.isRequired
};

export default TabletBar;
