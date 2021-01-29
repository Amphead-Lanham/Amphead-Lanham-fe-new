import React from 'react';
import { lanhamAbout } from '../../data/lanham-about';
import styles from './AboutSection.css';


const AboutSection = () => {
  return (
    <div className={styles.aboutBox} >
      <p>
        {lanhamAbout}
      </p>
    </div>
  );
};

export default AboutSection;
