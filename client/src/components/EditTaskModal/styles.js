import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

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

export const commentStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100px",
    padding: theme.spacing(2),
    borderBottom: "1px solid #F2F2F2",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  userName: {
    fontWeight: 500,
    fontSize: "0.85rem",
    lineHeight: "18px",
    letterSpacing: "-0.035em",
    color: "black"
  },
  date: {
    fontWeight: 500,
    fontSize: "0.725rem",
    lineHeight: "14px",
    letterSpacing: "-0.035em",
    color: "#BDBDBD",
  },
  commentButton: {
    fontWeight: "500",
    fontSize: "0.725rem",
    lineHeight: "15px",
    letterSpacing: "-0.035em",
    color: "rgba(130,130,130,0.7)",
    textDecoration: "underline",
    "&:hover": {
      cursor: "pointer",
      color: "rgba(130,130,130,1)"
    }
  },
  comment: {
    fontWeight: "normal",
    fontSize: "1rem",
    lineHeight: "19px",
    letterSpacing: "-0.035em",
    whiteSpace: "pre-line",
  },
}));


export const writeCommentStyles = makeStyles((theme) => ({
  container: {
    border: "1px solid #E0E0E0",
    boxSizing: "border-box",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    minHeight: "100px",
    padding: theme.spacing(2)
  },
  commentButton: {
    width: "100%",
    marginRight: "10px",
    marginTop: "5px",
    borderRadius: "8px",
    fontWeight: 500,
    fontSize: "0.775rem",
    lineHeight: "14px",
    letterSpacing: "-0.035em",
    height: "32px"
  }
}));

export const EditInput = withStyles({
  root: {
    width: "100%",
    "& label.Mui-focused": {
      color: "#2F80ED",
    },
    "& .MuiFormLabel-root": {
      fontSize: "0.875rem",
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
      marginLeft: "3px",
    },
  },
  input: {
    fontSize: "0.875rem",
  },
})(TextField);

export const CommentInput = withStyles({
  root: {
    width: "100%",
    "& label.Mui-focused": {
      color: "#2F80ED",
    },
    "& .MuiFormLabel-root": {
      fontSize: "0.875rem",
    },
    "& .MuiOutlinedInput-root": {
      fontSize: "0.875rem",
      padding: "18.5px 0px 18.5px 14px",
      "& fieldset": {
        border: "0px solid rgb(0 0 0 / 14%)",
        borderRadius: "4px",
        //border: "2px solid #2F80ED"
      },
      "&:hover fieldset": {
        border: "0px solid rgb(0 0 0 / 20%)",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid rgb(0 0 0 / 20%)",
      },
    },
    "& .MuiFormHelperText-contained": {
      color: "red",
      marginLeft: "3px",
    },
  },
  input: {
    fontSize: "0.875rem",
  },
})(TextField);
