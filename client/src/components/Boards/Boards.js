import React, { useContext } from "react";
import { Grid, Typography, Container, Box, Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { AppLayout } from "../Layout";
import { Board } from "../Board";
import { FirebaseAuth } from "../../provider/AuthProvider";
import { boardsStyles } from "./styles";

const Boards = () => {
  const classes = boardsStyles();
  
  const handleCreateButton = () => {
    console.log('new board')
  }

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
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Board />
            </Grid>
          </Grid>
        </Container>
      </div>
    </AppLayout>
  );
};

export default Boards;
