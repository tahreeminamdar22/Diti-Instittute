import React from "react";
import '../App.css';
import Header from './Header';
import Cta from './Cta';
import Footer from './Footer';
import { BsArrowRightShort } from "react-icons/bs";
function WebDev() {
    return(
        <>
        <Header/>
        <div className="container mb-5">
            <div className="row">
                <div classname="col-lg-12">
                    <div style={{background: "rgb(243, 241, 238)", padding: "29px"}}>
                        <p style={{ borderBottom: "2px solid red", fontSize: "30px", 
                           fontWeight: "700", paddingBottom: "25px" }}>Website Services
                        </p>
                    </div>
                    <div className="accordion" id="myAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button type="button" class="accordion-button" data-bs-toggle="collapse" 
                                data-bs-target="#collapseOne" aria-expanded="true" style={{ fontWeight: "800", fontSize: "18px" }}>
                                Website Services
                                </button>
                            </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                            <div class="card-body">
                                <p>
                                Web development, also known as website development, 
                                it is a creative job that’s refers to the tasks associated with creating, 
                                designing and maintaining web applications that run online on a different browser. 
                                It also includes web design, web programming and database management.
                                </p>

                                <p>DITI provides wireframes and prototypes to test design ideas, offer input on design logos, branding,
                                   company style guides and many more. 
                                </p>
                                <p>Website development company, we aim to deliver solutions that are built on robust architecture 
                                    providing feature-rich and real-time web applications. 
                                    We build apps on latest technologies to ensure that app is adaptable and reliable for future 
                                    challenges.
                                </p>
                                <p>The basic tools involved in web development are programming languages called HTML (Hypertext Markup 
                                Language), CSS (Cascading Style Sheets), and JavaScript. 
                                There are, however, a number of other programs used to “manage” or facilitate the construction of sites 
                                that would otherwise have to be done “from scratch” by writing code. A number of content management 
                                systems (CMS) fall into this category, including WordPress, Joomla, Drupal, TYPO3, and Adobe 
                                Experience Manager, among others.</p><p>By partnering with DITI, you get custom solutions 
                                for your digital journey.  Choosing DITI means innovation, expertise &amp; reliability.
                                </p>
                            </div>
                            <button type="button" className="btn btn-primary mt-3 mb-3">Book A Demo 
                        <BsArrowRightShort className="ms-2" size={20} aria-hidden="true" /></button>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
    </div>
  
        <Cta/>
        <Footer/>
        </>
    );
}
export default WebDev;
