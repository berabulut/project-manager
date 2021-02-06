"use strict";
const { createNewUser } = require("../src/firebase");

module.exports.create = async(event, context, callback) => {
  const promise = new Promise((resolve, reject) => {
    const user = JSON.parse(event.body);
    if (user.uid !== undefined) {
      createNewUser(user.uid, user.email, user.name, user.picture)
      .then((data) => {
        const response = {
          statusCode: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
          },
          body: JSON.stringify({
            message: "User created successfuly!",
            data: data
          }),
        };
        resolve(response)
      })
      .catch((err) => {
        const response = {
          statusCode: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
          },
          body: JSON.stringify({
            message: "Couldn't create a user!",
            error: err
          }),
        };
        resolve(response);
      })
    }
    else {
      const response = {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          message: "UID is undefined",
        }),
      };
      resolve(response);
    }
  })
  return promise;
}

