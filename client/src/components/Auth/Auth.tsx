import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { LockOpenOutlined } from "@mui/icons-material";

import useStyles from "./styles";
import Input from "./Input";
import { setUserInfo } from "../../store/reducers/users";
import { RootState } from "../../store";

const initialUserInfo = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState(initialUserInfo);
  const [isSignup, setIsSignup] = useState(false);
  const user = useSelector((state: RootState) => state.users.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialUserInfo);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // if (isSignup) {
    //   dispatch(signup(form, history));
    // } else {
    //   dispatch(signin(form, history));
    // }
  };

  const googleSuccess = async (res: any) => {
    console.log(res);
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch(setUserInfo(result));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = (error: any) => {
    console.log("Google Sign In was unsuccessful. Try again later", error);
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    console.log(user),
    (
      <Container component="main" maxWidth="xs" className={classes.container}>
        <Paper className={classes.paper} elevation={6}>
          <Avatar>
            <LockOpenOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isSignup ? "Sign up" : "Sign in"}
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input
                    name="firstName"
                    label="First Name"
                    handleChange={handleChange}
                    autoFocus
                    half
                  />
                  <Input
                    name="lastName"
                    label="Last Name"
                    handleChange={handleChange}
                    half
                  />
                </>
              )}
              <Input
                name="email"
                label="Email Address"
                handleChange={handleChange}
                type="email"
              />
              <Input
                name="password"
                label="Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
              {isSignup && (
                <Input
                  name="confirmPassword"
                  label="Repeat Password"
                  handleChange={handleChange}
                  type="password"
                />
              )}
              <Grid item sm={12} xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  {isSignup ? "Sign Up" : "Sign In"}
                </Button>
              </Grid>
              <Grid item sm={12} xs={12}>
                <GoogleLogin
                  clientId="843480596594-uc2uvppct6t5lpmuctscf9v1953smioq.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <Button
                      className={classes.googleButton}
                      color="primary"
                      fullWidth
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      variant="contained"
                    >
                      Google Sign In
                    </Button>
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleError}
                  cookiePolicy="single_host_origin"
                />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item>
                <Button onClick={switchMode} color="inherit">
                  {isSignup
                    ? "Already have an account? Sign in"
                    : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    )
  );
};

export default SignUp;
