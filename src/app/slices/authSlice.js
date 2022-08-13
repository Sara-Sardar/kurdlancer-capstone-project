import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  role: '',
  username: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload;
      state.role = 'admin';
      console.log('signin action');
      localStorage.setItem('username', action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.role = '';
      state.username = '';
      console.log('logout action');
      localStorage.removeItem('username');
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
