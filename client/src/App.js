import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { FirebaseConfig } from "./firebase/FirebaseConfig";
import AuthProvider from "provider/AuthProvider";
import UIProvider from "provider/UIProvider";
import UserProvider from "provider/UserProvider";
import { Loading } from "components";
import { UserHelpers } from "helpers/";

import Routes from "./routes/Routes";

const App = () => {
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [userData, setUserData] = useState();
  const [boards, setBoards] = useState([]);
  const [renderedBoard, setRenderedBoard] = useState();

  useEffect(() => {
    if (!userData) {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          UserHelpers.HandleUserData(
            user.uid,
            setUserData,
            setBoards,
            setOpenBackdrop,
            userData
          );
        } else {
          return;
        }
      });
    }
  }, []);

  return (
    <UIProvider
      openBackdrop={openBackdrop}
      setOpenBackdrop={setOpenBackdrop}
      renderedBoard={renderedBoard}
      setRenderedBoard={setRenderedBoard}
    >
      <AuthProvider
        setUserData={setUserData}
        setBoards={setBoards}
        setOpenBackdrop={setOpenBackdrop}
      >
        <UserProvider
          userData={userData}
          setUserData={setUserData}
          boards={boards}
          setBoards={setBoards}
          setOpenBackdrop={setOpenBackdrop}
          renderedBoard={renderedBoard}
          setRenderedBoard={setRenderedBoard}
        >
          <div className="App">
            <Loading />
            <Routes />
          </div>
        </UserProvider>
      </AuthProvider>
    </UIProvider>
  );
};

export default App;
