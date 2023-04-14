import { get, post } from './request';

export const postSignup = (email, password, firstName) =>
  post('/signup', { email, password, firstName });

export const postLogin = (email, password) =>
  post('/login', { email, password });

export const getVerify = () =>
  get('/verify');
