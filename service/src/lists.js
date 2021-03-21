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

const renameList = (boardId, listId, title) =>
  new Promise((resolve, reject) => {
    const ref = db.ref(`/boards/${boardId}/lists/${listId}/title`);
    ref.set(title, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(true);
      }
    });
  });

const removeList = (boardId, listId) =>
  new Promise((resolve, reject) => {
    let ref = db.ref(`/boards/${boardId}/lists/${listId}`);
    ref.remove((error) => {
      if (error) {
        reject(error);
      } else {
        ref = db.ref(`/boards/${boardId}/listOrder`);
        ref.once("value", (snapshot) => {
          // removing from list order as well
          let value = snapshot.val();
          if (value !== undefined && value !== null) {
            value = value.filter((id) => id !== listId);
            ref.set(value, (error) => {
              if (error) {
                reject(error);
              } else {
                resolve(true);
              }
            });
          } else {
            reject("List order is undefined!");
          }
        });
      }
    });
  });
module.exports = { createNewList, reorderLists, renameList, removeList };
