import React from 'react'
import Button from '../Button/Button'
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
        <p>Blah</p>
        <button>More Info</button>
        <button>Get Started</button>
    </div>
  )
}

export default Home

// Coded by Quaya