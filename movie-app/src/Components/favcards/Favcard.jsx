import React, { useState } from "react";
import "./favcard.css"
import { Modal } from "../modal/Modal";

const Favcard=({movie,onRemove})=>{

return(
    <>
            <div className="cards">
                <img className="card_img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt="" />
                <div className="card_details">
                    <div className="card_title">{movie?movie.original_title:""}</div>
                    <div className="card_rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></div>
                </div>
                <button onClick={()=>onRemove(movie ?movie.id:"")}>Remove</button>
            </div>
    
    </>
)

}

export {Favcard};