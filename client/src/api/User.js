import { UIHelpers } from "helpers/";

export const FetchUserData = (uid, setUserData, setOpenBackdrop) =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await fetch(
        process.env.REACT_APP_SERVICE_URL + `/user?uid=${uid}`,
        {
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        }
      );
      const data = await response.json();
      if (setUserData) {
        setUserData(data.userData);
        UIHelpers.HandleBackdropClose(setOpenBackdrop);
        resolve(data.userData);
      }

      return data;
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });

export const CreateNewUserRecord = (userData) =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await fetch(process.env.REACT_APP_SERVICE_URL + `/user`, {
        method: "POST",
        headers: new Headers({
          Authorization: "b066d3fe-fcda-4263-b8dc-a012ce5f2641",
          "Content-type": "application/json; charset=UTF-8",
        }),
        body: JSON.stringify(userData),
      });
      resolve(await response.json());
    } catch (err) {
      reject(err);
    }
  });
