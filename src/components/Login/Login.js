import React from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../Layout";

const Login = () => {
  return (
    <AuthLayout>
      <Link to="/">
        <h1>HA BU LOGIN</h1>
      </Link>
    </AuthLayout>
  );
};

export default Login;
