import firebase from "firebase";
import { FirebaseConfig } from "./FirebaseConfig";

const storage = firebase.storage();
const storageRef = storage.ref();

export const UploadFile = (file, id) =>
  new Promise((resolve, reject) => {
    const fileRef = storageRef.child(id.data);
    fileRef
      .put(file)
      .then((snapshot) => {
        console.log(snapshot);
        resolve(snapshot);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });

// export const DownloadFile = (fileName) => new Promise((resolve, reject) => {
// 	const fileRef = storage.ref(fileName);
// })
