import React, { useContext } from "react";
import {
  Grid,
  Typography,
  Container,
  Box,
  Button,
  Modal,
  TextField,
  IconButton,
} from "@material-ui/core";
import { Clear, Image, Lock } from "@material-ui/icons";
import { FirebaseAuth } from "../../provider/AuthProvider";
import { modalStyles } from "./styles";

const image =
  "https://images.unsplash.com/photo-1613085628218-d08b3a264f86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80";

const CreateModal = ({ open, setOpen }) => {
  const classes = modalStyles();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
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
              onClick={handleClose}
              className={classes.closeButton}
              aria-label="delete"
            >
              <Clear />
            </IconButton>
            <img className={classes.image} src={image} />
          </Grid>
          <Grid
            className={classes.gridItem}
            container
            justify="center"
            item
            xs={12}
          >
            <input
              placeholder="Add board title"
              type="text"
              className={classes.input}
            />
          </Grid>
          <Grid item container xs={12} justify="center">
            <Grid item xs={6}>
              <Button className={classes.button} startIcon={<Image />}>
                Cover
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button className={classes.button} startIcon={<Lock />}>
                Private
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
};

export default CreateModal;