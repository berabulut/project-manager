import { GetUserRelatedBoards } from "functions/BoardFunctions";

const parseBoardId = (
  boards // structuring boardIds for api call --> ["id1", "id2"]
) =>
  new Promise((resolve, reject) => {
    let body = [];
    try {
      boards.map((val, key) => {
        if (val.boardId !== undefined) {
          body.push(val.boardId);
        }
        if (key === boards.length - 1) {
          resolve(body);
        }
      });
    } catch (err) {
      reject(err);
    }
  });

export const HandleUserRelatedBoards = (
  // fetching user related boards and seting them to context
  userData,
  handleBackdropOpen,
  setBoards,
  handleBackdropClose
) =>
  new Promise((resolve, reject) => {
    if (
      userData !== undefined &&
      userData.boards !== undefined &&
      Object.keys(userData.boards).length > 0
    ) {
      handleBackdropOpen();
      parseBoardId(Object.values(userData.boards))
        .then((response) => {
          const body = {
            boardList: response,
          };
          GetUserRelatedBoards(body)
            .then((response) => {
              if (response.statusCode === 200) {
                setBoards(response.boardData);
                handleBackdropClose();
                resolve(true)
              }
            })
            .catch((err) => {
              console.log(err);
              reject(err)
              handleBackdropClose();
            });
        })
        .catch((err) => {
          console.log(err);
          reject(err)
        });
    }
    else {
      reject('userData or boards are undefined')
    }
  });

export const FindExactBoard = (id, boards, handleBoardPageRender) => {
  for (let board of boards) {
    if (board.id === id) {
      handleBoardPageRender(board);
      console.log(board);
      break;
    }
  }
};
