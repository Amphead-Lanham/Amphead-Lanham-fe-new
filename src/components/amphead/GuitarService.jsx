import React from 'react';
import styles from './Section.css';

const GuitarService = () => {
  return (
    <div className={styles.bigBox}>
      <img className={styles.sectionPic} src="https://www.amphead.org/sites/default/files/styles/large/public/Les%20Paul%20w%20Lindy%20Fralin%20IMG_3202%20small.jpg?itok=tksoQRpX" alt="guitar service"/>
      <div className={styles.infoBox}>
        <h2>Amphead has always provided quality guitar service. Set up, wiring and repair.</h2>
      </div>
    </div>
  );
};

export default GuitarService;
