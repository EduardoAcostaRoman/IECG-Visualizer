import { createContext, useState } from 'react';

const UserContext = createContext({
  user: [],
  addUser: (loggedUser) => {},
});

export function UserContextProvider(props) {
  const [user, setUser] = useState([]);

  function addUserHandler(loggedUser) {
    setUser(() => {
      return loggedUser;
    });
  }

  const context = {
    user: user,
    addUser: addUserHandler,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
