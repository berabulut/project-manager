import { FirebaseConfig } from "./FirebaseConfig";
import firebase from "firebase";

export const AuthMethods = {
	signup: (email, password, setErrors) => {
		firebase.auth().createUserWithEmailAndPassword(email,password) 
		  .then(res => {
			console.log(res)
		  })
		  .catch(err => {
			  console.log(err)
			setErrors(prev => ([...prev, err.message]))
		  })
		},
  signin: (email, password) => {},
  signout: (email, password) => {},
};
