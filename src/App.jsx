import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import usersData from "./assets/users.json";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState(() => {
    const savedUsers = JSON.parse(window.localStorage.getItem("users"));
    if (savedUsers?.length) {
      return savedUsers;
    }
    return usersData;
  });
  const [searchStr, setSearchStr] = useState("");
  useEffect(() => {
    window.localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const addUser = (newUser) => {
    setUsers((prev) => [newUser, ...prev]);
  };
  const handleSearch = (searchStr) => {
    setSearchStr(searchStr);
  };

  const getFilteredUsers = () => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchStr.toLowerCase())
    );
  };
  const filteredUsers = getFilteredUsers();

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white" }}>Phonebook</h1>
      <ContactForm onAdd={addUser} />
      <SearchBox searchStr={searchStr} onChangeSearch={handleSearch} />
      <ContactList users={filteredUsers} onDelete={handleDelete} />
    </div>
  );
};

export default App;
