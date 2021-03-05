import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Description, AccountCircle, People } from "@material-ui/icons";
import { sectionStyles } from "./styles";

const SectionTitle = ({ icon, title }) => {
  const classes = sectionStyles();

  return (
    <Grid item container alignItems="center" xs={12}>
      <Grid item>
        {icon === "description" ? (
          <Description className={classes.sectionIcon} />
        ) : icon === "account" ? (
          <AccountCircle className={classes.sectionIcon} />
        ) : (
          icon === "people" && <People className={classes.sectionIcon} />
        )}
      </Grid>
      <Grid item>
        <Typography className={classes.sectionTitle}>{title}</Typography>
      </Grid>
    </Grid>
  );
};

export default SectionTitle;
