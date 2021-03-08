import React from "react";
import { Grid, Typography, Avatar } from "@material-ui/core";
import { commentStyles } from "./styles";


const Comment = ({ comment, deleteComment }) => {
  const classes = commentStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item container xs={12} justify="space-between">
        <Grid item xs={1}>
          <Avatar src={comment.picture} variant="rounded" className={classes.avatar} />
        </Grid>
        <Grid item container xs={7} style={{paddingLeft: "7px"}}>
          <Grid item xs={12}>
            <Typography className={classes.userName}>{comment.name}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.date}>{comment.time}</Typography>
          </Grid>
        </Grid>
        <Grid item container xs={3} justify="flex-end">
          <Grid item xs={3}>
            <Typography onClick={() => console.log('asd ')} className={classes.commentButton}>Edit</Typography>
          </Grid>
          <Grid item xs={1} style={{marginLeft: "5px", marginRight: "10px", marginTop: "-2.5px"}}>
            -
          </Grid>
          <Grid item xs={3}>
            <Typography onClick={() => deleteComment(comment.id)} className={classes.commentButton}>Delete</Typography>
          </Grid>
        </Grid>
      </Grid>
	   <Grid item container xs={12} style={{marginTop: "16px"}}>
		   <Typography className={classes.comment}>
				{comment.text}
		   </Typography>
	   </Grid>
	</Grid>
  );
};

export default Comment;
