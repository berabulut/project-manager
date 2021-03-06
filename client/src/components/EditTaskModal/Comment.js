import React from "react";
import { Grid, Typography, Avatar, Divider } from "@material-ui/core";
import { commentStyles } from "./styles";

const text = `“The gladdest moment in human life, methinks, is a departure into unknown lands.” – Sir Richard Burton`

const Comment = ({ comment }) => {
  const classes = commentStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item container xs={12} justify="space-around">
        <Grid item xs={1}>
          <Avatar variant="rounded" className={classes.avatar}>
            A
          </Avatar>
        </Grid>
        <Grid item container xs={7} style={{paddingLeft: "14px"}}>
          <Grid item xs={12}>
            <Typography className={classes.userName}>Mikael Stanley</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.date}>24 August at 20:43</Typography>
          </Grid>
        </Grid>
        <Grid item container xs={3} justify="flex-end">
          <Grid item xs={3}>
            <Typography onClick={() => console.log('asd ')} className={classes.commentButton}>Edit</Typography>
          </Grid>
          <Grid item xs={1} style={{marginLeft: "5px", marginRight: "10px"}}>
            -
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.commentButton}>Delete</Typography>
          </Grid>
        </Grid>
      </Grid>
	   <Grid item container xs={12} style={{marginTop: "16px"}}>
		   <Typography className={classes.comment}>
				{text}
		   </Typography>
	   </Grid>
	</Grid>
  );
};

export default Comment;
