import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Movie from "../components/contents/Movie";
import ReactPlayer from "react-player";
import {
    BrowserRouter as Router,

} from "react-router-dom";

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

const MovieDetail = () => {
    return (
        <div className="movieDetail-container">
            <div className="movieDetail-header">
                <Header />

            </div>
            <div className="movieDetail-navbar">
                <Router>
                    <Navbar />
                </Router>
            </div>

            <div className="movieDetail-content">
                <div className="box-img">
                    <img
                        src="https://st.quantrimang.com/photos/image/2020/11/06/top-movie-netflix-2.jpg"
                        alt=""
                    ></img>
                </div>
                <div className="describe">
                    <div className="name-movie">
                        <h1>Enola Hoimes</h1>
                    </div>
                    <div className="btn-movie">
                        <button className="btn-trailer">Trailer</button>
                        <button className="btn-watch">Xem phim</button>
                    </div>
                    <div className="detail">
                        <ul>
                            <li>Đạo diễn: Yoo In Sik</li>
                            <li>Quốc gia: Hàn Quốc</li>
                            <li>
                                Thể loại: Chiếu Rạp, Hài Hước, Hoạt Hình, Phiêu Lưu, sắp chiếu,
                                Thể Thao-Âm Nhạc
                            </li>
                            <li>Thời lượng: 60 phút/tập</li>
                            <li>Số tập: 16 tập</li>
                            <li>
                                Diễn viên:Bobby CannavaleBonoEric AndréHalseyMatthew
                                McConaugheyNick KrollPharrell WilliamsReese WitherspoonScarlett
                                JohanssonTaron Egerton
                            </li>
                            <li>Năm: 2022</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="trailer-movie">
                <h1>Official trailer:</h1>
                <div className="videoIntro">
                    <ReactPlayer
                        playing={false}
                        loop={true}
                        volume={1}
                        width="100%"
                        height="100%"
                        url="https://www.youtube.com/watch?v=S733LM9Hnsk"
                        className="videoIntro-content"
                    />
                </div>
            </div>
            <div className="suggest">
                <div className="suggest-container">
                    <h1>CÓ THỂ BẠN CŨNG MUỐN XEM</h1>
                    <div className="suggest-content">
                        <Movie movie={dataMovie} />
                    </div>

                </div>
            </div>
            <div className="movieDetail-navbar">
                <Footer />
            </div>
        </div>
    );
};

export default MovieDetail;
