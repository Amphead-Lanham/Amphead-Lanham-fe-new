import { get, post } from './request';

export const postSignup = (email, password, firstName) =>
  post('/signup', { 
    email, 
    password, 
    firstName,
    client: 'amphead', 
    cookiePlease: true 
  });

export const postLogin = (email, password) =>
  post('/login', { 
    email, 
    password,
    client: 'amphead', 
    cookiePlease: true 
  })

export const getVerify = () =>
  get('/verify');
