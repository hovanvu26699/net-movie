import React from "react";
import Movie from "./contents/Movie";
import Right from "./contents/Right";

import MovieSlide from "../components/movieSlide/MovieSlide";
import { category, movieType, tvType } from "../components/api/tmdbApi";
import { Link } from "react-router-dom";

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
