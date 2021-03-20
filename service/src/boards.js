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

const createNewBoard = (admin, title, coverPhoto, visibility, users) =>
  new Promise((resolve, reject) => {
    const ref = db.ref(`/boards/`).push();
    const boardId = ref.key;

    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString("en-EN", { month: "long" });
    const year = now.getFullYear();

    const data = {
      admin: admin,
      id: boardId,
      title: title,
      coverPhoto: coverPhoto,
      visibility: visibility,
      users: users,
      date: `${month} ${day}, ${year}`,
    };

    ref.set(data, (error) => {
      if (error) {
        reject(error);
      } else {
        linkUsersAndBoard(users, boardId)
          .then((data) => resolve(data))
          .catch((err) => reject(err));
      }
    });
  });

const linkUsersAndBoard = (users, boardId) =>
  new Promise((resolve, reject) => {
    if (users !== undefined && users.length > 0) {
      try {
        users.map((val) => {
          const ref = db.ref(`/users/${val.uid}/boards/${boardId}`);
          const data = {
            boardId: boardId,
          };
          ref.set(data, (error) => {
            if (error) {
              reject(error);
            } else {
              resolve({
                [boardId]: {
                  boardId: boardId,
                },
              });
            }
          });
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
        let counter = 0;

        boards.map((val, key) => {
          // val here should be unique id of a board
          const ref = db.ref(`/boards/${val}`);
          ref.once("value", (snapshot) => {
            const value = snapshot.val();
            if (value !== undefined && value !== null) {
              returnBoardRelatedUsers(value.users) // we are also returning users' data related to board
                .then((response) => {
                  value.userData = response;
                  data.push(value);
                })
                .then(() => {
                  if (counter === boards.length - 1) resolve(data);
                  // resolve promise if iterating last item of array
                  else counter = counter + 1;
                });
            }
          });
        });
      });

      resolve(await response);
    } catch (err) {
      reject(err);
    }
  });

const returnBoardRelatedUsers = (users) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = new Promise((resolve, reject) => {
        let data = [];
        users.map((val, key) => {
          //val here should be unique id of a users
          const ref = db.ref(`/users/${val.uid}`);
          ref.once("value", (snapshot) => {
            const value = snapshot.val();
            if (value !== undefined && value !== null) {
              data.push(value);
              if (key === users.length - 1) resolve(data);
            }
          });
        });
      });
      resolve(await response);
    } catch (err) {
      reject(err);
    }
  });

const returnUser = (address) =>
  new Promise((resolve, reject) => {
    try {
      const ref = db.ref(`/users`);
      ref.once("value", (snapshot) => {
        let users = snapshot.val();
        const userIds = Object.keys(users);
        if (users) {
          for (let i = 0; i < userIds.length; i++) {
            const user = users[userIds[i]];
            if (user.email === address) {
              resolve(user);
            } else if (i === userIds.length - 1) {
              resolve(undefined);
            }
          }
        }
      });
    } catch (err) {
      reject(err);
    }
  });

const inviteUser = (boardId, address) =>
  new Promise((resolve, reject) => {
    const ref = db.ref(`/users`);
    ref.once("value", async (snapshot) => {
      const users = snapshot.val();
      const user = await returnUser(address);
      const uid = user.uid;
      if (uid) {
        const user = users[uid];
        if (user.boards && user.boards[boardId]) {
          reject("User has already been added to this board!");
        } else {
          const userRef = db.ref(`/users/${uid}/boards/${boardId}`);
          const data = {
            boardId: boardId,
          };
          userRef.set(data, (error) => {
            if (error) {
              reject(error);
            } else {
              const boardRef = db.ref(`/boards/${boardId}/users`);
              boardRef.once("value", (snapshot) => {
                const users = snapshot.val();
                users.push({ uid: uid });
                boardRef.set(users, (error) => {
                  if (error) {
                    reject(error);
                  } else {
                    resolve(user);
                  }
                });
              });
            }
          });
        }
      } else {
        reject("User not found!");
      }
    });
  });

const updateBoardProperty = (boardId, property, data) =>
  new Promise((resolve, reject) => {
    const ref = db.ref(`/boards/${boardId}/${property}`);
    ref.set(data, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(true);
      }
    });
  });

const removeBoardFromUser = (boardId, userId) =>
  new Promise((resolve, reject) => {
    const ref = db.ref(`/users/${userId}/boards/${boardId}`);
    ref.remove((error) => {
      if (error) {
        reject(error);
      } else {
        resolve(true);
      }
    });
  });
module.exports = {
  createNewBoard,
  returnUserRelatedBoards,
  returnBoardRelatedUsers,
  inviteUser,
  updateBoardProperty,
  removeBoardFromUser,
};
