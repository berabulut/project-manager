export const CreateNewBoard = (boardData) =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await fetch(process.env.REACT_APP_SERVICE_URL + `/board`, {
        method: "POST",
        headers: new Headers({
          "Content-type": "application/json; charset=UTF-8",
        }),
        body: JSON.stringify(boardData),
      });
      resolve(await response.json());
    } catch (err) {
      reject(err);
    }
  });

export const UpdateBoardProperty = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await fetch(process.env.REACT_APP_SERVICE_URL + `/board`, {
        method: "PUT",
        headers: new Headers({
          "Content-type": "application/json; charset=UTF-8",
        }),
        body: JSON.stringify(body),
      });
      resolve(await response.json());
    } catch (err) {
      reject(err);
    }
  });

export const GetUserRelatedBoards = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await fetch(
        process.env.REACT_APP_SERVICE_URL + `/user/boards`,
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
        process.env.REACT_APP_SERVICE_URL + `/board/users`,
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

export const InviteUser = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await fetch(
        process.env.REACT_APP_SERVICE_URL + `/board/invite`,
        {
          method: "PUT",
          headers: new Headers({
            "Content-type": "application/json; charset=UTF-8",
          }),
          body: JSON.stringify(body),
        }
      );
      resolve(response.json());
    } catch (err) {
      reject(err);
    }
  });

export const RemoveUser = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await fetch(
        process.env.REACT_APP_SERVICE_URL + `/user/boards`,
        {
          method: "PUT",
          headers: new Headers({
            "Content-type": "application/json; charset=UTF-8",
          }),
          body: JSON.stringify(body),
        }
      );
      resolve(response.json());
    } catch (err) {
      reject(err);
    }
  });
