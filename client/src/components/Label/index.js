import React from "react";
import { Typography, IconButton, Grid } from "@material-ui/core";
import { HighlightOff } from "@material-ui/icons";
import { labelStyles } from "./styles";

const Label = ({ text, color, id, deleteLabel }) => {
  const classes = labelStyles();

  return (
    <Grid className={classes.container} style={{ backgroundColor: color }} container alignItems="center" justify="space-around">
      <Grid item xs={10}>
        <Typography className={classes.text}>{text}</Typography>
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={() => deleteLabel(id)} className={classes.deleteButton}>
          <HighlightOff style={{fontSize: "1.25rem", color: "white"}} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Label;
