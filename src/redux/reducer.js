import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactFailure,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactFailure,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactFailure,
  filterContacts,
  setNameQueryInput,
  setNumberQueryInput,
} from './actions';

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],

  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactFailure]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactFailure]: () => false,

  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactFailure]: () => false,
});

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

const query = createReducer(
  { name: '', number: '' },
  {
    [setNameQueryInput]: (state, { payload }) => ({ ...state, name: payload }),
    [setNumberQueryInput]: (state, { payload }) => ({
      ...state,
      number: payload,
    }),
  },
);

export default combineReducers({
  items,
  filter,
  loading,
  query,
});
