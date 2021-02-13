import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
  //...other fetch options
});

export const SearchImages = (query) => {
  unsplash.search.getPhotos({ query: "dogs" }).then((result) => {
    if (result.type === "success") {
	  console.log(result.response)
    }
  });
};
