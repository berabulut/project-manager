import React, { useState, useContext } from "react";
import { FirebaseAuth } from "provider/AuthProvider";
import { UserContext } from "provider/UserProvider";
import { UserAvatar } from "components";
import {
  IconButton,
  Typography,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  CircularProgress,
} from "@material-ui/core";
import {
  AccountCircle,
  ArrowDropDown,
  ArrowDropUp,
  ExitToApp,
  Assignment,
} from "@material-ui/icons";
import { PopMenu, PopMenuItem, menuStyles } from "./styles";

const Menu = ({ history }) => {
  const { handleLogout } = useContext(FirebaseAuth);
  const { userData } = useContext(UserContext);

  const classes = menuStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <div className={classes.menuContainer}>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        className={classes.popButton}
      >
        <UserAvatar user={userData} styles={classes.avatar} />
        <Typography variant="subtitle2" className={classes.username}>
          {userData !== undefined ? (
            userData.name
          ) : (
            <CircularProgress
              style={{ width: "30px", height: "30px" }}
              color="primary"
            />
          )}
        </Typography>
        {open ? (
          <ArrowDropUp className={classes.arrowIcon} />
        ) : (
          <ArrowDropDown className={classes.arrowIcon} />
        )}
      </IconButton>
      <PopMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <PopMenuItem onClick={() => history.push("/")}>
          <ListItemIcon>
            <Assignment fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Boards" />
        </PopMenuItem>
        <Divider className={classes.menuDivider} />
        <PopMenuItem onClick={() => history.push("/profile")}>
          <ListItemIcon>
            <AccountCircle fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="My Profile" />
        </PopMenuItem>
        <Divider className={classes.menuDivider} />
        <PopMenuItem onClick={handleLogout}>
          <ListItemIcon>
            <ExitToApp style={{ color: "#EB5757" }} fontSize="small" />
          </ListItemIcon>
          <ListItemText style={{ color: "#EB5757" }} primary="Logout" />
        </PopMenuItem>
      </PopMenu>
    </div>
  );
};

export default Menu;
