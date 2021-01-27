import React from 'react';
import { sections } from '../../data/details';
import PropTypes from 'prop-types';
import styles from './Section.css';

const Section = ({ sectionName }) => {
  const section = sections.find(
    section => (section.name === sectionName));
  
  return (
    <div className={styles.bigBox}>
      <img
        className={styles.sectionPic}
        src={section.photo} alt={section.name}/>
      <div className={styles.infoBox}>
        <h2>{section.blurb}</h2>
      </div>
    </div>
  );
  
};

Section.propTypes = {
  sectionName: PropTypes.string.isRequired
};

export default Section;
