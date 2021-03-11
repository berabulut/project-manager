import React from "react";
import { Typography } from "@material-ui/core";
import { labelStyles } from "./styles";

const Label = ({ text, color }) => {
  const classes = labelStyles();

  return (
    <div className={classes.container} style={{backgroundColor: color}}>
		<Typography className={classes.text}>{text}</Typography>
    </div>
  );
};

export default Label;
