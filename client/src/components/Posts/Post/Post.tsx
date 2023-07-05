import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import {
  ThumbUpAlt,
  DeleteOutline,
  MoreHorizOutlined,
  MoreHoriz,
  MoreVertOutlined,
} from "@mui/icons-material";

import { PostDataProps } from "../../../interfaces/CreatePost.interfaces";
import moment from "moment";

export interface PostProps {
  post: PostDataProps;
}

const Post = (props: PostProps) => {
  const classes = useStyles();
  console.log(props.post.message);
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={props.post.selectedFile}
        title={props.post.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.post.message}
        </Typography>
      </CardContent>
      <div className={classes.overlay}>
        <Typography variant="body2">
          {moment(props.post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <IconButton aria-label="settings">
          <MoreVertOutlined />
        </IconButton>
      </div>
    </Card>
  );
};

export default Post;
