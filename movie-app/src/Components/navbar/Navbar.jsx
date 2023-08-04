import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      
    <div className="navbar">
      <ul className="left-menu">
        <li className="menubars">
          <i className="fa-solid fa-bars" />
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
          />
          <Link to="/movies/search" className="magnifying-glass">
            <i className="fa-solid fa-magnifying-glass" />
          </Link>
        </div>
      </div>
    </div>
    </>
  );
 
};

export { Navbar };



