import { useState } from "react";
import "./AboutPage.css";
// import img1 from "../About/img1.png";
// import img2 from "../About/img2.png";
// import img3 from "../About/img3.png";
// import img4 from "../About/img4.png";

import { creatorsData } from "./creatorsData";
import left from './left.png'
import right from './right.png'
import { Color } from "three";

function AboutPage() {
  const [selected, setSelected] = useState(0);
  const cLength = creatorsData.length
  return (
    
      <div className="container">
        <div className="imgBack"></div>
        <div className="mission-box">
          <h1>Mission</h1>
          <p>At Trail Ahead our goal is to foster healthy connections, 
             new friendships, and shared memories through nature and
             outdoor adventures
          </p>

          <h1>Benefits of Joining</h1>
          <p>When you join, you will have the opportunity to build friendships.
            Friendships have a huge impact on your mental health and happiness. 
            Good friends relieve stress, provide comfort and joy, and prevent loneliness and isolation. 
            Developing close friendships can also have a powerful impact on your physical health.
            Along with that Hiking itself have a tone of health benefits. ,</p>
        </div>

        <div className="text-containers">

        <div className="creators">
          <div className="left-c">
            <span className="stroke-text">Creators</span>
            <span>Who they are</span>
            <span>What are their stories </span>
            <span>
              {creatorsData[selected].story}
            </span>
            <span>
              <span style={{color:'red'}}>
                {creatorsData[selected].name}
              </span>{""}
              -{creatorsData[selected].status}
            </span>
          </div>

          <div className="right-c">
            <div></div>
            <div></div>
            <img src={creatorsData[selected].image} alt="" />

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

 export default AboutPage;
