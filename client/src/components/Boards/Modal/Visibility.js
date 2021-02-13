import React, { useState, useContext, useEffect } from "react";
import { FirebaseAuth } from "../../../provider/AuthProvider";
import {
  IconButton,
  Typography,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
} from "@material-ui/core";
import { AccountCircle, ExitToApp } from "@material-ui/icons";
import { PopMenu, PopMenuItem } from "./styles";

const Menu = ({ open, anchorEl, handleClose }) => {

  return (
    <div>
      <PopMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <PopMenuItem>
          <ListItemIcon>
            <AccountCircle fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="My Profile" />
        </PopMenuItem>
        <Divider />
        <PopMenuItem>
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
