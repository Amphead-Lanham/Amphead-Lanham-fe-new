import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { sendMessage } from '../../services/amphead-api';
import styles from './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const history = useHistory();
  const { side } = useParams();

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
    (side === 'Amphead' || side === 'amphead')
      ? history.push('/')
      : history.push('/lanham');
  };

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'message') setMessage(target.value);
  };

  return (
    <div className={styles[`contact${side}${isVisible}`]} >
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
          className={styles.contactEl}
          onChange={handleChange}
        />
        <input
          type={'text'}
          id={'email'}
          name={'email'}
          placeholder={'email'}
          className={styles.contactEl}
          onChange={handleChange}
        />
        <textarea
          id={'message'}
          name={'message'}
          placeholder={'message'}
          className={styles.contactEl}
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
      
    </div>
  );
};


export default ContactForm;
