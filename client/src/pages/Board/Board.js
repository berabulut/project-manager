import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Container } from "@material-ui/core";
import { FirebaseAuth } from "provider/AuthProvider";
import { AppLayout } from "layouts";
import { boardPageStyles } from "./styles";
import { HandleUserRelatedBoards, FindExactBoard } from "helpers/Board";
import TopSection from "./TopSection";

const Profile = () => {
  const classes = boardPageStyles();
  const {
    renderedBoard,
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
    FindExactBoard(id, boards, handleBoardPageRender);
  }, [boards]);

  return (
    <AppLayout>
      <div className={classes.root}>
        <Container className={classes.container} component="main" maxWidth="xl">
          <TopSection board={renderedBoard} />
        </Container>
      </div>
    </AppLayout>
  );
};

export default Profile;
