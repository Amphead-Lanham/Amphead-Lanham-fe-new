import React from 'react';
import styles from './Section.css';

const Restoration = () => {
  return (
    <div className={styles.bigBox}>
      <img className={styles.sectionPic} src="https://www.amphead.org/sites/default/files/styles/large/public/IMG_1247_0.jpg?itok=CF1dRdNg" alt="overhaul"/>
      <div className={styles.infoBox}>
        <h2>This '59 Fender Bassman is an example of a restoration project completed at Amphead in July of '06. Click for details and pictures of the process.</h2>
      </div>
      
    </div>
  );
};

export default Restoration;
