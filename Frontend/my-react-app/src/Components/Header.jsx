import React from "react";
import ditilogo4 from "../assets/ditilogo4.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import '../App.css';
function Header(){
    return(
        <>
        <div className="container header-menu"> 
           <header className="d-flex flex-wrap justify-content-center align-items-center py-2 px-4 mb-4 border-bottom">

                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" > 
                    <img src={ditilogo4} alt="logo" className="footer-logo" style={{width: "120px", height: "100px" }} />
                </a>

                <ul className="nav nav-pills list-unstyled d-flex" style={{fontWeight: "500" }} >  

                    <li className="nav-item" >
                         <Link to="/" className="nav-link">Home</Link>
                    </li> 
                    
                    <li className="nav-item">
                        <Link to="/aboutUs" className="nav-link">About</Link>
                    </li> 
                    
                    <li className="nav-item">
                       <Link to="/allCourses" className="nav-link">Courses</Link>
                    </li> 
                    
                    <li className="nav-item">
                        <a href="#" className="nav-link" >Services</a>
                    </li> 
                    
                    <li className="nav-item">
                        <a href="#" className="nav-link">Gallery</a>
                    </li> 

                    <li className="nav-item">
                        <a href="#" className="nav-link">Placement</a>
                    </li> 

                    <li className="nav-item">
                         <Link to="/contactUs" className="nav-link">Contact Us</Link>
                    </li> 

                    <li className="nav-item">
                        <button type="button" className="btn btn-warning" style={{color: "white"}}>Login  <FontAwesomeIcon icon={faArrowRight} className="ms-2" /></button>
                    </li>
                </ul> 
            </header> 
        </div>
        </>
    )
}
export default Header;