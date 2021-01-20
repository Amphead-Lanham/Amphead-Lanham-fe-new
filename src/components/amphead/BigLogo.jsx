import React from 'react';
import ampheadLogo from '../../../public/assets/amphead-small-black.png';
import styles from './Amphead.css';


const BigLogo = () => {
  return (
    <div className={styles.outerBox}>
      <img className={styles.BigLogo} src={ampheadLogo} alt={'AMPHEAD'}/>
    </div>
  );
};

export default BigLogo;
