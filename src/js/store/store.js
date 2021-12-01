export const store = {
  user: {
    email: '',
    localId: '',
    displayName: '',
  },
  auth: {
    idToken: JSON.parse(localStorage.getItem('auth')) || '',
    refreshToken: '',
    error: '',
    isLoading: false,
  },
  tasks: {
    items: [],
    error: '',
    isLoading: false,
  },
  cart: {
    items: [],
    error: '',
    isLoading: false,
  },
};
