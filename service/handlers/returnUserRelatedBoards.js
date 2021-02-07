const { returnUserRelatedBoards } = require("../src/boards");

module.exports.boards = async (event, context, callback) => {
  const promise = new Promise(async (resolve, reject) => {
    const boardList = JSON.parse(event.body).boardList;
    if (boardList !== undefined && boardList.length > 0) {
      const boardData = await returnUserRelatedBoards(boardList);
      try {
        if (boardData) {
          const response = {
            statusCode: 200,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify({
              statusCode: 200,
              boardData: boardData,
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
          message: "Board IDS are not undefined!",
        }),
      };
      resolve(response);
    }
  });
  return promise;
};
