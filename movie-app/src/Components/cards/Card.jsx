import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./card.css"
import { Modal } from "../modal/Modal";

const Card=({movie})=>{

    

return(

    <>
  <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="card_img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt="" />
                <div className="card_details">
                    <div className="card_title">{movie?movie.original_title:""}</div>
                    <div className="card_rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></div>
                </div>
            </div>
        </Link>
    </>
)

}

export {Card};