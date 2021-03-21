import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "provider/UserProvider";
import { ListHelpers } from "helpers";
import { IconButton, Grid, Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { modalStyles, PopMenu, NameInput } from "./styles";

const RenameMenu = ({ anchorEl, handleClose, listTitle, listId }) => {
  const classes = modalStyles();
  const [error, setError] = useState();
  const [nameInput, setNameInput] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  const { renderedBoard, setRenderedBoard } = useContext(UserContext);

  const handleSubmit = () => {
    setDisableButton(true);
    if (nameInput !== undefined && nameInput.trim().length <= 0) {
      setError("Field cannot be empty!");
      setDisableButton(false);
    } else if (nameInput !== undefined && nameInput.trim().length > 0) {
      renderedBoard.lists[listId]["title"] = nameInput;
      ListHelpers.HandleRenamingList(renderedBoard, listId, nameInput)
        .then(() => {
          setRenderedBoard(renderedBoard);
          handleClose();
          setError();
          setDisableButton(false);
        })
        .catch((err) => {
          setError(err);
          setDisableButton(false);
        });
    } else {
      setError("Field cannot be empty!");
      setDisableButton(false);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setNameInput(value);
  };

  useEffect(() => {
    setNameInput(listTitle || "");
  }, [listTitle]);

  return (
    <PopMenu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={() => {
        handleClose();
        setError();
        setNameInput("");
      }}
    >
      <Grid style={{ padding: "8px 8px", outline: "0" }} container>
        <Grid item xs={12}>
          <NameInput
            onChange={handleChange}
            className={classes.margin}
            label="List title.."
            variant="outlined"
            margin="dense"
            helperText={error && error}
            value={nameInput}
          />
        </Grid>
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          style={{ paddingTop: "4px" }}
        >
          <Grid item xs={4}>
            <Button
              className={classes.addList}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={disableButton}
            >
              Rename
            </Button>
          </Grid>
          <Grid item xs={2}>
            <IconButton
              className={classes.cancelButton}
              onClick={() => {
                handleClose();
                setError();
                setNameInput("");
              }}
              aria-label="add-list"
            >
              <Close />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </PopMenu>
  );
};

export default RenameMenu;
