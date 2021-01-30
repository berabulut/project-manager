import React, { useState } from "react";
import { AuthMethods } from "../firebase/AuthMethods";

export const FirebaseAuth = React.createContext();

const AuthProvider = (props) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("pmt_token"));

  const handleSignUp = () => {
    // middle man between firebase and signup
    // calling signup from firebase server
    return AuthMethods.signup(inputs.email, inputs.password, setErrors, setToken);
  };

  const handleLogin = () => {
    AuthMethods.login(inputs.email, inputs.password, setErrors, setToken)
  }

  const handleGoogleLogin = () => {
    AuthMethods.googleLogin(setErrors, setToken)
  }

  const handleGithubLogin = () => {
    AuthMethods.githubLogin(setErrors, setToken)
  }

  const handleTwitterLogin = () => {
    AuthMethods.twitterLogin(setErrors, setToken)
  }

  const handleLogout = () => {
    AuthMethods.logout(setErrors, setToken);
  }


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
        token
      }}
    >
      {props.children}
    </FirebaseAuth.Provider>
  );
};

export default AuthProvider;
