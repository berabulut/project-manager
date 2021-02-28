import { withStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/core";

export const taskStyles = (theme) => ({
  container: {
    border: "1px solid lightgrey",
    borderRadius: "2px",
    padding: "8px",
    marginBottom: "8px",
    backgroundColor: "white",
  },
  dragging: {
    border: "1px solid lightgrey",
    borderRadius: "2px",
    padding: "8px",
    marginBottom: "8px",
    backgroundColor: "lightgreen",
  },
});

export const columnStyles = (theme) => ({
  container: {
    margin: "8px",
    border: "1px solid lightgrey",
    backgroundColor: "white",
    borderRadius: "8px",
    width: "250px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    padding: "8px",
  },
  taskList: {
    padding: "8px",
    transition: "background-color 0.2s ease",
    backgroundColor: "inherit",
    flexGrow: "1",
  },
  dragging: {
    padding: "8px",
    transition: "background-color 0.2s ease",
    backgroundColor: "lightgrey",
    flexGrow: "1",
    minHeight: "100px",
  },
  addAnotherCard: {
    borderRadius: "8px",
    width: "100%",
    textAlign: "start",
  },
  addAnotherList: {
    maxHeight: "45px",
    width: "250px",
    marginTop: "8px",
    borderRadius: "8px",
    textAlign: "start",
    alignItems: "start",
    backgroundColor: "hsl(0deg 0% 100% / 80%)",
    "&:hover": {
      backgroundColor: "hsl(0deg 0% 100% / 90%)",
    },
  },
  buttonText: {
    fontSize: "0.875rem",
    fontWeight: "500",
  },
  listNameMenu: {
    width: "250px",
  },
  listNameInput: {
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
    borderRadius: "3px",
    border: "2px solid #E0E0E0",
    transition: "0.3s",
    "&:hover": {
      borderColor: "#757575",
    },
  },
  addList: {
    fontSize: "0.825rem",
    padding: "6px 12px",
  },
  cancelButton: {
    padding: "8px",
  },
});

export const PopMenu = withStyles({
  paper: {
    border: "1px solid #E0E0E0",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    width: "250px",
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
