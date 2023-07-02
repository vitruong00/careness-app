import React, { useState } from "react";
import useStyles from "./styles";
import { theme } from "../../styles";
import {
  TextField,
  Button,
  Typography,
  Paper,
  OutlinedInput,
  InputBase,
} from "@mui/material";
import { blue } from "@mui/material/colors";

export interface PostDataProps {
  creator: string;
  title: string;
  message: string;
  tags: string;
  selectedFile: string;
}

const Form = () => {
  const [postData, setPostData] = useState<PostDataProps>({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const classes = useStyles();

  const handleSubmit = () => {};

  const handleClear = () => {};

  return (
    <Paper className={classes.paper}>
      <form noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h6" component="h3">
          Creating A Memory
        </Typography>
        <TextField
          margin="normal"
          label="Creator"
          name="creator"
          variant="outlined"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          margin="normal"
          label="Title"
          name="title"
          variant="outlined"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          margin="normal"
          label="Message"
          name="message"
          variant="outlined"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          margin="normal"
          label="Tags"
          name="tags"
          variant="outlined"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <InputBase type="file" name="file" className={classes.fileInput} />
        <div className={classes.buttonsWrapper}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="outlined"
            size="large"
            type="submit"
            onClick={handleClear}
            fullWidth
          >
            Clear
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
