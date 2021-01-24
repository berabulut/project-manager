import React from "react";
import { routes } from "./list";
import { AppLayout, AuthLayout } from "../components/Layout";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const Layout = (props) => (
  <Router>
    <Switch>
      {routes.map((val, key) => {
        return <Route exact path={val.path} component={val.component} />
      })}
    </Switch>
  </Router>
);

export default Layout;
