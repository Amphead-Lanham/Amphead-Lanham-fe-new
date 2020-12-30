import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { getVerify, postLogin, postSignup } from '../../services/auth';

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const signup = (email, password) => {
    postSignup(email, password)
      .then(user => setCurrentUser(user))
      .then(() => history.push('/admin'))
      .finally(() => setLoading(false));
  };

  const login = (email, password) => {
    postLogin(email, password)
      .then(user => setCurrentUser(user))
      .then(() => history.push('./admin'))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getVerify()
      .then(user => setCurrentUser(user))
      .finally(() => setLoading(false));
  }, []);

  const authState = {
    currentUser,
    loading,
    signup,
    login
  };

  return (
    <AuthContext.Provider value={authState}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
