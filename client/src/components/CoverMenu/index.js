import React, { useState } from "react";
import { Typography, Grid } from "@material-ui/core";
import KeywordSearch from "./KeywordSearch";
import { PopMenu, coverStyles } from "./styles";

const CoverMenu = ({ anchorEl, handleClose, handleImageClick }) => {
  const classes = coverStyles();

  const [searchedImages, setSearchedImages] = useState([]);
  const [randomImages, setRandomImages] = useState([]);

  const [searchInput, setSearchInput] = useState("");

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
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
          </Grid>
        </Grid>
        <Grid className={classes.content} container>
          {randomImages !== undefined &&
            searchedImages.length <= 0 &&
            randomImages.map((val, key) => {
              return (
                <Grid
                  key={key}
                  className={classes.imageContainer}
                  container
                  justify="center"
                  item
                  xs={3}
                >
                  <img
                    onClick={() =>
                      handleImageClick(val.urls.regular, val.urls.raw)
                    }
                    key={key}
                    className={classes.image}
                    alt={val.alt_description}
                    src={val.urls.thumb}
                  />
                </Grid>
              );
            })}
          {searchedImages !== undefined &&
            searchedImages.length > 0 &&
            searchedImages.map((val, key) => {
              return (
                <Grid
                  key={key}
                  className={classes.imageContainer}
                  container
                  justify="center"
                  item
                  xs={3}
                >
                  <img
                    onClick={() =>
                      handleImageClick(val.urls.regular, val.urls.raw)
                    }
                    key={key}
                    className={classes.image}
                    alt={val.alt_description}
                    src={val.urls.thumb}
                  />
                </Grid>
              );
            })}
        </Grid>
      </PopMenu>
    </div>
  );
};

export default CoverMenu;
