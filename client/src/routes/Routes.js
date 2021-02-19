import React, { useContext } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { FirebaseAuth } from "provider/AuthProvider";
import { routes } from "./route-list";
import { Login } from "pages";

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
          } else if (val.path === "/") {
            return (
              <Route exact path="/" render={() => <Redirect to="/boards" />} />
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
