import React from "react";
import Movie from "./contents/Movie";
import Right from "./contents/Right";

import SlideMovie from "./contents/SlideMovie";

const MainContent = () => {
  return (
    <div className="mainContent-conntainer">
      <div className="bestMovie">
        <SlideMovie title="PHIM ĐỀ CỬ" />
      </div>
      <div className="newMovie">
        <SlideMovie title="PHIM MỚI" />
      </div>
      <div className="mainContent">
        <div className="mainRight">
          <div className="cinemaMovie">
            <Movie className="mainMovie" title="PHIM CHIẾU RẠP" />
          </div>
          <div className="movieLe">
            <Movie title="PHIM LẺ" />
          </div>
          <div className="seriesMovie">
            <Movie title="PHIM BỘ" />
          </div>
          <div className="seriesMovie">
            <Movie title="PHIM HOẠT HÌNH" />
          </div>
        </div>
        <div className="contentRight">
          <Right />
          <Right />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
