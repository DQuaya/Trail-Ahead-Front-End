import React from 'react'
import coverImage from '../../assets/DSC7701-Edit-Edit-1024x682.webp'
import {NavLink} from 'react-router-dom'

const Hikes = () => {
  return (
    <div>
        <div className='cover'>
            <img src={coverImage} alt="" />
        </div>
        <NavLink to='/hikedetails' className='logo' smooth={true} duration={2000}>
              <a href='#' className='header-btn'>Read More</a>
            </NavLink>
    </div>
  )
}

export default Hikes