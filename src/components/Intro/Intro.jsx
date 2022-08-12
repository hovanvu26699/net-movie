import React, { useState } from "react";
import ReactPlayer from "react-player";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const Intro = () => {
  const [isMuted, setIsMuted] = useState(false);
  return (
    <div className="intro-container">
      <ReactPlayer
        playing={true}
        loop={true}
        volume={1}
        width="100%"
        height="100%"
        muted={isMuted}
        url="https://vimeo.com/709369861"
        className="videoIntro"
      />
      <div className="info-Intro">
        <h1 className="heading-Intro">[Netflix] 안나라수마나라</h1>
        <p className="overview-Intro">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more. Watch a selection of new movies and TV shows
          without adding any payment details!
        </p>
      </div>
      {isMuted ? (
        <VolumeOffIcon
          className="btnVolume"
          onClick={() => setIsMuted((prev) => !prev)}
        />
      ) : (
        <VolumeUpIcon
          className="btnVolume"
          onClick={() => setIsMuted((prev) => !prev)}
        />
      )}
      <div className="fadeBottom"></div>
    </div>
  );
};

export default Intro;
