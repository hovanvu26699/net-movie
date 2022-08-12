import React from "react";
import "../../styles/__movie.scss";

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

const Movie = (props) => {
  return (
    <div className="movie-container">
      <h1>{props.title}</h1>
      <div className="movie-list">
        {dataMovie.map((movie, index) => {
          return (
            <div key={movie.id} className="movie-item">
              <img src={movie.img} alt="" />
              <div className="movie-name">{movie.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movie;
