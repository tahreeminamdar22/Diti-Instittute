import React from "react";
import './App.css';
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import AllCourses from "./Components/AllCourses";
import Database from "./Components/Database";
import Java from "./Components/Java";
import WebDev from "./Components/WebDev";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./Components/ScrollToTop"; 
function App() {
 

  return (
    <>
     <Router>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={< AboutUs />} />
        <Route path="/contactUs" element={< ContactUs />} />
        <Route path="/allCourses" element={< AllCourses />} />
        <Route path="/Database" element={< Database />} />
        <Route path="/Java" element={< Java /> } />
        <Route path="/WebDev" element={< WebDev />} />
      </Routes>
    </Router>

    

    </>
  )
}

export default App
