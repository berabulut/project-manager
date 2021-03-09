import React, { useContext, useState, useEffect } from "react";
import { Grid, Typography, Avatar } from "@material-ui/core";
import { UserContext } from "provider/UserProvider";
import { EditInput } from "components";
import { commentStyles } from "./styles";

const Comment = ({ comment, deleteComment, editComment }) => {
  const classes = commentStyles();
  const { userData } = useContext(UserContext);

  const [displayEditArea, setDisplayEditArea] = useState(false);
  const [owner, setOwner] = useState(false);

  const handleEditButtonClick = () => {
    setDisplayEditArea(!displayEditArea);
  };

  const closeEditArea = () => {
    setDisplayEditArea(false);
  };

  const handleEditComment = (input) => {
    editComment(comment.id, input);
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
          <Avatar
            src={comment.picture}
            variant="rounded"
            className={classes.avatar}
          />
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
                  onClick={() => deleteComment(comment.id)}
                  className={classes.commentButton}
                >
                  Delete
                </Typography>
              </Grid>
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
