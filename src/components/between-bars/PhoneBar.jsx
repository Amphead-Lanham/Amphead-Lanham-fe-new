import React from 'react';
import PropTypes from 'prop-types';
import ampheadLogo from '../../../assets/amphead-parallax.png';
import styles from './PhoneBar.css';

function PhoneBar({ section }) {
  return (
    <div className={styles.bar}>
      <img className={styles.logo} src={ampheadLogo}/>
      <h1 className={styles.section} >{section}</h1>
    </div>
  );
}

PhoneBar.propTypes = {
  section: PropTypes.string.isRequired
};

export default PhoneBar;
