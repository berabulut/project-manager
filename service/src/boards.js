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

const returnUserRelatedBoards = async (boards) =>
  new Promise((resolve, reject) => {
    try {
      let boardList = [];
      boards.map(async (val, key) => {
        // val here should be unique id of a board
        const ref = db.ref(`/boards/${val}`);
        ref.once("value", async (snapshot) => {
          const value = await snapshot.val();
          console.log(value);
          if (value !== undefined && value !== null) {
            boardList.push(value);
          }
        });
        if (key === boards.length - 1) {
          resolve(await boardList);
        }
      });
    } catch (err) {
      reject(err);
    }
  });

module.exports = { createNewBoard, returnUserRelatedBoards };
