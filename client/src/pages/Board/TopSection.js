import React, { useContext, useState } from "react";
import { UIContext } from "provider/UIProvider";
import { Grid, Typography, IconButton, Avatar } from "@material-ui/core";
import { Public, Lock, MoreHoriz, Add } from "@material-ui/icons";
import { VisibilityMenu, InviteUserMenu } from "components";
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
      <Grid container>
        <Grid item container xs>
          <Grid item style={{ minWidth: "120px" }}>
            <IconButton
              onClick={handleVisibilityClick}
              classes={{
                root: classes.button,
                disabled: classes.disabledButton,
              }}
              aria-label="cover"
              disabled={admin ? "false" : "true"}
            >
              {board.visibility === "Private" ? (
                <Lock className={classes.icons} />
              ) : (
                <Public className={classes.icons} />
              )}
              <Typography className={classes.buttonText} component="p">
                {board.visibility}
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
              board.userData.map((val, key) => {
                return (
                  <Grid className={classes.iconGrid} item key={key}>
                    <Avatar
                      src={val.picture}
                      className={classes.avatar}
                      alt={val.name}
                    />
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
        <Grid item container style={{ width: "150px" }}>
          <Grid justify="flex-end" container item xs={12}>
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
