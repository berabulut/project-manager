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

const returnImages = () => // this will be removed later
  new Promise((resolve, reject) => {
    const ref = db.ref(`/unsplash-images`);
    ref.once("value", (snapshot) => {
      const value = snapshot.val();
      if (value !== undefined && value !== null) {
        resolve(value);
      } else {
        reject("No images!");
      }
    });
  });

  const postImages = (json) => new Promise((resolve, reject) => {
    const ref = db.ref(`/unsplash-images`);
    ref.set(json, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(true);
      }
    });
  })

module.exports = { returnImages, postImages };
