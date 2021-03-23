import React, { useEffect, useState } from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { SearchImages, GetRandomImages, GetImages } from "api/unsplash";
import { keywordSearchStyles } from "./styles";

const KeywordSearch = ({
  setSearchedImages,
  setRandomImages,
  searchInput,
  setSearchInput,
}) => {
  const classes = keywordSearchStyles();
  const [error, setError] = useState();

  useEffect(() => {
    // GetRandomImages(12)
    //   .then((result) => {
    //     setRandomImages(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    GetImages()
      .then((response) => {
        setRandomImages(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setError();
  }, [searchInput]);

  useEffect(() => {
    setTimeout(() => {
      setError();
    }, 5000);
  }, [error]);

  const handleSearch = () => {
    setError();
    if (searchInput.trim().length > 0) {
      SearchImages(searchInput)
        .then((result) => {
          setSearchedImages(result.results);
        })
        .catch((err) => {
          setError(err);
        });
    } else {
      setError("Input field cannot be empty!");
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
            onKeyDown={(e) => e.stopPropagation()}
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
      <Typography className={classes.error}>{error}</Typography>
    </div>
  );
};

export default KeywordSearch;
