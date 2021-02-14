import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
  //...other fetch options
});

export const SearchImages = (query) => {
  unsplash.search.getPhotos({ query: query }).then((result) => {
    if (result.type === "success") {
      console.log(result.response);
      return result.response;
    }
  });
};

export const GetRandomImages = (count) => {
  unsplash.photos.getRandom({ count: count }).then((result) => {
    if (result.type === "success") {
      console.log(result.response);
      return result.response;
    }
  });
};
