import React, { useState, useContext, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Public, Lock, MoreHoriz, Add } from "@material-ui/icons";
import { FirebaseAuth } from "provider/AuthProvider";
import { listAreaStyles } from "./styles";

const ListArea = ({board}) => {
  const classes = listAreaStyles();

  useEffect(() => {
	console.log(board)
  }, [])

  return (
    <div className={classes.root}>
      <Grid style={{backgroundImage: board !== undefined && `url(${board.coverPhoto}&w=1920)`, backgroundColor: board === undefined && "#F8F9FD"}} className={classes.container} container>
        <h1>TEST</h1>
      </Grid>
    </div>
  );
};

export default ListArea;
