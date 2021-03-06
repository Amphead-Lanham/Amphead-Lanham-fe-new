import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import styles from './BetweenBar.css';
import ampheadLogo from '../../../public/assets/amphead-parallax.png';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const BetweenBar = ({ section, route }) => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: .7,
  });

  return (
    <div className={styles.root} ref={ref}>
      {inView && 
      <Link to={`/detail/${route}`}>
        <Parallax className={styles.section}  x={[140, 50]} tagOuter="figure"
          offsetYMax={50}
          offsetYMin={-50}
      
        >
          <h1 className={styles.barCategory}>{section}</h1>
        </Parallax>
      
        <Parallax className={styles.logo}  x={[-90, 12]} tagOuter="figure"
          offsetYMax={50}
          offsetYMin={-90}
      
        >
          <img src={ampheadLogo} alt="ok" />
       
        </Parallax>
      
      </Link>
      }
    </div>
  );
  
  
};

BetweenBar.propTypes = {
  section: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};

export default BetweenBar;
