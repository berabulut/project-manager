import React, { useState } from "react";
import { Grid, Button, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { editStyles, EditInput } from "./styles";

const EditComment = ({ handleClose, editInput, value, label }) => {
  const classes = editStyles();
  const [input, setInput] = useState(value);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  useState(() => {
    setInput(value);
  }, [value]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <EditInput
          onChange={handleChange}
          value={input.trim()}
          label={label}
          variant="outlined"
          margin="dense"
          multiline
          rowsMax={10}
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
        <Grid item>
          <Button
            className={classes.addList}
            variant="contained"
            color="primary"
            onClick={() => {
              editInput(input);
              handleClose();
            }}
          >
            Save
          </Button>
        </Grid>
        <Grid item xs={2}>
          <IconButton
            style={{ marginLeft: "16px" }}
            className={classes.cancelButton}
            aria-label="cancel"
            onClick={() => {
              setInput(value);
              handleClose();
            }}
          >
            <Close />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditComment;
