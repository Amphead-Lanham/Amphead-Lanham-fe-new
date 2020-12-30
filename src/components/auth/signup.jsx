import React, { useState } from 'react';
import { useSignup } from '../../context/AuthContext';

const signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signup = useSignup();

  const handleSubmit = e => {
    e.preventDefault();
    signup(email, password);
    console.log(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>Sign up</button>
    </form>
  );
};

export default signup;
