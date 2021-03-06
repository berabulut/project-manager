import { makeStyles } from "@material-ui/core/styles";

export const boardsStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(8),
  },
  boardsContainer: {
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center"
    }
  },
  button: {
    backgroundColor: "#2F80ED",
    borderRadius: "8px",
    padding: "6px 13px",
  },
  title: {
    letterSpacing: "-0.035em",
    color: "#333333",
  },
}));
