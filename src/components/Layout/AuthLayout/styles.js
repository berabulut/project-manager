import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#2F80ED"
    },
    info: {
      main: "#BDBDBD"
    }
  }
});

export const containerStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#252329",
    display: "grid",
  },
}));
