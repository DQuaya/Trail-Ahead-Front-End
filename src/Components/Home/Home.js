import React from "react";

import { Link } from "react-router-dom";
import Aboutsection from "../Aboutsection/Aboutsection";


const Home = () => {

  return (
    <div id='main'>
        <div className='header-heading'>
            <h3>Trail Ahead offers a quick and easy way for </h3>
            <h1><span>Hikers </span> to Meet <br/>Hikers</h1>
            <p className='details'>Go checkout the avaliable Hikes</p>
            <div className='header-btns'>
            <Link to='/signup' className='logo' smooth={true} duration={2000}>
              <a href='#' className='header-btn'>Join Now</a>
            </Link> 
          </div>
        </div>
        <div className="about-section">

         <Aboutsection/>

         
        </div>
    </div>
  )
}

export default Home


// Coded by Quaya
