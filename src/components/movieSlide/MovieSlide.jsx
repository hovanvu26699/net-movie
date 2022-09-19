import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import './movieSlide.scss'
import Slider from "react-slick";
import tmdbApi, { category } from '../api/tmdbApi';
import MovieCard from '../movieCard/MovieCard';

const MovieSlide = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const getList = async () => {
            let response = null
            const params = {};
            console.log(props.id)
            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMovieList(props.type, { params });
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, { params });
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id);
            }
            setItems(response.results);
        }
        getList()
    }, [])
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='movie-list'>
            <h2> {props.title} </h2>
            <Slider {...settings} className="slide">
                {
                    items.map((item, i) => {
                        return (
                            <MovieCard item={item} category={props.category} className="slide-item" />
                        )
                    })
                }
            </Slider>

        </div>
    )
}

MovieSlide.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieSlide