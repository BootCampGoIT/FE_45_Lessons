import { useThemeSwitcher } from './helpers/themeSwitcher';
import { createMainMarkup } from './main';
import { createModal } from './modal';
import { addAuthPageListeners, authPageMarkup, removeAuthPageListeners } from './pages/authPage';
import { homePageMarkup } from './pages/HomePage';
import { refs } from './refs/refs';
import { routes } from './routes/mainRoutes';
import { signOut } from './store/actions';
import { store } from './store/store';

// ======== navigation ==================
export const createNavigationMarkup = () => {
  return (
    routes.reduce((acc, { name, isRestricted, isPrivate }) => {
      if (!store.auth.idToken && isPrivate) {
        return acc;
      }
      if (store.auth.idToken && isRestricted) {
        return acc;
      }
      acc += `<li class="headerNavigationItem" data-pagename="${name}">${name.toUpperCase()}</li>`;
      return acc;
    }, '') +
    (store.auth.idToken
      ? `<li class="headerNavigationItem" data-pagename="signout">${'Sign out'.toUpperCase()}</li>`
      : '')
  );
};

export const setActiveColor = (e) => {
  const activeElement = refs.headerNavigation.querySelector('.headerNavigationItemActive');
  if (!activeElement) {
    const firstItem = refs.headerNavigation.querySelector('.headerNavigationItem');
    firstItem.classList.add('headerNavigationItemActive');
    return;
  }
  switch (activeElement.dataset.pagename) {
    case 'login':
    case 'register':
      removeAuthPageListeners();
      console.log(refs.authForm);
      break;

    default:
      break;
  }
  const activePage = e.target;
  activeElement.classList.remove('headerNavigationItemActive');
  activePage.classList.add('headerNavigationItemActive');

  switch (activePage.dataset.pagename) {
    case 'tasks':
      createMainMarkup("Hello tasks");
      break;
    case 'login':
      createMainMarkup(authPageMarkup());
      addAuthPageListeners();
      break;
    case 'register':
      createMainMarkup(authPageMarkup(true));
      addAuthPageListeners();
      break;
    case 'signout':
      signOut();
      break;

    default:
      createMainMarkup(homePageMarkup);
  }
};

const addNavigationListener = () => {
  refs.headerNavigation.addEventListener('click', setActiveColor);
};

// =========================
refs.headerNavigation.innerHTML = createNavigationMarkup();
setActiveColor();
addNavigationListener();

// ======= theme ================
const themeSwitcher = useThemeSwitcher();

const headerRefs = {
  menuButton: refs.header.querySelector('.mainHeaderButton'),
};

const settingsMarkup = `
<div class="modal_settings">
<h2 class="settings_title">Settings</h2>
<label class="settings_mode">Dark <input type="checkbox" class="themeCheckBox"/></label>
<button type="button" class="closeButton">Close</button>
</div>
`;

const options = close => {
  const closeButton = document.querySelector('.closeButton');
  const themeCheckBox = document.querySelector('.themeCheckBox');
  themeCheckBox.checked = themeSwitcher.isDarkTheme.call(themeSwitcher);
  themeCheckBox.addEventListener('change', themeSwitcher.setTheme.bind(themeSwitcher));
  closeButton.addEventListener('click', close);
  const removeListeners = () => {
    closeButton.removeEventListener('click', close);
    themeCheckBox.removeEventListener('change', themeSwitcher.setTheme.bind(themeSwitcher));
  };
  return removeListeners;
};

const toggleModal = e => {
  createModal(settingsMarkup, options);
};

// persistTheme();
themeSwitcher.persistTheme.call(themeSwitcher);
headerRefs.menuButton.addEventListener('click', toggleModal);
