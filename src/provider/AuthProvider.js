import React, { useState } from "react";
import { AuthMethods } from "../firebase/AuthMethods";

export const FirebaseAuth = React.createContext();

const AuthProvider = (props) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);

  const handleSignUp = () => {
    // middle man between firebase and signup
    // calling signup from firebase server
    return AuthMethods.signup(inputs.email, inputs.password, setErrors);
  };


  return (
    <FirebaseAuth.Provider
      value={{
        handleSignUp,
        inputs,
        setInputs,
        errors,
      }}
    >
      {props.children}
    </FirebaseAuth.Provider>
  );
};

export default AuthProvider;
