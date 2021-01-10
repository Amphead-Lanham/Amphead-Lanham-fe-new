import React from 'react';
import { features } from '../../data/amp-features.js';
import styles from './FeaturesSection.css';

const FeaturesSection = () => {

  const featuresItems = features.map((item, index) => (
    <li  className={styles.feature} key={item[index]} >
      <h2>{item}</h2> 
    </li>
  ));

  return (
    <div className={styles.featureList} >
      <ul >
        {featuresItems}
      </ul>
      <h1 className={styles.promise} >Our Promise</h1>
    </div>
  );
};

export default FeaturesSection;
