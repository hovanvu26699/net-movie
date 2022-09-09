import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { category } from '../components/api/tmdbApi'
import { useParams, useNavigate } from 'react-router-dom'
import Input from "./input/Input";



const Header = () => {
  const { keyword } = useParams();

  return (
    <div className="header-container">
      <div className="logo-search">
        <div className="logo">
          <Link to="/"> <img src={logo} alt="" /></Link>
        </div>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <MovieSearch category={category.movie} keyword={keyword} />
        </div>
      </div>
      <div className="header-btn">
        <Link to="/signIn"><button>Sign In</button></Link>
        <Link to="/signUp"> <button>Sign Up</button></Link>
      </div>
    </div>
  );
};

const MovieSearch = props => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '')

  const gotoSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      console.log("aaaaaaaaaaaaaaaaaaaa")
      navigate(`${category[props.category]}/search/${keyword}`);
      console.log(`${category[props.category]}/search/${keyword}`)
    }
  }, [keyword, props.category, navigate])

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        gotoSearch()
      }
    }
    document.addEventListener('keyup', enterEvent);
    return () => {
      document.removeEventListener('keyup', enterEvent)
    }
  }, [keyword, gotoSearch])

  return (
    <div clasName='movie-search'>
      <Input
        type='text'
        placeholder='Search ...'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  )
}

export default Header;