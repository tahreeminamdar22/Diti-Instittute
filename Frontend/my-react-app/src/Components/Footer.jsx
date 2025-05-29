import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaGoogle, FaYoutube } from 'react-icons/fa';
import ditilogo4 from "../assets/ditilogo4.png";
import '../App.css';
import { Link } from "react-router-dom";
function Footer(){
    return(
        <>
        <div className="container "> 
            <footer className="py-5" style={{paddingTop: "50px", paddingBottom: "0px"}}> 
                <div className="row "> 
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4 mb-lg-0"> 
                        <div className="footer__widget mb-50 footer-col-1">
                            <div className="footer__widget-logo mb-30 text-center">
                                 <a href="#">
                                    <img src={ditilogo4} alt="logo" className="footer-logo" />
                                 </a>
                            </div>
                        </div>
                    </div> 
                   
                    <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "10px", marginTop: "10px" }}>
                        <div className="col-lg-4 col-md-3 col-sm-6 mb-4 mb-lg-0">
                            <ul className="list-unstyled d-flex"> 
                                <li className="ms-3">
                                  <a className="link-body-emphasis" href="#" aria-label="Instagram">
                                   <FaInstagram size={30} />
                                  </a>
                                </li> 
                    
                                <li className="ms-3">
                                   <a className="link-body-emphasis" href="#" aria-label="Facebook">
                                     <FaFacebook size={30} /> 
                                   </a>
                                </li> 

                                <li className="ms-3">
                                  <a className="link-body-emphasis" href="#" aria-label="Twitter">
                                    <FaTwitter size={30} /> 
                                  </a>
                                </li> 

                                <li className="ms-3">
                                  <a className="link-body-emphasis" href="#" aria-label="Google">
                                    <FaGoogle size={30} /> 
                                  </a>
                                </li> 

                                <li className="ms-3">
                                   <a className="link-body-emphasis" href="#" aria-label="Youtube">
                                     <FaYoutube size={30} /> 
                                   </a>
                                </li> 
                            </ul> 
                        </div>
                    </div>   
                </div> 
                
                <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "10px", marginTop: "10px", fontSize: "1.2rem", fontWeight: "bold" }}>
                    <div className="col-lg-4 col-md-3 col-sm-6 mb-4 mb-lg-0">
                            <ul className="list-unstyled d-flex"> 
                                <li className="ms-3">
                                  <Link to="/aboutUs" className="link-body-emphasis text-decoration-none">About</Link>
                                </li> 

                                <li className="ms-3">
                                  <Link to="/allCourses" className="link-body-emphasis text-decoration-none">Courses</Link>
                                </li> 

                                <li className="ms-3">
                                 <Link to="/contactUs" className="link-body-emphasis text-decoration-none">Contact Us</Link>
                                </li> 

                                
                            </ul>
                    </div>
                </div>
                <div className="d-flex flex-column  py-4 my-4 border-top" style={{ textAlign: "center" }}> 
                <p style={{color: "black"}}><b>© 2025 Company, Inc. All rights reserved.</b></p> 
                
                </div> 
            </footer> 
        </div>
        </>
    )
}
export default Footer;