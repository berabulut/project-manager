import React, {  useState } from "react";
import { Grid,  Button,  IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { editStyles, EditInput } from "./styles";

const EditDescription = ({
  handleClose,
  editDescription,
  descriptionValue,
}) => {
  const classes = editStyles();
  const [description, setDescription] = useState(descriptionValue);
  const handleChange = (e) => {
    const { value } = e.target;
    setDescription(value);
  };
  useState(() => {
    setDescription(descriptionValue);
  }, [descriptionValue]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <EditInput
          onChange={handleChange}
          value={description}
          label="Description"
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
              editDescription(description);
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
              setDescription(descriptionValue);
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

export default EditDescription;
