import { FetchUserData } from "api/User";
import { BoardHelpers } from "helpers/";

const HandleUserData = (uid, setUserData, setBoards, setOpenBackdrop, userData) =>
  new Promise(async (resolve, reject) => {
    try {
      if(!userData) setOpenBackdrop(true);
      const data = await FetchUserData(uid, setUserData, setOpenBackdrop);
      const response = await BoardHelpers.HandleUserRelatedBoards(
        data,
        setBoards,
        setOpenBackdrop
      );
      setOpenBackdrop(false);
      resolve(response);
    } catch (err) {
      setTimeout(async () => {
        const data = await FetchUserData(uid, setUserData, setOpenBackdrop);
        if(!userData) {
          setOpenBackdrop(true)
          const response = await BoardHelpers.HandleUserRelatedBoards(
            data,
            setBoards,
            setOpenBackdrop
          );
          if (response) {
            setOpenBackdrop(false)
            resolve(response);
          } else {
            console.log("Couldn't fetch user data reload page : ", err);
            reject(err);
          }
        }

      }, 1500);
    }
  });

const UserHelpers = {
  HandleUserData: HandleUserData,
};

export default UserHelpers;
