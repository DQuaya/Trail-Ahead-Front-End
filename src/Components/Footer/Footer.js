import React from 'react'
import './Footer.css'

// Coded by Quaya
const Footer = () => {
  return (
    <footer>
    <div className='footerContainer'>
        <div className='socialIcons'>
          <a href=''><i class="fa-brands fa-facebook"></i></a>
          <a href=''><i class="fa-brands fa-instagram"></i></a>
          <a href=''><i class="fa-brands fa-twitter"></i></a>
          <a href=''><i class="fa-brands fa-youtube"></i></a>
          <a href=''><i class="fa-brands fa-facebook"></i></a>
        </div>

        <div className="footerNav">
          <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>Contact</a></li>
            <li><a href=''>Mailing List</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Our Team</a></li>
          </ul>
        </div>
    </div>

    <div className="footerBottom">
          <p>Copyright &copy;2023 Created by <span className='designer'>DTAG</span></p>
        </div>
    </footer>
  )
}

export default Footer

// Coded by Quaya