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

module.exports = { createNewList, reorderLists };
