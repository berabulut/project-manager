import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FirebaseAuth } from "provider/AuthProvider";
import { AppLayout } from "layouts";
import { boardPageStyles } from "./styles";
import { cleanup } from "@testing-library/react";

const Profile = () => {
  const classes = boardPageStyles();
  const {
    userData,
    boards,
    handleBoardPageRender,
    hideShowAllBoards,
  } = useContext(FirebaseAuth);
  const { id } = useParams();

  useEffect(() => {
    for (let board of boards) {
      if (board.id === id) {
        handleBoardPageRender(board);
        break;
      }
    }
    return () => hideShowAllBoards();
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <h1>{id}</h1>
      </div>
    </AppLayout>
  );
};

export default Profile;
