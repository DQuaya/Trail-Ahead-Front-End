import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { PropagateLoader } from "react-spinners";
import { css } from "@emotion/react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import AboutPage from "./Components/About/AboutPage";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import HikeList from "./Components/HikeList/HikeList";
import Profile from "./Components/Profile/Profile";
// import Footer from "./Components/Footer/Footer";
import Aboutsection from "./Components/Aboutsection/Aboutsection";
import QuizForm from "./Components/Quiz/Quiz";

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
          color={"#f7792b"}
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
            <Route path="login" element={<Login />} />
            {/* <Route path='hikes' element={<Hikes/>}/>
                    <Route path='profile' element={<Contact/>}/> */}
            <Route path="hike" element={<HikeList />} />
            <Route path="profile" element={<Profile />} />
            <Route path="quiz" element={<QuizForm />} />
          </Routes>
        </>
      )}
      
    </div>
  );
}

export default App;
