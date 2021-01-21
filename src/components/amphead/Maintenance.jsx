import React from 'react';
import styles from './Section.css';

const Maintenance = () => {
  return (
    <div className={styles.bigBox}>
      <img className={styles.sectionPic} src={'/assets/work-bench.jpeg'} alt="service"/>
      <div className={styles.infoBox}>
        <h2>Service bench cost is $90 per hour. The schedule varies with the workload with most jobs completed within a week. Let us know your situation, we can usually accommodate. Rush service, when available, is $50.</h2>
      </div>
      
    </div>
  );
};

export default Maintenance;
