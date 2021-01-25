import React from "react";
import { footerStyles } from "./styles";
import { Grid, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const Footer = () => {
  const classes = footerStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography style={{ textAlign: "center" }}>
            APP FOOTER
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
