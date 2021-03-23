import React, { useState, useContext, useEffect } from "react";
import { Typography, Grid, Avatar } from "@material-ui/core";
import { UserAvatar } from "components";
import { UserContext } from "provider/UserProvider";
import { PopMenu, menuStyles } from "./styles";

const AssignMemberMenu = ({
  anchorEl,
  handleClose,
  assigments,
  assignMemberToTask,
}) => {
  const classes = menuStyles();

  const { renderedBoard } = useContext(UserContext);

  const [input, setInput] = useState("");
  const [memberList, setMemberList] = useState([]);

  const handleMemberClick = (uid) => {
    assignMemberToTask(uid);
    handleClose();
  };

  useEffect(() => {
    if (input.length > 0) {
      const list = memberList.filter((member) => {
        const name = member.name.toUpperCase();
        const text = input.toUpperCase();
        return name.includes(text);
      });
      setMemberList(list);
    }
  }, [input]);

  useEffect(() => {
    if (assigments && renderedBoard.userData) {
      const list = renderedBoard.userData.filter(
        (user) => !assigments.includes(user.uid)
      );
      setMemberList(list);
    }
  }, [assigments, renderedBoard.userData]);

  const handleOnKeyDown = (e) => {
    e.stopPropagation();
  };

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
              placeholder="Name"
              type="text"
              className={classes.input}
              onKeyDown={handleOnKeyDown}
            />
          </Grid>
        </Grid>
        {renderedBoard.userData &&
          renderedBoard.userData.length !== assigments.length && (
            <Grid item container className={classes.membersContainer} xs={11}>
              {memberList &&
                memberList.map((user, index) => {
                  return (
                    <Grid
                      index={index}
                      item
                      container
                      xs={12}
                      className={classes.member}
                      onClick={() => handleMemberClick(user.uid)}
                    >
                      <Grid item xs style={{ maxWidth: "32px" }}>
                        <UserAvatar user={user} styles={classes.avatar} />
                      </Grid>
                      <Grid
                        item
                        container
                        alignItems="center"
                        xs
                        style={{ maxWidth: "180px" }}
                      >
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
