import React from "react";
import Intro from "../components/Intro/Intro";
import MainContent from "../components/MainContent";


const Home = () => {
  return (
    <>
      <div className="intro">
        <Intro />
      </div>
      <div className="main-content">
        <MainContent />
      </div>


    </>
  );
};

export default Home;
