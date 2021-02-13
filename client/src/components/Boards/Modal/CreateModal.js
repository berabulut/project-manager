import React, { useContext, useState } from "react";
import { Grid, Typography, Button, Modal, IconButton } from "@material-ui/core";
import { Clear, Image, Lock, Add } from "@material-ui/icons";
import { FirebaseAuth } from "provider/AuthProvider";
import Visibility from "./Visibility";
import { modalStyles } from "./styles";

const image =
  "https://images.unsplash.com/photo-1613085628218-d08b3a264f86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80";

const CreateModal = ({ open, setOpen }) => {
  const classes = modalStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openVisibility, setOpenVisibilty] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleVisibility = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenVisibilty(true);
  };

  const handleVisibilityClose = () => {
    setAnchorEl(null);
    setOpenVisibilty(false);
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
          <Grid
            className={classes.gridItem}
            item
            container
            xs={12}
            justify="space-between"
          >
            <Grid item xs={6}>
              <IconButton className={classes.button} aria-label="cover">
                <Image className={classes.icons} />
                <Typography className={classes.buttonText} variant="p">
                  Cover
                </Typography>
              </IconButton>
            </Grid>
            <Grid  item xs={6}>
              <IconButton
              style={{float: "right"}}
                onClick={handleVisibility}
                className={classes.button}
                aria-label="cover"
              >
                <Lock className={classes.icons} />
                <Typography
                  className={classes.buttonText}
                  component="p"
                  variant="p"
                >
                  Private
                </Typography>
              </IconButton>
              <Visibility
                open={openVisibility}
                anchorEl={anchorEl}
                handleClose={handleVisibilityClose}
              />
            </Grid>
          </Grid>
          <Grid
            className={classes.gridItem}
            item
            container
            xs={12}
            justify="flex-end"
          >
            <Grid item xs={3}>
              <Button className={classes.cancelButton}>Cancel</Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="primary"
                className={classes.createButton}
                startIcon={<Add />}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
};

export default CreateModal;
