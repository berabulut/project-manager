const { createUniqueId } = require("../src/common");

module.exports.create = () => {
  const promise = new Promise((resolve) => {
    createUniqueId()
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
            error: err,
          }),
        };
        resolve(response);
      });
  });
  return promise;
};
