import React from 'react';
import ContactForm from './ContactForm';
import styles from './PopUp.css';

const PopUp = () => {
  return (
    <div>
      <div className={styles.popUp}>
        <label
          htmlFor="checkbox"
          className={styles.formLabel}
        >Form</label>
        <input
          type="checkbox"
          id="checkbox"
          className={styles.toggle}
        ></input>        
        <div className={styles.contain}><div></div></div>
        <div className={styles.form}>
          <div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>      
   
  );
};

export default PopUp;
