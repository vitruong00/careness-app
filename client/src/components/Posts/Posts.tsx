import React from "react";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { PostDataProps } from "../../interfaces/CreatePost.interfaces";

import Post from "./Post/Post";

const Posts = () => {
  const allPosts = useSelector((state: RootState) => state.posts.allPosts);
  console.log(allPosts);
  const classes = useStyles();
  return !allPosts.length ? (
    <CircularProgress className={classes.spinner} />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {allPosts.map((post: PostDataProps) => (
        <Grid item key={post._id} xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
