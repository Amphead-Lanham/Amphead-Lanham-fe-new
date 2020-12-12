import React from 'react';
import BigLogo from './BigLogo';
import styles from './News.css';

const News = () => {

  return (
    <div className={styles.bigBox}>
      <div className={styles.logo}>
        <BigLogo />
      </div>
      <div className={styles.infoBox}>
        <h1>Providing Amplifier Repair and Maintenance to Portland Area Musicians since 1996</h1>
        <h3>shop hours by appointment</h3>
        <h4>Monday through Friday 10am - 6pm and Saturday 10am - 2pm</h4>
        <h3>we have new procedures for social-distancing, plaease contact to schedule a visit.</h3>
        <h3>503 231-4035</h3>
        <h3>5225-a SE 78th ave. Portland, OR 97206</h3>
      </div>
    </div>
  );
};

export default News;
