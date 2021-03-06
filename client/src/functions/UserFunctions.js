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

const createNewUserRecord = async (userData) => {
  try {
    let response = await fetch(
      process.env.REACT_APP_SERVICE_URL + `/user`,
      {
        method: "POST",
        headers: new Headers({
          Authorization: "b066d3fe-fcda-4263-b8dc-a012ce5f2641",
          "Content-type": "application/json; charset=UTF-8",
        }),
        body: JSON.stringify(userData),
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const handleSignIn = (response, setUserData, setOpenBackdrop) => {
  const isNewUser = response.additionalUserInfo.isNewUser;

  if (isNewUser === true) {
    const userData = handleSignInData(response);
    createNewUserRecord(userData);
    return userData;
  } else if (isNewUser === false) {
    if (setUserData) {
      FetchUserData(response.user.uid, setUserData, setOpenBackdrop);
    }
  } else {
    console.log("handlesignin failed somehow");
  }
};

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
    handleCredentialsData(response);
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
    name: "",
    picture: "",
  };

  return body;
};
