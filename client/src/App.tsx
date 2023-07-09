import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "./store";
import useStyles from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/UI/NavBar/NavBar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

import { fetchAllPosts } from "./store/reducers/posts";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch<AppThunkDispatch>();

  useEffect(() => {
    dispatch(fetchAllPosts(1));
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
