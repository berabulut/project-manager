import React, { useContext, useEffect, useState, useRef } from "react";
import firebase from "firebase";
import { FirebaseConfig } from "./firebase/FirebaseConfig";
import AuthProvider from "provider/AuthProvider";
import UIProvider from "provider/UIProvider";
import UserProvider from "provider/UserProvider";
import { UserHelpers, BoardHelpers, UIHelpers } from "helpers/";

import Routes from "./routes/Routes";

const App = () => {
  const [openBackdrop, setOpenBackdrop] = useState(true);
  const [userData, setUserData] = useState({});
  const [boards, setBoards] = useState([]);
  const [renderedBoard, setRenderedBoard] = useState(); 


  useEffect(() => {
    if (!userData.name) {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          UserHelpers.HandleUserData(
            user.uid,
            setUserData,
            setBoards,
            setOpenBackdrop
          );
        } else {
          return;
        }
      });
    }
  }, []);



  return (
    <UIProvider openBackdrop={openBackdrop} setOpenBackdrop={setOpenBackdrop} renderedBoard={renderedBoard} setRenderedBoard={setRenderedBoard}>
      <AuthProvider setUserData={setUserData} setBoards={setBoards} setOpenBackdrop={setOpenBackdrop}>
        <UserProvider userData={userData} setUserData={setUserData} boards={boards} setBoards={setBoards} setOpenBackdrop={setOpenBackdrop} renderedBoard={renderedBoard} setRenderedBoard={setRenderedBoard}>
          <div className="App">
            <Routes />
          </div>
        </UserProvider>
      </AuthProvider>
    </UIProvider>
  );
};

export default App;
