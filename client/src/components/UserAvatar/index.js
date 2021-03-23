import React from "react";
import { Avatar } from "@material-ui/core";

const UserAvatar = ({ user, styles, isTask }) => {
  return (
    <div>
      {user && user.picture ? (
        <Avatar
          className={styles}
          src={user.picture}
          alt={user.name + " avatar"}
          style={{
            borderRadius: "8px",
            width: isTask && "35px",
            height: isTask && "35px",
          }}
        />
      ) : (
        <Avatar
          className={styles}
          alt="user avatar"
          src={user && user.picture}
          style={{
            borderRadius: "8px",
            width: isTask && "35px",
            height: isTask && "35px",
          }}
        >
          {user && user.name && user.name[0].toUpperCase()}
        </Avatar>
      )}
    </div>
  );
};

export default UserAvatar;
