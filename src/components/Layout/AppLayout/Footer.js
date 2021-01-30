import React from "react";
import { footerStyles } from "./styles";
import { Grid, Typography } from "@material-ui/core";

const Footer = () => {
  const classes = footerStyles();

  return (
    <div className={classes.root}>
      <Grid container>
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
