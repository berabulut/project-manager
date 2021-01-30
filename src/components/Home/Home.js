import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppLayout } from "../Layout";
import { FirebaseAuth } from "../../provider/AuthProvider";

const Home = () => {
  const { handleLogout } = useContext(FirebaseAuth);

  return (
    <AppLayout>
    </AppLayout>
  );
};

export default Home;
