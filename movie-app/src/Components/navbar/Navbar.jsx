import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({onSearch}) => {

const [searchValue, setSearchValue] = useState("");

const handleInputChange=(event)=>{
  setSearchValue(event.target.value);
};


const handleSearchClick=()=>{
  if(searchValue.length<3){
    alert("Length of the movie name must be greater than two");
  }else{
   onSearch(searchValue);
   setSearchValue("");
  }
};

const handleKeyPress=(event)=>{
if(event.key==="Enter"){
  handleSearchClick();
}
}

  return (
    <>
      
    <div className="navbar">
      <ul className="left-menu">
      <li className="menubars">
      <i className="fa-solid fa-bars" />
      {/* Floating menu */}
      <div className="floating-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies/top_rated">Trending</Link>
          </li>
          <li>
            <Link to="/favourite">Favourite</Link>
          </li>
        </ul>
      </div>
    </li>
        <li className="logo">
          <Link to="/">
            <h1>FilmBuzz</h1>
          </Link>
        </li>
        <li className='menu'>
          <Link to="/">Home</Link>
        </li>
        <li className='menu'>
          <Link to="/movies/top_rated">Trending</Link>
        </li>
        <li className='menu'>
          <Link to="/favourite">Favourite</Link>
        </li>
      </ul>
      <div className="right-menu">
        <div className="searchbox-container">
          <input
            type="text"
            className="searchbox"
            placeholder="Search"
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <Link to="/search/movie" className="magnifying-glass">
            <i className="fa-solid fa-magnifying-glass"  onClick={handleSearchClick}/>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
 
};

export { Navbar };



