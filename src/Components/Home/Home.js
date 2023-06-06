import React from 'react'
import hero from '../Home/hero.GIF'
import './Home.css'
import dude from '../Home/right.jpg'


// Coded by Quaya

const Home = () => {
  return (
    <div>
        <h1>Trail Ahead</h1>
        <img alt="heroImage" src={hero}/>
        <h1 className="header">About Trail Ahead</h1>
        <div className="left-half">
        <p>Blah</p>
        </div>
        <div className="right-half">
        <img alt="hikerImage" src={dude}/>
        <button className='about'>More Info</button>
        </div>
        <button className='create'>Get Started</button>
    </div>
  )
}

export default Home

// Coded by Quaya