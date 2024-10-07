import React, { useRef } from 'react';
import ContactForm from './ContactForm';
import styles from './PopUp.css';
import PropTypes from 'prop-types';

const PopUp = ({ side, formId, inline }) => {
  const toggleRef = useRef(null);

  const getContactText = () => {
    let text = 'contact';
    if(side == 'lanham') text = `${text} / ordering`;
    else if(!inline) text = `${text} form`;
    return text;
  };

  const handleClosePopup = () => {
    if(toggleRef.current) {
      toggleRef.current.checked = false;
    }
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
          ref={toggleRef}
        >
          
        </input>        
        <div className={styles.contain}><div></div></div>
        <div className={styles.form}>
          <div className={styles[`${side}FormInner`]}>
            <div>
              <ContactForm
                side={side}
                formId={formId}
                handleClosePopup={handleClosePopup}
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
