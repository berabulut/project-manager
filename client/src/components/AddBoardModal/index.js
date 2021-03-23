import React, { useContext, useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Modal,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import { Clear, Image, Lock, Add, Public } from "@material-ui/icons";
import { UserContext } from "provider/UserProvider";
import { CreateNewBoard } from "api/Board";
import { BoardHelpers } from "helpers/";
import { VisibilityMenu, CoverMenu } from "components";
import { modalStyles } from "./styles";

const placeholder =
  "https://images.unsplash.com/photo-1613085628218-d08b3a264f86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80";

const AddBoardModal = ({ open, setOpen }) => {
  const classes = modalStyles();

  const { userData, setUserData, setBoards, setOpenBackdrop } = useContext(
    UserContext
  );

  const [visibilityAnchorEl, setVisibilityAnchorEl] = useState(null);
  const [openVisibility, setOpenVisibilty] = useState(false);

  const [coverAnchorEl, setCoverAnchorEl] = useState(null);

  const [boardTitle, setBoardTitle] = useState("");
  const [boardVisibility, setBoardVisibility] = useState("Private");

  const [coverImageRegular, setCoverImageRegular] = useState();
  const [coverImageRaw, setCoverImageRaw] = useState();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleCreate = () => {
    if (coverImageRaw === undefined) {
      setError("Select a cover image!");
    } else if (boardTitle.trim().length <= 0) {
      setError("Title field cannot be empty!");
    } else {
      setLoading(true);
      setError("");
      const boardData = {
        admin: userData,
        title: boardTitle,
        coverPhoto: coverImageRaw,
        visibility: boardVisibility,
        users: [{ uid: userData.uid }],
      };
      CreateNewBoard(boardData)
        .then((response) => {
          if (response.statusCode === 200) {
            BoardHelpers.HandleBoardCreation(
              response.data,
              userData,
              setUserData,
              setBoards,
              setOpenBackdrop
            )
              .then(() => {
                setSuccess(true);
                setLoading(false);
                handleClose();
                setError("");
              })
              .catch((err) => {
                setLoading(false);
                setError(err);
                console.log(err);
              });
          }
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
          console.log(err);
        });
    }
  };

  const handleClose = () => {
    setOpen(false);
    setError("");
    setCoverImageRaw();
    setCoverImageRegular();
    setBoardTitle("");
    setBoardVisibility("Private")
  };

  const handleVisibilityClick = (event) => {
    setVisibilityAnchorEl(event.currentTarget);
    setOpenVisibilty(true);
  };

  const handleVisibilityClose = () => {
    setVisibilityAnchorEl(null);
    setOpenVisibilty(false);
  };

  const handleCoverClick = (event) => {
    setCoverAnchorEl(event.currentTarget);
  };

  const handleCoverClose = () => {
    setCoverAnchorEl(null);
  };

  const handleImageClick = (regular, raw) => {
    setCoverImageRegular(regular);
    setCoverImageRaw(raw);
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
            <img
              className={classes.image}
              src={
                coverImageRegular !== undefined
                  ? coverImageRegular
                  : placeholder
              }
            />
          </Grid>
          <Grid
            className={classes.gridItem}
            container
            justify="center"
            item
            xs={12}
          >
            <input
              value={boardTitle}
              onChange={(e) => setBoardTitle(e.target.value)}
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
              <IconButton
                onClick={handleCoverClick}
                className={classes.button}
                aria-label="cover"
              >
                <Image className={classes.icons} />
                <Typography className={classes.buttonText}>Cover</Typography>
              </IconButton>
              <CoverMenu
                handleImageClick={handleImageClick}
                open={openVisibility}
                anchorEl={coverAnchorEl}
                handleClose={handleCoverClose}
              />
            </Grid>
            <Grid item xs={6}>
              <IconButton
                style={{
                  float: "right",
                  backgroundColor:
                    boardVisibility === "Private" ? "#ffe2de" : "#e2f7df",
                }}
                onClick={handleVisibilityClick}
                className={classes.button}
                aria-label="cover"
              >
                {boardVisibility === "Private" ? (
                  <Lock className={classes.icons} />
                ) : (
                  <Public className={classes.icons} />
                )}
                <Typography className={classes.buttonText} component="p">
                  {boardVisibility}
                </Typography>
              </IconButton>
              <VisibilityMenu
                open={openVisibility}
                anchorEl={visibilityAnchorEl}
                handleClose={handleVisibilityClose}
                setBoardVisibility={setBoardVisibility}
                boardVisibility={boardVisibility}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            className={classes.footerSection}
            justify="flex-end"
          >
            {error && (
              <Grid item xs={12}>
                <Typography className={classes.error}>{error}</Typography>
              </Grid>
            )}
            <Grid item xs={3}>
              <Button onClick={handleClose} className={classes.cancelButton}>
                Cancel
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={handleCreate}
                variant="contained"
                color="primary"
                className={
                  success ? classes.createButtonSuccess : classes.createButton
                }
                startIcon={<Add />}
                disabled={loading}
              >
                {loading && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
                Create
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
};

export default AddBoardModal;
