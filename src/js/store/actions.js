import { createNavigationMarkup, setActiveColor } from '../header';
import { createMainMarkup } from '../main';
import { homePageMarkup } from '../pages/HomePage';
import { refs } from '../refs/refs';
import { store } from './store';

const setLoader = () => {
  store.auth.isLoading = !store.auth.isLoading;
  const loaderElement = document.querySelector('.loader');
  if (store.auth.isLoading) {
    loaderElement.textContent = '...loading';
  } else loaderElement.textContent = '';
};

const setError = (err = '') => {
  store.auth.error = err;
  const errorElement = document.querySelector('.error');
  errorElement.textContent = err;
  setLoader();
};

const signOut = () => {
  store.auth.idToken = '';
  store.auth.refreshToken = '';
  localStorage.setItem('auth', JSON.stringify(''));
  refs.headerNavigation.innerHTML = createNavigationMarkup();
  setActiveColor();
  createMainMarkup(homePageMarkup);
};

export { setLoader, setError, signOut };
