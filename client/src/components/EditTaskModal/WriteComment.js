import React from "react";
import { Grid, Button, Avatar } from "@material-ui/core";
import { writeCommentStyles, CommentInput } from "./styles";

const EditDescription = () => {
  const classes = writeCommentStyles();
  return (
    <Grid container className={classes.container} justify="space-around">
      <Grid item xs={1}>
        <Avatar variant="rounded" className={classes.avatar}>
          A
        </Avatar>
      </Grid>
      <Grid item xs={10}>
        <CommentInput
          label="Write a comment..."
          variant="outlined"
          multiline
          rowsMax={4}
          rows={1}
        />
      </Grid>
      <Grid item container xs={12} justify="flex-end">
        <Grid item xs={3}>
          <Button className={classes.commentButton} variant="contained" color="primary">
            Comment
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditDescription;
