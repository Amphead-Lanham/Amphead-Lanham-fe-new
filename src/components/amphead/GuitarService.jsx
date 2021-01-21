import React from 'react';
import styles from './Section.css';

const GuitarService = () => {
  return (
    <div className={styles.bigBox}>
      <img className={styles.sectionPic} src={'/assets/guitar-closeup.jpeg'} alt={'guitar service'}/>
      <div className={styles.infoBox}>
        <h2>Amphead has always provided quality guitar service. Set up, wiring and repair.</h2>
      </div>
    </div>
  );
};

export default GuitarService;
