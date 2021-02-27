import { makeStyles } from "@material-ui/core/styles";
export const boardPageStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    marginTop: "-40px"
  },
  container: {
    marginTop: theme.spacing(5),
  },
}));

export const topSectionStyles = makeStyles((theme) => ({
  root: {},
  button: {
    width: "100%",
    maxWidth: "120px",
    backgroundColor: "#F2F2F2",
    borderRadius: "8px",
    color: "#828282",
    height: "44px",
    "&:hover": {
      backgroundColor: "#e6e5e5",
    },
  },
  menuButton: {
    width: "100%",
    maxWidth: "150px",
    backgroundColor: "#F2F2F2",
    borderRadius: "8px",
    color: "#828282",
    height: "44px",
    "&:hover": {
      backgroundColor: "#e6e5e5",
    },
  },
  menuIcon: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(-1),
  },
  icons: {
    width: "1rem",
    height: "1rem",
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(-1),
  },
  buttonText: {
    fontSize: "0.875rem",
    fontWeight: "500",
    lineHeight: "18px",
    fontFamily: "Poppins",
  },
  iconGrid: {
    marginLeft: theme.spacing(2),
  },
  avatar: {
    borderRadius: "8px",
  },
  addButton: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "8px",
    width: "40px",
    height: "40px",
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export const listAreaStyles = makeStyles((theme) => ({
  root: {
  },
  container: {
    minHeight: "80vh",
    marginTop: theme.spacing(3),
    backgroundSize: "cover",
    backgroundPositionY: "center",
    borderRadius: "8px"
  }
}))