import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "./store";
import { Grow, Grid } from "@mui/material";
import useStyles from "./styles";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import NavBar from "./components/UI/NavBar/NavBar";

import { fetchAllPosts } from "./store/reducers/posts";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch<AppThunkDispatch>();

  useEffect(() => {
    dispatch(fetchAllPosts(1));
  }, []);

  return (
    <>
      <NavBar />
      <Grow in={true}>
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
    </>
  );
};

export default App;
