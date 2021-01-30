import React, { useState, useContext } from "react";
import { FirebaseAuth } from "../../../provider/AuthProvider";
import {
  IconButton,
  Typography,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
} from "@material-ui/core";
import {
  AccountCircle,
  ArrowDropDown,
  ArrowDropUp,
  ExitToApp,
} from "@material-ui/icons";
import { PopMenu, PopMenuItem, menuStyles } from "./styles";

const Menu = ({ history }) => {
  const { handleLogout } = useContext(FirebaseAuth);

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
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        className={classes.popButton}
      >
        <Avatar
          variant="rounded"
          className={classes.avatar}
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
        <Typography variant="subtitle2" className={classes.username}>
          Xanthe Neal
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
