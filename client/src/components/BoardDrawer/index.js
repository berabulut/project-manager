import React, { useState, useContext } from "react";
import { UIContext } from "provider/UIProvider";
import { UserContext } from "provider/UserProvider";
import { BoardHelpers } from "helpers";
import {
  Drawer,
  Grid,
  Typography,
  Button,
  IconButton,
  Avatar,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import { SectionTitle, EditInput, LightButton, UserAvatar } from "components";
import { Close } from "@material-ui/icons";
import { drawerStyles } from "./styles";

const BoardDrawer = ({ board, admin }) => {
  const classes = drawerStyles();
  const { drawerOpen, changeDrawerVisibility, setRenderedBoard } = useContext(
    UIContext
  );
  const { boards, setBoards } = useContext(UserContext);

  const [displayDescriptionEditArea, setDisplayDescriptionEditArea] = useState(
    false
  );
  const [displayTitleEditArea, setDisplayTitleEditArea] = useState(false);
  const [displayRemoveDialog, setDisplayRemoveDialog] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    changeDrawerVisibility("set", false);
  };

  const closeDescriptionEditArea = () => {
    setDisplayDescriptionEditArea(false);
  };

  const closeTitleEditArea = () => {
    setDisplayTitleEditArea(false);
  };

  const closeRemoveDialog = () => {
    setDisplayRemoveDialog(false);
  };

  const editDescription = (description) => {
    setRenderedBoard({ ...board, description: description });
    BoardHelpers.HandleBoardPropertyUpdate(
      board.id,
      "description",
      description
    ).then(() => {
      for (let i = 0; i < boards.length; i++) {
        if (boards[i].id === board.id) {
          boards[i].description = description;
          setBoards(boards);
        }
      }
    });
  };

  const editTitle = (title) => {
    const newState = { ...board, title: title };
    setRenderedBoard(newState);
    BoardHelpers.HandleBoardPropertyUpdate(board.id, "title", title).then(
      () => {
        for (let i = 0; i < boards.length; i++) {
          if (boards[i].id === board.id) {
            boards[i].title = title;
            setBoards(boards);
          }
        }
      }
    );
  };

  const removeUser = (user) => {
    const uid = user.uid;
    const users = board.users.filter((user) => user.uid !== uid);
    const userData = board.userData.filter((user) => user.uid !== uid);

    setRenderedBoard({
      ...board,
      users: users,
      userData: userData,
    });
    BoardHelpers.HandleBoardPropertyUpdate(board.id, "users", users).then(
      () => {
        for (let i = 0; i < boards.length; i++) {
          if (boards[i].id === board.id) {
            boards[i].users = users;
            boards[i].userData = userData;
            setBoards(boards);
          }
        }
      }
    );
    BoardHelpers.HandleRemovingUser(board.id, uid);
  };

  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      classes={{ paper: classes.drawer }}
    >
      {board && (
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
                onClick={() => changeDrawerVisibility("set", false)}
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
            {board.admin && (
              <Grid item container xs={12} style={{ marginTop: "14px" }}>
                <Grid item style={{ width: "45px" }}>
                  <UserAvatar user={board.admin} styles={classes.avatar} />
                </Grid>
                <Grid item container xs>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      component="p"
                      className={classes.memberName}
                    >
                      {board.admin.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="body2"
                      component="p"
                      className={classes.date}
                    >
                      on {board.date}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
          {/* TITLE - EDIT BUTTON */}
          <Grid
            item
            container
            xs={11}
            className={classes.gridItem}
            alignItems="center"
            style={{ marginTop: "8px" }}
          >
            <Grid item xs style={{ width: "120px", maxWidth: "120px" }}>
              <Grid item xs style={{ width: "120px", maxWidth: "120px" }}>
                <SectionTitle
                  title="Title"
                  icon="description"
                  alignItems="end"
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs
              container
              justify="start"
              style={{ display: admin ? "flex" : "none" }}
            >
              <LightButton
                handleClick={() =>
                  setDisplayTitleEditArea(!displayTitleEditArea)
                }
                icon="edit"
                text="Edit"
              />
            </Grid>
          </Grid>
          {/* EDIT TITLE */}
          <Grid
            style={{
              display: displayTitleEditArea ? "flex" : "none",
              marginBottom: "24px",
            }}
            item
            container
            xs={11}
          >
            <EditInput
              value={board.title || ""}
              editInput={editTitle}
              handleClose={closeTitleEditArea}
              label="Title"
            />
          </Grid>
          {/* TITLE ITSELF */}
          <Grid
            style={{
              display: displayTitleEditArea ? "none" : "flex",
              marginBottom: "12px",
            }}
            item
            container
            xs={11}
          >
            <Typography variant="body1" className={classes.menuTitle}>
              {board.title || ""}
            </Typography>
          </Grid>
          {/* DESCRIPTION - EDIT BUTTON */}
          <Grid
            item
            container
            xs={11}
            className={classes.gridItem}
            alignItems="center"
            style={{ marginTop: "8px" }}
          >
            <Grid item xs style={{ width: "120px", maxWidth: "120px" }}>
              <SectionTitle
                title="Description"
                icon="description"
                alignItems="end"
              />
            </Grid>
            <Grid item xs={2} style={{ display: admin ? "block" : "none" }}>
              <LightButton
                handleClick={() =>
                  setDisplayDescriptionEditArea(!displayDescriptionEditArea)
                }
                icon="edit"
                text="Edit"
              />
            </Grid>
          </Grid>
          {/* EDIT DESCRIPTION */}
          <Grid
            style={{
              display: displayDescriptionEditArea ? "flex" : "none",
              marginBottom: "24px",
            }}
            item
            container
            xs={11}
          >
            <EditInput
              value={board.description || ""}
              editInput={editDescription}
              handleClose={closeDescriptionEditArea}
              label="Description"
            />
          </Grid>
          {/* DESCRIPTION ITSELF */}
          <Grid
            style={{
              display: displayDescriptionEditArea ? "none" : "flex",
              marginBottom: "12px",
            }}
            item
            container
            xs={11}
          >
            <Typography variant="body1" className={classes.description}>
              {board.description || ""}
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
          {board.userData &&
            board.users &&
            board.userData.map((user, index) => {
              if (board.admin.uid === user.uid) {
                return (
                  <Grid
                    item
                    container
                    xs={11}
                    className={classes.gridItem}
                    alignItems="center"
                  >
                    <Grid item style={{ width: "50px" }}>
                      <UserAvatar user={user} styles={classes.avatar} />
                    </Grid>
                    <Grid item container xs={7}>
                      <Grid item xs={12}>
                        <Typography
                          variant="subtitle1"
                          component="p"
                          className={classes.memberName}
                        >
                          {user.name}
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
                );
              } else {
                return (
                  <Grid
                    item
                    container
                    xs={11}
                    className={classes.gridItem}
                    alignItems="center"
                  >
                    <Grid item style={{ width: "50px" }}>
                      <UserAvatar user={user} styles={classes.avatar} />
                    </Grid>
                    <Grid item container xs={7}>
                      <Grid item xs={12}>
                        <Typography
                          variant="subtitle1"
                          component="p"
                          className={classes.memberName}
                        >
                          {user.name}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container xs justify="center">
                      <Grid item contaşner xs={9}>
                        <div
                          onClick={() => setDisplayRemoveDialog(true)}
                          className={classes.redButton}
                          style={{ display: admin ? "flex" : "none" }}
                        >
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
                      <Dialog
                        open={displayRemoveDialog}
                        onClose={closeRemoveDialog}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle>{"Remove this user?"}</DialogTitle>
                        <DialogActions>
                          <Button onClick={closeRemoveDialog} color="primary">
                            Go Back
                          </Button>
                          <Button
                            onClick={() => {
                              removeUser(user);
                              closeRemoveDialog();
                            }}
                            style={{ color: "#f44336" }}
                          >
                            Delete
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </Grid>
                  </Grid>
                );
              }
            })}
        </Grid>
      )}
    </Drawer>
  );
};

export default BoardDrawer;
