import { useSelector } from "react-redux";
import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";

const ContactsPage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <p>Доступ запрещен. Пожалуйста, войдите в систему.</p>;
  }

  return (
    <div>
      <h1>Мои Контакты</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
