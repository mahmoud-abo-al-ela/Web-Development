import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";

const DUMMY_USERS = [
  { id: "u1", name: "Mahmoud" },
  { id: "u2", name: "Ali" },
  { id: "u3", name: "Ziad" },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
