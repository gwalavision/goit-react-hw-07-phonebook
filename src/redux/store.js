import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactsReducer from './reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
