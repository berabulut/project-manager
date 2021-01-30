import React from "react";
import Footer from "./Footer";
import { containerStyles, AuthTheme } from "./styles";
import { ThemeProvider } from "@material-ui/styles";


const AuthLayout = ({ children }) => {
  const classes = containerStyles();
  return (
    <ThemeProvider theme={AuthTheme}>
      <div className={classes.root}>
        <>{children}</>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default AuthLayout;
