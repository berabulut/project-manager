import { makeStyles, withStyles } from "@material-ui/core/styles";
export const boardStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: "12px",
  },
  cover: {
	  width: "100%",
	  borderRadius: "12px"
  },
  title: {
	  fontWeight: "500",
	  letterSpacing: "-0.035em",
	  marginTop: theme.spacing(1.5),
	  marginBottom: theme.spacing(1.5)
  }
}));
