import React, { useEffect, useState, useContext } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { UserContext } from "provider/UserProvider";
import { BoardHelpers } from "helpers";
import { PopMenu, menuStyles } from "./styles";

const InviteUserMenu = ({ boardId, anchorEl, handleClose }) => {
  const classes = menuStyles();

  const { renderedBoard, setRenderedBoard } = useContext(UserContext);

  const [input, setInput] = useState("");
  const [error, setError] = useState();

  useEffect(() => {
    setError("");
  }, [input]);

  const handleInviteButtonClick = () => {
    if (!input.trim().length > 0) {
      setError("Input cannot be empty!");
    } else {
      BoardHelpers.HandleInvitingUser(boardId, input)
        .then((response) => {
          if (response.statusCode === 500) {
            setError(response.error);
          } else if (response.statusCode === 200) {
            renderedBoard.userData.push(response.data);
            renderedBoard.users.push({uid: response.data.uid})
            setRenderedBoard(renderedBoard)
            handleClose();
            setError("");
            setInput("");
          } else {
            handleClose();
            setError("");
            setInput("");
          }
        })
        .catch((err) => setError(err));
    }
  };

  return (
    <div>
      <PopMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => {
          handleClose();
          setError("");
          setInput("");
        }}
      >
        <Grid className={classes.header} container>
          <Grid item xs={12}>
            <Typography className={classes.headerTitle} component="p">
              Invite User
            </Typography>
          </Grid>
          {/* <Grid item xs={12}>
            <Typography className={classes.headerDescription} component="p">
              Enter email address
            </Typography>
          </Grid> */}
        </Grid>
        <Grid className={classes.content} item container>
          <Grid item container xs={12} className={classes.inputContainer}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="User address"
              type="text"
              className={classes.input}
            />
          </Grid>
        </Grid>
        <Grid item container>
          {error && (
            <Grid item container xs={12} justify="center">
              <Typography className={classes.error}>{error}</Typography>
            </Grid>
          )}
          <Grid item container justify="center" xs={12}>
            <Button
              onClick={handleInviteButtonClick}
              className={classes.addButton}
              variant="contained"
              color="primary"
            >
              Invite
            </Button>
          </Grid>
        </Grid>
      </PopMenu>
    </div>
  );
};

export default InviteUserMenu;
