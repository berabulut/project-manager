import React, { useState } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { PopMenu, menuStyles } from "./styles";
import { colors } from "./colors";

const LabelsMenu = ({ anchorEl, handleClose }) => {
  const classes = menuStyles();

  const [searchInput, setSearchInput] = useState("");
  const [selectedColor, setSelectedColor] = useState(1917); 

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
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
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
                  style={{ backgroundColor: val.color, transform: selectedColor === key && "scale(1.05)"}}
                ></div>
              </Grid>
            );
          })}
        </Grid>
        <Grid container>
          <Grid item container justify="center" xs={12}>
            <Button
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
