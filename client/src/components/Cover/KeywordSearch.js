import React, { useEffect } from "react";
import { Grid, IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { keywordSearchStyles } from "./styles";

const KeywordSearch = ({
  setSearchedImages,
  setRandomImages,
  searchImage,
  getRandomImage,
}) => {
  const classes = keywordSearchStyles();

  useEffect(() => {
    setRandomImages(getRandomImage(12));
  }, []);

  return (
    <div>
      <Grid className={classes.container} container>
        <Grid item xs={10}>
          <input
            placeholder="Keywords..."
            type="text"
            style={{ height: "32px" }}
            className={classes.input}
          />
        </Grid>
        <Grid container alignItems="center" justify="flex-end" item xs={2}>
          <IconButton className={classes.iconButton} aria-label="delete">
            <Search />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default KeywordSearch;
