import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../services/amphead-api';
import styles from './ContactForm.css';
import PropTypes from 'prop-types';
import { TextField, Button } from '@mui/material';
import { notify } from '../../actions/notificationActions';

const ContactForm = ({ side, formId, handleClosePopup }) => {
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const checkBoxRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  const receiver = process.env.EMAIL_RECEIVER;
  const clientName = 'amphead';
  const flag = `this message was sent from the ${side} contact form.`;

  const checkAllFields = () => {
    if(name.length 
      && senderEmail.length 
      && message.length) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(checkAllFields()) {
      sendMessage({
        name,
        senderEmail,
        message,
        flag,
        receiver,
        clientName
      });
      setName('');
      setSenderEmail('');
      setMessage('');
      setMessageSent(true);
  
      (side === 'amphead')
        ? history.push('/')
        : history.push('/lanham');

      setTimeout(() => {
        handleClosePopup();
      }, 3000);

    } else {
      dispatch(notify({
        type: 'warning',
        message: 'Please fill out all form fields'
      })
      );
    }
  };

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'email') setSenderEmail(target.value);
    if(target.name === 'message') setMessage(target.value);
  };

  return (
    <div className={styles[`contact${side}`]} >
      <label htmlFor={'checkbox'} className={styles.Xbox}>X</label>
      <input
        type={'checkbox'}
        id={`checkbox${formId}`}
        className={styles.checkbox}
        ref={checkBoxRef}
      ></input>
      {messageSent &&
      <div className={styles.returnMessage}>
        <h1>Thank you!</h1>
        <h2>
          your message has been sent. We usually respond within one day M-F.
        </h2>
      </div>
      }
      <form
        id={`contact-form${side}${formId}`}
        className={styles.contactForm}
        onSubmit={handleSubmit}
        method={'POST'}
      >
        <div className={styles.inputWrapper}>
          <TextField
            fullWidth
            id={`name${side}${formId}`}
            name={'name'}
            value={name}
            label="your name"
            variant="filled"
            color="zomp"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <TextField
            fullWidth
            id={`email${side}${formId}`}
            name={'email'}
            value={senderEmail}
            label="your email"
            variant="filled"
            color="zomp"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <TextField
            fullWidth
            multiline
            id={`message${side}${formId}`}
            name={'message'}
            value={message}
            label="a brief message"
            variant="filled"
            color="zomp"
            onChange={handleChange}
            rows={4}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            variant={'contained'}
            color={'secondary'}
            onClick={handleSubmit}
          >
          Submit
          </Button>
        </div>
      </form>
      
    </div>
  );
};

ContactForm.propTypes = {
  side: PropTypes.string.isRequired,
  formId: PropTypes.string.isRequired,
  handleClosePopup: PropTypes.func.isRequired
};

export default ContactForm;
