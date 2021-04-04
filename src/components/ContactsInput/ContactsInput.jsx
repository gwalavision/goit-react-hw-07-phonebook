import PropTypes from 'prop-types';
import { v4 as uuid4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { setNameQueryInput, setNumberQueryInput } from '../../redux/actions';
import {
  getContacts,
  getNameQuery,
  getNumberQuery,
} from '../../redux/selectors';
import React from 'react';

const ContactsInput = ({ title }) => {
  const queryName = useSelector(getNameQuery);
  const queryNumber = useSelector(getNumberQuery);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;
    name === 'name'
      ? dispatch(setNameQueryInput(value))
      : dispatch(setNumberQueryInput(value));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.length > 0) {
      const existedContact = contacts.find(
        contact => contact.name === queryName,
      );
      const existedNumber = contacts.find(
        contact => contact.number === queryNumber,
      );
      if (existedContact) {
        return alert(`${queryName} is already in contacts`);
      } else if (existedNumber) {
        return alert(`${queryNumber} is assigned to another user`);
      }
    }
    const newContact = {
      name: queryName,
      id: uuid4(),
      number: queryNumber,
    };

    dispatch(addContact(newContact));
    dispatch(setNameQueryInput(''));
    dispatch(setNumberQueryInput(''));
  };

  return (
    <div>
      <h2 className="header">{title}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            value={queryName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            required
            value={queryNumber}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <button type="submit">Add contact</button>
        </label>
      </form>
    </div>
  );
};

ContactsInput.defaultProps = {
  value: '',
};

ContactsInput.propTypes = {
  title: PropTypes.string.isRequired,
};

export default React.memo(ContactsInput);
