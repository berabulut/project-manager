import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Menu, TextField } from "@material-ui/core";

export const modalStyles = makeStyles((theme) => ({
  addList: {
    fontSize: "0.825rem",
    padding: "6px 12px",
  },
  cancelButton: {
    padding: "8px",
  },
}));

export const PopMenu = withStyles({
  paper: {
    border: "1px solid #E0E0E0",
    borderRadius: "8px",
    borderTop: "none",
    borderTopLeftRadius:"0px",
    borderTopRightRadius:"0px",
    width: "280px",
    backgroundColor: "#f5f5f5"
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
    MenuListProps={{ disablePadding: true }}
  />
));

export const NameInput = withStyles({
  root: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "8px",
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
