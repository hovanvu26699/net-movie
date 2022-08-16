import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from "../components/Header"
import Navbar from '../components/Navbar'
import OneMovie from '../components/contents/OneMovie'

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
const NewMovie = () => {
    return (
        <>
            <div className='header'>
                <Header />
            </div>
            <div className='navbar'>
                <Router>
                    <Navbar />
                </Router>
            </div>

            <div className='mainMovie'>
                <h1>PHIM MỚI</h1>
                <div className='listMovie'>
                    {
                        dataMovie.map((movie, index) => {
                            return (
                                <OneMovie id={movie.id} img={movie.img} name={movie.name} />
                            )
                        })
                    }
                </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </>

    )
}

export default NewMovie