const { createNewBoard } = require("../src/boards");

module.exports.create = async (event, context, callback) => {
  const promise = new Promise((resolve, reject) => {
    const board = JSON.parse(event.body);
    if (board.users !== undefined) {
		createNewBoard(board.title, board.coverPhoto, board.visibility, board.users)
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
              message: "Board created successfuly!",
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
              message: "Couldn't create a board!",
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
          message: "Title is undefined",
        }),
      };
      resolve(response);
    }
  });
  return promise;
};
