import React from 'react'
import './Footer.css'
import Facebook from './facebook.png'
import Tiktok from './tiktok.png'
import Twitter from './twitter.png'
import Instagram from './instagram.png'

const Footer = () => {
  return (
    <div className='Footer-container'>
        <hr/>
        <div className='footer'>
            <img src={Facebook} alt="facebook" />
            <img src={Tiktok} alt="tiktok" />
            <img src={Twitter} alt="twitter" />
            <img src={Instagram} alt="instagram" />
        </div>
    </div>
  )
}

export default Footer