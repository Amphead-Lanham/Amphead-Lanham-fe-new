import React, { useLayoutEffect } from 'react';
import News from './News';
import BetweenBar from '../between-bars/BetweenBar';
import styles from './Amphead.css';
import Header from './Header';
import TabletBar from '../between-bars/TabletBar';
import PhoneBar from '../between-bars/PhoneBar';
import Section from './Section';


const Amphead = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <>
      
      <Header isHome={true} className={styles.headerBox}/>
     
      <div 
        className={styles.outerBox} 
        data-testId={'ampheadComponent'}
      >
        <div className={styles.newsBox}>
          <News />
        </div>
        <div className={styles.serviceBox}>
          <BetweenBar 
            section={'Amp Repair & Maintenance'}
            route={'service'} />
          <TabletBar 
            section={'Repair & Maintenance'}
            route={'service'} />
          <PhoneBar 
            section={'Repair & Maintenance'} 
            route={'service'}/>
          <Section sectionName={'service'} />
        </div>
        <div className={styles.guitarService}>
          <BetweenBar 
            section={'Guitar Service'} 
            route={'guitar'}/>
          <TabletBar  
            section={'Guitar Service'} 
            route={'guitar'}/>
          <PhoneBar 
            section={'Guitar Service'}
            route={'guitar'} />
          <Section sectionName={'guitar'} />
        </div>
        <div className={styles.tubeOverhaul}>
          <BetweenBar 
            section={'Tube Amp Overhaul'} 
            route={'overhaul'}/>
          <TabletBar 
            section={'Tube Amp Overhaul'} 
            route={'overhaul'}/>
          <PhoneBar 
            section={'Tube Amp Overhaul'} 
            route={'overhaul'}/>
          <Section sectionName={'overhaul'} />
        </div>
        <div className={styles.restoration}>
          <BetweenBar 
            section={'Tube Amp Restoration'} 
            route={'restoration'}/>
          <TabletBar 
            section={'Tube Amp Restoration'} 
            route={'overhaul'}/>
          <PhoneBar 
            section={'Tube Amp Restoration'} 
            route={'overhaul'}/>
          <Section sectionName={'restoration'} />
        </div>
      </div>
    </>
  );
};

export default Amphead;
