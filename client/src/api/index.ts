import axios from "axios";
import { CreatePostProps } from "../interfaces/CreatePost.interfaces";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = async (newPost: CreatePostProps) => {
  const response = await axios.post(url, newPost);
  return response?.data;
};
