import PropTypes from 'prop-types';
import ContactsListItem from '../ContactsListItem';
import ContactsFinderInput from '../ContactsFinderInput';
import { connect } from 'react-redux';

const ContactsList = ({ title, contacts }) => {
  return (
    <div>
      <h2 className="header">{title}</h2>
      <ContactsFinderInput />
      <ul>
        {contacts.map(({ name, id, number }) => (
          <ContactsListItem name={name} number={number} key={id} id={id} />
        ))}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

export default connect(mapStateToProps)(ContactsList);
