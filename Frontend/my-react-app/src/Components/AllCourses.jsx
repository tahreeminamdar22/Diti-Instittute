import React from 'react';
import '../App.css';
import Header from './Header';
import Cta from './Cta';
import Footer from './Footer';
import database from "../assets/Courses/database.png";
import java from "../assets/Courses/java.jpg";
import webdev from "../assets/Courses/webdev.jpg";
import dotnet1 from "../assets/Courses/dotnet1.jpg";
import networking from "../assets/Courses/networking.png";
import angular from "../assets/Courses/angular.png";
import basiccomputer from "../assets/Courses/basiccomputer.jpg";
import cloud from "../assets/Courses/cloud.jpg";
import dataanalytics from "../assets/Courses/dataanalytics.jpg";
import testing from "../assets/Courses/testing.png";
import { BsArrowRightShort } from "react-icons/bs";

function AllCourses(){
    return (
        <>
        <div>
        <Header />
        <main>
            <section>
                <div className="container">
                    <div style={{textAlign: "center", paddingTop: "28px", paddingBottom: "20px"}}>
                            <p style={{fontSize: "24px", fontWeight: "700", 
                                textDecoration: "underline"}}>
                                    DITI Provides list of professional courses with quality training
                                </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6" style={{ paddingBottom: "20px" }}>
                            <div className="course-card">
                                <div className="card h-100 text-center">
                                        <img
                                          src={database} className="card-img-top" alt="Database" />
                                        <div className="card-body">
                                          <h3 style={{ fontSize: "19px", fontWeight: "700", textDecoration: "underline" }}>
                                            Database
                                          </h3>
                                          <p className="card-text">
                                            Every business uses data stored in databases to make informed business decisions.
                                          </p>
                                          <button className="btn btn-primary row justify-content-center align-items-center w-50 h-100 pt40 pb40 " type="button">
                                            View More
                                          <BsArrowRightShort className="ms-1" size={20} aria-hidden="true" />
                                          </button>
                                        </div>
                                </div>
                            </div>

                            
                        </div>
                        <div className="col-lg-4 col-md-6" style={{ paddingBottom: "20px" }}>
                            <div className="course-card">
                                <div className="card h-100 text-center">
                                        <img
                                          src={java} className="card-img-top" alt="Database" />
                                        <div className="card-body">
                                          <h3 style={{ fontSize: "19px", fontWeight: "700", textDecoration: "underline" }}>
                                            Java,Advanced Java
                                          </h3>
                                          <p className="card-text">
                                            The Java programming language, which is widely used with corporate applications and Android mobile operating systems.
                                          </p>
                                          <button className="btn btn-primary row justify-content-center align-items-center w-50 h-100 pt40 pb40 " type="button">
                                            View More
                                          <BsArrowRightShort className="ms-1" size={20} aria-hidden="true" />
                                          </button>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" style={{ paddingBottom: "20px" }}>
                            <div className="course-card">
                                <div className="card h-100 text-center">
                                        <img
                                          src={webdev} className="card-img-top" alt="Database" />
                                        <div className="card-body">
                                          <h3 style={{ fontSize: "19px", fontWeight: "700", textDecoration: "underline" }}>
                                            Website Development
                                          </h3>
                                          <p className="card-text">
                                            Website is an integral parts of every business and DITI is helping in learning this concept to build your own website.
                                          </p>
                                          <button className="btn btn-primary row justify-content-center align-items-center w-50 h-100 pt40 pb40 " type="button">
                                            View More
                                          <BsArrowRightShort className="ms-1" size={20} aria-hidden="true" />
                                          </button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                     <div className="row">
                        <div className="col-lg-4 col-md-6" style={{ paddingBottom: "20px" }}>
                            <div className="course-card">
                                <div className="card h-100 text-center">
                                        <img
                                          src={dotnet1} className="card-img-top" alt="Database" />
                                        <div className="card-body">
                                          <h3 style={{ fontSize: "19px", fontWeight: "700", textDecoration: "underline" }}>
                                            Asp.net, C#
                                          </h3>
                                          <p className="card-text">
                                            ASP.NET is a free framework for building great websites & web applications using HTML, CSS, and JavaScript.
                                          </p>
                                          <button className="btn btn-primary row justify-content-center align-items-center w-50 h-100 pt40 pb40 " type="button">
                                            View More
                                          <BsArrowRightShort className="ms-1" size={20} aria-hidden="true" />
                                          </button>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" style={{ paddingBottom: "20px" }}>
                            <div className="course-card">
                                <div className="card h-100 text-center">
                                        <img
                                          src={angular} className="card-img-top" alt="Database" />
                                        <div className="card-body">
                                          <h3 style={{ fontSize: "19px", fontWeight: "700", textDecoration: "underline" }}>
                                            Angular
                                          </h3>
                                          <p className="card-text">
                                            Angular is a development platform. Angular includes component-based framework for building web applications.
                                          </p>
                                          <button className="btn btn-primary row justify-content-center align-items-center w-50 h-100 pt40 pb40 " type="button">
                                            View More
                                          <BsArrowRightShort className="ms-1" size={20} aria-hidden="true" />
                                          </button>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" style={{ paddingBottom: "20px" }}>
                            <div className="course-card">
                                <div className="card h-100 text-center">
                                        <img
                                          src={cloud} className="card-img-top" alt="Database" />
                                        <div className="card-body">
                                          <h3 style={{ fontSize: "19px", fontWeight: "700", textDecoration: "underline" }}>
                                            Cloud Computing
                                          </h3>
                                          <p className="card-text">
                                           Industrial cloud computing is a broad term for cloud technology used in asset-intensive.
                                          </p>
                                          <button className="btn btn-primary row justify-content-center align-items-center w-50 h-100 pt40 pb40 " type="button">
                                            View More
                                          <BsArrowRightShort className="ms-1" size={20} aria-hidden="true" />
                                          </button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                     <div className="row">
                        <div className="col-lg-4 col-md-6" style={{ paddingBottom: "20px" }}>
                            <div className="course-card">
                                <div className="card h-100 text-center">
                                        <img
                                          src={basiccomputer} className="card-img-top" alt="Database" />
                                        <div className="card-body">
                                          <h3 style={{ fontSize: "19px", fontWeight: "700", textDecoration: "underline" }}>
                                            Computer Courses
                                          </h3>
                                          <p className="card-text">
                                             Computers allow the application of different types of software that can help to keep track of files, documents.
                                          </p>
                                          <button className="btn btn-primary row justify-content-center align-items-center w-50 h-100 pt40 pb40 " type="button">
                                            View More
                                          <BsArrowRightShort className="ms-1" size={20} aria-hidden="true" />
                                          </button>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" style={{ paddingBottom: "20px" }}>
                            <div className="course-card">
                                <div className="card h-100 text-center">
                                        <img
                                          src={networking} className="card-img-top" alt="Database" />
                                        <div className="card-body">
                                          <h3 style={{ fontSize: "19px", fontWeight: "700", textDecoration: "underline" }}>
                                            Hardware And Networking
                                          </h3>
                                          <p className="card-text">
                                            Computer hardware is to support functions such as processing, communication,input and output.
                                          </p>
                                          <button className="btn btn-primary row justify-content-center align-items-center w-50 h-100 pt40 pb40 " type="button">
                                            View More
                                          <BsArrowRightShort className="ms-1" size={20} aria-hidden="true" />
                                          </button>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" style={{ paddingBottom: "20px" }}>
                            <div className="course-card">
                                <div className="card h-100 text-center">
                                        <img
                                          src={testing} className="card-img-top" alt="Database" />
                                        <div className="card-body">
                                          <h3 style={{ fontSize: "19px", fontWeight: "700", textDecoration: "underline" }}>
                                            Software Testing
                                          </h3>
                                          <p className="card-text">
                                             It is a process of evaluating & verifying that a software product or application does what it is supposed to do.
                                          </p>
                                          <button className="btn btn-primary row justify-content-center align-items-center w-50 h-100 pt40 pb40 " type="button">
                                            View More
                                          <BsArrowRightShort className="ms-1" size={20} aria-hidden="true" />
                                          </button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="row">
                     <div className="col-lg-4 col-md-6" style={{ paddingBottom: "20px" }}>
                            <div className="course-card">
                                <div className="card h-100 text-center">
                                        <img
                                          src={dataanalytics} className="card-img-top" alt="Database" />
                                        <div className="card-body">
                                          <h3 style={{ fontSize: "19px", fontWeight: "700", textDecoration: "underline" }}>
                                            Data Analytics
                                          </h3>
                                          <p className="card-text">
                                            Data analytics is important because it helps businesses optimize their performances.
                                          </p>
                                          <button className="btn btn-primary row justify-content-center align-items-center w-50 h-100 pt40 pb40 " type="button">
                                            View More
                                          <BsArrowRightShort className="ms-1" size={20} aria-hidden="true" />
                                          </button>
                                        </div>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
    </section>
    </main>
        <Cta />
        <Footer />
        </div>
        </>
    )
}
export default AllCourses;