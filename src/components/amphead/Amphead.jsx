import React, { useLayoutEffect, useRef } from 'react';
import News from './News';
import BetweenBar from '../between-bars/BetweenBar';
import styles from './Amphead.css';
import Header from './Header';
import TabletBar from '../between-bars/TabletBar';
import PhoneBar from '../between-bars/PhoneBar';
import Section from './Section';
import Notification from './Notification';


const Amphead = () => {
  const serviceRef = useRef(null);
  const guitarRef = useRef(null);
  const overhaulRef = useRef(null);
  const restorationRef = useRef(null);

  const hash = window.location.hash; 

  useLayoutEffect(() => {
    if(hash) {
      const offsets = {
        service: serviceRef.current.offsetTop,
        guitar: guitarRef.current.offsetTop,
        overhaul: overhaulRef.current.offsetTop,
        restoration: restorationRef.current.offsetTop
      };
      window.scrollTo(0, offsets[hash.replace('#', '')] - 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);
  
  return (
    <div className={styles.ampheadOuter}>
      
      <Header isHome={true} className={styles.headerBox}/>
     
      <div 
        className={styles.outerBox} 
        data-testid={'ampheadComponent'}
      >
        <div className={styles.newsBox}>
          <News />
        </div>
        <div 
          className={styles.serviceBox} 
          id="service"
          ref={serviceRef}
        >
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
        <div 
          className={styles.guitarService}
          id="guitar"  
          ref={guitarRef}
        >
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
        <div 
          className={styles.tubeOverhaul}
          id="tube-overhaul"
          ref={overhaulRef}
        >
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
        <div 
          className={styles.restoration}
          id="restoration"
          ref={restorationRef}
        >
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
      <Notification />
    </div>
  );
};

export default Amphead;
