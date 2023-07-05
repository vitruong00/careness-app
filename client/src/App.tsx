import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "./store";
import useStyles from "./styles";

import NavBar from "./components/UI/NavBar/NavBar";
import Home from "./components/Home/Home";

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
      <Home />
    </>
  );
};

export default App;
