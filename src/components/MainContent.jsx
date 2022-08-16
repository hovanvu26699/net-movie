import React from "react";
import Movie from "./contents/Movie";
import Right from "./contents/Right";

import SlideMovie from "./contents/SlideMovie";

const dataMovie = [
  {
    id: "1",
    img: "https://st.quantrimang.com/photos/image/2020/11/06/top-movie-netflix-2.jpg",
    name: "Enola Hoimes",
    rate: "5.5",
  },
  {
    id: "2",
    img: "https://cdnimg.vietnamplus.vn/uploaded/hotnnz/2018_04_10/dol_sieusaosieungo768x1139.jpg",
    name: "Siêu Sao Siêu Ngố",
    rate: "7.3",
  },
  {
    id: "3",
    img: "https://cdnimg.vietnamplus.vn/uploaded/hotnnz/2018_04_10/dol_emlabanoicuaanh768x1094.jpg",
    name: "Em Là Bà Nội Của Anh",
    rate: "8.7",
  },
  {
    id: "4",
    img: "https://st.quantrimang.com/photos/image/2020/11/06/top-movie-netflix-2.jpg",
    name: "Enola Hoimes",
    rate: "5.5",
  },
  {
    id: "5",
    img: "https://cdnimg.vietnamplus.vn/uploaded/hotnnz/2018_04_10/dol_sieusaosieungo768x1139.jpg",
    name: "Siêu Sao Siêu Ngố",
    rate: "7.3",
  },
  {
    id: "6",
    img: "https://cdnimg.vietnamplus.vn/uploaded/hotnnz/2018_04_10/dol_emlabanoicuaanh768x1094.jpg",
    name: "Em Là Bà Nội Của Anh",
    rate: "8.7",
  },
  {
    id: "7",
    img: "https://st.quantrimang.com/photos/image/2020/11/06/top-movie-netflix-2.jpg",
    name: "Enola Hoimes",
    rate: "5.5",
  },
  {
    id: "8",
    img: "https://cdnimg.vietnamplus.vn/uploaded/hotnnz/2018_04_10/dol_sieusaosieungo768x1139.jpg",
    name: "Siêu Sao Siêu Ngố",
    rate: "7.3",
  },
  {
    id: "9",
    img: "https://cdnimg.vietnamplus.vn/uploaded/hotnnz/2018_04_10/dol_emlabanoicuaanh768x1094.jpg",
    name: "Em Là Bà Nội Của Anh",
    rate: "8.7",
  },
  {
    id: "10",
    img: "https://st.quantrimang.com/photos/image/2020/11/06/top-movie-netflix-2.jpg",
    name: "Enola Hoimes",
    rate: "5.5",
  },
];

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
            <Movie className="mainMovie" title="PHIM CHIẾU RẠP" movie={dataMovie} />
          </div>
          <div className="movieLe">
            <Movie title="PHIM LẺ" movie={dataMovie} />
          </div>
          <div className="seriesMovie">
            <Movie title="PHIM BỘ" movie={dataMovie} />
          </div>
          <div className="seriesMovie">
            <Movie title="PHIM HOẠT HÌNH" movie={dataMovie} />
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
