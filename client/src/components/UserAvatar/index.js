import React from "react";
import { Avatar } from "@material-ui/core";

const UserAvatar = ({ user, styles }) => {
  return (
    <div>
      {user && user.picture ? (
        <Avatar
          className={styles}
          src={user.picture}
          alt={user.name + " avatar"}
        />
      ) : (
        <Avatar className={styles} alt="user avatar" src={user && user.picture}>
          {user && user.name && user.name[0].toUpperCase()}
        </Avatar>
      )}
    </div>
  );
};

export default UserAvatar;
