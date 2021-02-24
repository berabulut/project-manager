export const CreateNewBoard = (boardData) =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await fetch(
        process.env.REACT_APP_SERVICE_URL + `/createNewBoard`,
        {
          method: "POST",
          headers: new Headers({
            "Content-type": "application/json; charset=UTF-8",
          }),
          body: JSON.stringify(boardData),
        }
      );
      resolve(await response.json());
    } catch (err) {
      reject(err);
    }
  });

export const GetUserRelatedBoards = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await fetch(
        process.env.REACT_APP_SERVICE_URL + `/returnUserRelatedBoards`,
        {
          method: "POST",
          headers: new Headers({
            "Content-type": "application/json; charset=UTF-8",
          }),
          body: JSON.stringify(body),
        }
      );
      resolve(await response.json());
    } catch (err) {
      reject(err);
    }
  });

export const GetBoardRelatedUsers = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await fetch(
        process.env.REACT_APP_SERVICE_URL + `/returnBoardRelatedUsers`,
        {
          method: "POST",
          headers: new Headers({
            "Content-type": "application/json; charset=UTF-8",
          }),
          body: JSON.stringify(body),
        }
      );
      resolve(await response.json());
    } catch (err) {
      reject(err);
    }
  });

