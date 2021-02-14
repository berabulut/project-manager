import React, { useState } from "react";
import { AuthMethods } from "../firebase/AuthMethods";
import { FetchUserData } from "../functions/UserFunctions";
import { CreateNewBoard } from "../functions/BoardFunctions";
import { SearchImages, GetRandomImages } from "../api/unsplash";

export const FirebaseAuth = React.createContext();

const AuthProvider = (props) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("pmt_token"));
  const [userData, setUserData] = useState({});

  const handleSignUp = () => {
    // middle man between firebase and signup
    // calling signup from firebase server
    return AuthMethods.signup(
      inputs.email,
      inputs.password,
      setErrors,
      setToken
    );
  };

  const handleLogin = () => {
    AuthMethods.login(
      inputs.email,
      inputs.password,
      setErrors,
      setToken,
      setUserData
    );
  };

  const handleGoogleLogin = () => {
    AuthMethods.googleLogin(setErrors, setToken, setUserData);
  };

  const handleGithubLogin = () => {
    AuthMethods.githubLogin(setErrors, setToken, setUserData);
  };

  const handleTwitterLogin = () => {
    AuthMethods.twitterLogin(setErrors, setToken, setUserData);
  };

  const handleLogout = () => {
    AuthMethods.logout(setErrors, setToken);
  };

  const handleUserData = (uid) => {
    FetchUserData(uid, setUserData);
  };

  const handleBoardCreation = (boardData) => {
    CreateNewBoard(boardData);
  };

  const handleImageSearch = (query) => {
    SearchImages(query);
  };

  const handleRandomImageSearch = (count = 12) => {
    GetRandomImages(count);
  };

  return (
    <FirebaseAuth.Provider
      value={{
        handleSignUp,
        handleLogin,
        handleLogout,
        handleGoogleLogin,
        handleGithubLogin,
        handleTwitterLogin,
        handleUserData,
        handleBoardCreation,
        handleImageSearch,
        handleRandomImageSearch,
        inputs,
        setInputs,
        errors,
        token,
        userData,
      }}
    >
      {props.children}
    </FirebaseAuth.Provider>
  );
};

export default AuthProvider;
