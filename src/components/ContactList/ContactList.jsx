import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import style from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

export default function ContactList() {
  const filterContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={style.contactList}>
      {filterContacts.map(contact => (
        <li className={style.contactItem} key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
}
