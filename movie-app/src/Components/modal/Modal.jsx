import React, { useState } from 'react';
import './modal.css'; 
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const Modal = () => {

  const [movie, setMovie] = useState({});
  const [favList, setFavlist] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

 

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then(res => res.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  const addToFavorite = (movie) => {
    let existing = JSON.parse(localStorage.getItem("Favmovie")) || [];
    const updatedList = [...existing, movie];
    setFavlist(updatedList);
    localStorage.setItem("Favmovie", JSON.stringify(updatedList));
    alert("Item added to Favorites");
    navigate("/favourite");
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const storedFavList = JSON.parse(localStorage.getItem("Favmovie")) || [];
    setFavlist(storedFavList);
  }, []);




  return (
    <div className="modal-backdrop">
      <div className="modal">
      <div>
      <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt={movie ? movie.original_title: ""} />
      </div>
       
       <div>
       <h2>{movie ? movie.original_title: ""}</h2>
        <div className="modal-details">
          <p>Rating: {movie?movie.vote_average:""}</p>
          <p>Release Date: {movie ? movie.release_date:""}</p>
          <p>{movie ? movie.overview : ""}</p>
        </div>
        <div className="modal-buttons">
          <button className="watch-now">Watch Now</button>
          <button className="add-to-favorites" onClick={()=>addToFavorite(movie)}>Add to Favorites</button>
        </div>
       </div>
        
      </div>
    </div>
  );
};

export {Modal};



