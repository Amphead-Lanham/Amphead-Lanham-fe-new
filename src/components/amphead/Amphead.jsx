import React from 'react';
import News from './News';
import BetweenBar from '../between-bars/BetweenBar';
import GuitarBar from '../between-bars/GuitarBar';
import OverhaulBar from '../between-bars/OverhaulBar';
import RestorationBar from '../between-bars/RestorationBar';
import ModificationBar from '../between-bars/ModificationBar';
import Maintenance from './Maintenance';
import GuitarService from './GuitarService';
import styles from './Amphead.css';
import Overhaul from './Overhaul';
import Restoration from './Restoration';
import Modification from './Modification';
import Header from './Header';
import Experiment from './Experiment';


const Amphead = () => {
  
  return (
    <>
      
      <Header className={styles.headerBox}/>
      
      <div className={styles.outerBox}>
        <div className={styles.newsBox}>
          <News />
        </div>
        <div className={styles.serviceBox}>
          <BetweenBar />
          <Experiment />
          <Maintenance />
        </div>
        <div className={styles.guitarService}>
          <GuitarBar />
          <GuitarService />
        </div>
        <div className={styles.tubeOverhaul}>
          <OverhaulBar />
          <Overhaul />
        </div>
        <div className={styles.restoration}>
          <RestorationBar />
          <Restoration />
        </div>
        <div className={styles.modification}>
          <ModificationBar />
          <Modification />
        </div>
     
      </div>
    </>
  );
};

export default Amphead;
