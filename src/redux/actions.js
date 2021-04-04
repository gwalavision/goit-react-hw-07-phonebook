import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactFailure = createAction('contacts/fetchContactFailure');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactFailure = createAction('contacts/addContactFailure');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactFailure = createAction(
  'contacts/deleteContactFailure',
);

export const deleteContact = createAction('contacts/delete');
export const filterContacts = createAction('contacts/filter');

export const setNameQueryInput = createAction('contacts/setNameQueryInput');
export const setNumberQueryInput = createAction('contacts/setNumberQueryInput');
