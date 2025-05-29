import React from "react";
import about1 from "../assets/About/about1.png";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserGroup,
  faFilePen,
  faChartPie,
  faBarsProgress
} from '@fortawesome/free-solid-svg-icons';
import '../App.css';
function About(){
    return(
        <>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div style={{ position: "relative", paddingTop: "20px", paddingBottom: "20px", overFlow:"fix" }}>
                             <img src={about1}  className="d-block w-100" alt="slider1" />
                    </div>
                </div>
                <div className="col-lg-6" style={{ textAlign: "justify"}}>
                    <div className="ml-110">
                        <h3 className="home-about-title mb-15" >Digital Infotech<br /> training Instittute</h3>
                        <p className="mb-40 home-about-sections">As an Industry leader in Mumbai, DITI software 
                            Training<br />Institute in kalyan. DITI offer a wide range of software<br /> 
                            training programs that are designed to provide<br /> students/working 
                            professional with the technical skills<br />
                            <b>(Software Testing, Java, .Net, DevOps, AWS, Database<br />
                                (MS SQL, MY SQL), Data Science, RPA, Hardware &<br /> Networking)
                            </b>
                        </p>
                        <br />
                        <p className="home-about-sections">Best part of our institute is we provide <b>Classroom training,<br /> Online training 
                            and Corporate training</b> on weekends and<br /> weekdays. 
                            DITI offers both on-site and online training<br /> 
                            programs for working and non-working students and<br /> professionals also
                        </p>
                        <div class=" d-flex align-items-center justify-content-center flex-wrap home-about-feature-list mb-10" >
                            <ul className="d-flex flex-wrap list-unstyled justify-content-start align-items-center" style={{fontSize: '22px', gap: '0.5rem', opacity: "0.85"}}>
                                <li className="col-md-8 col-lg-6 mb-3 mb-3"><span style={{   marginRight: "10px" }}><FontAwesomeIcon icon={faUserGroup} color="blue" /></span>
                                Highly Skilled Teachers</li>
                                <li className="col-md-8 col-lg-6 mb-2 mb-2"><span style={{   marginRight: "8px" }}><FontAwesomeIcon icon ={faFilePen}  color="blue" /></span>
                                Efficient and Flexible Timing</li>
                                <li className="col-md-8 col-lg-6 mb-3 mb-3"><span style={{   marginRight: "10px" }}><FontAwesomeIcon icon={faChartPie} color="blue" /></span><span> </span>
                                Corporate Training</li>
                                <li className="col-md-8 col-lg-6 mb-3 mb-3"><span style={{   marginRight: "10px" }}><FontAwesomeIcon icon={faBarsProgress} color="blue" /></span><span> </span>
                                Affordable Courses</li>
                            </ul>
                        </div>
                     

<button className="btn btn-primary d-inline-flex align-items-center" type="button">
 <Link to="/aboutUs" className="nav-link">Explore More</Link>
  <BsArrowRightShort className="ms-2" size={30} aria-hidden="true" /> 
</button>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default About;
 