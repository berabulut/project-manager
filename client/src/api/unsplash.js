import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
  //...other fetch options
});

export const SearchImages = (query) =>
  new Promise((resolve, reject) => {
    unsplash.search
      .getPhotos({ query: query, orientation: "landscape", perPage: "12" })
      .then((result) => {
        if (result.type === "success") {
          resolve(result.response);
        } else {
          reject(result.type);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });

export const GetRandomImages = (count) =>
  new Promise((resolve, reject) => {
    unsplash.photos
      .getRandom({ count: count, orientation: "landscape" })
      .then((result) => {
        if (result.type === "success") {
          resolve(result.response);
          console.log(result.response)
        } else {
          reject(result.type);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });

export const GetImages = () => new Promise(async(resolve, reject) => {
  try {
    let response = await fetch(
      process.env.REACT_APP_SERVICE_URL + `/list-images`,
      {
        method: "GET",
        headers: new Headers({
          "Content-type": "application/json; charset=UTF-8",
        }),
      }
    );
    resolve(response.json());
  } catch (err) {
    reject(err);
  }
})