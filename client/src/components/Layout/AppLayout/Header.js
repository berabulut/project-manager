import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core";
import { Dashboard, Apps } from "@material-ui/icons";
import Menu from "./Menu";
import { headerStyles } from "./styles";

const Header = () => {
  let history = useHistory();
  let location = useLocation();
  const classes = headerStyles();

  const [onAllBoards, setOnAllBoards] = useState(true);

  React.useEffect(() => {
    if (location.pathname === "/boards") {
      setOnAllBoards(true);
    } else {
      setOnAllBoards(false);
    }
  }, []);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
            onClick={() => history.push("/boards")}
          >
            <Dashboard className={classes.menuIcon} />
            <Typography variant="h6" className={classes.menuTitle}>
              Trello
            </Typography>
          </IconButton>
          <Grid container justify="flex-start" alignItems="center" spacing={3}>
            <Grid className={classes.titleContainer} item container justify="center" xs={2}>
              <Typography variant="h6" className={classes.title}>
                Devchallanges Board
              </Typography>
            </Grid>
            <Grid item xs={1}>
              
            </Grid>
            <Grid item container xs={3}>
              <IconButton className={classes.allBoardsButton}>
                <Apps className={classes.allBoardsIcon} />
                <Typography className={classes.allBoardsText}>
                  All Boards
                </Typography>
              </IconButton>
            </Grid>
          </Grid>
          <Menu history={history} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
