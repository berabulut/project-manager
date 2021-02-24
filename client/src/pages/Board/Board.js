import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@material-ui/core";
import { UIContext } from "provider/UIProvider";
import { UserContext } from "provider/UserProvider";
import { AppLayout } from "layouts";
import { boardPageStyles } from "./styles";
import { BoardHelpers, UIHelpers } from "helpers/";
import TopSection from "./TopSection";
import ListArea from "./ListArea";

const Profile = () => {
  const classes = boardPageStyles();
  const {
    renderedBoard,
    setShowFooter,
    setRenderedBoard,
    setShowAllBoards,
  } = useContext(UIContext);
  const { boards } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    BoardHelpers.FindExactBoard(id, boards, setRenderedBoard, setShowAllBoards);
    setShowFooter(false);
    return () => {
      UIHelpers.HideShowAllBoards(renderedBoard, setRenderedBoard, setShowAllBoards);
      setShowFooter(true);
    };
  }, []);

  useEffect(() => {
    BoardHelpers.FindExactBoard(id, boards, setRenderedBoard, setShowAllBoards);
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
