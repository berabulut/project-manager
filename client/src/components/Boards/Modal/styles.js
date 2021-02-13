import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Menu, MenuItem } from "@material-ui/core";

export const modalStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "white",
    width: "500px",
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
    marginBottom: theme.spacing(4),
  },
  image: {
    width: "100%",
    height: "100px",
    borderRadius: "8px",
    objectFit: "cover",
  },
  input: {
    width: "100%",
    borderRadius: "8px",
    border: "2px solid #E0E0E0",
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    outlineWidth: "0",
    color: "#757575",
    letterSpacing: "-0.035em",
    fontWeight: "500",
    fontFamily: "Poppins",
    fontSize: "0.875rem",
  },
  button: {
    width: "90%",
    backgroundColor: "#F2F2F2",
    borderRadius: "8px",
    color: "#828282",
    height: "44px",
    "&:hover": {
      backgroundColor: "#e6e5e5",
    },
  },
  icons: {
    width: "1rem",
    height: "1rem",
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(-2),
  },
  buttonText: {
    fontSize: "0.875rem",
    fontWeight: "500",
    lineHeight: "18px",
    fontFamily: "Poppins",
  },
  cancelButton: {
    backgroundColor: "white",
    borderRadius: "8px",
    color: "#828282",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    
  },
  createButton: {
    borderRadius: "8px",
  },
}));

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
    marginBottom: theme.spacing(1)
  },
  itemIcon: {
    fontSize: "1rem",
    color: "#828282",
  },
  itemTitle: {
    fontSize: "0.875rem",
    color: "black",
    paddingLeft: theme.spacing(1)
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
    "& .MuiTypography-body1": {
      fontWeight: "bold",
      fontSize: "0.9rem",
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
