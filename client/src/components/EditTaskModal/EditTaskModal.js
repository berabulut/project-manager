import React, { useState } from "react";
import {
  Grid,
  Typography,
  Modal,
  IconButton,
  LinearProgress,
} from "@material-ui/core";
import { Clear, Add } from "@material-ui/icons";
import {
  SectionTitle,
  LightButton,
  GrayButton,
  Attachment,
  CoverMenu,
  LabelsMenu,
  Comment,
  EditInput,
  CommentInput,
} from "components";
import { modalStyles } from "./styles";

const placeholder =
  "https://images.unsplash.com/photo-1613085628218-d08b3a264f86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop";

const imageFormats = [
  "APNG",
  "AVIF",
  "GIF",
  "PNG",
  "SVG",
  "WEBP",
  "JPEG",
  "JPG",
  "JFIF",
  "PJPEG",
  "PJP",
];

const EditTaskModal = ({
  open,
  handleClose,
  coverImageRegular,
  listTitle,
  editDescription,
  description,
  comments,
  submitComment,
  deleteComment,
  editComment,
  attachments,
  addAttachment,
  deleteAttachment,
}) => {
  const classes = modalStyles();

  const [displayEditArea, setDisplayEditArea] = useState(false);
  const [displayProgress, setDisplayProgress] = useState(false);
  const[uploadError, setUploadError] = useState(); 

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

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setUploadError();
    if (file) {
      if (file.size > 5000000) {
        setUploadError("Upload limit is 5mb! ")
      } else {
        setDisplayProgress(true);
        const now = new Date();
        const day = now.getDate();
        const month = now.toLocaleString("en-EN", { month: "long" });
        const year = now.getFullYear();
        file.uploadDate = `${month} ${day}, ${year}`;
        file.fileType = file.type
          .slice(file.type.lastIndexOf("/") + 1, file.type.length)
          .toUpperCase();
        const response = await addAttachment(file);
        if (response) {
          setDisplayProgress(false);
        } else {
          setDisplayProgress(false);
          setUploadError("Upload failed try uploading it later!");
        }
      }
    }
  };

  return (
    <Modal className={classes.modal} open={open} onClose={() => handleClose()}>
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
                  {listTitle}
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
              <EditInput
                value={description}
                editInput={editDescription}
                handleClose={closeEditArea}
                label="Description"
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
                <input
                  id="icon-button-file"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleFileUpload}
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    aria-label="upload file"
                    component="span"
                    className={classes.uploadButton}
                  >
                    <Add className={classes.uploadButtonIcon} />
                    <Typography
                      style={{ marginLeft: "8px" }}
                      className={classes.uploadButtonText}
                    >
                      Add
                    </Typography>
                  </IconButton>
                </label>
              </Grid>
              <Grid style={{marginTop: "8px", display: displayProgress ? "block" : "none"}} item xs={12}>
                <LinearProgress />
              </Grid>
              <Grid style={{marginTop: "8px", display: uploadError ? "block" : "none"}} item xs={12}>
                <Typography className={classes.uploadError}>{uploadError}</Typography>
              </Grid>
            </Grid>
            {/*  attachment itself*/}
            <Grid item container xs={12}>
              <Grid item xs={12} style={{ marginBottom: "32px" }}>
                {attachments &&
                  attachments.map((attachment, key) => {
                    if (imageFormats.includes(attachment.fileType)) {
                      return (
                        <Attachment
                          key={key}
                          id={attachment.id}
                          title={attachment.name}
                          date={attachment.uploadDate}
                          image={true}
                          fileUrl={attachment.fileUrl}
                          deleteAttachment={deleteAttachment}
                        />
                      );
                    } else {
                      return (
                        <Attachment
                          key={key}
                          id={attachment.id}
                          title={attachment.name}
                          date={attachment.uploadDate}
                          fileUrl={attachment.fileUrl}
                          fileType={attachment.fileType}
                          deleteAttachment={deleteAttachment}
                        />
                      );
                    }
                  })}
              </Grid>
            </Grid>
            {/*  write a comment*/}
            <Grid item container xs={12} style={{ marginBottom: "8px" }}>
              <CommentInput handleButtonClick={submitComment} />
            </Grid>
            {/* comments */}
            <Grid item container xs={12}>
              {comments &&
                comments.map((val, key) => {
                  return (
                    <Comment
                      key={key}
                      comment={val}
                      deleteComment={deleteComment}
                      editComment={editComment}
                    />
                  );
                })}
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
              <GrayButton
                icon="label"
                text="Labels"
                handleClick={handleLabelButtonClick}
              />
              <LabelsMenu
                anchorEl={labelAnchorEl}
                handleClose={handleLabelMenuClose}
              />
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
