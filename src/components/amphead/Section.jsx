import React from 'react';
import { sections } from '../../data/details';
import PropTypes from 'prop-types';
import styles from './Section.css';
import { Link } from 'react-router-dom';

const Section = ({ sectionName }) => {
  const section = sections.find(
    section => (section.name === sectionName));
  
  return (
    <div className={styles.bigBox}>
      <Link className={styles.sectionLink} to={`/detail/${section.name}`}>
        <img
          className={styles.sectionPic}
          src={section.photo} alt={section.name}/>
        <div className={styles.infoBox}>
          <h2>{section.blurb}</h2>
          <p className={styles.clickNotice}>
            click for more info about {section.name}
          </p>
        </div>
      </Link>
    </div>
  );
  
};

Section.propTypes = {
  sectionName: PropTypes.string.isRequired
};

export default Section;
