import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import styles from './BetweenBar.css';
import ampheadLogo from '../../../public/assets/amphead-parallax.png';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BetweenBar = ({ section, route }) => {
  return (
    <div className={styles.root}>
      <Link to={`/detail/${route}`}>
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
      
      </Link>
    </div>
  );
  
  
};

BetweenBar.propTypes = {
  section: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};

export default BetweenBar;
