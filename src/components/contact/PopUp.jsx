import React from 'react';
import ContactForm from './ContactForm';
import styles from './PopUp.css';
import PropTypes from 'prop-types';

const PopUp = ({ side }) => {
  return (
    <div>
      <div className={styles.popUp}>
        <label
          htmlFor={'checkbox'}
          className={styles.formLabel}
        >Contact Form</label>
        <input
          type={'checkbox'}
          id={'checkbox'}
          className={styles.toggle}
        ></input>        
        <div className={styles.contain}><div></div></div>
        <div className={styles.form}>
          <div>
            <div>
              <ContactForm side={side}/>
            </div>
          </div>
        </div>
      </div>
    </div>      
   
  );
};

PopUp.propTypes = {
  side: PropTypes.string.isRequired
};

export default PopUp;