import React, {useEffect, useState } from "react";
import { Card } from "../cards/Card";
import { useParams } from "react-router-dom";
import "./movielist.css"



const Movielist=()=>{

    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movieList">
            <div className="cardList">
                { 
                    movieList.map(movie => (
                        <Card movie={movie} />
                    ))
                }
            </div>
        </div>
    )

}

export {Movielist};