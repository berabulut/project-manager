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
    objectFit: "contain",
    padding: theme.spacing(1.5),
    background: "#F2F2F2",
  },
  taskTitle: {
    color: "black",
    fontWeight: "normal",
    fontSize: "1rem",
    lineHeight: "22px",
    letterSpacing: "-0.035em",
    marginBottom: theme.spacing(1),
  },
  editButton: {
    borderRadius: "1px",
    width: "50%",
    padding: "0px",
    paddingBottom: theme.spacing(0.5),
    paddingTop: theme.spacing(0.5),
  },
  listTitle: {
    fontWeight: 600,
    fontSize: "0.725rem",
    lineHeight: "15px",
    letterSpacing: "-0.035em",
    marginBottom: theme.spacing(2.5),
  },
  description: {
    fontSize: "0.925rem",
    lineHeight: "21px",
    letterSpacing: "-0.035em",
    whiteSpace: "pre-line",
  },
  buttonContainer: {
    maxHeight: "60px",
    display: "inline-flex",
    marginBottom: theme.spacing(1.5),
    justifyContent: "flex-end",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  assignButtonContainer: {
    maxHeight: "60px",
    display: "inline-flex",
    marginBottom: theme.spacing(1.5),
    paddingLeft: "20px",
    justifyContent: "flex-end",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      paddingLeft: "0px"
    },
  },
  assignedUsersContainer: {
    maxHeight: "60px",
    display: "inline-flex",
    marginBottom: theme.spacing(1.5),
    paddingLeft: "20px", 
    justifyContent: "flex-end",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
      paddingLeft: "0px", 
    },
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
    fontWeight: "600",
  },
  uploadButtonIcon: {
    fontSize: "1rem",
  },
  uploadError: {
    fontSize: "0.825rem",
    color: "#f44336",
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
  },
  member: {
    borderRadius: "8px",
    maxHeight: "48px",
    transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    padding: "8px 6px",
    "&:hover": {
      backgroundColor: "#ffbaba",
      cursor: "pointer",
    },
  },
  avatar: {
    borderRadius: "8px",
    height: "2rem",
    width: "2rem",
  },
  name: {
    fontWeight: 600,
    fontSize: "0.875rem",
    lineHeight: "18px",
    letterSpacing: "-0.035em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "140px",
    paddingLeft: theme.spacing(2),
  },
  assignMemberButton: {
    background: "#2f80ed38",
    borderRadius: "8px",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    height: "40px",
    "&:hover": {
      background: "#2f80ed61",
    },
  },
  assignMemberButtonText: {
    fontWeight: 500,
    fontSize: "0.825rem",
    lineHeight: "16px",
    letterSpacing: "-0.035em",
    color: "#2F80ED",
  },
  sectionTitleContainer: {
    paddingLeft: "24px",
    marginBottom: "12px",
    height: "30px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0px",
    },
  },
  taskTitleWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "24px",
    },
  }
}), { index: 1 });
