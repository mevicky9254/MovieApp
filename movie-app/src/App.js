
import './App.css';
import { Navbar } from './Components/navbar/Navbar';
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import "./Components/navbar/navbar.css";
import {Home} from "./pages/home/Home";
import Footer from './Components/footer/footer';
import { Movielist } from './Components/Movies/Movielist';
import { Modal } from "./Components/modal/Modal";
import { Favourite } from './pages/favourite/Favourite';
import { Searchlist } from './Components/searchlist/Searchlist';
import { useState } from 'react';


function App() {
  const [searchList, setSearchList] = useState([]);
  const api = "4e44d9029b1270a757cddc766a1bcb63&language=en-US";
  const getData = (query) => {
       fetch(`http://api.themoviedb.org/3/search/movie?api_key=${api}&query=${query}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
       setSearchList(data.results);
      });
  };

  return (
    <>
    <Router>
    <>
    <Navbar onSearch={getData}/>
      <Routes>
      <Route index element={<Home/>}></Route>
      <Route path="movie/:id" element={<Modal/>}></Route>
      <Route path="movies/:type" element={<Movielist/>}></Route>
      <Route path="/favourite" element={<Favourite/>}></Route>
      <Route path="/search/movie" element={<Searchlist searchList={searchList} />}></Route>
      <Route path="/*" element={<h1>Hello Worldfavourite</h1>}></Route>
      </Routes>
      </>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
