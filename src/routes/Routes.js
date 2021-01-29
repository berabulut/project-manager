import React, { useContext } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { FirebaseAuth } from "../provider/AuthProvider";
import { routes } from "./route-list";
import { AppLayout, AuthLayout } from "../components/Layout";
import { Login } from "../components/Login";


const Layout = (props) => {
  const { token } = useContext(FirebaseAuth);
  return (
    <Router>
      <Switch>
        {routes.map((val, key) => {
          const Component = val.component;
          if (val.path === "/signup") {
            return (
              <Route
                key={key}
                component={val.component}
                exact
                path={val.path}
              />
            );
          } else {
            return (
              <Route
                key={key}
                render={(rProps) =>
                  token === null ? <Login /> : <Component />
                }
                exact
                path={val.path}
              />
            );
          }
        })}
      </Switch>
    </Router>
  );
};

export default Layout;
