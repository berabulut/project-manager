import {
  makeStyles,
  withStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import { Menu, MenuItem } from "@material-ui/core";

export const AppTheme = createMuiTheme({
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary: {
      main: "#2F80ED",
    },
    secondary: {
      main: "#F2F2F2",
    },
  },
  overrides: {
    MuiButton: {
      // Name of the rule
      label: {
        textTransform: "initial",
      },
    },
  },
});

export const LayoutStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

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
  divider: {
  },
  allBoardsButton: {
    borderRadius: "8px",
    backgroundColor: "#F2F2F2"
  },
  allBoardsText: {
    color: "#828282",
    fontSize: "0.75rem",
    fontWeight: "500",
    lineHeight: "18px",
    letterSpacing: "-0.035em",
    fontFamily: "Poppins"
  },
  allBoardsIcon : {
    color: "#828282"
  }
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
    fontWeight: "600",
  },
  arrowIcon: {
    marginLeft: theme.spacing(2),
  },
  menuDivider: {
    width: "85%",
    margin: "auto",
  },
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
    "& .MuiListItemIcon-root": {
      minWidth: "40px",
    },
    "& .MuiTypography-body1": {
      fontWeight: "bold",
      fontSize: "0.9rem",
    },
  },
}))(MenuItem);
