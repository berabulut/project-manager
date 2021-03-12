import React, { useEffect, useState, useContext } from "react";
import { Typography, Grid, Button, Avatar } from "@material-ui/core";
import { UserContext } from "provider/UserProvider";
import { BoardHelpers } from "helpers";
import { PopMenu, menuStyles } from "./styles";

const AssignMemberMenu = ({ anchorEl, handleClose }) => {
  const classes = menuStyles();

  const { renderedBoard, setRenderedBoard } = useContext(UserContext);

  const [input, setInput] = useState("");

  return (
    <div>
      <PopMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => {
          handleClose();
          setInput("");
        }}
      >
        <Grid className={classes.header} container>
          <Grid item xs={12}>
            <Typography className={classes.headerTitle} component="p">
              Assign Member
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.content} item container>
          <Grid item container xs={12} className={classes.inputContainer}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="User address"
              type="text"
              className={classes.input}
            />
          </Grid>
        </Grid>
        {renderedBoard.userData && (
          <Grid item container className={classes.membersContainer} xs={11}>
            {renderedBoard.userData.map((user, index) => {
              return (
                <Grid index={index} item container xs={12} className={classes.member}>
                  <Grid item xs style={{maxWidth: "32px"}}>
                    <Avatar
                      className={classes.avatar}
                      src={user.picture}
                      alt={user.name}
                    />
                  </Grid>
                  <Grid item container alignItems="center" xs style={{maxWidth: "180px"}}>
                    <Typography className={classes.name}>
                      {user.name}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        )}
      </PopMenu>
    </div>
  );
};

export default AssignMemberMenu;
