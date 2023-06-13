import React from 'react'
import CoverImage from './CoverImage'
import TrailName from './TrailName'
import ArticleInfo from '../'
import hikeImage from '../../assets/image2.jpg'
import image1 from '../About/image1.png'
import image2 from '../About/image2.png'
import image3 from '../About/image3.png'
import image4 from '../About/image4.png'

const Hikedetails = () => {
  return (
    <div className='hike-details'>
        <div class = "card-wrapper">
      <div class = "card">
      
        <div class = "hike-imgs">
          <div class = "img-display">
            <div class = "img-showcase">
             <img src={hikeImage} alt="" />
             <img src={hikeImage} alt="" />
            </div>
          </div>
          <div class = "img-select">
            <div class = "img-item">
              <a href = "#" data-id = "1">
                <img src={image1} alt="" />
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "2">
                <img src={image2} alt="" />
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "3">
                <img src={image3} alt="" />
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "4">
                <img src={image4} alt="" />
              </a>
            </div>
          </div>
        </div>
        
        <div class = "hike-content">
          <h2 class = "hike-title">INSERT HIKE NAME</h2>
          <a href = "#" class = "hike-link">ABOUT THE HIKE</a>
          <div class = "hike-rating">
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star-half-alt"></i>
            <span>INSERT LENGTH</span>
          </div>

          <div class = "hike-time">
            <p class = "last-time">MILES: <span>10</span></p>
            <p class = "new-time">TIME: <span>3pm-6pm</span></p>
          </div>

          <div class = "hike-detail">
            <h2>Hike Description </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
            <ul>
              <li>Group: <span>8 people</span></li>
              <li>Available: <span>2 spots left</span></li>
              <li>Challenge: <span>Moderate</span></li>
              <li>Starting Area: <span>beginning</span></li>
              <li>Ending Area: <span>end</span></li>
            </ul>
          </div>

          <div class = "hike-info">
            {/* <input type = "number" min = "0" value = "1"> */}
            <button type = "button" class = "btn">
              Join Hike <i class = "fas fa-shopping-cart"></i>
            </button>
            <button type = "button" class = "btn">Pass Hike</button>
          </div>

          <div class = "social-links">
            <p>Group Members: </p>
            <a href = "#">
              <img src="" alt="" />
            </a>
            <a href = "#">
              <img src="" alt="" />
            </a>
            <a href = "#">
              <img src="" alt="" />
            </a>
            <a href = "#">
              <img src="" alt="" />
            </a>
            <a href = "#">
              <img src="" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hikedetails