import { useEffect } from 'react';
import { connect } from 'react-redux';
import ContactsInput from './components/ContactsInput';
import ContactsList from './components/ContactsList';
import { localStorageContacts } from './redux/actions';

function App({ contacts, loadfromLocalStorage }) {
  // componentDidMount
  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      loadfromLocalStorage(parsedContacts);
    }
  }, []);

  // componentDidUpdate
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <ContactsInput title="Phonebook" />
      <ContactsList title="Contacts" />
    </>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  loadfromLocalStorage: arr => dispatch(localStorageContacts(arr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
