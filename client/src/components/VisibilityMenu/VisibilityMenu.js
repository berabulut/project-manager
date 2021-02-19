import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { Public, Lock } from "@material-ui/icons";
import { PopMenu, PopMenuItem, visibilityStyles } from "./styles";

const VisibilityMenu = ({
  open,
  anchorEl,
  handleClose,
  setBoardVisibility,
  boardVisibility,
}) => {
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
            <Typography className={classes.headerTitle} component="p">
              Visibility
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.headerDescription} component="p">
              Choose who can see this board
            </Typography>
          </Grid>
        </Grid>
        <PopMenuItem
          style={{ backgroundColor: boardVisibility === "Public" && "#e2f7df" }}
          onClick={() => setBoardVisibility("Public")}
        >
          <Grid container>
            <Grid className={classes.firstRow} item xs={12} container>
              <Grid
                style={{ display: "flex", alignItems: "center" }}
                item
                xs={1}
              >
                <Public
                  style={{ color: "#61BD4F" }}
                  className={classes.itemIcon}
                />
              </Grid>
              <Grid item xs={9}>
                <Typography className={classes.itemTitle} component="p">
                  Public
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.itemDescription} component="p">
                Anyone can see this board. Only board members can edit.
              </Typography>
            </Grid>
          </Grid>
        </PopMenuItem>
        <PopMenuItem
          style={{
            backgroundColor: boardVisibility === "Private" && "#ffe2de",
          }}
          onClick={() => setBoardVisibility("Private")}
        >
          <Grid container>
            <Grid className={classes.firstRow} item xs={12} container>
              <Grid
                style={{ display: "flex", alignItems: "center" }}
                item
                xs={1}
              >
                <Lock
                  style={{ color: "#EB5A46" }}
                  className={classes.itemIcon}
                />
              </Grid>
              <Grid item xs={9}>
                <Typography className={classes.itemTitle} component="p">
                  Private
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.itemDescription} component="p">
                Only board members can see and edit this board.
              </Typography>
            </Grid>
          </Grid>
        </PopMenuItem>
      </PopMenu>
    </div>
  );
};

export default VisibilityMenu;
