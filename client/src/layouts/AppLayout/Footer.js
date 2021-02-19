import React from "react";
import { footerStyles } from "./styles";
import {
  Grid,
  CssBaseline,
  Typography,
  Divider,
  Link,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  const classes = footerStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Divider className={classes.divider} />
        <Grid className={classes.gridContainer} container alignItems="center">
          <Grid item xs={11}>
            <Typography className={classes.footerText} variant="body2">
              Developed by Hüseyin Bera Bulut.
            </Typography>
          </Grid>
          <Grid item xs={1} className={classes.linkGrid}>
            <Link
              href="https://github.com/berabulut/project-manager"
              variant="body2"
              target="_blank"
              rel="noopener"
            >
              <GitHubIcon />
            </Link>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
};

export default Footer;
