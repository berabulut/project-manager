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
        } else {
          reject(result.type);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
