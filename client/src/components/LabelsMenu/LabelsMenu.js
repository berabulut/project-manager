import React, { useState } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { PopMenu, menuStyles } from "./styles";
import { colors } from "./colors";

const LabelsMenu = ({ anchorEl, handleClose }) => {
  const classes = menuStyles();

  const [input, setInput] = useState("");
  const [selectedColor, setSelectedColor] = useState(1917);

  const [error, setError] = useState();

  const handleButtonClick = () => {
    if (input.trim() <= 0) {
      setError("Label title cannot be empty!");
    } else if (selectedColor === 1917) {
      setError("Select a color!");
    } else {
      console.log({
        input: input,
        color: colors[selectedColor],
      });
      setError();
    }
  };

  return (
    <div>
      <PopMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Grid className={classes.header} container>
          <Grid item xs={12}>
            <Typography className={classes.headerTitle} component="p">
              Label
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.headerDescription} component="p">
              Select a name and and a color
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.content} container>
          <Grid item container xs={12} className={classes.inputContainer}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Keywords..."
              type="text"
              className={classes.input}
            />
          </Grid>
        </Grid>
        <Grid className={classes.content} container>
          {colors.map((val, key) => {
            return (
              <Grid
                item
                container
                justify="center"
                xs={3}
                style={{ marginBottom: "8px" }}
              >
                <div
                  key={key}
                  onClick={() => setSelectedColor(key)}
                  className={classes.color}
                  style={{
                    backgroundColor: val.color,
                    transform: selectedColor === key && "scale(1.05)",
                  }}
                ></div>
              </Grid>
            );
          })}
        </Grid>
        <Grid container>
          {error && (
            <Grid item container xs={12} justify="center">
              <Typography className={classes.error}>{error}</Typography>
            </Grid>
          )}
          <Grid item container justify="center" xs={12}>
            <Button
              onClick={handleButtonClick}
              className={classes.addButton}
              variant="contained"
              color="primary"
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </PopMenu>
    </div>
  );
};

export default LabelsMenu;
