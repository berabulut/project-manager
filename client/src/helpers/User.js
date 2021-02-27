import { FetchUserData } from "functions/UserFunctions";
import { BoardHelpers } from "helpers/";

const HandleUserData = (uid, setUserData, setBoards, setOpenBackdrop) =>
  new Promise(async (resolve, reject) => {
    try {
      const data = await FetchUserData(uid, setUserData, setOpenBackdrop);
      const response = await BoardHelpers.HandleUserRelatedBoards(
        data,
        setBoards,
        setOpenBackdrop
      );
      resolve(response);
    } catch (err) {
      console.log("Couldn't fetch user data reload page : ", err);
      reject(err);
    }
  });

const UserHelpers = {
  HandleUserData: HandleUserData,
};

export default UserHelpers;
