import { createSlice, PayloadAction, type } from '@reduxjs/toolkit';

import type { RootState } from './store';

export interface ContactState {
  contacts: any[];
}

const initialState: ContactState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: (state, action: PayloadAction<ContactState>) => {
      state.contacts = action.payload.contacts;
    },
  },
});

export const { setContacts } = contactsSlice.actions;

export const selectContacts = (state: RootState) => state.contacts;

export default contactsSlice.reducer;
