import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { containerStyles, theme } from "./styles";
import { ThemeProvider } from "@material-ui/styles";
import { Link } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const classes = containerStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Header />
        <>{children}</>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default AuthLayout;
