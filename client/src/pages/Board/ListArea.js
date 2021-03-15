import React from "react";
import { Grid } from "@material-ui/core";
import { DndCanvas } from "components";
import { listAreaStyles } from "./styles";

const ListArea = ({ board }) => {
  const classes = listAreaStyles();

  return (
    <div className={classes.root}>
      <Grid
        style={{
          backgroundImage:
            board !== undefined && `url(${board.coverPhoto}&w=1920)`,
          backgroundColor: board === undefined && "#F8F9FD",
        }}
        className={classes.container}
        container
      >
        <DndCanvas board={board} />
      </Grid>
    </div>
  );
};

export default ListArea;
