import firebase from "firebase";
import { FirebaseConfig } from "./FirebaseConfig";
import { handleSignIn, manualSignIn } from "../functions/UserFunctions";

const SignUp = (
  email,
  password,
  setErrors,
  setToken,
  setUserData,
  setOpenBackdrop
) =>
  new Promise(async (resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        //const token = await Object.entries(res.user)[5][1].b;
        //set token to localStorage
        //handleSignIn(res, setUserData, setOpenBackdrop);
        resolve(await manualSignIn(res));

        // await localStorage.setItem("pmt_token", token);
        // //grab token from local storage and set to state.
        // await setToken(token);
      })
      .catch((err) => {
        setErrors((prev) => [...prev, err.message]);
        reject(err);
      });
  });

const Login = (
  email,
  password,
  setErrors,
  setToken,
  setUserData,
  setOpenBackdrop
) => {
  //change from create users to...
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    //everything is almost exactly the same as the function above
    .then(async (res) => {
      const token = await Object.entries(res.user)[5][1].b;
      //set token to localStorage
      handleSignIn(res, setUserData, setOpenBackdrop);
      await localStorage.setItem("pmt_token", token);
      await setToken(token);
    })
    .catch((err) => {
      setErrors((prev) => [...prev, err.message]);
    });
};

const LoginWithGoogle = (setErrors, setToken, setUserData, setOpenBackdrop) => {
  let provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(async (res) => {
      const token = await Object.entries(res.user)[5][1].b;
      //set token to localStorage
      handleSignIn(res, setUserData, setOpenBackdrop);
      await localStorage.setItem("pmt_token", token);
      await setToken(token);
    })
    .catch((err) => {
      setErrors((prev) => [...prev, err.message]);
    });
};

const LoginWithGithub = (setErrors, setToken, setUserData, setOpenBackdrop) => {
  let provider = new firebase.auth.GithubAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(async (res) => {
      const token = await Object.entries(res.user)[5][1].b;
      //set token to localStorage
      handleSignIn(res, setUserData, setOpenBackdrop);
      await localStorage.setItem("pmt_token", token);
      await setToken(token);
    })
    .catch((err) => {
      setErrors((prev) => [...prev, err.message]);
    });
};

const LoginWithTwitter = (
  setErrors,
  setToken,
  setUserData,
  setOpenBackdrop
) => {
  let provider = new firebase.auth.TwitterAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(async (res) => {
      const token = await Object.entries(res.user)[5][1].b;
      //set token to localStorage
      handleSignIn(res, setUserData, setOpenBackdrop);
      await localStorage.setItem("pmt_token", token);
      await setToken(token);
    })
    .catch((err) => {
      setErrors((prev) => [...prev, err.message]);
    });
};

const Logout = (setErrors, setToken) => {
  // signOut is a no argument function
  firebase
    .auth()
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
  googleLogin: LoginWithGoogle,
  githubLogin: LoginWithGithub,
  twitterLogin: LoginWithTwitter,
  logout: Logout,
};
