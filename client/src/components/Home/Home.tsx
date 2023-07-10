import React, { useEffect } from "react";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { Grid, Grow } from "@mui/material";
import { AppThunkDispatch } from "../../store";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { fetchAllPosts } from "../../store/reducers/posts";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch<AppThunkDispatch>();

  useEffect(() => {
    dispatch(fetchAllPosts(1));
  }, []);
  return (
    <Grow in={true} className={classes.container}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="stretch"
        spacing={3}
        padding={3}
      >
        <Grid item xs={12} sm={7}>
          <Posts />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Form />
        </Grid>
      </Grid>
    </Grow>
  );
};

export default Home;
