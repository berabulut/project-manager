import React from "react";

export const UserContext = React.createContext();

const UserProvider = ({userData, setUserData, boards, setBoards, children}) => {


  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        boards,
        setBoards
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
