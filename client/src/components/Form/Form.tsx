import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper, InputBase } from "@mui/material";
import { createPost } from "../../api";
import { CreatePostProps } from "../../interfaces/CreatePost.interfaces";
import { RootState } from "../../store";

const Form = () => {
  const allPosts = useSelector((state: RootState) => state.posts);
  const [postData, setPostData] = useState<CreatePostProps>({
    title: "",
    message: "",
    selectedFile: "",
  });
  const classes = useStyles();

  const handleSubmit = () => {
    createPost(postData)
      .then()
      .catch((error) => console.log(error.message));
  };

  const handleClear = () => {
    setPostData({ title: "", message: "", selectedFile: "" });
  };

  const onHandleImage = (e: any) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setPostData({ ...postData, selectedFile: reader.result as string });
    };
    reader.onerror = (error) => {
      console.log("Error on reading file", error);
    };
  };

  return (
    console.log(postData),
    (
      <Paper className={classes.paper}>
        <form noValidate className={classes.form} onSubmit={handleSubmit}>
          <Typography variant="h6" component="h3">
            Creating A Memory
          </Typography>
          <TextField
            margin="normal"
            label="Title"
            name="title"
            variant="outlined"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <TextField
            margin="normal"
            label="Message"
            name="message"
            variant="outlined"
            fullWidth
            multiline
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <InputBase
            type="file"
            name="file"
            className={classes.fileInput}
            onChange={onHandleImage}
          />
          <div className={classes.buttonsWrapper}>
            <Button variant="contained" size="large" type="submit" fullWidth>
              Submit
            </Button>
            <Button
              variant="outlined"
              size="large"
              type="submit"
              onClick={() => handleClear}
              fullWidth
            >
              Clear
            </Button>
          </div>
        </form>
      </Paper>
    )
  );
};

export default Form;
