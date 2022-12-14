import React, { useState, useEffect } from 'react'
import MovieCard from '../movieCard/MovieCard'
import { useParams } from 'react-router-dom'
import tmdbApi, { category, movieType, tvType } from '../api/tmdbApi'
import "./movieGrid.scss"
const MovieGrid = (props) => {
    const [items, setItem] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const { keyword } = useParams();
    useEffect(() => {
        const getList = async () => {
            let response = null

            if (keyword === undefined) {
                const params = {}
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMovieList(movieType.upcoming, { params });
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, { params })
                }
            } else {
                const params = {
                    query: keyword
                }
                response = await tmdbApi.search(props.category, { params })
            }
            setItem(response.results)
            setTotalPage(response.total_pages)
        }
        getList();
    }, [props.category, keyword])

    const loadMore = async () => {
        let response = null

        if (keyword === undefined) {
            const params = { page: page + 1 }
            switch (props.category) {
                case category.movie:
                    response = await tmdbApi.getMovieList(movieType.upcoming, { params });
                    break;
                default:
                    response = await tmdbApi.getTvList(tvType.popular, { params })
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword
            }
            response = await tmdbApi.search(props.category, { params })
        }
        setItem([...items, ...response.results])
        setPage(page + 1)
    }

    return (
        <>
            <div className='movie-grid'>
                {
                    items.map((item, i) => <MovieCard category={props.category} item={item} key={i} />)
                }
            </div>
            {
                page < totalPage ? (
                    <div className='movie-grid-loadmore'>
                        <button onClick={loadMore}>Load more</button>
                    </div>
                ) : null
            }
        </>
    )
}

export default MovieGrid