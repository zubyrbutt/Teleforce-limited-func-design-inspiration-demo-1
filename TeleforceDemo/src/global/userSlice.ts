import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export interface UserState {
  username: string;
  password: string;
  isLoggedIn: boolean;
  token?: any;
}

const initialState: UserState = {
  username: '',
  password: '',
  isLoggedIn: false,
  token: '',
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
    logout: (state) => {
      state.username = '';
      state.password = '';
      state.isLoggedIn = false;
    },
    setDeviceToken: (state, action: PayloadAction<any>) => {
      state.token = action.payload;
    },
  },
});

export const { login, setDeviceToken } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;
export const selectToken = (state: RootState) => state.user.token;

export default userSlice.reducer;
