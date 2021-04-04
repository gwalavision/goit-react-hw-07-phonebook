import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

const ContactsListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const deleteItem = e => {
    e.preventDefault();

    dispatch(deleteContact(id));
  };

  return (
    <li className="contact-list-item">
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" onClick={deleteItem}>
        Delete
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ContactsListItem;
