import React, { useState, useContext, useEffect } from "react";
import { FirebaseAuth } from "../../../provider/AuthProvider";
import {
  IconButton,
  Typography,
  ListItemIcon,
  ListItemText,
  Divider,
  Grid,
} from "@material-ui/core";
import { Public, Lock } from "@material-ui/icons";
import { PopMenu, PopMenuItem, visibilityStyles } from "./styles";

const Menu = ({ open, anchorEl, handleClose }) => {
  const classes = visibilityStyles();

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
            <Typography className={classes.headerTitle} variant="h3" component="p">
              Visibility
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.headerDescription} variant="p" component="p">
              Choose who can see this board
            </Typography>
          </Grid>
        </Grid>
        <PopMenuItem>
          <Grid container>
            <Grid item xs={3}>
              <Public className={classes.itemIcon} />
            </Grid>
            <Grid item xs={9}>
              <Typography className={classes.itemTitle} component="p" variant="p">
                Public
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.itemDescription} component="p" variant="p">
                Anyone can see this board. Only board members can edit.
              </Typography>
            </Grid>
          </Grid>
        </PopMenuItem>
      </PopMenu>
    </div>
  );
};

export default Menu;
