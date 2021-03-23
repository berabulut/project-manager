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
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(3.1),
    paddingBottom: theme.spacing(3.1),
    display: "flex",
    alignItems: "center",
  },
  pageTitle: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(5),
    textAlign: "center",
  },
  divider: {
    width: "100%",
  },
  avatar: {
    width: "3em",
    height: "3em",
    borderRadius: "8px"
  },
  button: {
    marginTop: theme.spacing(4),
    float: "right",
  },
  tableTitle: {
    color: "#BDBDBD",
    fontSize: "1em",
  },
  tableContent: {
    fontSize: "1.1em",
    fontWeight: "500",
  },
}), { index: 1 });
