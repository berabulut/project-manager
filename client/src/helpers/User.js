import firebase from "firebase";
import { FetchUserData } from "api/User";
import { BoardHelpers } from "helpers/";

const HandleUserData = (
  uid,
  setUserData,
  setBoards,
  setOpenBackdrop,
  userData
) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!userData) setOpenBackdrop(true);
      const data = await FetchUserData(uid, setUserData, setOpenBackdrop);
      const response = await BoardHelpers.HandleUserRelatedBoards(
        data,
        setBoards,
        setOpenBackdrop
      );
      setOpenBackdrop(false);
      resolve(response);
    } catch (err) {
      firebase.auth().signOut();
      localStorage.removeItem("pmt_token");
      reject(err);
    }
  });

const UserHelpers = {
  HandleUserData: HandleUserData,
};

export default UserHelpers;
