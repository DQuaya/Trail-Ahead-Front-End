import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {css} from "@emotion/react"
import { PropagateLoader } from 'react-spinners';

/* Quaya Coded This */
function App() {

  const [loading, setLoading] = useState(false);
  const override = css`
  display:block;
  border-color:red;
  margin-top:20%
  `;
  
  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
          setLoading(false)
      },2000);
  },[])

  return (
    <div className="App">
            
            {
                loading ? <PropagateLoader color={"#04700c"} Loading={loading} css={override} size={40}/>
                :
                <>
                    <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    {/* <Route path='products' element={<About/>}/>
                    <Route path='about' element={<Hikes/>}/> */}
                    {/* <Route path='contact' element={<Contact/>}/> */}
                </Routes>
                </>
            }
        </div>
  );
}

export default App;
/* Quaya Coded This */