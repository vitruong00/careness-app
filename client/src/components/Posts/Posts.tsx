import React from "react";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Posts = () => {
  const allPosts = useSelector((state: RootState) => state.posts);
  const classes = useStyles();
  return <div>posts</div>;
};

export default Posts;
