import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import TestDnd from "components/DND/index";
import { FirebaseAuth } from "provider/AuthProvider";
import { AppLayout } from "layouts";
import { boardPageStyles } from "./styles";

const Board = () => {
  const classes = boardPageStyles();
  const { userData } = useContext(FirebaseAuth);
  const { id } = useParams();


  return (
    <AppLayout>
      <div className={classes.root}>
        <h1>{id}</h1>
        <TestDnd />
      </div>
    </AppLayout>
  );
};

export default Board;
