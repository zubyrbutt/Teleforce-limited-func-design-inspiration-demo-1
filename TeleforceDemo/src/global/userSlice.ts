import {createSlice} from '@reduxjs/toolkit';

import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from './store';

export interface UserState {
  username: string;
  password: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  username: '',
  password: '',
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.isLoggedIn = true;
    },
    logout: state => {
      state.username = '';
      state.password = '';
      state.isLoggedIn = false;
    },
  },
});

export const {login} = userSlice.actions;

export const selectUser = (state: RootState) => state.user;
