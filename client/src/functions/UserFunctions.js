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
  if (response.credential !== undefined && response.credential !== null) {
    const signInMethod = response.credential.signInMethod;
    if (signInMethod === "google.com") {
      return handleGoogleData(response);
    } else if (signInMethod === "twitter.com") {
      return handleTwitterData(response);
    } else if (signInMethod === "github.com") {
      return handleGithubData(response);
    }
  } else if (response.credential === null) {
    return handleCredentialsData(response);
  } else {
    // logout
    return;
  }
};

const handleGoogleData = (response) => {
  const profile = response.additionalUserInfo.profile;
  const body = {
    uid: response.user.uid,
    email: profile.email,
    name: profile.name,
    picture: profile.picture,
  };

  return body;
};

const handleTwitterData = (response) => {
  const profile = response.additionalUserInfo.profile;
  const body = {
    uid: response.user.uid,
    email: `twitter.com/${response.additionalUserInfo.username}`,
    name: profile.name,
    picture: profile.profile_image_url,
  };

  return body;
};

const handleGithubData = (response) => {
  const profile = response.additionalUserInfo.profile;
  const body = {
    uid: response.user.uid,
    email: response.user.email,
    name: profile.name,
    picture: profile.avatar_url,
  };

  return body;
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
