import "./App.css";
import Home from "./Components/Home/Home";
import AboutPage from "./Components/About/AboutPage";
import Signup from "./Components/Signup/Signup";
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { css } from "@emotion/react";
import { PropagateLoader } from "react-spinners";
import Aboutsection from "./Components/Aboutsection/Aboutsection";


function App() {
    const [loading, setLoading] = useState(false);
    const override = css`
        display: block;
        border-color: red;
        margin-top: 20%;
    `;

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="App">
            {loading ? (
                <PropagateLoader
                    color={"#04700c"}
                    Loading={loading}
                    css={override}
                    size={40}
                />
            ) : (
                <>
                    <Navbar />
                    {/* <Home /> */}
                    {/* <Testing/> */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="signup" element={<Signup />} />
                        {/* <Route path='hikes' element={<Hikes/>}/> */}
                        <Route path='profile' element={<Profile/>}/> 
                    </Routes>
                    {/* <Testing/> */}
                </>
            )}
        </div>
    );
}

export default App;

