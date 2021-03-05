import React, { useContext, useEffect, useState } from "react";
import { Grid, Typography, Button, Modal, IconButton } from "@material-ui/core";
import { Clear, Edit } from "@material-ui/icons";
import { SectionTitle, LightButton } from "components";
import EditDescription from "./EditDescription";
import { modalStyles } from "./styles";

const placeholder =
  "https://images.unsplash.com/photo-1613085628218-d08b3a264f86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80";

const descriptionPlaceholder = `Ideas are created and share here through a card. 
Here you can describe what you'd like to accomplish.
For example you can follow three simple questions to create the card related to your idea:

  * Why  ? (Why do you wish to do it ?)
  * What ? (What it  is it, what are the goals, who is concerned)
  * How  ? (How do you think you can do it ? What are the required steps ?)

After creation, you can move your card to the todo list.`;

const EditTaskModal = ({ open, handleClose, coverImageRegular, editDescription, description }) => {
  const classes = modalStyles();
  const [displayEditArea, setDisplayEditArea] = useState(false);

  const handleEditButtonClick = () => {
    setDisplayEditArea(!displayEditArea);
  };

  const closeEditArea = () => {
    setDisplayEditArea(false);
  }

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
            <img
              className={classes.image}
              src={
                coverImageRegular !== undefined
                  ? coverImageRegular
                  : placeholder
              }
            />
          </Grid>
          <Grid className={classes.gridItem} item container xs={10}>
            {/*this is the left side of modal in big screens */}
            <Grid item xs={12}>
              <Typography className={classes.taskTitle}>
                ✋🏿 Move anything that is actually started here
              </Typography>
            </Grid>
            <Grid item container xs={12}>
              <Grid item>
                <Typography
                  style={{ color: "#BDBDBD" }}
                  className={classes.listTitle}
                >
                  in list
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  style={{ marginLeft: "8px" }}
                  className={classes.listTitle}
                >
                  In Progress
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} style={{ marginBottom: "16px" }}>
              <Grid item container alignItems="center" xs={2}>
                <SectionTitle title="Description" icon="description" />
              </Grid>
              <Grid item xs={2}>
                <LightButton handleClick={handleEditButtonClick} icon="edit" text="Edit" />
              </Grid>
            </Grid>
            <Grid
              style={{ display: displayEditArea ? "none" : "flex" }}
              item
              container
              xs={12}
            >
              <Typography className={classes.description}>
                {description}
              </Typography>
            </Grid>
            <Grid
              style={{ display: displayEditArea ? "flex" : "none" }}
              item
              container
              xs={12}
            >
              <EditDescription descriptionValue={description} editDescription={editDescription} handleClose={closeEditArea} />
            </Grid>
          </Grid>
          <Grid className={classes.gridContainer} item container xs={2}></Grid>
        </Grid>
      </div>
    </Modal>
  );
};

export default EditTaskModal;
