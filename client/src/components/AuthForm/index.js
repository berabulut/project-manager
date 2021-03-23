import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  Typography,
  Grid,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import { LockOutlined, Mail, Lock, Twitter, GitHub } from "@material-ui/icons";
import { Google } from "../Icons";
import { AuthTheme } from "layouts";
import { formStyles, LoginTextField } from "./styles";

const AuthForm = ({
  handleSubmit,
  handleChange,
  handleGoogleLogin,
  handleGithubLogin,
  handleTwitterLogin,
  constants,
}) => {
  const classes = formStyles(AuthTheme);
  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>
      <Typography className={classes.signUpText} component="h1" variant="h5">
        {constants.title}
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
          {constants.buttonText}
        </Button>
        <Grid className={classes.gridContainer} container justify="center">
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
        <Grid className={classes.gridContainer} container justify="flex-end">
          <Grid item>
            <Typography className={classes.infoText} variant="body2">
              {constants.info}
              <Link
                className={classes.link}
                to={constants.link}
                variant="body2"
              >
                {constants.linkText}
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              className={classes.infoText}
              variant="body2"
              style={{ marginTop: "24px", textAlign: "end" }}
            >
              email : test@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              className={classes.infoText}
              variant="body2"
              style={{ marginTop: "8px", textAlign: "end" }}
            >
              password : Trellotest.
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AuthForm;
