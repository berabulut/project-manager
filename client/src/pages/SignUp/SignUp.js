import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseAuth } from "provider/AuthProvider";
import { AuthLayout, AuthTheme } from "layouts";
import { AuthForm, Alert } from "components";
import { loginStyles } from "./styles";
import { Container, CssBaseline, Snackbar } from "@material-ui/core";

const SignUp = () => {
  const classes = loginStyles(AuthTheme);
  const history = useHistory();
  const {
    handleSignUp,
    handleGoogleLogin,
    handleTwitterLogin,
    handleGithubLogin,
    setInputs,
    errors,
    token,
  } = useContext(FirebaseAuth);

  const [alertOpen, setAlertOpen] = useState(false);
  const [alert, setAlert] = useState("");
  const constants = {
    title: "Sign Up",
    buttonText: "CREATE YOUR ACCOUNT",
    info: "Already a member? ",
    linkText: "Login",
    link: "/login",
  };

  useEffect(() => {
    if (token) {
      history.push("/boards");
    }
  }, [token]);

  useEffect(() => {
    if (errors.length > 0) {
      setAlertOpen(true);
      setAlert(errors[errors.length - 1]);
    }
  }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp()
      .then(() => history.push("/login"))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertOpen(false);
  };

  return (
    <AuthLayout>
      <div className={classes.root}>
        <Container className={classes.container} component="main" maxWidth="xs">
          <CssBaseline />
          <AuthForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleGithubLogin={handleGithubLogin}
            handleGoogleLogin={handleGoogleLogin}
            handleTwitterLogin={handleTwitterLogin}
            constants={constants}
          />
        </Container>
      </div>
      <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {alert}
        </Alert>
      </Snackbar>
    </AuthLayout>
  );
};

export default SignUp;
