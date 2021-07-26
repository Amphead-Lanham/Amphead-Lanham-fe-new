import React from 'react';
import { lanhamAbout, ampsAbout } from '../../data/lanham-about';
import styles from './AboutSection.css';


const AboutSection = () => {

  return (
    <div className={styles.aboutBox} id={'about-section'}>
      <p>
        {lanhamAbout}
      </p>
      <p>
        {ampsAbout}
      </p>
    </div>
  );
};

export default AboutSection;
