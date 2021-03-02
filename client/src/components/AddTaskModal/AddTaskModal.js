import React, { useState } from "react";
import { IconButton, Grid, Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { modalStyles, PopMenu, NameInput } from "./styles";

const AddElementModal = ({ anchorEl, handleClose, createNewTask, list }) => {
  const classes = modalStyles();
  const [error, setError] = useState();
  const [nameInput, setNameInput] = useState("");

  const handleSubmit = () => {
    if (nameInput !== undefined && nameInput.trim().length <= 0) {
      setError("Field cannot be empty!");
    } else if (nameInput !== undefined && nameInput.trim().length > 0) {
      setError();
      createNewTask(list.id, nameInput);
      handleClose();
      setNameInput("");
    } else {
      setError("Field cannot be empty!");
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setNameInput(value);
  };

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
            label="Enter a title for this card.."
            variant="outlined"
            margin="dense"
            helperText={error && error}
            value={nameInput}
            multiline
            rowsMax={4}
            rows={2}
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
            >
              Add List
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

export default AddElementModal;
