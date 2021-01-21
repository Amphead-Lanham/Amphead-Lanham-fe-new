import React from 'react';
import styles from './Section.css';

const Overhaul = () => {
  return (
    <div className={styles.bigBox}>
      <img className={styles.sectionPic} src={'/assets/mullard-tube.jpeg'} alt={'overhaul'}/>
      <div className={styles.infoBox}>
        <h2>Many of the most popular amps today are 25+ years old and are well beyond their expected service life. Eventually that sweet vintage tube amp will need to be "overhauled" to produce good tone and stay off the repair bench</h2>
      </div>
      
    </div>
  );
};

export default Overhaul;
