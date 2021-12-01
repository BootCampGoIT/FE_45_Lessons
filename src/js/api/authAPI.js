import axios from 'axios';
import { createNavigationMarkup, setActiveColor } from '../header';
import { createMainMarkup } from '../main';
import { homePageMarkup } from '../pages/HomePage';
import { refs } from '../refs/refs';
import { setError, setLoader } from '../store/actions';
import { store } from '../store/store';

const API_KEY = 'AIzaSyATsyVFWbNzXkqv2AaiP6kTfQxQFZJFhL4';
const signUpURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
const signInURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

const signUp = async user => {
  setLoader();
  try {
    const { data } = await axios.post(signUpURL, {
      ...user,
      returnSecureToken: true,
      displayName: user.email,
    });
    setLoader();
    store.auth.idToken = data.idToken;
    store.auth.refreshToken = data.refreshToken;
    localStorage.setItem('auth', JSON.stringify(data.idToken));
    refs.headerNavigation.innerHTML = createNavigationMarkup();
    setActiveColor();
    createMainMarkup(homePageMarkup);
  } catch (error) {
    setError(error.response.data.error.message);
  }
};

const signIn = async user => {
  setLoader();
  try {
    const { data } = await axios.post(signInURL, { ...user, returnSecureToken: true });
    setLoader();
    store.auth.idToken = data.idToken;
    store.auth.refreshToken = data.refreshToken;
    localStorage.setItem('auth', JSON.stringify(data.idToken));
    refs.headerNavigation.innerHTML = createNavigationMarkup();
    createMainMarkup(homePageMarkup);
    setActiveColor();
  } catch (error) {
    setError(error.response.data.error.message);
  }
};

export { signUp, signIn };
