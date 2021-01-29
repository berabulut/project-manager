import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FirebaseAuth } from "../../provider/AuthProvider";
import { AuthLayout, AuthTheme } from "../Layout";
import { Alert } from "../Custom";
import { Google } from "../Icons";
import {
  Avatar,
  Container,
  Button,
  CssBaseline,
  Typography,
  Grid,
  IconButton,
  InputAdornment,
  Snackbar,
} from "@material-ui/core";
import { LockOutlined, Mail, Lock, Twitter, GitHub } from "@material-ui/icons";
import { loginStyles, LoginTextField } from "./styles";

const SignUp = () => {
  const classes = loginStyles(AuthTheme);
  const history = useHistory();
  const { handleSignUp, handleGoogleLogin, handleTwitterLogin, handleGithubLogin, setInputs, errors, token } = useContext(
    FirebaseAuth
  );

  const [alertOpen, setAlertOpen] = useState(false);
  const [alert, setAlert] = useState("");

  useEffect(() => {
    if (token) {
      history.push("/");
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
    handleSignUp();
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
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlined />
            </Avatar>
            <Typography
              className={classes.signUpText}
              component="h1"
              variant="h5"
            >
              Sign Up
            </Typography>
            <form onSubmit={handleSubmit} className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <LoginTextField
                    onChange={handleChange}
                    variant="outlined"
                    type="dark"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="off"
                    InputProps={{
                      className: classes.inputColor,
                      startAdornment: (
                        <InputAdornment position="start">
                          <Mail />
                        </InputAdornment>
                      ),
                    }}
                    InputLabelProps={{
                      className: classes.inputLabelColor,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <LoginTextField
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="off"
                    className={classes.TextField}
                    InputProps={{
                      className: classes.inputColor,
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock />
                        </InputAdornment>
                      ),
                    }}
                    InputLabelProps={{
                      className: classes.inputLabelColor,
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Create Your Account
              </Button>
              <Grid
                className={classes.gridContainer}
                container
                justify="center"
              >
                <Grid item>
                  <Typography className={classes.infoText} variant="body2">
                    or continue with these
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                className={classes.gridContainer}
                container
                spacing={3}
                justify="center"
                alignItems="center"
              >
                <Grid item xs={3}>
                  <IconButton
                    aria-label="upload picture"
                    component="span"
                    className={classes.iconButton}
                    onClick={() => handleGoogleLogin()}
                  >
                    <Google />
                  </IconButton>
                </Grid>
                <Grid item xs={3}>
                  <IconButton
                    aria-label="upload picture"
                    component="span"
                    className={classes.iconButton}
                    onClick={() => handleTwitterLogin()}
                  >
                    <Twitter />
                  </IconButton>
                </Grid>
                <Grid item xs={3}>
                  <IconButton
                    aria-label="upload picture"
                    component="span"
                    className={classes.iconButton}
                    onClick={() => handleGithubLogin()}
                  >
                    <GitHub />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid
                className={classes.gridContainer}
                container
                justify="flex-end"
              >
                <Grid item>
                  <Typography className={classes.infoText} variant="body2">
                    Already a member?&nbsp;
                    <Link className={classes.link} to="/login" variant="body2">
                      Login
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </div>
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
