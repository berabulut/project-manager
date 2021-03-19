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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError("");
  }, [input]);

  const handleInviteButtonClick = () => {
    if (!input.trim().length > 0) {
      setError("Input cannot be empty!");
    } else {
      setLoading(true);
      BoardHelpers.HandleInvitingUser(boardId, input)
        .then((response) => {
          setLoading(false);
          if (response.statusCode === 500) {
            setError(response.error);
          } else if (response.statusCode === 200) {
            let board = { ...renderedBoard };
            board.userData.push(response.data);
            board.users.push({ uid: response.data.uid });
            setRenderedBoard(board);
            handleClose();
            setError("");
            setInput("");
          } else {
            handleClose();
            setError("");
            setInput("");
          }
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
          console.log(err);
        });
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
              onKeyDown={(e) => e.stopPropagation()}
            />
          </Grid>
        </Grid>
        <Grid item container>
          {error && (
            <Grid item container xs={12} justify="center">
              <Typography className={classes.error}>
                Not a valid user address!
              </Typography>
            </Grid>
          )}
          <Grid item container justify="center" xs={12}>
            <Button
              onClick={handleInviteButtonClick}
              className={classes.addButton}
              variant="contained"
              color="primary"
              disabled={loading}
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
