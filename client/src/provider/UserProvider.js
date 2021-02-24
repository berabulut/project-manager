import React from "react";

export const UserContext = React.createContext();

const UserProvider = ({userData, setUserData, boards, setBoards, setOpenBackdrop, children}) => {


  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        boards,
        setBoards,
        setOpenBackdrop
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
