import React from "react";
import { useEffect,useState } from "react";

import { Favcard } from "../../Components/favcards/Favcard";
import "./favourite.css";

const Favourite = () => {
    const [favMovies, setFavMovies] = useState([]);
  
    useEffect(() => {
      const storedFavMovies = JSON.parse(localStorage.getItem("Favmovie")) || [];
      setFavMovies(storedFavMovies);
      console.log(storedFavMovies);
    }, []);
  
    return (
      <>
        <h1>This is my favourite page</h1>
        <div className="movieContainer">
          {favMovies.map((movie, index) => (
            <Favcard key={movie.id} movie={movie}/>
          ))}
        </div>
      </>
    );
  };
  
  export { Favourite };



