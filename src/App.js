import React from 'react';
//import Slick from 'slick-carousel';
import './App.scss';



import Navbar from './component/Navbar';
import Home from "./pages/Home";
import Corps from './component/Corps';
import Write from './pages/Prfooter';
import Footer from './component/Footer';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faThumbsUp, faComment, faEye } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div classname="container">
      <Navbar />
      <Corps />
      <Home />
      <Write/>
      <Footer/>
    </div>


  );
}

export default App;
