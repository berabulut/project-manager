import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Menu, MenuItem } from "@material-ui/core";

export const footerStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export const headerStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.05)",
    color: "#333333",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    borderRadius: "0px",
    "&:hover": {
      background: "#ffffff",
    },
  },
  menuIcon: {
    color: "#2F80ED",
    fontSize: "2rem",
  },
  menuTitle: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1.5),
    color: "#333333",
  },
  title: {
    flexGrow: 1,
  },
}));

export const menuStyles = makeStyles((theme) => ({
  popButton: {
    marginRight: theme.spacing(3),
    color: "#333333",
    borderRadius: "0px",
    "&:hover": {
      background: "#ffffff",
    },
  },
  avatar: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
  },
  username: {
    marginLeft: theme.spacing(1.5),
    fontWeight: "bold",
  },
  arrowIcon: {
    marginLeft: theme.spacing(2),
  },
  menuDivider: {
    width: "85%",
    margin: "auto",
  }
}));

export const PopMenu = withStyles({
  paper: {
    border: "1px solid #E0E0E0",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
    borderRadius: "12px",
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

export const PopMenuItem = withStyles((theme) => ({
  root: {
    backgroundColor: "F2F2F2",
    borderRadius: "8px",
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(1.5),
    marginTop: theme.spacing(1.8),
    marginBottom: theme.spacing(1.8),
    "&:focus": {
      backgroundColor: "#F2F2F2",
    },
    "& .MuiListItemIcon-root" : {
      minWidth: "40px"
    },
    "& .MuiTypography-body1" : {
      fontWeight: "bold",
      fontSize: "0.9rem"
    }
  }
}))(MenuItem);