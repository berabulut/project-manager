import React, { useState, useContext, useEffect } from "react";
import { FirebaseAuth } from "provider/AuthProvider";
import { Typography, Grid } from "@material-ui/core";
import { Public, Lock } from "@material-ui/icons";
import KeywordSearch from "./KeywordSearch";
import { PopMenu, PopMenuItem, coverStyles } from "./styles";

const Cover = ({ open, anchorEl, handleClose }) => {
  const classes = coverStyles();

  const [searchedImages, setSearchedImages] = useState([]);
  const [randomImages, setRandomImages] = useState([]);
  const { handleImageSearch, handleRandomImageSearch } = useContext(
    FirebaseAuth
  );

  return (
    <div>
      <PopMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Grid className={classes.header} container>
          <Grid item xs={12}>
            <Typography className={classes.headerTitle} component="p">
              Photo Search
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.headerDescription} component="p">
              Search Unsplash for photos
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.content} container>
          <Grid item xs={12}>
            <KeywordSearch
              setSearchedImages={setSearchedImages}
              setRandomImages={setRandomImages}
              searchImage={handleImageSearch}
              getRandomImage={handleRandomImageSearch}
            />
          </Grid>
        </Grid>
        <Grid className={classes.content} container>
          {randomImages !== undefined && randomImages.map((val, key) => {
            return (
              <Grid item xs={3}>
                <img
                  className={classes.image}
                  alt={val.alt_description}
                  src={val.urls.full}
                />
              </Grid>
            );
          })}
        </Grid>
      </PopMenu>
    </div>
  );
};

export default Cover;
