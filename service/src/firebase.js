const admin = require("firebase-admin");
const firebaseConfig = require("../firebaseConfig.json");
require("dotenv").config();

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
  databaseURL: process.env.DATABASE_URL,
});

const db = admin.database();

const testDB = () =>   // fetch temperature data from firebase
  new Promise((resolve, reject) => {
    const ref = db.ref(`/test`);
    ref
      .once("value", function (snapshot) {
        const data = snapshot.val(); //Data is in JSON format.
		console.log(data)
		resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });

module.exports = { testDB }