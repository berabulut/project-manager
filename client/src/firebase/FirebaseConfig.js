import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/app'
import 'firebase/storage'

export const FirebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,  
  messagingSenderId: process.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig);
  firebase.auth();
}else {
  firebase.app(); // if already initialized, use that one
  firebase.auth();
}






 