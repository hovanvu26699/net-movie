import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/__movie.scss";
import tmdbApi, { category } from "../api/tmdbApi";
import apiConfig from "../api/apiConfig";

const Movie = (props) => {

  const [items, setItem] = useState([])

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {}
      if (props.type !== 'similar') {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMovieList(props.type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params })
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id)
      }
      setItem(response.results)
    }
    getList();
  }, [])
  const link = '/' + category[props.category] + '/';
  return (
    <div className="movie-container">
      <div className="movie-list" >
        {
          items.map((movie, index) => {
            return (
              <div key={index} className="movie-item">
                <Link to={`${link + movie.id}`} >
                  <img src={apiConfig.w500Image(movie.poster_path)} alt="" />
                </Link>
                <div className="movie-name">{movie.name || movie.title}</div>
              </div>
            );
          })
        }
      </div >
    </div>

  );
};

Movie.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Movie;
