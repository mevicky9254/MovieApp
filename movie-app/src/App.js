
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
function App() {
  return (
    <>
     
    <Router>
    <Navbar/>
      <Routes>
      <Route index element={<Home/>}></Route>
      <Route path="movie/:id" element={<Modal/>}></Route>
      <Route path="movies/:type" element={<Movielist/>}></Route>
      <Route path="/favourite" element={<Favourite/>}></Route>
      <Route path="/*" element={<h1>Hello Worldfavourite</h1>}></Route>
      </Routes>
    </Router>
    <Footer/>
    </>
   
    
  );
}

export default App;
