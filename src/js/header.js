import { useThemeSwitcher } from './helpers/themeSwitcher';
import { createModal } from './modal';
import { refs } from './refs/refs';

const themeSwitcher = useThemeSwitcher();

const headerRefs = {
  menuButton: refs.header.querySelector('.mainHeaderButton'),
};

const settingsMarkup = `
<h2>Settings</h2>
<label>Dark <input type="checkbox" class="themeCheckBox"/></label>
<button type="button" class="closeButton">Close</button>
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
