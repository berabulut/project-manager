import React, { useState } from "react";
import {
  Drawer,
  Grid,
  Typography,
  IconButton,
  Avatar,
} from "@material-ui/core";
import { SectionTitle, EditInput, LightButton } from "components";
import { Close } from "@material-ui/icons";
import { drawerStyles } from "./styles";

const BoardDrawer = ({ state, setDrawerOpen }) => {
  const classes = drawerStyles();
  const [description, setDescription] = useState("");
  const [displayEditArea, setDisplayEditArea] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(false);
  };

  const closeEditArea = () => {
    setDisplayEditArea(false);
  };

  const editDescription = (val) => {
    setDescription(val);
  };

  return (
    <div>
      <Drawer
        variant="persistent"
        anchor="right"
        open={state}
        onClose={toggleDrawer(false)}
        classes={{ paper: classes.drawer }}
      >
        <Grid container justify="center">
          {/* MENU - X BUTTON */}
          <Grid
            item
            container
            xs={11}
            alignItems="center"
            className={classes.gridItem}
            style={{ borderBottom: "1px solid #E0E0E0", marginTop: "8px" }}
          >
            <Grid item xs>
              <Typography
                variant="subtitle1"
                component="p"
                className={classes.menuTitle}
              >
                Menu
              </Typography>
            </Grid>
            <Grid item xs={2} container justify="flex-end">
              <IconButton
                className={classes.closeButton}
                onClick={() => setDrawerOpen(false)}
              >
                <Close />
              </IconButton>
            </Grid>
          </Grid>
          {/* MADE BY - AVATAR */}
          <Grid item container xs={11} className={classes.gridItem}>
            <Grid item xs>
              <SectionTitle
                title="Made by"
                icon="account"
                alignItems="baseline"
              />
            </Grid>
            <Grid item container xs={12} style={{ marginTop: "14px" }}>
              <Grid item style={{ width: "45px" }}>
                <Avatar alt="Remy Sharp" className={classes.avatar} />
              </Grid>
              <Grid item container xs>
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className={classes.memberName}
                  >
                    Daniel Jensen
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.date}
                  >
                    on 4 July, 2020
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* DESCRIPTION - BUTTON */}
          <Grid
            item
            container
            xs={11}
            className={classes.gridItem}
            alignItems="center"
            style={{ marginTop: "8px" }}
          >
            <Grid item style={{ width: "100px" }}>
              <SectionTitle
                title="Description"
                icon="description"
                alignItems="end"
              />
            </Grid>
            <Grid item xs={2}>
              <LightButton
                handleClick={() => setDisplayEditArea(!displayEditArea)}
                icon="edit"
                text="Edit"
              />
            </Grid>
          </Grid>
          {/* EDIT DESCRIPTION */}
          <Grid
            style={{
              display: displayEditArea ? "flex" : "none",
              marginBottom: "24px",
            }}
            item
            container
            xs={11}
          >
            <EditInput
              value={description}
              editInput={editDescription}
              handleClose={closeEditArea}
              label="Description"
            />
          </Grid>
          {/* DESCRIPTION ITSELF */}
          <Grid
            style={{
              display: displayEditArea ? "none" : "flex",
              marginBottom: "12px",
            }}
            item
            container
            xs={11}
          >
            <Typography variant="body1" className={classes.description}>
              {description}
            </Typography>
          </Grid>
          {/* TEAM */}
          <Grid
            item
            container
            xs={11}
            className={classes.gridItem}
            alignItems="center"
          >
            <Grid item xs>
              <SectionTitle title="Team" icon="people" alignItems="end" />
            </Grid>
          </Grid>
          {/* MAPPING TEAM MEMBERS */}
		  <Grid
            item
            container
            xs={11}
            className={classes.gridItem}
            alignItems="center"
          >
            <Grid item style={{ width: "50px" }}>
              <Avatar alt="Remy Sharp" className={classes.avatar} />
            </Grid>
            <Grid item container xs={7}>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  component="p"
                  className={classes.memberName}
                >
                  Daniel Jensen
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs>
              <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className={classes.adminText}
                  >
                    Admin
                  </Typography>
              </Grid>
            </Grid>
          </Grid>
		  <Grid
            item
            container
            xs={11}
            className={classes.gridItem}
            alignItems="center"
          >
            <Grid item style={{ width: "50px" }}>
              <Avatar alt="Remy Sharp" className={classes.avatar} />
            </Grid>
            <Grid item container xs={7}>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  component="p"
                  className={classes.memberName}
                >
                  Daniel Jensen
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs justify="center">
              <Grid item contaşner xs={9} >
                <div className={classes.redButton}>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className={classes.redButtonText}
                    style={{ textAlign: "center" }}
                  >
                    Remove
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        
		</Grid>
      </Drawer>
    </div>
  );
};

export default BoardDrawer;
