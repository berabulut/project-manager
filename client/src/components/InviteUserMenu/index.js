import React, { useEffect, useState } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { PopMenu, menuStyles } from "./styles";

const LabelsMenu = ({ anchorEl, handleClose, addLabel }) => {
  const classes = menuStyles();

  const [input, setInput] = useState("");
  const [error, setError] = useState();

  return (
    <div>
      <PopMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Grid className={classes.header} container>
          <Grid item xs={12}>
            <Typography className={classes.headerTitle} component="p">
              Invite User
            </Typography>
          </Grid>
          {/* <Grid item xs={12}>
            <Typography className={classes.headerDescription} component="p">
              Enter email address
            </Typography>
          </Grid> */}
        </Grid>
        <Grid className={classes.content} item container>
          <Grid item container xs={12} className={classes.inputContainer}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Email address"
              type="email"
              className={classes.input}
            />
          </Grid>
        </Grid>
        <Grid item container>
          {error && (
            <Grid item container xs={12} justify="center">
              <Typography className={classes.error}>{error}</Typography>
            </Grid>
          )}
          <Grid item container justify="center" xs={12}>
            <Button
              className={classes.addButton}
              variant="contained"
              color="primary"
            >
              Invite
            </Button>
          </Grid>
        </Grid>
      </PopMenu>
    </div>
  );
};

export default LabelsMenu;
