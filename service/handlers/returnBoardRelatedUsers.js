const { returnBoardRelatedUsers } = require("../src/boards");

module.exports.users = async (event, context, callback) => {
  const promise = new Promise(async (resolve, reject) => {
    const userList = JSON.parse(event.body).userList;
    if (userList !== undefined && userList.length > 0) {
      const userData = await returnBoardRelatedUsers(userList);
      try {
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
          message: "User IDS are not undefined!",
        }),
      };
      resolve(response);
    }
  });
  return promise;
};
