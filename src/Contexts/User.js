import React, { createContext } from "react";

import useLocalStorage from "../Hooks/useLocalStorage";

const UserContext = createContext();

function UserProvider({ children }) {
  const [userData, setUserData] = useLocalStorage("userData", null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;

export { UserProvider };