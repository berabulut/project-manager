import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FirebaseAuth } from "provider/AuthProvider";
import { AppLayout } from "layouts";
import { boardPageStyles } from "./styles";
import { HandleUserRelatedBoards, FindExactBoard } from "helpers/Board";

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
    FindExactBoard(id, boards, handleBoardPageRender);
    return () => hideShowAllBoards();
  }, []);

  useEffect(() => {
    console.log(boards)
    FindExactBoard(id, boards, handleBoardPageRender);
  }, [boards]);

  return (
    <AppLayout>
      <div className={classes.root}>
        <h1>{id}</h1>
      </div>
    </AppLayout>
  );
};

export default Profile;
