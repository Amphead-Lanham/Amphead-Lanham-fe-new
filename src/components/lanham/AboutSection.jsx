import React, { useLayoutEffect } from 'react';
import { lanhamAbout, ampsAbout } from '../../data/lanham-about';
import styles from './AboutSection.css';


const AboutSection = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={styles.aboutBox} >
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
