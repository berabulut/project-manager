import React, { useContext, useState } from "react";
import { UIContext } from "provider/UIProvider";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { Public, Lock, MoreHoriz, Add } from "@material-ui/icons";
import { VisibilityMenu, InviteUserMenu, UserAvatar } from "components";
import { topSectionStyles } from "./styles";

const TopSection = ({ board, admin }) => {
  const classes = topSectionStyles();

  const { changeDrawerVisibility } = useContext(UIContext);

  const [visibilityAnchorEl, setVisibilityAnchorEl] = useState(null);
  const [openVisibility, setOpenVisibilty] = useState(false);

  const [boardVisibility, setBoardVisibility] = useState("Private");

  const [inviteAnchorEl, setInviteAnchorEl] = useState(null);

  const handleVisibilityClick = (event) => {
    setVisibilityAnchorEl(event.currentTarget);
    setOpenVisibilty(true);
  };

  const handleVisibilityClose = () => {
    setVisibilityAnchorEl(null);
    setOpenVisibilty(false);
  };

  const handleInviteButtonClick = (event) => {
    setInviteAnchorEl(event.currentTarget);
  };

  const handleInviteMenuClose = () => {
    setInviteAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item container xs>
          <Grid
            item
            style={{ minWidth: "120px" }}
            className={classes.visibilityMenuContainer}
          >
            <IconButton
              onClick={handleVisibilityClick}
              classes={{
                root: classes.button,
                disabled: classes.disabledButton,
              }}
              aria-label="cover"
              disabled={!admin}
            >
              {board && board.visibility === "Private" ? (
                <Lock className={classes.icons} />
              ) : (
                <Public className={classes.icons} />
              )}
              <Typography className={classes.buttonText} component="p">
                {board && board.visibility}
              </Typography>
            </IconButton>
            <VisibilityMenu
              open={openVisibility}
              anchorEl={visibilityAnchorEl}
              handleClose={handleVisibilityClose}
              setBoardVisibility={setBoardVisibility}
              boardVisibility={boardVisibility}
            />
          </Grid>
          <Grid item container xs>
            {board !== undefined &&
              board.userData.map((user, key) => {
                return (
                  <Grid className={classes.iconGrid} item key={key}>
                    <UserAvatar user={user} styles={classes.avatar} />
                  </Grid>
                );
              })}
            <Grid
              item
              className={classes.iconGrid}
              style={{ display: admin ? "block" : "none" }}
            >
              <IconButton
                onClick={handleInviteButtonClick}
                className={classes.addButton}
                aria-label="add-member"
              >
                <Add />
              </IconButton>
              <InviteUserMenu
                boardId={board && board.id}
                anchorEl={inviteAnchorEl}
                handleClose={handleInviteMenuClose}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item container sm={3} xs={12}>
          <Grid
            justify="flex-end"
            container
            item
            xs={12}
            className={classes.showMenuContainer}
          >
            <IconButton
              className={classes.menuButton}
              aria-label="cover"
              onClick={changeDrawerVisibility}
            >
              <MoreHoriz className={classes.menuIcon} />
              <Typography className={classes.buttonText} component="p">
                Show Menu
              </Typography>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default TopSection;
