import React from 'react';
import { features } from '../../data/amp-features.js';
import { useInView } from 'react-intersection-observer';
import styles from './FeaturesSection.css';

const FeaturesSection = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: .3,
  });

  const featuresItems = features.map((item, index) => (
    <li  className={styles.feature} key={item[index]} >
      <h2>{item}</h2> 
    </li>
  ));

  return (
    <div
      className={inView ? styles.featureBox : null}
      ref={ref}
      style={{
        transition: 'ease-in',
        visibility: inView ? 'visible' : 'hidden'
      }}>
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
  );
};

export default FeaturesSection;
