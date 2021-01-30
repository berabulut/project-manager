import { makeStyles, withStyles } from "@material-ui/core/styles";
export const profileStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  box: {
    border: "1px solid #E0E0E0",
    boxSizing: "border-box",
    borderRadius: "12px",
  },
  gridContainer: {
    padding: theme.spacing(4),
  }
}));
