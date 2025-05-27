import React from 'react';
import database from "../assets/Courses/database.png";
import java from "../assets/Courses/java.jpg";
import webdev from "../assets/Courses/webdev.jpg";
   import { BsArrowRightShort } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
function Courses(){
    return(
        <>
        <div style={{paddingTop: "40px", paddingBottom: "40px"}}>
           <div className="container">
            <div class="row align-items-end">
                <div class="col-lg-8">
                    <div class=" mb-40" style={{textAlign: "justify"}}>
                        <h3 class="mb-15" style={{fontSize: "40px"}}>Our Popular Courses.</h3>
                        <p>DITI provides best IT industrial courses for future development.</p>
                    </div>
                </div>
            </div>
  <div className="row">
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 text-center">
        <img
          src={database}
          className="card-img-top"
          alt="Database"
        />
        <div className="card-body">
          <h3 style={{ fontSize: "19px", fontWeight: "700", textDecoration: "underline" }}>
            Database
          </h3>
          <p className="card-text">
            Every business uses data stored in databases to make informed business decisions.
          </p>
        </div>
      </div>
    </div>
    
     <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 text-center">
        <img
          src={java}
          className="card-img-top"
          alt="java"
        />
        <div className="card-body">
          <h3 style={{ fontSize: "19px", fontWeight: "700", textDecoration: "underline" }}>
            Java
          </h3>
          <p className="card-text">
            The Java programming language, which is widely used with corporate applications and 
            Android mobile operating systems.
          </p>
        </div>
      </div>
    </div>
    
     <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 text-center">
        <img
          src={webdev}
          className="card-img-top"
          alt="webdev"
        />
        <div className="card-body">
          <h3 style={{ fontSize: "19px", fontWeight: "700", textDecoration: "underline" }}>
            Website Development
          </h3>
          <p className="card-text">
           Website is an integral parts of every business and DITI is helping in learning this
            concept to build your own website.
          </p>
        </div>
      </div>
    </div>
    
    
  </div>
<button className="btn btn-secondary d-inline-flex align-items-center" type="button">
   <Link to="/allCourses" className="nav-link">All Courses</Link>
  <BsArrowRightShort className="ms-2" size={20} aria-hidden="true" />
</button>
</div>

           </div>

        </>
    );
}
export default Courses;
 