import React, { useEffect, useState } from "react";
import "../../styles/__right.scss";
import { Link } from "react-router-dom";
import apiConfig from "../api/apiConfig";
import tmdbApi, { category } from "../api/tmdbApi";
import PropTypes from "prop-types";



const Right = (props) => {

    const [items, setItem] = useState([])

    useEffect(() => {
        const getList = async () => {
            let response = null
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

    return (
        <div className="right">
            <h1>{props.title}</h1>
            <div className="right-movie-list">
                {console.log(items)}
                {items.map((movie, index) => {
                    return (
                        <div key={index} className="right-movie-item">
                            <div className="box-img">
                                <Link to="/detail">
                                    <img src={apiConfig.w500Image(movie.poster_path)} alt="" />
                                </Link>
                            </div>
                            <div className="right-movie-name">
                                <h6>
                                    {movie.name || movie.title}
                                </h6>
                                <p>
                                    {movie.original_name || movie.title}
                                </p>

                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
};

Right.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default Right;
