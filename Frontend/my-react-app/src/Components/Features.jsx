import React from "react";
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
function Features(){
    return(
        <>
        <div className="container" > 
            <div className="row gx-0">
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3" > 
                <div className="col-md-4" >
                <div className="col d-flex align-items-start features" style={{backgroundColor: "#ffa423", borderRadius: "10px 0 0 10px"}}> 
                    <div className="text-body-emphasis 
                    d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 animate__animated animate__flip feature-icon"> 
                       <FontAwesomeIcon icon={faLaptop} size="2x" color="white"  />
                   </div> 
                <div> 
                
               <h3 className="fs-2" style={{color: "white" }}>IT Courses</h3> 
               <p>Boost your skills in IT courses with IT professional teacher.</p> 
              
            </div> 
            </div>
        </div> 
         <div className="col-md-4" >
        <div className="col d-flex align-items-start features" style={{backgroundColor: "rgb(44, 121, 255)"}}> 
            <div className="text-body-emphasis 
                    d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 animate__animated animate__flip feature-icon"> 
                       <FontAwesomeIcon icon={faCloudArrowDown} size="2x" color="white" />
                   </div> 
            
            <div> 
                <h3 className="fs-2" style={{color: "white" }} >Placement</h3> 
                <p>Job placement offers with our tie-up companies help to get job quickly.</p> 
                    
            </div> 
        </div> 
        </div>
        <div className="col-md-4">
        <div className="col d-flex align-items-start features" style={{backgroundColor: "rgb(162, 0, 255)", borderRadius: "0 10px 10px 0"}}> 
            <div className="text-body-emphasis 
                    d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 animate__animated animate__flip feature-icon"> 
                       <FontAwesomeIcon icon={faCertificate} size="2x" color="white" />
                   </div> 
        
        <div>   
             <h3 className="fs-2" style={{color: "white" }}>Experience Staff</h3> 
             <p>Learn from experience staff which help to achieve dream jobs.</p> 
             
        </div> 
    </div> 
    </div>
   </div>
   </div> </div>
   
       
            
                
            
        
        </>
    );
}
export default Features;

