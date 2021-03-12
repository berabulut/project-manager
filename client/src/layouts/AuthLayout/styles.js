import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

export const AuthTheme = createMuiTheme({
  typography: {
    fontFamily: "Poppins !important",
  },
  palette: {
    primary: {
      main: "#2F80ED",
    },
    info: {
      main: "#BDBDBD",
    },
  },
});

export const containerStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#252329",
    display: "grid",
  },
}));

export const footerStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: "#252329"
  },
  divider: {
    backgroundColor: "#828282"
  },
  footerText: {
    color: "#828282",
    textAlign: "start",
    fontWeight: "500",
    paddingLeft: "10px"
  },
  gridContainer: {
    marginTop: "15px",
  },
  linkGrid: {
    textAlign: "center"
  }
}));
