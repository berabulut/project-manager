export const CreateNewBoard = (boardData) =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await fetch(
        process.env.REACT_APP_SERVICE_URL + `/board`,
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
        process.env.REACT_APP_SERVICE_URL + `/userRelatedBoards`,
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
        process.env.REACT_APP_SERVICE_URL + `/boardRelatedUsers`,
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

export const CreateNewList = (body) => new Promise(async(resolve, reject) => {
  try {
    let response = await fetch(
      process.env.REACT_APP_SERVICE_URL + `/list`,
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
})

export const CreateNewTask = (body) => new Promise(async(resolve, reject) => {
  try {
    let response = await fetch(
      process.env.REACT_APP_SERVICE_URL + `/task`,
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
})

export const ReorderLists = (body) => new Promise(async(resolve, reject) => {
  try {
    let response = await fetch(
      process.env.REACT_APP_SERVICE_URL + `/list-reorder`,
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
})

export const ReorderTasks = (body) => new Promise(async(resolve, reject) => {
  try {
    let response = await fetch(
      process.env.REACT_APP_SERVICE_URL + `/task-reorder`,
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
})

export const SwitchTasks = (body) => new Promise(async(resolve, reject) => {
  try {
    let response = await fetch(
      process.env.REACT_APP_SERVICE_URL + `/task-switch`,
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
})

export const UpdateTaskProperty = (body) => new Promise(async(resolve, reject) => {
  try {
    let response = await fetch(
      process.env.REACT_APP_SERVICE_URL + `/update-task`,
      {
        method: "PUT",
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
})
