import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { AppTheme } from "./styles";
import { ThemeProvider } from "@material-ui/styles";

const AppLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={AppTheme}>
        <Header />
        <>{children}</>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default AppLayout;
