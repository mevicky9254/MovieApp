import React from "react";
import { useEffect, useState } from "react"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import "./home.css";
import {Movielist} from "../../Components/Movies/Movielist";

const Home=()=>{

    const [ recentMovies, setRecentMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
       .then(res => res.json())
       .then(data=> setRecentMovies(data.results))
    }, [])

    return (
        <>
            <div className="slider">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={2}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                       
                        recentMovies.map(movie =>(

                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="slider_Image">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="details">
                                    <div className="title">{movie ? movie.original_title: ""}</div>
                                    
                                    <div className="description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))

                      
                    }
                </Carousel>

             
                <Movielist/>
                
            </div>
            
        </>
    
)

}

export {Home};