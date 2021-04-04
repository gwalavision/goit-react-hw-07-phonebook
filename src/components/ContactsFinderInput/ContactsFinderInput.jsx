import { connect } from 'react-redux';
import { filterContacts } from '../../redux/actions';

const ContactsFinderInput = ({ value, onChange }) => {
  return (
    <form>
      <label>
        Find contacts by name
        <input type="text" name="filter" value={value} onChange={onChange} />
      </label>
    </form>
  );
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filterContacts(e.target.value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactsFinderInput);
