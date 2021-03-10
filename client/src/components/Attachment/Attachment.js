import React, { useEffect, useState } from "react";
import { CreateDownloadUrl } from "firebase/Upload";
import {
  Grid,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import { LightButton } from "components";
import { attachmentStyles } from "./styles";

const Attachment = ({
  id,
  title,
  date,
  fileUrl,
  fileType,
  image,
  deleteAttachment,
}) => {
  const classes = attachmentStyles();
  const [displayDeleteDialog, setDisplayDeleteDialog] = useState(false);

  const handleDeleteButtonClick = () => {
    setDisplayDeleteDialog(!displayDeleteDialog);
  };

  const closeDeleteDialog = () => {
    setDisplayDeleteDialog(false);
  };

  const handleDeleteComment = () => {
    deleteAttachment(id);
    closeDeleteDialog();
  };

  return (
    <Grid container>
      <Grid item style={{ width: "100px" }}>
        {image ? (
          <img className={classes.image} src={`${fileUrl}`} alt={title} />
        ) : (
          fileType && (
            <div className={classes.filePlaceholder}>
              <Typography className={classes.text}>{fileType}</Typography>
            </div>
          )
        )}
      </Grid>
      <Grid item xs={9} style={{ paddingLeft: "16px" }}>
        <Grid item xs={12}>
          <Typography className={classes.date}>Added on {date}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.title}>{title}</Typography>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={3}>
            <a
              href={fileUrl}
              download="safd.png"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <LightButton text="Download" />
            </a>
          </Grid>
          <Grid item xs={3} style={{ marginLeft: "14px" }}>
            <div
              style={{ display: "inline-flex" }}
              onClick={handleDeleteButtonClick}
            >
              <LightButton text="Delete" />
            </div>
            <Dialog
              open={displayDeleteDialog}
              onClose={closeDeleteDialog}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle>{"Delete this attachment?"}</DialogTitle>
              <DialogActions>
                <Button onClick={closeDeleteDialog} color="primary">
                  Go Back
                </Button>
                <Button
                  onClick={handleDeleteComment}
                  style={{ color: "#f44336" }}
                  autoFocus
                >
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Attachment;
