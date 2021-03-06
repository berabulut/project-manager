import React, { useState } from "react";
import { Grid, Typography, Modal, IconButton } from "@material-ui/core";
import { Clear } from "@material-ui/icons";
import {
  SectionTitle,
  LightButton,
  GrayButton,
  Attachment,
  CoverMenu,
  LabelsMenu,
} from "components";
import EditDescription from "./EditDescription";
import WriteComment from "./WriteComment";
import Comment from "./Comment";
import { modalStyles } from "./styles";

const placeholder =
  "https://images.unsplash.com/photo-1613085628218-d08b3a264f86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop";

const EditTaskModal = ({
  open,
  handleClose,
  coverImageRegular,
  editDescription,
  description,
}) => {
  const classes = modalStyles();

  const [displayEditArea, setDisplayEditArea] = useState(false);

  const [coverAnchorEl, setCoverAnchorEl] = useState(null);
  const [labelAnchorEl, setLabelAnchorEl] = useState(null);

  const handleEditButtonClick = () => {
    setDisplayEditArea(!displayEditArea);
  };

  const closeEditArea = () => {
    setDisplayEditArea(false);
  };

  const handleCoverButtonClick = (event) => {
    setCoverAnchorEl(event.currentTarget);
  };

  const handleCoverMenuClose = () => {
    setCoverAnchorEl(null);
  };

  const handleLabelButtonClick = (event) => {
    setLabelAnchorEl(event.currentTarget);
  };

  const handleLabelMenuClose = () => {
    setLabelAnchorEl(null);
  };

  const addImageToTask = () => {
    return;
  };

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.container}>
        <Grid className={classes.gridContainer} container>
          {/* image - close button */}
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
                  : `${placeholder}&w=1280&q=80`
              }
            />
          </Grid>
          {/*this is the left side of modal in big screens */}
          <Grid className={classes.gridItem} item container xs={8}>
            <Grid item xs={12}>
              <Typography className={classes.taskTitle}>
                ✋🏿 Move anything that is actually started here
              </Typography>
            </Grid>
            {/*inlist - inprogress */}
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
            {/*description - edit */}
            <Grid item container xs={12} style={{ marginBottom: "16px" }}>
              <Grid
                item
                container
                alignItems="center"
                style={{ width: "100px" }}
              >
                <SectionTitle title="Description" icon="description" />
              </Grid>
              <Grid item xs={2}>
                <LightButton
                  handleClick={handleEditButtonClick}
                  icon="edit"
                  text="Edit"
                />
              </Grid>
            </Grid>
            {/*description itself */}
            <Grid
              style={{
                display: displayEditArea ? "none" : "flex",
                marginBottom: "24px",
              }}
              item
              container
              xs={12}
            >
              <Typography className={classes.description}>
                {description}
              </Typography>
            </Grid>
            {/*edit description */}
            <Grid
              style={{
                display: displayEditArea ? "flex" : "none",
                marginBottom: "24px",
              }}
              item
              container
              xs={12}
            >
              <EditDescription
                descriptionValue={description}
                editDescription={editDescription}
                handleClose={closeEditArea}
              />
            </Grid>
            {/* Attachment - Add */}
            <Grid item container xs={12} style={{ marginBottom: "16px" }}>
              <Grid
                item
                container
                alignItems="center"
                style={{ width: "100px" }}
              >
                <SectionTitle title="Attachment" icon="description" />
              </Grid>
              <Grid item xs={2}>
                <LightButton icon="add" text="Add" />
              </Grid>
            </Grid>
            {/*  attachment itself*/}
            <Grid item container xs={12}>
              <Grid item xs={12} style={{ marginBottom: "32px" }}>
                <Attachment
                  image={{ src: placeholder, alt: "kekw" }}
                  date="July 5, 2020"
                  title="Reasoning by Ranganath Krishnamani"
                />
              </Grid>
              <Grid item xs={12} style={{ marginBottom: "32px" }}>
                <Attachment
                  file={{ text: "TXT" }}
                  date="July 5, 2020"
                  title="Gatsby-config.js"
                />
              </Grid>
            </Grid>
            {/*  write a comment*/}
            <Grid item container xs={12} style={{ marginBottom: "8px" }}>
              <WriteComment />
            </Grid>
            {/* comments */}
            <Grid item container xs={12}>
              <Comment />
              <Comment />
              <Comment />
            </Grid>
          </Grid>
          <Grid
            style={{ height: "200px" }}
            className={classes.gridItem}
            item
            container
            xs={4}
          >
            <Grid
              item
              container
              justify="flex-start"
              style={{ paddingLeft: "24px" }}
            >
              <SectionTitle title="Actions" icon="people" />
            </Grid>
            <Grid
              className={classes.buttonContainer}
              item
              container
              justify="flex-end"
              xs={12}
            >
              <GrayButton icon="people" text="Members" />
            </Grid>
            <Grid
              className={classes.buttonContainer}
              item
              container
              justify="flex-end"
              xs={12}
            >
              <GrayButton icon="label" text="Labels" handleClick={handleLabelButtonClick} />
              <LabelsMenu anchorEl={labelAnchorEl} handleClose={handleLabelMenuClose} />
            </Grid>
            <Grid
              className={classes.buttonContainer}
              item
              container
              justify="flex-end"
              xs={12}
            >
              <GrayButton
                icon="cover"
                text="Cover"
                handleClick={handleCoverButtonClick}
              />
              <CoverMenu
                anchorEl={coverAnchorEl}
                handleClose={handleCoverMenuClose}
                handleImageClick={addImageToTask}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
};

export default EditTaskModal;
