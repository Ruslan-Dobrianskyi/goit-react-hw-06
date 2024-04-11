import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
const ContactList = ({ users, onDelete }) => {
  return (
    <ul className={s.list}>
      {users.map((user) => (
        <li key={user.id}>
          <Contact user={user} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
