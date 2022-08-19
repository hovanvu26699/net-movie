import React from 'react'
import "./movieCard.scss"
import { Link } from 'react-router-dom'
import { category } from '../api/tmdbApi'
import apiConfig from '../api/apiConfig'

const MovieCard = (props) => {

    const item = props.item;
    const link = '/' + category[props.category] + '/' + item.id;
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path)
    return (
        <Link to={link}>
            <div className="movie-card">
                <div className='box-img'>
                    <img src={bg} alt="" />
                    <div className="movie-name">{item.title || item.name}</div>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard