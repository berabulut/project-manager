import { FetchUserData, CreateNewUserRecord } from "api/User";

export const handleSignIn = (response, setUserData, setOpenBackdrop) => {
  const isNewUser = response.additionalUserInfo.isNewUser;

  if (isNewUser === true) {
    const userData = handleSignInData(response);
    CreateNewUserRecord(userData);
    return userData;
  } else if (isNewUser === false) {
    if (setUserData) {
      FetchUserData(response.user.uid, setUserData, setOpenBackdrop);
    }
  } else {
    console.log("handlesignin failed somehow");
  }
};

export const manualSignIn = (response) =>
  new Promise((resolve, reject) => {
    const userData = handleSignInData(response);
    CreateNewUserRecord(userData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });

const handleSignInData = (response) => {
  if (response.credential === null) {
    return handleCredentialsData(response);
  } else {
    // logout
    return;
  }
};

const handleCredentialsData = (response) => {
  const body = {
    uid: response.user.uid,
    email: response.user.email,
    name: response.user.email,
    picture: "",
  };

  return body;
};
