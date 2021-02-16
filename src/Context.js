import React, { useState } from 'react';

const UserContext = React.createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('activeUser')) || {});

  const updateUser = (user) => {
    setUser(user);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const UserConsumer = UserContext.Consumer;

export default UserContext;
