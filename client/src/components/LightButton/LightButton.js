import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import { Edit, Add } from "@material-ui/icons";
import { buttonStyles } from "./styles";

const LightButton = ({ icon, text, handleClick }) => {
  const classes = buttonStyles();


  return (
    <IconButton onClick={handleClick} className={classes.button} aria-label="edit">
      {icon && (
        icon === "edit" ? (
          <Edit className={classes.icon} />
        ) : (
          <Add className={classes.icon} />
        )
      )}
      <Typography style={{marginLeft: icon ? "8px" : "0px"}} className={classes.text}>{text}</Typography>
    </IconButton>
  );
};

export default LightButton;
