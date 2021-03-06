import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import { People, Label, Image } from "@material-ui/icons";
import { buttonStyles } from "./styles";

const LightButton = ({ icon, text, handleClick }) => {
  const classes = buttonStyles();

  return (
    <IconButton
      onClick={handleClick}
      className={classes.button}
      aria-label="edit"
    >
      {icon &&
        (icon === "people" ? (
          <People className={classes.icon} />
        ) : icon === "label" ? (
          <Label className={classes.icon} />
        ) : (
          <Image className={classes.icon} />
        ))}
      <Typography
        style={{ marginLeft: icon ? "12px" : "0px" }}
        className={classes.text}
      >
        {text}
      </Typography>
    </IconButton>
  );
};

export default LightButton;
