const { createNewUser, returnUserData } = require("../src/auth");

module.exports.create = async (event) => {
  const promise = new Promise((resolve) => {
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
              statusCode: 200,
              message: "User created successfuly!",
              data: data,
            }),
          };
          resolve(response);
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
              statusCode: 500,
              message: "Couldn't create a user!",
              error: err,
            }),
          };
          resolve(response);
        });
    } else {
      const response = {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          statusCode: 400,
          message: "UID is undefined",
        }),
      };
      resolve(response);
    }
  });
  return promise;
};

module.exports.login = async (event) => {
  const promise = new Promise(async (resolve) => {
    const uid = event.queryStringParameters.uid;
    if (uid !== undefined) {
      try {
        const userData = await returnUserData(uid);
        if (userData) {
          const response = {
            statusCode: 200,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify({
              statusCode: 200,
              userData: userData,
            }),
          };
          resolve(response);
        }
      } catch (err) {
        const response = {
          statusCode: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
          },
          body: JSON.stringify({
            statusCode: 500,
            error: err,
          }),
        };
        resolve(response);
      }
    } else {
      const response = {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          statusCode: 400,
          message: "UID is undefined!",
        }),
      };
      resolve(response);
    }
  });
  return promise;
};
