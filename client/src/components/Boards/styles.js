import { makeStyles, withStyles } from "@material-ui/core/styles";
export const boardsStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(8),
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

export const modalStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "white",
    width: "500px",
    height: "300px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    outlineColor: "white",
    outlineWidth: "0px",
  },
  closeButton: {
    backgroundColor: "#2F80ED",
    color: "white",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    width: "2rem",
    height: "2rem",
    padding: theme.spacing(2.25),
    zIndex: "100",
    position: "absolute",
    marginTop: theme.spacing(-1),
    marginRight: theme.spacing(-1),
    "&:hover": {
      backgroundColor: "#2f80edcc",
    },
  },
  gridContainer: {
    padding: theme.spacing(2),
  },
  gridItem: {
    marginBottom: theme.spacing(2.8),
  },
  image: {
    width: "100%",
    height: "100px",
    borderRadius: "8px",
    objectFit: "cover",
  },
  input: {
    width: "100%",
    height: "25px",
    borderRadius: "8px",
    border: "2px solid #E0E0E0",
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    outlineWidth: "0",
    color: "#757575",
    letterSpacing: "-0.035em",
    fontWeight: "500",
    fontFamily: "Roboto",
    fontSize: "0.875rem"
  },
}));
