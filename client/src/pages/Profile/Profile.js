import React, { useContext } from "react";
import { UserContext } from "provider/UserProvider";
import { AppLayout } from "layouts";
import { profileStyles } from "./styles";
import {
  Grid,
  Typography,
  Container,
  Box,
  Divider,
  Avatar,
  Button,
} from "@material-ui/core";


const Profile = () => {
  const classes = profileStyles();
  const { userData } = useContext(UserContext);
  return (
    <AppLayout>
      <div className={classes.root}>
        <Container component="main" maxWidth="md">
          <Typography className={classes.pageTitle} variant="h4" gutterBottom>
            Personal info
          </Typography>
          <Box className={classes.box}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={4}>
                <Typography
                  className={classes.tableTitle}
                  variant="h5"
                  gutterBottom
                >
                  PHOTO
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Avatar
                  className={classes.avatar}
                  variant="rounded"
                  alt="Cindy Baker"
                  src={userData !== undefined && userData.picture}
                />
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid container className={classes.gridContainer}>
              <Grid item xs={4}>
                <Typography
                  className={classes.tableTitle}
                  variant="h5"
                  gutterBottom
                >
                  NAME
                </Typography>
              </Grid>
              <Grid container alignContent="center" item xs={8}>
                <Typography
                  className={classes.tableContent}
                  variant="h6"
                  gutterBottom
                >
                  {userData !== undefined && userData.name}
                </Typography>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid container className={classes.gridContainer}>
              <Grid item xs={4}>
                <Typography
                  className={classes.tableTitle}
                  variant="h5"
                  gutterBottom
                >
                  EMAIL
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  className={classes.tableContent}
                  variant="h6"
                  gutterBottom
                >
                  {userData !== undefined && userData.email}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Button className={classes.button} variant="outlined">
            Edit
          </Button>
        </Container>
      </div>
    </AppLayout>
  );
};

export default Profile;
