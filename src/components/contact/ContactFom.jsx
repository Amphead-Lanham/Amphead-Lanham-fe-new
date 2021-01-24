import React, { useState } from 'react';
import { sendMessage } from '../../services/amphead-api';
import styles from './ContactFom.css';

const ContactFom = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    sendMessage({
      name,
      email,
      message
    });
    setName('');
    setEmail('');
    setMessage('');

  };


  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'message') setMessage(target.value);
  };
  return (
    <div>
      <form
        id={'contact-from'}
        className={styles.contactForm}
        onSubmit={handleSubmit}
        method={'POST'}>
        <input
          type={'text'}
          id={'name'}
          name={'name'}
          placeholder={'name'}
          onChange={handleChange}
        />
        <input
          type={'text'}
          id={'email'}
          name={'email'}
          placeholder={'email'}
          onChange={handleChange}
        />
        <textarea
          id={'message'}
          name={'message'}
          placeholder={'message'}
          onChange={handleChange}
        />

      </form>
      
    </div>
  );
};

export default ContactFom;
