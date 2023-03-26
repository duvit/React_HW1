import React, { useState } from "react";
import "./App.css";
import { userData } from "./userData/userData";
import { UsersList } from "./User";
import Header from "./Header";

function App() {
  const [users, setUsers] = useState(userData);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const term = event.target.value.toLowerCase();
    const filteredUsers = userData.filter(user =>
      user.name.toLowerCase().includes(term)
    );
    setUsers(filteredUsers);
    setSearchTerm(term);
  };

  const handleSort = (event) => {
    const newSortOrder = event.target.value;
    const sortedUsers = [...users].sort((a, b) => {
      const sign = newSortOrder === 'asc' ? 1 : -1;
      return sign * (a.age - b.age);
    });
    setUsers(sortedUsers);
    setSortOrder(newSortOrder);
  };

  function handleReset() {
    setUsers(userData);
    searchTerm('');
    setSortOrder('asc');
  }

  return (
    <div>
      <Header
        onInputChange={handleInputChange}
        onSort={handleSort}
        sortOrder={sortOrder}
        onReset={handleReset}

      />
      <UsersList users={users} />
    </div>
  );
}


export default App;
