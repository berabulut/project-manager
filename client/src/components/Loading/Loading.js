import React, { useContext } from "react";
import { FirebaseAuth } from "provider/AuthProvider";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Loading = () => {
  const classes = useStyles();
  const { openBackdrop } = useContext(FirebaseAuth);
  return (
    <Backdrop className={classes.backdrop} open={openBackdrop}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
