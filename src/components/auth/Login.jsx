import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCurrentUser, useLogin } from '../../context/AuthContext';
import styles from './auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();
  const history = useHistory();
  const user = useCurrentUser();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await login(email, password);
  };
    
  useEffect(() => {
    if(user) {
      history.push('/admin');
    }
  }, [user]);

  return (
    <div className={styles.bigBox}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.headline}>login</h1>
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
        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
