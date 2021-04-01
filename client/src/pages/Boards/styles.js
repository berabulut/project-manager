import { makeStyles } from "@material-ui/core/styles";

export const boardsStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  boxContainer: {
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(4),
    }
  },
  boardsContainer: {
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      marginBottom: theme.spacing(3),
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
