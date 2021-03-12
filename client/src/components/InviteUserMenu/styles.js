import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/core";

export const menuStyles = makeStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    paddingTop: theme.spacing(1.8),
    outlineWidth: "0",
  },
  headerTitle: {
    color: "black",
    fontWeight: "600",
    fontSize: "1rem",
  },
  headerDescription: {
    marginTop: theme.spacing(0.5),
    color: "#828282",
    fontSize: "0.875rem",
  },
  content: {
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    paddingTop: theme.spacing(1.8),
    paddingBottom: theme.spacing(1.8),
  },
  inputContainer: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgb(0 0 0 / 15%)",
  },
  input: {
    width: "100%",
    height: "100%",
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    outlineWidth: "0",
    color: "#757575",
    letterSpacing: "-0.035em",
    fontWeight: "500",
    fontFamily: "Poppins",
    fontSize: "0.875rem",
    border: "none",
    borderRadius: "8px",
  },
  color: {
    borderRadius: "4px",
    height: "28px",
    width: "90%",
    opacity: "0.92",
    "&:hover": {
      cursor: "pointer",
      opacity: "1",
      transition: "all .2s ease-in-out",
    },
  },
  addButton: {
    width: "30%",
    marginRight: "10px",
    marginTop: "5px",
    borderRadius: "8px",
    fontWeight: 500,
    fontSize: "0.775rem",
    lineHeight: "14px",
    letterSpacing: "-0.035em",
    height: "32px",
    marginBottom: theme.spacing(2)
  },
  error: {
    color: "#EB5757",
    marginBottom: theme.spacing(1),
    fontWeight: "600",
    fontSize: "0.825rem"
  }
}));

export const PopMenu = withStyles({
  paper: {
    border: "1px solid #E0E0E0",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
    borderRadius: "12px",
    width: "300px",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
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
