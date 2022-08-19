import React from "react";
import { Link } from "react-router-dom";
import "../../styles/__movie.scss";
import MovieDetail from "../../views/MovieDetail"

const Movie = (props) => {
  const movieData = props.movie
  return (
    <div className="movie-container">
      <h1>{props.title}</h1>
      <div className="movie-list">
        {movieData.map((movie, index) => {
          return (
            <div key={movie.id} className="movie-item">
              <Link to='/detail'>
                <img src={movie.img} alt="" />
              </Link>
              <div className="movie-name">{movie.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movie;
