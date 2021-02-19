import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Menu, MenuItem } from "@material-ui/core";

export const visibilityStyles = makeStyles((theme) => ({
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
  firstRow: {
    marginBottom: theme.spacing(1),
  },
  itemIcon: {
    fontSize: "1rem",
    color: "#828282",
  },
  itemTitle: {
    fontSize: "0.875rem",
    color: "black",
    paddingLeft: theme.spacing(1),
  },
  itemDescription: {
    fontSize: "0.75rem",
    color: "#828282",
  },
}));

export const PopMenuItem = withStyles((theme) => ({
  root: {
    whiteSpace: "inherit",
    borderRadius: "8px",
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(1.5),
    marginTop: theme.spacing(1.8),
    marginBottom: theme.spacing(1.8),
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    paddingTop: theme.spacing(1.8),
    "&:focus": {
      backgroundColor: "#F2F2F2",
    },
    "& .MuiListItemIcon-root": {
      minWidth: "40px",
    },
  },
}))(MenuItem);

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
