import React from 'react'
import Button from '../Button/Button'
import hero from '../Home/hero.GIF'
import './Home.css'
import dude from '../Home/right.jpg'
import Signup from '../Signup/Signup'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <img src={hero} alt="" />
        <h1>About Trail Ahead</h1>
        <div class="about">
            Trail Ahead was created by four software engineers.
            Aimed toward those who have a passion or interest in hiking.
            Trail Ahead bring those who want to start hiking and those who have 
            experience in hiking together.
            <div class="button">
            <Button/>
            </div>
        </div>
        <div> 
            <img src={dude} alt="" />
        </div>
        <Button/>
        <Signup/>
    </div>
  )
}

export default Home