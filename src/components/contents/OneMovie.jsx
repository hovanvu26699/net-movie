import React from 'react'

const OneMovie = (props) => {
    console.log(props)
    return (
        <div className="movie-item" key={props.id}>
            <img src={props.img} alt="" />
            <div className="movie-name">{props.name}</div>
        </div>
    )
}

export default OneMovie