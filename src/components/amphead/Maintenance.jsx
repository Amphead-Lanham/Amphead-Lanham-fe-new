import React from 'react';
import styles from './Section.css';

const Maintenance = () => {
  return (
    <div className={styles.bigBox}>
      <img className={styles.sectionPic} src="https://www.amphead.org/sites/default/files/styles/large/public/IMG_0076%20test%20bench%20.JPG?itok=VcRzof7x" alt="service"/>
      <div className={styles.infoBox}>
        <h2>Service bench cost is $90 per hour. The schedule varies with the workload with most jobs completed within a week. Let us know your situation, we can usually accommodate. Rush service, when available, is $50.</h2>
      </div>
      
    </div>
  );
};

export default Maintenance;
