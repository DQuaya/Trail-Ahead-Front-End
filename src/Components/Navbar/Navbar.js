import React, {useState} from 'react';
// import { Link } from 'react-scroll';
import logo from '../Navbar/logo.png';
import {NavLink} from 'react-router-dom'

function Navbar(){
    const [nav, setnav] = useState(false);

    const changeBackground =()=>{
        if (window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);
    
    return (
    <nav className={nav ? "nav active" : "nav"}>
        <NavLink to='/' className='logo' smooth={true} duration={2000}>
            <img src={logo} alt="" />
        </NavLink>   

        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
                <li><NavLink to="/" smooth={true} duration={2000}>Home</NavLink></li>
                <li><NavLink to="about" smooth={true} duration={2000}>About</NavLink></li>
                <li><NavLink to="hike" smooth={true} duration={2000}>Hike</NavLink></li>
                <li><NavLink to="profile" smooth={true} duration={2000}>Profile</NavLink></li> 
        </ul>
        
    </nav>
  )
}

export default Navbar