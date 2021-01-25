import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppLayout } from "../Layout";
import { FirebaseAuth } from "../../provider/AuthProvider";

const Home = () => {
  const { handleLogout } = useContext(FirebaseAuth);

  return (
    <AppLayout>
      <Link to="/login">
        <h1>HOME PAGEDIR BU</h1>
      </Link>
      <button style={{marginTop: "200px"}} onClick={handleLogout}>logout</button>
    </AppLayout>
  );
};

export default Home;
