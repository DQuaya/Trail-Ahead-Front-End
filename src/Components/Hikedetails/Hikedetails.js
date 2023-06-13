import React from 'react'

import './Hikedetails.css'
import image1 from '../../assets/image1.jpeg'



const Hikedetails = () => {
  return (
    <div className='hike-details'>

      <div className = "card-wrapper">

      <div className = "card">
      
        <div className = "hike-imgs">
          <div className = "img-display">
            <div className = "img-showcase">

              <img src={image1} alt="" />
                
            </div>
          </div>
          <div className = "img-select">
            <div className = "img-item">
              <a href = "#" data-id = "1">

                <img src="" alt="" />

              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "2">

                <img src="" alt="" />

              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "3">

                <img src="" alt="" />

              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "4">

                <img src="" alt="" />

              </a>
            </div>
          </div>
        </div>
        
        <div className = "hike-content">
          <h2 className = "hike-title">INSERT HIKE NAME</h2>
          <a href = "#" class = "hike-link">ABOUT THE HIKE</a>
          <div className = "hike-rating">
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star-half-alt"></i>
            <span>Hike Rating</span>
          </div>

          <div className = "hike-time">
            <p className = "last-time">MILES: <span>10</span></p>
            <p className = "new-time">TIME: <span className='time'>3pm-6pm</span></p>
          </div>

          <div className = "hike-detail">
            <h2>Hike Description </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
            <ul>
              <li>Group <span>8</span></li>
              <li>Spots <span>2</span></li>
              <li>Challenge <span>Moderate</span></li>
              <li>Starting <span>beginning</span></li>
              <li>Ending <span>end</span></li> 
            </ul>
          </div>

          <div className = "hike-info">
            {/* <input type = "number" min = "0" value = "1"> */}
            <button type = "button" class = "btn">
              Join Hike <i class="fa-solid fa-plus"></i>
            </button>
            <button type = "button" class = "btn">Pass Hike</button>
          </div>

          <div className = "member-links">
            <p>Group Members: </p>
            <a href = "#">
              {/* <img src={img1} /> */}
            </a>
            <a href = "#">
              {/* <img src={img2} /> */}
            </a>
            <a href = "#">
              {/* <img src={img3} /> */}
            </a>
            <a href = "#">
              {/* <img src={img4} /> */}
            </a>
            <a href = "#">
              {/* <img src="" alt="" /> */}
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hikedetails