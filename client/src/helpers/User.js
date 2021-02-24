import { FetchUserData } from "functions/UserFunctions";
import {  BoardHelpers } from "helpers/";

const HandleUserData = (uid, setUserData, setBoards, setOpenBackdrop) => {
  FetchUserData(uid, setUserData, setOpenBackdrop)
    .then((data) => {
      BoardHelpers.HandleUserRelatedBoards(data, setBoards, setOpenBackdrop);
    })
    .catch((err) => {
      console.log("Couldn't fetch user data reload page : ", err);
    });
};

const UserHelpers = {
  HandleUserData: HandleUserData,
};

export default UserHelpers;
