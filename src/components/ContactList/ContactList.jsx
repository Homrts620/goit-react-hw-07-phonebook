import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { getContacts, getFilter } from '../../redux/state';
import css from './ContactList.module.css';
const ContactList = () => {
const contacts = useSelector(getContacts);
const filter = useSelector(getFilter);
const dispatch = useDispatch();

const handleDelete = e => {
    dispatch(deleteContact(e.target.id));
};

return (
    <ul>
    {contacts
        .filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => {
        return (
            <li key={contact.id}>
            {contact.name} : {contact.number}{' '}
            <button
                id={contact.id}
                onClick={handleDelete}
                className={css.button}>
                Delete
            </button>
            </li>
        );
        })}
    </ul>
);
};

export default ContactList;