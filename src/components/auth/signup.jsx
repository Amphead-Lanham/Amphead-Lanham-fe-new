import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSignup, useCurrentUser } from '../../context/AuthContext';
import styles from './auth.css';

const signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signup = useSignup();
  const history = useHistory();
  const user = useCurrentUser();
  const firstName = 'Jim';

  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(email, password, firstName);
  };
  
  useEffect(() => {
    if(user) {
      history.push('./admin');
    }
  }, [user]);

  return (
    <div className={styles.bigBox}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.headline}>signup</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          className={styles.formEl}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          className={styles.formEl}
        />
        <button className={styles.button}>Sign up</button>
      </form>
    </div>
  );
};

export default signup;
