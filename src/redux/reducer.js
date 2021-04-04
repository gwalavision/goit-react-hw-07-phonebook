import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  filterContacts,
  localStorageContacts,
} from './actions';

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [localStorageContacts]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
