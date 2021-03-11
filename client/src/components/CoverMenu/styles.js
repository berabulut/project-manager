import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Menu, MenuItem } from "@material-ui/core";

export const coverStyles = makeStyles((theme) => ({
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
    paddingBottom: theme.spacing(1.8)
  },
  imageContainer: {
    marginBottom: theme.spacing(1.25)
  },
  image:{
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "8px",
    transition: "all .2s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.05)"
    }
  }
}));

export const keywordSearchStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgb(0 0 0 / 15%)"
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
    borderRadius: "8px"
  },
  iconButton: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: "8px",
    marginRight: theme.spacing(0.2),
    height: "92%",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  error: {
    fontSize: "0.825rem",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    paddingLeft: theme.spacing(0.5),
    color: "#f44336",
    fontWeight: "500"
  },
}))

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
