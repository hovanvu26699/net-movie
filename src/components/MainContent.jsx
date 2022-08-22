import React from "react";
import Movie from "./contents/Movie";
import Right from "./contents/Right";

import MovieSlide from "../components/movieSlide/MovieSlide";
import { category, movieType, tvType } from "../components/api/tmdbApi";
import { Link } from "react-router-dom";

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
            <div className="section-trend">
                <MovieSlide
                    title="TRENDING"
                    category={category.movie}
                    type={movieType.popular}
                />
            </div>
            <div className="section-topRate">
                <MovieSlide
                    title="TOP RATED MOVIE"
                    category={category.movie}
                    type={movieType.top_rated}
                />
            </div>
            <div className="mainContent">
                <div className="mainLeft">
                    <div className="trendMovie">
                        <div className="headingTitle">
                            <h2>UPCOMING MOVIE</h2>
                            <div className="btn-view">
                                <Link to="/movie">
                                    <button>View more</button>
                                </Link>
                            </div>
                        </div>
                        <Movie
                            className="mainMovie"
                            category={category.movie}
                            type={movieType.upcoming}
                        />
                    </div>
                    <div className="movieLe">
                        <div className="headingTitle">
                            <h2>TRENDING MOVIE</h2>
                            <div className="btn-view">
                                <Link to="/movie">
                                    <button>View more</button>
                                </Link>
                            </div>
                        </div>
                        <Movie
                            className="mainMovie"
                            category={category.movie}
                            type={movieType.popular}
                        />
                    </div>
                    <div className="seriesMovie">
                        <div className="headingTitle">
                            <h2>TOP RATE TV SHOWS</h2>
                            <div className="btn-view">
                                <Link to="/movie">
                                    <button>View more</button>
                                </Link>
                            </div>
                        </div>
                        <Movie
                            className="mainMovie"
                            category={category.tv}
                            type={tvType.top_rated}
                        />
                    </div>
                </div>
                <div className="contentRight">
                    <Right title="POPULAR MOVIE" category={category.movie} type={movieType.popular} />
                    <Right title="POPULAR TV SHOWS" category={category.tv} type={tvType.popular} />
                </div>
            </div>
        </div>
    );
};

export default MainContent;
