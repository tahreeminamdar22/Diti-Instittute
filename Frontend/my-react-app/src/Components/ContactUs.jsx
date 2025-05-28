import React from 'react';
import '../App.css';
import Header from './Header';
import Cta from './Cta';
import Footer from './Footer';
import { BsArrowRightShort } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function ContactUs() {
   const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    await fetch("http://localhost/diti/index.php", {
      method: "POST",
      body: form,
    });
    
    alert("Successfully connected to backend!");
  };
  return (
    
    <>
      
      <Header />
      <section className="pt-115 pb-120">
        <div className="container pb-20 m-20">
          <div className="row">
            {/* LEFT COLUMN */}
            <div className="col-xxl-7 col-xl-7 col-lg-6">
              <div>
                <div className="mb-40" style={{textAlign: "center"}}>
                  <h2 style={{ fontSize: '40px' }}>Get in touch with us</h2>
                  <p>Have a question or just want to say hi? We'd love to hear from you.</p>
                </div>
                <div className="mb-30" style={{textAlign: "justify"}}>
                  <form className="row g-3 pb-20" method="post" onSubmit={handleSubmit}>
                    <div className="col-xxl-6 col-xl-6 col-md-6">
                      <input
                        className="input-field form-control"
                        type="text"
                        id="fullname"
                        name="name"
                        placeholder="Enter Full Name"
                        required
                      />
                    </div>

                    <div className="col-xxl-6 col-xl-6 col-md-6">
                      <input
                        className="input-field form-control"
                        type="tel"
                        id="phone"
                        name="mobile"
                        placeholder="Enter Phone Number"
                        required
                      />
                    </div>

                    <div className="col-xxl-12">
                      <input
                        className="input-field form-control"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="johndoe@gmail.com"
                        required
                      />
                    </div>

                    <div className="col-xxl-12">
                      <textarea
                        className="input-field form-control"
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Type your message here..."
                        required
                      ></textarea>
                    </div>

                    <div className="col-xxl-12 text-center">
                      <button type="submit" className="btn btn-primary">
                        Send Your Message
                      </button>
                      <br></br>
                    </div>
                  </form>
                </div>

                <div className="ajax-response"></div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-xxl-4 offset-xxl-1 col-xl-4 offset-xl-1 col-lg-6 offset-lg-1" style={{textAlign: "justify"}}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                
                  <ul style={{listStyle: "none" }}>
                    <div className="contact-us align-items-start mb-35">
                    <li className="d-inline-flex justify-content-space-between">
                        <div className="mr20">
                             <FontAwesomeIcon icon={faLocationDot} color="skyblue" size="2x" />
                        </div>
                        <div className="contact-info-text ">
                            <h4>Head Office</h4>
                            <p>Deepak Commercial Center, 102 2nd Floor Vallpeer Road, Kalyan west, 
                               near Railway Station, Kalyan, Maharashtra 421301</p>

                        </div>
                    </li>
                    <br />
                    <li className="d-inline-flex justify-content-flex-start">
                        <div className="mr20">
                             <FontAwesomeIcon icon={faEnvelope} color="skyblue"  size="2x"/>
                        </div>
                        <div className="contact-info-text">
                            <h4>Email us directly</h4>
                            <p>info.ditinstitute@gmail.com</p>

                        </div>
                    </li>
                    <li className="d-inline-flex align-items-start justify-content-flex-start">
                        <div className="mr20">
                             <FontAwesomeIcon icon={ faPhone } color="skyblue" size="2x" />
                        </div>
                        <div className="contact-info-text">
                            <h4>Phone</h4>
                            <p>+91 8976758080<br />
                               +91 8976758070</p>

                    
                        </div>
                    </li>
                    </div>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <Cta />
      <Footer />
    </>
  );
}

export default ContactUs;
