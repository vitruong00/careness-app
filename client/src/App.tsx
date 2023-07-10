import "./App.css";
import { useEffect } from "react";
import useStyles from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { gapi } from "gapi-script";

import NavBar from "./components/UI/NavBar/NavBar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  const classes = useStyles();
  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        "843480596594-uc2uvppct6t5lpmuctscf9v1953smioq.apps.googleusercontent.com",
      plugin_name: "app",
    });
  });

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
