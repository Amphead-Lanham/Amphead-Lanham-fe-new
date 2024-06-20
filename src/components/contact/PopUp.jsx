import React from 'react';
import ContactForm from './ContactForm';
import styles from './PopUp.css';
import PropTypes from 'prop-types';

const PopUp = ({ side, formId, inline }) => {

  const getContactText = () => {
    let text = 'contact';
    if(side == 'lanham') text = `${text} / ordering`;
    else if(!inline) text = `${text} form`;
    return text;
  };

  return (
    <div className={inline ? styles.inline : ''}>
      <div className={styles.popUp}>
        <label
          htmlFor={'checkbox'}
          className={styles[`formLabel${side}`]}
          
        >
          { getContactText() }
        </label>
        <input
          type={'checkbox'}
          id={'checkbox'}
          className={styles.toggle}
        >
          
        </input>        
        <div className={styles.contain}><div></div></div>
        <div className={styles.form}>
          <div className={styles[`${side}FormInner`]}>
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
  formId: PropTypes.string.isRequired,
  inline: PropTypes.bool
};

export default PopUp;
