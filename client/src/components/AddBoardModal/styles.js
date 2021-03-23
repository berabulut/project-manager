import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

export const modalStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: theme.spacing(8),
  },
  container: {
    backgroundColor: "white",
    width: "500px",
    minHeight: "350px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    outlineColor: "white",
    outlineWidth: "0px",
  },
  footerSection: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-evenly",
    },
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
      backgroundColor: "rgb(32, 89, 165)",
    },
  },
  gridContainer: {
    padding: theme.spacing(2),
  },
  gridItem: {
    marginBottom: theme.spacing(4),
  },
  image: {
    width: "100%",
    height: "136px",
    borderRadius: "8px",
    objectFit: "cover",
  },
  input: {
    width: "100%",
    borderRadius: "8px",
    border: "2px solid #E0E0E0",
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    outlineWidth: "0",
    color: "#757575",
    letterSpacing: "-0.035em",
    fontWeight: "500",
    fontFamily: "Poppins",
    fontSize: "0.875rem",
  },
  button: {
    width: "90%",
    backgroundColor: "#F2F2F2",
    borderRadius: "8px",
    color: "#828282",
    height: "44px",
    "&:hover": {
      backgroundColor: "#e6e5e5",
    },
  },
  icons: {
    width: "1rem",
    height: "1rem",
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(-2),
  },
  buttonText: {
    fontSize: "0.875rem",
    fontWeight: "500",
    lineHeight: "18px",
    fontFamily: "Poppins",
  },
  cancelButton: {
    backgroundColor: "white",
    borderRadius: "8px",
    color: "#828282",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  createButton: {
    borderRadius: "8px",
  },
  createButtonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  error: {
    fontSize: "0.825rem",
    color: "#f44336",
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(3),
    textAlign: "center"
  },
}));
