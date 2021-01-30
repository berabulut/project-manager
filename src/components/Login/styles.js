import { makeStyles } from "@material-ui/core/styles";

export const loginStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "125px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
    },
  },
  container: {
    borderRadius: "24px",
    border: "1px solid #BDBDBD",
    [theme.breakpoints.down("sm")]: {
      border: "none",
    },
  },
}));
