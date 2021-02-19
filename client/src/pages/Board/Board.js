import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FirebaseAuth } from "provider/AuthProvider";
import { AppLayout } from "layouts";
import { boardPageStyles } from "./styles";

const Profile = () => {
  const classes = boardPageStyles();
  const { userData } = useContext(FirebaseAuth);
  const { id } = useParams();
  return (
    <AppLayout>
      <div className={classes.root}>
        <h1>{id}</h1>
      </div>
    </AppLayout>
  );
};

export default Profile;
