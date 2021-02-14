import React, { useEffect, useCallback } from "react";
import { Grid, IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { SearchImages, GetRandomImages } from "api/unsplash";
import { keywordSearchStyles } from "./styles";

const KeywordSearch = ({
  setSearchedImages,
  setRandomImages,
  searchInput,
  setSearchInput,
}) => {
  const classes = keywordSearchStyles();

  useEffect(() => {
    GetRandomImages(12)
      .then((result) => {
        setRandomImages(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch = () => {
    if (searchInput.length > 0) {
      SearchImages(searchInput)
        .then((result) => {
          setSearchedImages(result.results);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("input filed can't be empty");
    }
  };

  return (
    <div>
      <Grid className={classes.container} container>
        <Grid item xs={10}>
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Keywords..."
            type="text"
            style={{ height: "32px" }}
            className={classes.input}
          />
        </Grid>
        <Grid container alignItems="center" justify="flex-end" item xs={2}>
          <IconButton
            onClick={handleSearch}
            className={classes.iconButton}
            aria-label="delete"
          >
            <Search />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default KeywordSearch;
