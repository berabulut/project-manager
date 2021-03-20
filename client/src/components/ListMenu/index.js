import React from "react";
import { Typography, Grid, Divider } from "@material-ui/core";
import { PopMenu, listMenuStyles } from "./styles";

const VisibilityMenu = ({ anchorEl, handleClose }) => {
  const classes = listMenuStyles();

  return (
    <PopMenu
      id="customized-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <Grid container style={{ outline: "0" }} justify="center">
        <Grid item xs={12} className={classes.itemContainer}>
          <Typography variant="body2" className={classes.buttonText}>
            Rename
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.itemContainer}>
          <Typography variant="body2" className={classes.buttonText}>
            Delete this list
          </Typography>
        </Grid>
      </Grid>
    </PopMenu>
  );
};

export default VisibilityMenu;
