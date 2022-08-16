import React from "react";
import "../../styles/__movie.scss";

const Movie = (props) => {
  console.log(props)
  const movieData = props.movie
  console.log(movieData)
  return (
    <div className="movie-container">
      <h1>{props.title}</h1>
      <div className="movie-list">
        {movieData.map((movie, index) => {
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
