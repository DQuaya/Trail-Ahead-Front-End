import React from 'react'
import './Testing.css'
import image1 from "../../assets/image1.jpeg"
import image2 from "../../assets/image2.jpg"
import image3 from "../../assets/image3.jpg"
import image4 from "../../assets/image4.jpg"
 import tkp from "../../assets/img4.png"
 import azr from "../../assets/img2.png"
 import gdp from "../../assets/img3.png"
 import dnb from "../../assets/img1.png"
import tick from "../../assets/tick.png"
import {Link} from 'react-router-dom'
// import { Color, ColorKeyframeTrack } from 'three'

const Testing = () => {
  return (
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
            <span>About Trail Ahead</span>

            <div>
                <span className='stroke-text'>why</span>
                <span> Join?</span>
            </div>

            <div className='details-r'>
                <div>
                    <img src={tick} alt="" />
                    <span>Where Hikers Meet Hikers</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Building Community</span>
                </div> 
                <div>
                    <img src={tick} alt="" />
                    <span>Building Friendships</span>
                </div> 
                <div>
                    <img src={tick} alt="" />
                    <span>Enjoy outdoors</span>
                </div> 
                <Link to='/about' className='logo' smooth={true} duration={2000}>
              <a href='#' className='header-btn'>Read More</a>
            </Link> 
            </div>
            <span 
              style={{
                color:"orange", 
                fontWeight: "normal"
              }}
              >
                Our developers
            </span>

            <div className="brands">
                <img src={dnb} alt="" />
                <img src={tkp} alt="" />
                <img src={azr} alt="" />
                <img src={gdp} alt="" />
            </div> 
            
        </div>
    </div>
  )
}

export default Testing

