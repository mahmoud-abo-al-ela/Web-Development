import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [userList, onUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    onUserList((prevList) => {
      return [
        ...prevList,
        { username: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </>
  );
}

export default App;
