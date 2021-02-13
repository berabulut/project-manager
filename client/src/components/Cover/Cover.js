import React, { useState, useContext, useEffect } from "react";
import { FirebaseAuth } from "provider/AuthProvider";
import { Typography, Grid } from "@material-ui/core";
import { Public, Lock } from "@material-ui/icons";
import { PopMenu, PopMenuItem, coverStyles } from "./styles";

const Cover = ({ open, anchorEl, handleClose }) => {
  const classes = coverStyles();

  return (
    <div>
      <PopMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      ></PopMenu>
    </div>
  );
};

export default Cover;
