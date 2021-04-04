import PropTypes from 'prop-types';
import ContactsListItem from '../ContactsListItem';
import ContactsFinderInput from '../ContactsFinderInput';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getContacts, getFilterValue, getLoading } from '../../redux/selectors';

const ContactsList = ({ title }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const isLoading = useSelector(getLoading);

  const getVisibleContacts = (allContacts, value) => {
    const normalizedFilter = value.toLowerCase();
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const filteredContacts = getVisibleContacts(contacts, filter);

  return (
    <div>
      <h2 className="header">{title}</h2>
      <ContactsFinderInput />

      {isLoading ? (
        <Loader
          type="TailSpin"
          color="#000"
          height={60}
          width={60}
          timeout={1000}
        />
      ) : (
        <ul>
          {filteredContacts.map(({ name, id, number }) => (
            <ContactsListItem name={name} number={number} key={id} id={id} />
          ))}
        </ul>
      )}
    </div>
  );
};

ContactsList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default ContactsList;
