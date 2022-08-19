import React from "react";
import Home from "./views/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Routess from "./routes/Routess";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import 'swiper/swpiper.min.css';
import { BrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import 'swiper/swiper.min.css';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Outlet />
        <Routess />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
