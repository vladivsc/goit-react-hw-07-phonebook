import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts-slice';

import PropTypes from 'prop-types';

import styles from '../../phonebook.module.scss';

const ContactItem = ({ name, nameId, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.blockItem}>
      {name}: {number}
      <button
        onClick={() => dispatch(deleteContact(nameId))}
        type="button"
        className={styles.btnDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  nameId: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
