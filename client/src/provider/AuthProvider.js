import React, { useState } from "react";
import { AuthMethods } from "firebase/AuthMethods";

export const FirebaseAuth = React.createContext();

const AuthProvider = (props) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("pmt_token"));

  const handleSignUp = () => {
    // middle man between firebase and signup
    // calling signup from firebase server
    return AuthMethods.signup(
      inputs.email,
      inputs.password,
      setErrors,
      setToken,
      props.setOpenBackdrop
    );
  };

  const handleLogin = () => {
    AuthMethods.login(
      inputs.email,
      inputs.password,
      setErrors,
      setToken,
      props.setUserData,
      props.setOpenBackdrop
    );
  };

  const handleGoogleLogin = () => {
    AuthMethods.googleLogin(
      setErrors,
      setToken,
      props.setUserData,
      props.setOpenBackdrop
    );
  };

  const handleGithubLogin = () => {
    AuthMethods.githubLogin(
      setErrors,
      setToken,
      props.setUserData,
      props.setOpenBackdrop
    );
  };

  const handleTwitterLogin = () => {
    AuthMethods.twitterLogin(
      setErrors,
      setToken,
      props.setUserData,
      props.setOpenBackdrop
    );
  };

  const handleLogout = () => {
    AuthMethods.logout(setErrors, setToken);
    props.setBoards([]);
    props.setUserData([]);
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
        inputs,
        setInputs,
        errors,
        token,
      }}
    >
      {props.children}
    </FirebaseAuth.Provider>
  );
};

export default AuthProvider;
