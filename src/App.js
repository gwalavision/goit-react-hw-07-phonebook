import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactsInput from './components/ContactsInput';
import ContactsList from './components/ContactsList';
import { fetchContacts } from './redux/operations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <>
      <ContactsInput title="Phonebook" />
      <ContactsList title="Contacts" />
    </>
  );
}

export default App;
