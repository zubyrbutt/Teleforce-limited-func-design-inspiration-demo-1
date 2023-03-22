import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import type {RootState} from './store';

export interface NetworkState {
  isOnline: boolean;
}

const initialState: NetworkState = {
  isOnline: true,
};

export const networkSlice = createSlice({
  name: 'network',
  initialState,
  reducers: {
    setOnline: (state, action: PayloadAction<NetworkState>) => {
      state.isOnline = action.payload.isOnline;
    },
  },
});

export const {setOnline} = networkSlice.actions;

export const selectNetwork = (state: RootState) => state.connection;

export default networkSlice.reducer;
