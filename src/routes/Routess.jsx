import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import MovieDetail from "../views/MovieDetail";
import SignIn from "../views/SignIn";
import SignUp from '../views/SignUp';
import Category from "../views/Category";

const Routess = () => {
  return (
    <Routes>
      <Route path="/:category/search/:keyword" element={<Category />} />
      <Route path="/:category" element={<Category />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/:category/:id" element={<MovieDetail />} />
      <Route index element={<Home />} />
    </Routes>
  );
};

export default Routess;
