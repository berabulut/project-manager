import { makeStyles, withStyles } from "@material-ui/core/styles";
import {  TextField } from "@material-ui/core";


export const modalStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: theme.spacing(8),
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
    padding: theme.spacing(2),
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
    letterSpacing: "-0.035em"
  }
}));

export const editStyles = makeStyles((theme) => ({
  addList: {
    fontSize: "0.825rem",
    padding: "6px 12px",
  },
  cancelButton: {
    padding: "8px",
  },
}));

export const EditInput = withStyles({
  root: {
    width: "100%",
    "& label.Mui-focused": {
      color: "#2F80ED",
    },
    "& .MuiFormLabel-root": {
      fontSize: "0.875rem"
    },
    "& .MuiOutlinedInput-root": {
      fontSize: "0.875rem",
      "& fieldset": {
        border: "1px solid rgb(0 0 0 / 14%)",
        borderRadius: "4px",
        //border: "2px solid #2F80ED"
      },
      "&:hover fieldset": {
        border: "1px solid rgb(0 0 0 / 20%)",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid rgb(0 0 0 / 20%)",
      },
    },
    "& .MuiFormHelperText-contained": {
      color: "red",
      marginLeft: "3px"
    }
  },
  input: {
    fontSize: "0.875rem"
  }
})(TextField);

