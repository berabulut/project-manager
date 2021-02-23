import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Container } from "@material-ui/core";
import { FirebaseAuth } from "provider/AuthProvider";
import { AppLayout } from "layouts";
import { boardPageStyles } from "./styles";
import { HandleUserRelatedBoards, FindExactBoard } from "helpers/Board";
import TopSection from "./TopSection";
import ListArea from "./ListArea";

const Profile = () => {
  const classes = boardPageStyles();
  const {
    renderedBoard,
    boards,
    handleBoardPageRender,
    hideShowAllBoards,
    setShowFooter
  } = useContext(FirebaseAuth);
  const { id } = useParams();

  useEffect(() => {
    FindExactBoard(id, boards, handleBoardPageRender);
    setShowFooter(false);
    return () => {
      hideShowAllBoards()
      setShowFooter(true);
    };
  }, []);

  useEffect(() => {
    FindExactBoard(id, boards, handleBoardPageRender);
  }, [boards]); 

  return (
    <AppLayout>
      <div className={classes.root}>
        <Container className={classes.container} component="main" maxWidth="xl">
          <TopSection board={renderedBoard} />
          <ListArea board={renderedBoard} />
        </Container>
      </div>
    </AppLayout>
  );
};

export default Profile;
