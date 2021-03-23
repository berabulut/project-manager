import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

export const inputStyles = makeStyles((theme) => ({
  container: {
    border: "1px solid #E0E0E0",
    boxSizing: "border-box",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    minHeight: "100px",
    padding: theme.spacing(2),
  },
  commentButton: {
    width: "90%",
    marginRight: "10px",
    marginTop: "8px",
    borderRadius: "8px",
    fontWeight: 500,
    fontSize: "0.775rem",
    lineHeight: "14px",
    letterSpacing: "-0.035em",
    height: "32px",
  },
  commentError: {
    fontSize: "0.825rem",
    color: "#f44336",
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(0.5)
  },
  buttonProgress: {
    color: "yellow",
    position: "absolute",
    marginTop: -25,
    marginLeft: 35,
  },
  avatar: {
    borderRadius: "8px"
  }
}), { index: 1 });

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
