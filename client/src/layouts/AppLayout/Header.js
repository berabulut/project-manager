import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Dashboard, Apps } from "@material-ui/icons";
import Menu from "./Menu";
import { headerStyles } from "./styles";
import { UIContext } from "provider/UIProvider";

const Header = () => {
  let history = useHistory();
  const classes = headerStyles();
  const { showAllBoards, renderedBoard } = useContext(UIContext);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar className={classes.toolbar}>
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
          {showAllBoards === true ? (
            <div className={classes.boardsContainer}>
              <Typography className={classes.title}>
                {renderedBoard.title}
              </Typography>
              <IconButton
                onClick={() => history.push("/boards")}
                className={classes.allBoardsButton}
              >
                <Apps className={classes.allBoardsIcon} />
                <Typography className={classes.allBoardsText}>
                  All Boards
                </Typography>
              </IconButton>
            </div>
          ) : (
            <div className={classes.boardsContainer}></div>
          )}
          <Menu history={history} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
