import React, { useState, useEffect } from "react";
import Movie from "../components/contents/Movie";
import ReactPlayer from "react-player";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import tmdbApi from "../components/api/tmdbApi";
import apiConfig from "../components/api/apiConfig";

const MovieDetail = () => {
    const { category, id } = useParams();

    const [item, setItems] = useState();

    const [cast, setCast] = useState([]);

    const [video, setVideos] = useState([])

    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, id, { params: {} });
            setItems(response);
            window.scrollTo(0, 0);
        };
        getDetail();

        const getCredits = async () => {
            const res = await tmdbApi.credits(category, id);
            setCast(res.cast.slice(0, 5));
        };
        getCredits();

        const getVideos = async () => {
            const res = await tmdbApi.getVideos(category, id);
            setVideos(res.results.slice(0, 5));
        }
        getVideos();
    }, [category, id]);
    console.log(id)
    return (
        <>
            {item && (
                <>
                    <div className="movieDetail-container">
                        <div className="movieDetail-content">
                            <div className="box-img">
                                <img
                                    src={apiConfig.originalImage(
                                        item.poster_path || item.backdrop_path
                                    )}
                                    alt=""
                                ></img>
                            </div>
                            <div className="describe">
                                <div className="name-movie">
                                    <h1>{item.name || item.title}</h1>
                                </div>
                                <div className="btn-movie">
                                    <button className="btn-trailer">Trailer</button>
                                    <button className="btn-watch">Xem phim</button>
                                </div>
                                <div className="detail">
                                    <ul>
                                        <li>
                                            Quốc gia:{" "}
                                            {item.production_countries &&
                                                item.production_countries.map((country, i) => (
                                                    <span key={i}>{country.name}</span>
                                                ))}
                                        </li>
                                        <li>
                                            Thể loại:
                                            {item.genres &&
                                                item.genres.map((genres, i) => (
                                                    <span key={i}> {genres.name}</span>
                                                ))}
                                        </li>
                                        <li>Thời lượng: {item.runtime}phút</li>
                                        <li>Năm: {item.release_date}</li>
                                        <li>{item.overview}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="listCast">
                            {cast.map((cast, i) => (
                                <div className="castMovie">
                                    <div>
                                        <img
                                            src={apiConfig.originalImage(
                                                cast.profile_path
                                            )}
                                            alt="ERROR"
                                        />
                                    </div>
                                    <span key={i}>{cast.name} </span>
                                </div>
                            ))}
                        </div>

                        <div className="trailer-movie">
                            <h1>Official trailer:</h1>
                            <div className="videoIntro">
                                {
                                    video.map((video, i) => (
                                        <ReactPlayer
                                            playing={false}
                                            loop={true}
                                            volume={1}
                                            width="100%"
                                            height="100%"
                                            url={`https://www.youtube.com/embed/${video.key}`}
                                            className="videoIntro-content"
                                        />

                                    ))
                                }
                            </div>
                        </div>
                        <div className="suggest">
                            <div className="suggest-container">
                                <h1>CÓ THỂ BẠN CŨNG MUỐN XEM</h1>
                                <div className="suggest-content">
                                    <Movie category={category} type="similar" id={id} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default MovieDetail;
