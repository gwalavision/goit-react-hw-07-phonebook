import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add');
const deleteContact = createAction('contacts/delete');
const filterContacts = createAction('contacts/filter');
const localStorageContacts = createAction('contacts/local');

export { addContact, deleteContact, filterContacts, localStorageContacts };
