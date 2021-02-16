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
  const [boards, setBoards] = useState([]);
  const [openBackdrop, setOpenBackdrop] = useState(true);

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
    setBoards([]);
    setUserData([]);
  };

  const handleUserData = (uid) => {
    FetchUserData(uid, setUserData, handleBackdropClose);
  };

  const handleBoardCreation = (response) => {
    let updateUser = { ...userData };
    if (updateUser.boards !== undefined && updateUser.boards !== null) {
      Object.assign(updateUser.boards, response);
      setUserData(updateUser);
    } else {
      updateUser.boards = response;
      setUserData(updateUser);
    }
  };

  const handleBackdropClose = () => {
    setOpenBackdrop(false);
  };

  const handleBackdropOpen = () => {
    setOpenBackdrop(true);
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
        inputs,
        setInputs,
        errors,
        token,
        userData,
        setUserData,
        boards,
        setBoards,
        openBackdrop,
        handleBackdropClose,
        handleBackdropOpen,
        handleBoardCreation,
      }}
    >
      {props.children}
    </FirebaseAuth.Provider>
  );
};

export default AuthProvider;
