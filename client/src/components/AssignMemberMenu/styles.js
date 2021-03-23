import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/core";

export const menuStyles = makeStyles(
  (theme) => ({
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
    membersContainer: {
      background: "#FFFFFF",
      border: "1px solid #E0E0E0",
      borderRadius: "8px",
      boxShadow: "0px 2px 8px rgb(0 0 0 / 10%)",
      margin: "auto",
      marginBottom: theme.spacing(1.5),
      padding: theme.spacing(1),
    },
    member: {
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      borderRadius: "8px",
      transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      "&:hover": {
        backgroundColor: "#d7ffd9",
        cursor: "pointer",
      },
    },
    avatar: {
      borderRadius: "8px",
      height: "2rem",
      width: "2rem",
    },
    name: {
      fontWeight: 600,
      fontSize: "0.875rem",
      lineHeight: "18px",
      letterSpacing: "-0.035em",
      paddingLeft: theme.spacing(2),
    },
  }),
  { index: 1 }
);

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
