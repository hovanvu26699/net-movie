import React from 'react'
import HeaderPage from '../components/header-page/HeaderPage'
import { useParams } from 'react-router-dom'

import { category as cate } from '../components/api/tmdbApi'
import MovieGrid from '../components/movie-grid/MovieGrid'
const Catalog = () => {
    const { category } = useParams()
    console.log(category)

    return (
        <>
            <HeaderPage>
                {category === cate.movie ? "Movie" : "TV Shows"}
            </HeaderPage>
            <div className='container'>
                <div className='section'>
                    <MovieGrid category={category} />
                </div>
            </div>
        </>
    )
}

export default Catalog