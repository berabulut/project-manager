export const CreateNewList = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await fetch(process.env.REACT_APP_SERVICE_URL + `/list`, {
        method: "POST",
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

export const ReorderLists = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await fetch(process.env.REACT_APP_SERVICE_URL + `/list`, {
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

export const RenameList = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await fetch(
        process.env.REACT_APP_SERVICE_URL + `/list/rename`,
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
  });

export const DeleteList = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await fetch(
        process.env.REACT_APP_SERVICE_URL + `/list/remove`,
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
  });
