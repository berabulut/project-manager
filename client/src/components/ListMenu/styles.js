import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/core";

export const listMenuStyles = makeStyles((theme) => ({
  itemContainer: {
    padding: "12px 14px",
    transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#F2F2F2",
    },
  },
  buttonText: {
    fontWeight: 500,
    fontSize: "0.825rem",
    lineHeight: "15px",
    letterSpacing: "-0.035em",
    color: "#828282",
  },
}));

export const PopMenu = withStyles({
  paper: {
    border: "1px solid #E0E0E0",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
    borderRadius: "12px",
    width: "150px",
    outlineWidth: "0px",
    outlineColor: "white",
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
