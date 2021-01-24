import React from "react";
import { Link } from "react-router-dom";
import { AppLayout } from "../Layout";

const Home = () => {
  return (
    <AppLayout>
      <Link to="/login">
        <h1>HOME PAGEDIR BU</h1>
      </Link>
    </AppLayout>
  );
};

export default Home;
