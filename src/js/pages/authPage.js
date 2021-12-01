import { signIn, signUp } from '../api/authAPI';
import { refs } from '../refs/refs';
import { setError } from '../store/actions';
import { store } from '../store/store';

const authPageMarkup = (isSignUpPage = false) => `
<p class="error"></p>
<p class="loader"></p>

<form class="authForm" name="authForm">
${
  isSignUpPage
    ? `<label class="authFormLabel">
      Name
      <input type="text" name="displayName" />
    </label>`
    : ''
}
<label class="authFormLabel">
  Email
  <input type="text" name="email" />
</label>
<label class="authFormLabel">
  Password
  <input type="text" name="password" />
</label>
<button type="submit">${isSignUpPage ? 'Register' : 'Login'}</button>
</form>`;

const user = {
  email: '',
  password: '',
  displayName: '',
};

const onHandleChange = ({ target }) => {
  store.auth.error && setError();
  const { name, value } = target;
  user[name] = value;
};

const onHandleSubmit = e => {
  e.preventDefault();
  const activePage = refs.headerNavigation.querySelector('.headerNavigationItemActive').dataset
    .pagename;
  activePage === 'register' ? signUp(user) : signIn({ email: user.email, password: user.password });
};

const addAuthPageListeners = () => {
  refs.authForm = document.forms.authForm;
  refs.authForm.addEventListener('input', onHandleChange);
  refs.authForm.addEventListener('submit', onHandleSubmit);
};
const removeAuthPageListeners = () => {
  refs.authForm.removeEventListener('input', onHandleChange);
  refs.authForm.removeEventListener('submit', onHandleSubmit);
  refs.authForm = null;
};

export { authPageMarkup, addAuthPageListeners, removeAuthPageListeners };

// const getItem = async () => {

// }

// async function getItem () {

// }

// const getItem = async function () {

// }
