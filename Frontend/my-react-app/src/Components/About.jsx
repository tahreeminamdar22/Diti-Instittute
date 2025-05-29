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
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div style={{ position: "relative", paddingTop: "20px", paddingBottom: "20px" }}>
                             <img src={about1}  className="d-block w-100" alt="slider1" />
                    </div>
                </div>
                <div className="col-lg-6" style={{ textAlign: "justify"}}>
                    <div className="ml-110">
                        <h3 className="home-about-title mb-15" >Digital Infotech<br /> Training Instittute</h3>
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
                        <div className=" d-flex row align-items-center justify-content-center flex-wrap home-about-feature-list mb-15" >
                            <ul className="col-lg-10 align-items-start list-unstyled" style={{fontSize: '20px', gap: '0.5rem', opacity: "0.85"}}>
                                <li className="col-md-8 col-lg-6"><span style={{   marginRight: "10px" }}><FontAwesomeIcon icon={faUserGroup} color="blue" /></span>
                                Highly Skilled Teachers</li>
                                <li className="col-md-8 col-lg-6"><span style={{   marginRight: "8px" }}><FontAwesomeIcon icon ={faFilePen}  color="blue" /></span>
                                Efficient + Flexible Timing</li>
                                <li className="col-md-8 col-lg-6"><span style={{   marginRight: "8px" }}><FontAwesomeIcon icon={faChartPie} color="blue" /></span>
                                Corporate Training</li>
                                <li className="col-md-8 col-lg-6"><span style={{   marginRight: "8px" }}><FontAwesomeIcon icon={faBarsProgress} color="blue" /></span>
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
         {/*
         import lineShapes from "../assets/lineShapes.png";
import roleShape from "../assets/roleShape.png";
import blueBook from "../assets/blueBook.png";
         <div className='shapes'>
          <div className="lines">
            <img src={lineShapes} alt="background-Image" loading='lazy' className='lineShapes'/>
          </div>
          <div className="role">
            <img src={roleShape} alt="background-Image" loading='lazy' className='roleShapes'/>
          </div>
          <div class="book">
            <img src={blueBook}  alt="Blue-Book" loading="lazy" className="bluebook"/>
          </div>
        </div> */}

       
        
        </>
    );
}
export default About;
 