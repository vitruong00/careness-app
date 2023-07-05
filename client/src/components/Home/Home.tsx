import React from "react";
import useStyles from "./styles";
import { Grid, Grow } from "@mui/material";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

const Home = () => {
  const classes = useStyles();
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
