import React from "react";
import Home from "./views/Home";
import MovieDetail from "./views/MovieDetail"
import NewMovie from "./views/NewMovie";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp"
import { Outlet } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Outlet>
        <Home />
      </Outlet>
    </div>
  );
};

export default App;
