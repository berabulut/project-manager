import React from "react";
import { Paper, Typography, Box, Avatar } from "@material-ui/core";
import { boardStyles } from "./styles";

// const address =
//   "https://images.unsplash.com/photo-1612689690865-2035b60c449b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

// const users = [
//   { name: "asd" },
//   { name: "asd" },
//   { name: "asd" },
//   { name: "asd" },
//   { name: "asd" },
//   { name: "asd" },
// ];

const Boards = ({ image, title, users, visibility }) => {
  const classes = boardStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <img className={classes.cover} src={image + "&q=80&w=400"} />
        <Typography className={classes.title} variant="body1" gutterBottom>
          {title}
        </Typography>
        <Box display="flex">
          {users.map((val, key) => {
            if (key < 3) {
              return (
                <Box key={key} alignSelf="center" className={classes.boardBox}>
                  <Avatar
                    src={val.picture}
                    className={classes.avatar}
                    alt="Remy Sharp"
                  />
                </Box>
              );
            }
          })}
          {users.length > 3 && (
            <Box p={1} flexGrow={1}>
              <Typography
                className={classes.title}
                variant="body1"
                gutterBottom
              >
                +{users.length - 3} Others
              </Typography>
            </Box>
          )}
        </Box>
      </Paper>
    </div>
  );
};

export default Boards;
