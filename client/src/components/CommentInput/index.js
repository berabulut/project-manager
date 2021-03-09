import React, { useState, useContext, useEffect } from "react";
import { Grid, Button, Avatar } from "@material-ui/core";
import { GetUniqueId } from "functions/BoardFunctions";
import { UserContext } from "provider/UserProvider";
import { inputStyles, CommentInput } from "./styles";

const EditDescription = ({ handleButtonClick }) => {
  const classes = inputStyles();

  const { userData } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [time, setTime] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    setComment(value);
  };

  const handleCommentButton = async() => {
    if (comment.trim() <= 0) {
      console.log("comment empty");
    } else {
      const id = await GetUniqueId();
      handleButtonClick({
        id: id.data,
        uid: userData.uid,
        name: userData.name,
        picture: userData.picture,
        text: comment,
        time: time || "24 August at 20:43",
      });
      setComment(" ");
    }
  };

  useEffect(() => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString("en-EN", { month: "long" });
    const time = now.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    setTime(day + " " + month + " at " + time);
  }, [comment]);

  return (
    <Grid container className={classes.container} justify="space-around">
      <Grid item xs={1}>
        <Avatar
          src={userData !== undefined && userData.picture}
          variant="rounded"
          className={classes.avatar}
        />
      </Grid>
      <Grid item xs={10}>
        <CommentInput
          value={comment.trim()}
          onChange={handleChange}
          label="Write a comment..."
          variant="outlined"
          multiline
          rowsMax={4}
          rows={1}
        />
      </Grid>
      <Grid item container xs={12} justify="flex-end">
        <Grid item xs={3}>
          <Button
            className={classes.commentButton}
            variant="contained"
            color="primary"
            onClick={handleCommentButton}
          >
            Comment
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditDescription;
