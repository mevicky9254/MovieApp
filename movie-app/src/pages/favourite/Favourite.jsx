import React from "react";
import { useEffect,useState } from "react";

import { Favcard } from "../../Components/favcards/Favcard";
import "./favourite.css";

const Favourite = () => {
    const [favMovies, setFavMovies] = useState([]);
    const[title,setTitle]=useState("");
  
    useEffect(() => {
      const storedFavMovies = JSON.parse(localStorage.getItem("Favmovie")) || [];
      setFavMovies(storedFavMovies);
      console.log(storedFavMovies); 
    },  []);
    

useEffect(()=>{
  if(favMovies.length===0){
    setTitle("Oops! Your Favourite List is Empty");
  }else{
    setTitle("A Galaxy of Your Favourite Movies");
  }

},[favMovies])
    
      const removeHandler=(movieId)=>{
      console.log("Remove item")
      const updatedMovieList=favMovies.filter((movie)=>movie.id!==movieId)
      setFavMovies(updatedMovieList);
      localStorage.setItem("Favmovie",JSON.stringify(updatedMovieList));
    }

    return (
      <>
        <h1>{title}</h1>
        <div className="movieContainer">
          {favMovies.map((movie, index) => (
            <Favcard key={movie.id} movie={movie}  onRemove={removeHandler} />
          ))}
        </div>
      </>
    );
  };
  
  export { Favourite };



