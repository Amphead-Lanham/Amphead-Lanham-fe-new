import React, { useEffect, useRef } from 'react';
import { features } from '../../data/amp-features.js';
import { useInView } from 'react-intersection-observer';
import styles from './FeaturesSection.css';

const FeaturesSection = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
  }, [aboutRef]);
  
  const { ref, inView } = useInView({
    // triggerOnce: true,
    threshold: .3,
    onChange: () => {
      const scroller = () => {
        const yAxis = aboutRef.current.offsetTop;
        console.log('here?  ', yAxis);
      };
      if(inView) {
        console.log('HELLO?');
        window.addEventListener('scroll', scroller, { passive: true });
      } 
      if(!inView) {
        console.log('bye bye');
        window.removeEventListener('scroll', scroller, false);
      }
    }
  });

  const featuresItems = features.map((item, index) => (
    <li  className={styles.feature} key={item[index]} >
      <h2>{item}</h2> 
    </li>
  ));

  return (
    <div ref={aboutRef}>
      <div
        className={inView ? styles.featureBox : styles.placeHolderBox}
        ref={ref}
        style={{
          transition: 'ease-in',
          visibility: inView ? 'visible' : 'hidden'
        }}
      >
        <ul className={inView ? styles.featureList : null}
          ref={ref}
        >
          {featuresItems}
        </ul>
        <h1
          className={inView ? styles.promise : null}
          ref={ref}
        >
        Our Promise is Guaranteed Quality
        </h1>
      </div>
    </div>
  );
};

export default FeaturesSection;
