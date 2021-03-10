import React from 'react';
import ContactForm from './ContactForm';
import styles from './PopUp.css';
import PropTypes from 'prop-types';

const PopUp = ({ side, formId }) => {
  return (
    <div>
      <div className={styles.popUp}>
        <label
          htmlFor={'checkbox'}
          className={styles[`formLabel${side}`]}
        >contact form</label>
        <input
          type={'checkbox'}
          id={'checkbox'}
          className={styles.toggle}>
        </input>        
        <div className={styles.contain}><div></div></div>
        <div className={styles.form}>
          <div>
            <div>
              <ContactForm
                side={side}
                formId={formId}
              />
            </div>
          </div>
        </div>
      </div>
    </div>      
   
  );
};

PopUp.propTypes = {
  side: PropTypes.string.isRequired,
  formId: PropTypes.string.isRequired
};

export default PopUp;
