import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { SmoothHorizontalScrolling } from "../uitils";

const movies = [
  "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/5/3/1040917/279439500_3960908423.jpg",
  "https://image.thanhnien.vn/w1024/Uploaded/2022/jhvabun/2022_07_15/teaser-poster-final-4428.jpg",
  "https://vcdn-giaitri.vnecdn.net/2022/07/20/loi-nguyen-1-5966-1658282887.jpg",
  "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/5/3/1040917/279439500_3960908423.jpg",
  "https://anh.24h.com.vn/upload/1-2014/images/2014-02-28/1393586827-poster-qtm-final-8992-13904669-7297-3805-1393385102.jpg",
  "https://vcdn-giaitri.vnecdn.net/2019/08/22/dan-truong-2-9569-1566470638.jpg",
  "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/5/3/1040917/279439500_3960908423.jpg",
  "https://image.thanhnien.vn/w1024/Uploaded/2022/jhvabun/2022_07_15/teaser-poster-final-4428.jpg",
  "https://vcdn-giaitri.vnecdn.net/2022/07/20/loi-nguyen-1-5966-1658282887.jpg",
  "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/5/3/1040917/279439500_3960908423.jpg",
  "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/5/3/1040917/279439500_3960908423.jpg",
  "https://image.thanhnien.vn/w1024/Uploaded/2022/jhvabun/2022_07_15/teaser-poster-final-4428.jpg",
  "https://vcdn-giaitri.vnecdn.net/2022/07/20/loi-nguyen-1-5966-1658282887.jpg",
  "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/5/3/1040917/279439500_3960908423.jpg",
  "https://anh.24h.com.vn/upload/1-2014/images/2014-02-28/1393586827-poster-qtm-final-8992-13904669-7297-3805-1393385102.jpg",
  "https://vcdn-giaitri.vnecdn.net/2019/08/22/dan-truong-2-9569-1566470638.jpg",
  "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/5/3/1040917/279439500_3960908423.jpg",
  "https://image.thanhnien.vn/w1024/Uploaded/2022/jhvabun/2022_07_15/teaser-poster-final-4428.jpg",
  "https://vcdn-giaitri.vnecdn.net/2022/07/20/loi-nguyen-1-5966-1658282887.jpg",
  "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/5/3/1040917/279439500_3960908423.jpg",
];

const SlideMovie = (props) => {
  const sliderRef = useRef();
  const movieRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);

  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    console.log(maxScrollLeft);
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };

  const handleScrollLeft = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    console.log(maxScrollLeft);
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        -movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };

  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) handleScrollRight();
      if (dragMove > dragDown) handleScrollLeft();
    }
  }, [dragDown, dragMove, isDrag]);

  const onDragStart = (e) => {
    setIsDrag(true);
    setDragDown(e.screenX);
  };
  const onDragEnd = (e) => {
    setIsDrag(false);
  };
  const onDragEnter = (e) => {
    setDragMove(e.screenX);
  };

  return (
    <div className="movie-conainer" draggable="false">
      <h1 className="heading-movie">{props.title}</h1>
      <div
        className="movie-slider"
        ref={sliderRef}
        draggable="false"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
      >
        {movies.map((movie, index) => {
          return (
            <div
              key={index}
              className="movie-item"
              ref={movieRef}
              draggable="true"
            >
              <img src={movie} alt="" draggable="false" />
              <div className="movie-name">Movie Name</div>
            </div>
          );
        })}
      </div>
      <div className="movie-btn">
        <div className="btn-left" onClick={handleScrollLeft}>
          <KeyboardArrowLeftIcon />
        </div>
        <div className="btn-right" onClick={handleScrollRight}>
          <KeyboardArrowRightIcon />
        </div>
      </div>
    </div>
  );
};

export default SlideMovie;
