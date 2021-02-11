import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { sendMessage } from '../../services/amphead-api';
import styles from './ContactForm.css';
import PropTypes from 'prop-types';

const ContactForm = ({ side, formId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();
  const flag = `this message was sent from the ${side} contact form.`;

  const handleSubmit = e => {
    e.preventDefault();
    sendMessage({
      name,
      email,
      message,
      flag
    });
    setName('');
    setEmail('');
    setMessage('');
  
    (side === 'amphead')
      ? history.push('/')
      : history.push('/lanham');
  };

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'message') setMessage(target.value);
  };

  return (
    <div className={styles[`contact${side}`]} >
      <label htmlFor={'checkbox'} className={styles.Xbox}>X</label>
      <input
        type={'checkbox'}
        id={`checkbox${formId}`}
        className={styles.checkbox}
      ></input>
      <form
        id={`contact-form${side}${formId}`}
        className={styles.contactForm}
        onSubmit={handleSubmit}
        method={'POST'}>
        <input
          type={'text'}
          id={`name${side}${formId}`}
          name={'name'}
          value={name}
          placeholder={'name required'}
          className={styles.contactEl}
          onChange={handleChange}
        />
        <input
          type={'text'}
          id={`email${side}${formId}`}
          name={'email'}
          value={email}
          placeholder={'email required'}
          className={styles.contactEl}
          onChange={handleChange}
        />
        <textarea
          id={`message${side}${formId}`}
          name={'message'}
          value={message}
          placeholder={'message required'}
          className={styles.messageEl}
          onChange={handleChange}
        />
        <button className={styles.contactButton} >submit</button>
      </form>
      
    </div>
  );
};

ContactForm.propTypes = {
  side: PropTypes.string.isRequired,
  formId: PropTypes.string.isRequired
};

export default ContactForm;
