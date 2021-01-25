import { FirebaseConfig } from "./FirebaseConfig";
import firebase from "firebase";

const SignUp = (email, password, setErrors, setToken) => {
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async (res) => {
      const token = await Object.entries(res.user)[5][1].b;
      //set token to localStorage
      await localStorage.setItem("pmt_token", token);
      //grab token from local storage and set to state.
      setToken(window.localStorage.pmt_token);
    })
    .catch((err) => {
      setErrors((prev) => [...prev, err.message]);
    });
};

const Login = (email, password, setErrors, setToken) => {
  //change from create users to...
  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    //everything is almost exactly the same as the function above
    .then(async (res) => {
      const token = await Object.entries(res.user)[5][1].b;
      //set token to localStorage
      await localStorage.setItem("pmt_token", token);
      setToken(window.localStorage.token);
    })
    .catch((err) => {
      setErrors((prev) => [...prev, err.message]);
    });
};

const Logout = (setErrors, setToken) => {
  // signOut is a no argument function
  firebase.auth()
    .signOut()
    .then((res) => {
      //remove the token
      localStorage.removeItem("pmt_token");
      //set the token back to original state
      console.error(res);
      setToken(null);
    })
    .catch((err) => {
      //there shouldn't every be an error from firebase but just in case
      setErrors((prev) => [...prev, err.message]);
      //whether firebase does the trick or not i want my user to do there thing.
      localStorage.removeItem("pmt_token");
      setToken(null);
      console.error(err.message);
    });
};

export const AuthMethods = {
  signup: SignUp,
  login: Login,
  logout: Logout,
};
