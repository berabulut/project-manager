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
    const boardId = ref.key;

    const data = {
      id: boardId,
      title: title,
      coverPhoto: coverPhoto,
      visibility: visibility,
      users: users,
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

const createNewList = (boardId, list, listOrder) =>
  new Promise((resolve, reject) => {
    try {
      const ref = db.ref(`/boards/${boardId}/lists/${list.id}`);
      ref.set(list, async (error) => {
        if (error) {
          reject(error);
        } else {
          let response = await handleListOrder(boardId, listOrder);
          resolve(response);
        }
      });
    } catch (err) {
      reject(err);
    }
  });

const createNewTask = (boardId, task, listId, taskIds) =>
  new Promise((resolve, reject) => {
    try {
      const ref = db.ref(`/boards/${boardId}/tasks/${task.id}`);
      ref.set(task, async (error) => {
        if (error) {
          reject(error);
        } else {
          const response = await linkTaskAndList(boardId, listId, taskIds);
          resolve(response);
        }
      });
    } catch (err) {
      reject(err);
    }
  });

const linkTaskAndList = (boardId, listId, taskIds) =>
  new Promise((resolve, reject) => {
    try {
      const ref = db.ref(`/boards/${boardId}/lists/${listId}/taskIds`);
      ref.set(taskIds, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve(true);
        }
      });
    } catch (err) {
      reject(err);
    }
  });

const handleListOrder = (boardId, listOrder) =>
  new Promise((resolve, reject) => {
    const ref = db.ref(`/boards/${boardId}/listOrder`);

    ref.set(listOrder, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(true);
      }
    });
  });

const reorderLists = (boardId, listOrder) =>
  new Promise((resolve, reject) => {
    const ref = db.ref(`/boards/${boardId}/listOrder`);
    ref.set(listOrder, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(true);
      }
    });
  });

const reorderTasksInSameList = (boardId, listId, taskIds) =>
  new Promise((resolve, reject) => {
    const ref = db.ref(`/boards/${boardId}/lists/${listId}/taskIds`);
    ref.set(taskIds, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(true);
      }
    });
  });

const switchTasksBetweenLists = (boardId, lists) =>
  new Promise((resolve, reject) => {
    const ref = db.ref(`/boards/${boardId}/lists`);
    ref.set(lists, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(true);
      }
    });
  });

const updateTaskProperty = (boardId, taskId, property, data) =>
  new Promise((resolve, reject) => {
    const ref = db.ref(`/boards/${boardId}/tasks/${taskId}/${property}`);
    ref.set(data, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(true);
      }
    });
  });

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

module.exports = {
  createNewBoard,
  createNewList,
  reorderLists,
  createNewTask,
  updateTaskProperty,
  reorderTasksInSameList,
  switchTasksBetweenLists,
  returnUserRelatedBoards,
  returnBoardRelatedUsers,
  createUniqueId,
  inviteUser,
};
