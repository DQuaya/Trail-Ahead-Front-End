import { useState } from "react";
import "./AboutPage.css";
import {motion} from 'framer-motion'
import about1 from './about1.jpg'
import about2 from './about2.jpg'

import { creatorsData } from "./creatorsData";
import left from './left.png'
import right from './right.png'
// import { Color } from "three";

// Quaya coded this


function AboutPage() {
  const transition = {type: "spring", duration: 3}
  const [selected, setSelected] = useState(0);
  const cLength = creatorsData.length
  return (
    
    <div className="container">
        <container id="about">
          {/* <div className="info">
            <h1>About us</h1>
            <p>Who are we?</p>
          </div> */}
          <div className="about-row">
            <div className="left-column">
              <img src={about1} alt="" />
            </div>
            <div className="right-column">
              <h1>Mission<span> & Purpose</span></h1>
              <p>
                At Trail Ahead our goal is to foster healthy connections, 
                new friendships, and shared memories through nature and
                outdoor adventures.  Our creators wanted to develop a place where people
                with a variety levels of hiking experience can come, and enjoy the outdoors
                with anyone who shares that same love for exploring nature.
                
              <p><span>
                    When you join, you will have the opportunity to build friendships.
                    Friendships have a huge impact on your mental health and happiness. 
                    Good friends relieve stress, provide comfort and joy, and prevent loneliness and isolation. 
                    Developing close friendships can also have a powerful impact on your physical health.
                    Along with that Hiking itself have a ton of health benefits.
              </span></p>
              </p>
            </div>
          </div>
        </container>

        <div className="text-containers">

        <div className="creators">
          <div className="left-c">
            <span className="stroke-text">Creators</span>
            <span>Who they are</span>
            <span>What are their stories </span>
            <motion.span
            key={selected}
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={transition}
            
            >
              {creatorsData[selected].story}
            </motion.span>
            <span>
              <span style={{color:'orange'}}>
                {creatorsData[selected].name}
              </span>{""}
              -{creatorsData[selected].status}
            </span>
          </div>

          <div className="right-c">
            <motion.div initial={{ opacity: 0, x: -100}}
            transition={{ ...transition, duration: 2}}
            whileInView={{ opacity: 1, x:0}}></motion.div>
            <motion.div initial={{ opacity:0, x: 100}}
            transition={{ ...transition, duration: 2}}
            whileInView={{ opacity: 1, x:0}}></motion.div>
            <motion.img 
            key={selected}
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={transition}
            src={creatorsData[selected].image} alt="" />

            <div className="arrows">
              <img 
              onClick={()=>{
                selected === 0 
                ? setSelected(cLength-1)
                : setSelected((prev)=> prev -1)
              }}
                src={left} alt="" />
              <img 
              onClick={()=>{
                selected === cLength -1 
                ? setSelected(0) 
                : setSelected((prev)=>prev +1)
              }}
              src={right} alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
    
  );
}



// Quaya coded this
 export default AboutPage;
