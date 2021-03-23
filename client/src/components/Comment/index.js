import React, { useContext, useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import { UserContext } from "provider/UserProvider";
import { EditInput, UserAvatar } from "components";
import { commentStyles } from "./styles";

const Comment = ({ comment, deleteComment, editComment }) => {
  const classes = commentStyles();

  const { userData } = useContext(UserContext);
  const [owner, setOwner] = useState(false);

  const [displayEditArea, setDisplayEditArea] = useState(false);
  const [displayDeleteDialog, setDisplayDeleteDialog] = useState(false);

  const handleEditButtonClick = () => {
    setDisplayEditArea(!displayEditArea);
  };

  const closeEditArea = () => {
    setDisplayEditArea(false);
  };

  const handleEditComment = (input) => {
    editComment(comment.id, input);
  };

  const handleDeleteButtonClick = () => {
    setDisplayDeleteDialog(!displayDeleteDialog);
  };

  const closeDeleteDialog = () => {
    setDisplayDeleteDialog(false);
  };

  const handleDeleteComment = () => {
    deleteComment(comment.id);
    closeDeleteDialog();
  };

  useEffect(() => {
    if (userData.uid === comment.uid) {
      setOwner(true);
    }
  }, [userData]);

  return (
    <Grid container className={classes.container}>
      <Grid item container xs={12} justify="space-between">
        <Grid item xs={1}>
          <UserAvatar user={comment} styles={classes.avatar} />
        </Grid>
        <Grid item container xs={7} style={{ paddingLeft: "7px" }}>
          <Grid item xs={12}>
            <Typography className={classes.userName}>{comment.name}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.date}>{comment.time}</Typography>
          </Grid>
        </Grid>
        <Grid item container xs={3} justify="flex-end">
          {owner && (
            <>
              <Grid item xs={3}>
                <Typography
                  onClick={handleEditButtonClick}
                  className={classes.commentButton}
                >
                  Edit
                </Typography>
              </Grid>
              <Grid
                item
                xs={1}
                style={{
                  marginLeft: "5px",
                  marginRight: "10px",
                  marginTop: "-2.5px",
                }}
              >
                -
              </Grid>
              <Grid item xs={3}>
                <Typography
                  onClick={handleDeleteButtonClick}
                  className={classes.commentButton}
                >
                  Delete
                </Typography>
              </Grid>
              <Dialog
                open={displayDeleteDialog}
                onClose={closeDeleteDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle>{"Delete this comment?"}</DialogTitle>
                <DialogActions>
                  <Button onClick={closeDeleteDialog} color="primary">
                    Go Back
                  </Button>
                  <Button
                    onClick={handleDeleteComment}
                    style={{ color: "#f44336" }}
                    autoFocus
                  >
                    Delete
                  </Button>
                </DialogActions>
              </Dialog>
            </>
          )}
        </Grid>
      </Grid>
      <Grid item container xs={12} style={{ marginTop: "16px" }}>
        {displayEditArea ? (
          <EditInput
            handleClose={closeEditArea}
            editInput={handleEditComment}
            value={comment.text}
            label="Comment"
          />
        ) : (
          <Typography className={classes.comment}>{comment.text}</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Comment;
