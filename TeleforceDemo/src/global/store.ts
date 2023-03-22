import {configureStore} from '@reduxjs/toolkit';

import {networkSlice} from './connectionSlice';
import {contactsSlice} from './contactsSlice';
import {userSlice} from './userSlice';

// ...

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    connection: networkSlice.reducer,
    contacts: contactsSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
