import React, { useState, useContext, useEffect } from "react";
import { Grid, Typography, Container, Box, Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import CreateModal from "./Modal/CreateModal";
import { AppLayout } from "../Layout";
import { Board } from "../Board";
import { FirebaseAuth } from "provider/AuthProvider";
import { GetUserRelatedBoards } from "functions/BoardFunctions";
import { boardsStyles } from "./styles";

const Boards = () => {
  const classes = boardsStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [boards, setBoards] = useState([]);
  const { userData } = useContext(FirebaseAuth);

  const handleCreateButton = () => {
    setModalOpen(true);
  };

  const parseBoardId = (boards) =>
    new Promise((resolve, reject) => {
      let body = [];
      try {
        boards.map((val, key) => {
          if (val.boardId !== undefined) {
            body.push(val.boardId);
          }
          if (key === boards.length - 1) {
            resolve(body);
          }
        });
      } catch (err) {
        reject(err);
      }
    });

  useEffect(() => {
    if (
      userData.boards !== undefined &&
      Object.keys(userData.boards).length > 0
    ) {
      parseBoardId(Object.values(userData.boards))
        .then((response) => {
          const body = {
            boardList: response,
          };
          GetUserRelatedBoards(body)
            .then((response) => {
              if (response.statusCode === 200) {
                setBoards(response.boardData);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userData]);

  return (
    <AppLayout>
      <div className={classes.root}>
        <Container className={classes.container} component="main" maxWidth="lg">
          <Box display="flex">
            <Box p={1} flexGrow={1}>
              <Typography className={classes.title} variant="h6" gutterBottom>
                All Boards
              </Typography>
            </Box>
            <Box p={1}>
              <Button
                onClick={handleCreateButton}
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<Add />}
              >
                Add
              </Button>
            </Box>
          </Box>
          <Grid container spacing={3}>
            {boards !== undefined &&
              boards.length > 0 &&
              boards.map((value, key) => {
                return (
                  <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Board
                      image={value.coverPhoto}
                      title={value.title}
                      users={value.users}
                      visibility={value.visibility}
                    />
                  </Grid>
                );
              })}
          </Grid>
          <CreateModal open={modalOpen} setOpen={setModalOpen} />
        </Container>
      </div>
    </AppLayout>
  );
};

export default Boards;
