import { useState } from "react";
import "./AboutPage.css";
import {motion} from 'framer-motion'
// import img1 from "../About/img1.png";
// import img2 from "../About/img2.png";
// import img3 from "../About/img3.png";
// import img4 from "../About/img4.png";

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
        <div className="imgBack"></div>
          <h2>About Us</h2>
        <div className="about-h1">
          <h1>Mission</h1>
        </div>

    <div className="mission-box">
        <p>
          At Trail Ahead our goal is to foster healthy connections, 
          new friendships, and shared memories through nature and
          outdoor adventures.  Our creators wanted to develop a place where people
          with a variety levels of hiking experience can come, and enjoy the outdoors
          with anyone who shares that same love for exploring nature.
        </p>
    </div>

      <div className="about-h1">
          <h1>Benefits of Joining</h1>
      </div>

        <div className="benefits-box">
            <p>When you join, you will have the opportunity to build friendships.
              Friendships have a huge impact on your mental health and happiness. 
              Good friends relieve stress, provide comfort and joy, and prevent loneliness and isolation. 
              Developing close friendships can also have a powerful impact on your physical health.
              Along with that Hiking itself have a tone of health benefits. ,
            </p>
        </div>

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
