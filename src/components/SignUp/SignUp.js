import React from "react";
import { Link } from "react-router-dom";
import { AuthLayout, AuthTheme } from "../Layout";
import {
  Avatar,
  Container,
  Button,
  CssBaseline,
  Typography,
  Grid,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import { LockOutlined, Mail, Lock, Twitter, GitHub } from "@material-ui/icons";
import { Google } from "../Icons";
import { loginStyles, LoginTextField } from "./styles";

const SignUp = () => {
  const classes = loginStyles(AuthTheme);
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
            <form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <LoginTextField
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
                  >
                    <Google />
                  </IconButton>
                </Grid>
                <Grid item xs={3}>
                  <IconButton
                    aria-label="upload picture"
                    component="span"
                    className={classes.iconButton}
                  >
                    <Twitter />
                  </IconButton>
                </Grid>
                <Grid item xs={3}>
                  <IconButton
                    aria-label="upload picture"
                    component="span"
                    className={classes.iconButton}
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
    </AuthLayout>
  );
};

export default SignUp;
