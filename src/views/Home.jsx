import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro/Intro";
// import Content from "../components/contents/Content";
import { BrowserRouter as Router } from "react-router-dom";
import MainContent from "../components/MainContent";
import SignIn from "./SignIn";

const Home = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="navbar">
        <Router>
          <Navbar />
        </Router>
      </div>
      <div className="intro">
        <Intro />
      </div>
      <div className="main-content">
        <MainContent />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
