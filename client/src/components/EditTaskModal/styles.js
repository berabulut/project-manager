import { makeStyles } from "@material-ui/core/styles";

export const modalStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: theme.spacing(8),
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      width: "0",
      background: "transparent",
    },
  },
  container: {
    backgroundColor: "white",
    width: "675px",
    minHeight: "350px",
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
      backgroundColor: "rgb(32, 89, 165)",
    },
  },
  gridContainer: {
    padding: theme.spacing(2.5),
  },
  gridItem: {
    marginBottom: theme.spacing(3),
  },
  image: {
    width: "100%",
    height: "165px",
    borderRadius: "8px",
    objectFit: "cover",
  },
  taskTitle: {
    color: "black",
    fontWeight: "normal",
    fontSize: "1rem",
    lineHeight: "22px",
    letterSpacing: "-0.035em",
    marginBottom: theme.spacing(1),
  },
  listTitle: {
    fontWeight: 600,
    fontSize: "0.725rem",
    lineHeight: "15px",
    letterSpacing: "-0.035em",
    marginBottom: theme.spacing(4),
  },
  description: {
    fontSize: "1rem",
    lineHeight: "21px",
    letterSpacing: "-0.035em",
    whiteSpace: "pre-line",
  },
  buttonContainer: {
    maxHeight: "60px",
  },
  uploadButton: {
    border: "1px solid #BDBDBD",
    borderRadius: "8px",
    height: "24px",
  },
  uploadButtonText: {
    lineHeight: "15px",
    letterSpacing: "-0.035em",
    fontSize: "0.725rem",
	fontWeight: "600"
  },
  uploadButtonIcon: {
    fontSize: "1rem",
  },
}));
