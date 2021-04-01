import React from "react";
import { footerStyles } from "./styles";
import {
  Grid,
  CssBaseline,
  Typography,
  Divider,
  Link,
} from "@material-ui/core";
import { UIContext } from "provider/UIProvider";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  const classes = footerStyles();
  const { showFooter } = React.useContext(UIContext);

  return (
    <div
      style={{ display: showFooter === true ? "flex" : "none" }}
      className={classes.root}
    >
      <CssBaseline />
      <Divider className={classes.divider} />
      <Grid className={classes.gridContainer} container alignItems="center">
        <Grid item xs={11}>
          <Typography className={classes.footerText} variant="body2">
            Developed by Hüseyin Bera Bulut
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
    </div>
  );
};

export default Footer;
