import React, { useState, useEffect } from "react";
import { AuthMethods } from "firebase/AuthMethods";

export const FirebaseAuth = React.createContext();

const AuthProvider = ({
  setOpenBackdrop,
  setUserData,
  setBoards,
  children,
}) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("pmt_token"));

  useEffect(() => {
    if (!token) {
      setOpenBackdrop(false);
    }
  }, [token]);

  const handleSignUp = () => {
    // middle man between firebase and signup
    // calling signup from firebase server
    return AuthMethods.signup(
      inputs.email,
      inputs.password,
      setErrors,
      setToken,
      setOpenBackdrop
    );
  };

  const handleLogin = () => {
    AuthMethods.login(
      inputs.email,
      inputs.password,
      setErrors,
      setToken,
      setUserData,
      setOpenBackdrop
    );
  };

  const handleGoogleLogin = () => {
    AuthMethods.googleLogin(setErrors, setToken, setUserData, setOpenBackdrop);
  };

  const handleGithubLogin = () => {
    AuthMethods.githubLogin(setErrors, setToken, setUserData, setOpenBackdrop);
  };

  const handleTwitterLogin = () => {
    AuthMethods.twitterLogin(setErrors, setToken, setUserData, setOpenBackdrop);
  };

  const handleLogout = () => {
    AuthMethods.logout(setErrors, setToken);
    setBoards([]);
    setUserData([]);
    setOpenBackdrop(false);
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
      {children}
    </FirebaseAuth.Provider>
  );
};

export default AuthProvider;
