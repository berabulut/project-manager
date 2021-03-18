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

const createUniqueId = () =>
  new Promise((resolve, reject) => {
    try {
      const ref = db.ref(`/uniqueId`).push();
      const uniqueId = ref.key;
      resolve(uniqueId);
    } catch (err) {
      reject(err);
    }
  });

module.exports = { createUniqueId };
