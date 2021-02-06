const { returnUserData } = require("../src/firebase");

module.exports.login = async (event, context, callback) => {
  const promise = new Promise(async (resolve, reject) => {
    const uid = event.queryStringParameters.uid;
    if (uid !== undefined) {
      try {
        const userData = await returnUserData(uid);
        if (userData) {
          const response = {
            statusCode: 200,
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
