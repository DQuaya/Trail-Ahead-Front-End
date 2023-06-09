import React from 'react'
import './Footer.css'
import Facebook from './facebook.png'
import Tiktok from './tiktok.png'
import Twitter from './twitter.png'
import Instagram from './instagram.png'
import Logo from './logo.png'

const Footer = () => {
  return (
    <div className='Footer-container'>
        <hr/>
        <div className='footer'>
            <div className="social-links">
            <img src={Facebook} alt="facebook" />
            <img src={Tiktok} alt="tiktok" />
            <img src={Twitter} alt="twitter" />
            <img src={Instagram} alt="instagram" />
            </div>
        </div>
        <div className="logo">
            <img src={Logo} alt="logoimg" />
        </div>
    </div>
  )
}

export default Footer