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
const adminAuth = admin.apps[0].auth();

const createNewUser = (uid, email, name, picture) =>
  new Promise(async (resolve, reject) => {
    const ref = db.ref(`/users/${uid}`);
    const userExists = await checkIfUserExists(uid);
    const whitelisted = await checkIfWhitelisted(uid);
    const data = {
      uid: uid,
      email: email,
      name: name,
      picture: picture,
    };

    if (userExists) reject("User already exists!");
    else if (!whitelisted) reject("Email is not whitelisted");
    else {
      ref.set(data, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve(true);
        }
      });
    }
  });

const returnUserData = (uid) =>
  new Promise(async (resolve, reject) => {
    const ref = db.ref(`/users/${uid}`);

    const whitelisted = await checkIfWhitelisted(uid);
    if (!whitelisted) return reject("User not whitelisted");

    const userExists = await checkIfUserExists(uid);
    if (!userExists) return reject("User data doesn't exist!");

    ref.once("value", (snapshot) => {
      const value = snapshot.val();
      if (value !== undefined && value !== null) {
        resolve(value);
      } else {
        reject("Couldn't resolve user data!");
      }
    });
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

const checkIfWhitelisted = (uid) =>
  new Promise(async (resolve, reject) => {
    const ref = db.ref("/access/whitelist");

    ref.once("value", async (snapshot) => {
      const user = await adminAuth.getUser(uid);
      if (user && !snapshot.val().includes(user.email)) {
        adminAuth
          .deleteUser(uid)
          .then((userRecord) => console.log("Successfully deleted user"))
          .catch((err) => console.log(err));

        resolve(false);
      } else resolve(true);
    });
  });

module.exports = { createNewUser, returnUserData, checkIfUserExists };
