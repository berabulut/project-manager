import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Description, AccountCircle, People, Label } from "@material-ui/icons";
import { sectionStyles } from "./styles";

const SectionTitle = ({ icon, title, alignItems }) => {
  const classes = sectionStyles();

  return (
    <Grid item container alignItems={alignItems ? alignItems : "center"} xs={12}>
      <Grid item>
        {icon === "description" ? (
          <Description className={classes.sectionIcon} />
        ) : icon === "account" ? (
          <AccountCircle className={classes.sectionIcon} />
        ) : icon === "people" ? (
          <People className={classes.sectionIcon} />
        ) : (
          icon === "label" && <Label className={classes.sectionIcon} />
        )}
      </Grid>
      <Grid item>
        <Typography className={classes.sectionTitle}>{title}</Typography>
      </Grid>
    </Grid>
  );
};

export default SectionTitle;
