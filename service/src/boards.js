const admin = require("firebase-admin");
const firebaseConfig = require("../firebaseConfig.json");
require("dotenv").config();

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
  databaseURL: process.env.DATABASE_URL,
});

const db = admin.database();

const createNewBoard = (title, coverPhoto, visibility, users) =>
  new Promise((resolve, reject) => {
    const ref = db.ref(`/boards/`);

    const data = {
      title: title,
      coverPhoto: coverPhoto,
      visibility: visibility,
      users: users,
    };

    ref.push().set(data, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(true);
      }
    });
  });

const returnUserRelatedBoards = (boards) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = new Promise((resolve, reject) => {
        let data = [];
        boards.map((val, key) => {
          // val here should be unique id of a board
          const ref = db.ref(`/boards/${val}`);
          ref.once("value", (snapshot) => {
            const value = snapshot.val();
            if (value !== undefined && value !== null) {
              data.push(value);
              if (key === boards.length - 1) resolve(data);
            }
            if (key === boards.length - 1) resolve(data);
          });
        });
      });

      resolve(await response);

      // boards.map((val, key) => {
      //   // val here should be unique id of a board
      //   const ref = db.ref(`/boards/${val}`);
      //   ref.once("value",  (snapshot) => {
      //     const value = await snapshot.val();
      //     if (value !== undefined && value !== null) {
      //       console.log({ value });
      //       return value;
      //     }
      //   });
      // })
    } catch (err) {
      reject(err);
    }
  });

module.exports = { createNewBoard, returnUserRelatedBoards };
