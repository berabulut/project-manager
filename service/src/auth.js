const admin = require("firebase-admin");
const firebaseConfig = require("../firebaseConfig.json");
require("dotenv").config();

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
    databaseURL: process.env.DATABASE_URL,
  });
}

const db = admin.database();

const createNewUser = (uid, email, name, picture) =>
  new Promise(async (resolve, reject) => {
    const ref = db.ref(`/users/${uid}`);
    const userExists = await checkIfUserExists(uid);
    const data = {
      uid: uid,
      email: email,
      name: name,
      picture: picture,
    };

    if (!userExists) {
      ref.set(data, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve(true);
        }
      });
    } else {
      reject("User already exists!");
    }
  });

const checkIfUserExists = (uid) =>
  new Promise((resolve, reject) => {
    const ref = db.ref(`/users/${uid}`);
    ref
      .once("value", (snapshot) => {
        if (snapshot.val() !== undefined && snapshot.val() !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });

const returnUserData = (uid) =>
  new Promise(async (resolve, reject) => {
    const ref = db.ref(`/users/${uid}`);
    const userExists = await checkIfUserExists(uid);

    if (userExists) {
      ref.once("value", (snapshot) => {
        const value = snapshot.val();
        if (value !== undefined && value !== null) {
          resolve(value);
        } else {
          reject("Couldn't resolve user data!");
        }
      });
    } else {
      reject("User data doesn't exist!");
    }
  });

module.exports = { createNewUser, returnUserData, checkIfUserExists };
