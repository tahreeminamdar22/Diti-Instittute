import React from "react";
import './App.css';
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import AllCourses from "./Components/AllCourses";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
 

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={< AboutUs />} />
        <Route path="/contactUs" element={< ContactUs />} />
        <Route path="/allCourses" element={< AllCourses />} />
      </Routes>
    </Router>

    

    </>
  )
}

export default App
