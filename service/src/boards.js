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
    const ref = db.ref(`/boards/`).push();

    const data = {
      title: title,
      coverPhoto: coverPhoto,
      visibility: visibility,
      users: users,
    };

    const boardId = ref.key;

    ref.set(data, (error) => {
      if (error) {
        reject(error);
      } else {
        linkUsersAndBoard(users, boardId)
        .then(() => resolve(true))
        .catch((err) => reject(err))
      }
    });
  });

const linkUsersAndBoard = (users, boardId) =>
  new Promise((resolve, reject) => {
    if (users !== undefined && users.length > 0) {
      try {
        users.map((val, key) => {
          const ref = db.ref(`/users/${val.uid}/boards/`).push();
          const data = {
            boardId: boardId
          }
          ref.set(data, (error) => {
            if(error) {
              reject(error);
            }
            else {
              resolve(true)
            }
          })

        });
      } catch (err) {
        reject(err);
      }
    } else {
      reject("No user provided!");
    }
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
    } catch (err) {
      reject(err);
    }
  });

module.exports = { createNewBoard, returnUserRelatedBoards };
