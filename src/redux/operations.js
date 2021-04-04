import axios from '../axios';
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
} from './actions';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get('');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactFailure(error));
  }
};

export const addContact = contact => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactFailure(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactFailure(error)));
};
