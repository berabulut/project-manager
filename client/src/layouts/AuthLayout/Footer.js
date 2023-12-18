import React from "react";
import { footerStyles, AuthTheme } from "./styles";
import {
  Grid,
  CssBaseline,
  Typography,
  Divider,
  Link,
} from "@material-ui/core";

const Footer = () => {
  const classes = footerStyles(AuthTheme);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Divider className={classes.divider} />
        <Grid className={classes.gridContainer} container alignItems="center">
          <Grid item xs={11}></Grid>
          <Grid item xs={1} className={classes.linkGrid}></Grid>
        </Grid>
      </footer>
    </div>
  );
};

export default Footer;
