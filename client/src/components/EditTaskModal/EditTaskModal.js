import React, { useContext, useEffect, useState } from "react";
import { Grid, Typography, Button, Modal, IconButton } from "@material-ui/core";
import { Clear, Image, Lock, Add, Public } from "@material-ui/icons";
import { UserContext } from "provider/UserProvider";
import { modalStyles } from "./styles";

const placeholder =
  "https://images.unsplash.com/photo-1613085628218-d08b3a264f86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80";

const EditTaskModal = ({ open, handleClose }) => {
  const classes = modalStyles();

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.container}>
        <Grid className={classes.gridContainer} container direction="column">
          <Grid
            className={classes.gridItem}
            item
            container
            justify="flex-end"
            xs={12}
          >
            <IconButton
              onClick={() => handleClose()}
              className={classes.closeButton}
              aria-label="delete"
            >
              <Clear />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
};

export default EditTaskModal;
