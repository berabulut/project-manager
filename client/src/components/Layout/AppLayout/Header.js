import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Menu from "./Menu";
import { headerStyles } from "./styles";

const Header = () => {
  const history = useHistory();
  const classes = headerStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
            onClick={() => history.push("/")}
          >
            <DashboardIcon className={classes.menuIcon} />
            <Typography variant="h6" className={classes.menuTitle}>
              Trello
            </Typography>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Devchallanges Board
          </Typography>
          <Menu history={history} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
