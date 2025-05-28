import React, { useState } from "react";
import ditilogo4 from "../assets/ditilogo4.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { Sling as Hamburger } from 'hamburger-react';
import '../App.css';

function Header() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="container header-menu">
                <header className="d-flex flex-wrap justify-content-between align-items-center py-2 px-4 mb-4 border-bottom">

                    
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                        <img src={ditilogo4} alt="logo" className="footer-logo" style={{ width: "120px", height: "100px" }} />
                    </a>

                    
                    <ul className="nav nav-pills list-unstyled d-none d-md-flex" style={{ fontWeight: "500" }}>
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/aboutUs" className="nav-link">About</Link></li>
                        <li className="nav-item"><Link to="/allCourses" className="nav-link">Courses</Link></li>
                        <li className="nav-item"><Link to="/contactUs" className="nav-link">Contact Us</Link></li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-warning text-white">
                                Login <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                            </button>
                        </li>
                    </ul>

                    {/* Hamburger Icon */}
                    <div className="d-md-none">
                        <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
                    </div>
                </header>

                {/* hamburger menu */}
                {isOpen && (
                    <ul className="nav flex-column text-center d-md-none" style={{ fontWeight: "500", gap: "10px" }}>
                        <li className="nav-item"><Link to="/" className="nav-link" onClick={() => setOpen(false)}>Home</Link></li>
                        <li className="nav-item"><Link to="/aboutUs" className="nav-link" onClick={() => setOpen(false)}>About</Link></li>
                        <li className="nav-item"><Link to="/allCourses" className="nav-link" onClick={() => setOpen(false)}>Courses</Link></li>
                        <li className="nav-item"><Link to="/contactUs" className="nav-link" onClick={() => setOpen(false)}>Contact Us</Link></li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-warning text-white">
                                Login <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                            </button>
                        </li>
                    </ul>
                )}
            </div>
        </>
    );
}

export default Header;
