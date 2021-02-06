"use strict";
const { testDB } = require("../src/firebase");

module.exports.hello = async (event, context, callback) => {
  const promise = new Promise((resolve, reject) => {
    testDB()
      .then((data) => {
        const response = {
          statusCode: 200,
          body: JSON.stringify({
            db_value: data,
          }),
        };
        resolve(response);
      })
      .catch((err) => {
        const response = {
          statusCode: 500,
          body: JSON.stringify({
            error: err,
          }),
        };
        reject(err);
      });
  });
  return promise;
};
