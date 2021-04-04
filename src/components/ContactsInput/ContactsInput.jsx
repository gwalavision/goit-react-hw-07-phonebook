import PropTypes from 'prop-types';
import { v4 as uuid4 } from 'uuid';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/actions';

const ContactsInput = ({ title, contacts, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.length > 0) {
      const existedContact = contacts.find(contact => contact.name === name);
      if (existedContact) {
        return alert(`${name} is already in contacts`);
      }
    }

    const newContact = {
      name,
      id: uuid4(),
      number,
    };

    onSubmit(newContact);
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
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            required
            value={number}
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

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(addContact(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsInput);
