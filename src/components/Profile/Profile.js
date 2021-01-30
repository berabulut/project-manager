import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Container, Box, Divider } from "@material-ui/core";
import { AppLayout } from "../Layout";
import { profileStyles } from "./styles";

const Profile = () => {
  const classes = profileStyles();
  return (
    <AppLayout>
      <div className={classes.root}>
        <Container component="main" maxWidth="md">
          <Typography style={{ textAlign: "center" }} variant="h4" gutterBottom>
            Personal info
          </Typography>
          <Box className={classes.box}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={4}>
                <Typography variant="h6" gutterBottom>
                  Table
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6" gutterBottom>
                  Table item
                </Typography>
              </Grid>
              <Divider />
            </Grid>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={4}>
                <Typography variant="h6" gutterBottom>
                  Table
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6" gutterBottom>
                  Table item
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </AppLayout>
  );
};

export default Profile;
