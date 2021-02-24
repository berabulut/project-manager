import React, { useState } from "react";

export const UserContext = React.createContext();

const UserProvider = (props) => {
  let userData = props.userData;
  let setUserData = props.setUserData;
  let boards = props.boards;
  let setBoards = props.setBoards;

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        boards,
        setBoards
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
