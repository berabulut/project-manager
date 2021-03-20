const {
  createNewBoard,
  inviteUser,
  returnBoardRelatedUsers,
  returnUserRelatedBoards,
  updateBoardProperty,
  removeBoardFromUser,
} = require("../src/boards");

module.exports.create = async (event) => {
  const promise = new Promise((resolve) => {
    const { admin, title, coverPhoto, visibility, users } = JSON.parse(
      event.body
    );
    if (users !== undefined) {
      createNewBoard(admin, title, coverPhoto, visibility, users)
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

module.exports.update = (event) => {
  const promise = new Promise((resolve) => {
    const { boardId, property, data } = JSON.parse(event.body);
    if (boardId && property && data) {
      updateBoardProperty(boardId, property, data)
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
          message: "Missing body element",
        }),
      };
      resolve(response);
    }
  });
  return promise;
};

module.exports.invite = (event) => {
  const promise = new Promise((resolve) => {
    const { boardId, address } = JSON.parse(event.body);
    if (boardId && address) {
      inviteUser(boardId, address)
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
          message: "Missing body element",
        }),
      };
      resolve(response);
    }
  });
  return promise;
};

module.exports.users = async (event) => {
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

module.exports.boards = async (event) => {
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

module.exports.removeUser = async (event) => {
  const promise = new Promise(async (resolve) => {
    const { boardId, userId } = JSON.parse(event.body);
    if (boardId && userId) {
      removeBoardFromUser(boardId, userId)
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
          message: "Missing body element",
        }),
      };
      resolve(response);
    }
  });
  return promise;
};
