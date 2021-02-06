import React, { useContext, useEffect } from "react";
import firebase from "firebase";
import { FirebaseConfig } from "./firebase/FirebaseConfig";
import { FirebaseAuth } from "./provider/AuthProvider";
import Routes from "./routes/Routes";

const App = () => {
  const { handleUserData, userData } = useContext(FirebaseAuth);
  useEffect(() => {
    if (!userData.name) {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          handleUserData(user.uid);
        } else {
          return;
        }
      });
    }
  }, []);

  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
