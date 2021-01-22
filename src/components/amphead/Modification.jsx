import React from 'react';
import styles from './Section.css';

const Modification = () => {
  return (
    <div className={styles.bigBox}>
      <img className={styles.sectionPic} src={'/assets/wires.jpeg'} alt={'service'}/>
      <div className={styles.infoBox}>
        <h2>Dial in Your Sound Amphead performs proven custom performance upgrades for classic tube guitar amps.</h2>
      </div>
    
    </div>
  );
};

export default Modification;
