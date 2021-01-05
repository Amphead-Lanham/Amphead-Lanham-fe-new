import React from 'react';
import News from './News';
import BetweenBar from '../between-bars/BetweenBar';
import Maintenance from './Maintenance';
import GuitarService from './GuitarService';
import styles from './Amphead.css';
import Overhaul from './Overhaul';
import Restoration from './Restoration';
import Modification from './Modification';
import Header from './Header';
import TabletBar from '../between-bars/TabletBar';
import PhoneBar from '../between-bars/PhoneBar';




const Amphead = () => {
  
  return (
    <>
      
      <Header className={styles.headerBox}/>
      
      <div className={styles.outerBox}>
        <div className={styles.newsBox}>
          <News />
        </div>
        <div className={styles.serviceBox}>
          <BetweenBar section={'Amp Repair & Maintenance'} />
          <TabletBar section={'Repair & Maintenance'} />
          <PhoneBar section={'Repair & Maintenance'} />
          <Maintenance />
        </div>
        <div className={styles.guitarService}>
          <BetweenBar section={'Guitar Service'} />
          <TabletBar  section={'Guitar Service'} />
          <PhoneBar section={'Guitar Service'} />
          <GuitarService />
        </div>
        <div className={styles.tubeOverhaul}>
          <BetweenBar section={'Tube Amp Overhaul'} />
          <TabletBar section={'Tube Amp Overhaul'} />
          <PhoneBar section={'Tube Amp Overhaul'} />
          <Overhaul />
        </div>
        <div className={styles.restoration}>
          <BetweenBar section={'Tube Amp Restoration'} />
          <TabletBar section={'Tube Amp Restoration'} />
          <PhoneBar section={'Tube Amp Restoration'} />
          <Restoration />
        </div>
        <div className={styles.modification}>
          <BetweenBar section={'Tube Amp Modification'} />
          <TabletBar section={'Tube Amp Modification'} />
          <PhoneBar section={'tube Amp Modification'} />
          <Modification />
        </div>
     
      </div>
    </>
  );
};

export default Amphead;
