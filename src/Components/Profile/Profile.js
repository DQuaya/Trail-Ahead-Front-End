import React from 'react'
import './Profile.css'
import image1 from '../../Components/About/image1.png'
import image2 from '../../assets/image4.jpg'



const Profile = () => {
  return (
    <div className='profile-container'>
        <div className='header__wrapper'>
            <header></header>
            <div className='cols__container'>
                <div className='left__col'>
                    <div className="img__container">
                        <img src={image1} alt="Quaya Brown" />
                        <span></span>
                    </div>
                    <h2>Quaya Brown</h2>
                    <p>SOFTWARE ENGINEER</p>
                    <p>quaya@gmail.com</p>

                    <ul className='about'>
                        <li><span>473</span>Hikes</li>
                        <li><span>322</span>Group hikes</li>
                        <li><span>200</span>Review</li>
                    </ul>
                    
                    <div className='content'>
                        <p>Hey everyone, I am interested in exploring nature but I am a rookie when it comes to hiking.
                            I'm just looking for a group to join or a couple people to show me the ropes.</p>

                        <ul>
                            <li>twitter</li>
                            <li>pinterest</li>
                            <li>instagram</li>
                            <li>facebook</li>
                        </ul>
                    </div>
                </div>

                <div className="right__col">
                    <div>
                        <ul>
                            <li><a href='#'>Photos</a></li>
                            <li><a href='#'>Galleries</a></li>
                            <li><a href='#'>Groups</a></li>
                            <li><a href='#'>About</a></li>
                        </ul>
                        <button>Follow</button>
                    </div>

                    <div className="photos">
                        <img src={image2} alt="" />
                        <img src={image2} alt="" />
                        <img src={image2} alt="" />
                        <img src={image2} alt="" />
                        <img src={image2} alt="" />
                        <img src={image2} alt="" />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Profile