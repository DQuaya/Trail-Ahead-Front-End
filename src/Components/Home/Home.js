import React from 'react'
import {Link} from 'react-router-dom'
import Signup from '../Signup/Signup'

const Home = () => {
  return (
    <div id='main'>
        <div className='header-heading'>
            <h3>Trail Ahead offers blah Blah </h3>
            <h1><span>Hikers </span>Meet <br/>Hikers</h1>
            <p className='details'>Go checkout the avaliable Hikes</p>
            <div className='header-btns'>
            <Link to='../Signup' className='logo' smooth={true} duration={2000}>
              <a href='#' className='header-btn'>Join Now</a>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Home

// Coded by Quaya