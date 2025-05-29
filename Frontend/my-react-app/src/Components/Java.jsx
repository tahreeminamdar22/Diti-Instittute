import React from "react";
import '../App.css';
import Header from './Header';
import Cta from './Cta';
import Footer from './Footer';
import { BsArrowRightShort } from "react-icons/bs";
function Java() {
    return(
        <>
        <Header />
        {/*}
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div style={{ background: "rgb(243, 241, 238)", padding: "29px" }}>
                    <p style={{ borderBottom: "2px solid red", fontSize: "30px", fontWeight: "700",paddingBottom: "25px" }}>Java Training</p>
                    </div>
                <div className="accordion" id="myAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" 
                            data-bs-target="#collapseOne" style={{ fontWeight: "800", fontSize: "18px" }} >Core Java</button>
                        </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                        <div className="card-body">
                            <p>
                                <ul>
                                    <li style={{ listStyle: "inside" }}>
                                        <b> Introduction to Java</b>
                                    </li>
                                    <li style={{ listStyle: "inside" }}>History of Java</li>
                                    <li style={{ listStyle: "inside" }}>What is Java?</li>
                                    <li style={{ listStyle: "inside" }}>What is JVM?</li>
                                    <li style={{ listStyle: "inside" }}>Java Keywords</li>
                                    <li style={{ listStyle: "inside" }}>Difference between JDK, JRE &amp; JVM</li>
                                    <li style={{ listStyle: "inside" }}>Technologies based on Java</li>
                                    <li style={{ listStyle: "inside" }}>Features of Java</li>

                                    <li style={{ listStyle: "inside" }}><b> Data types in Java </b></li>
                                    <li style={{ listStyle: "inside" }}>Primitive Data Types</li>
                                    <li style={{ listStyle: "inside" }}>Non-Primitive Data Types</li>
                                    <li style={{ listStyle: "inside" }}><b>Operators In Java </b></li>
                                    <li style={{ listStyle: "inside" }}>Arithmetic Operators</li>
                                    <li style={{ listStyle: "inside" }}>Unary Operators</li>
                                    <li style={{ listStyle: "inside" }}>Increment Operator (++)</li>
                                    <li style={{ listStyle: "inside" }}>Decrement Operator (--)</li>
                                    <li style={{ listStyle: "inside" }}>Assignment Operator (=)</li>
                                    <li style={{ listStyle: "inside" }}>Relational Operators</li>
                                    <li style={{ listStyle: "inside" }}>Boolean Operators</li>
                                    <li style={{ listStyle: "inside" }}>Bitwise Operators</li>
                                    <li style={{ listStyle: "inside" }}>Ternary Operator / Conditional Operator (? :)</li>
                                    <li style={{ listStyle: "inside" }}>new Operator</li>
                                    <li style={{ listStyle: "inside" }}>Cast Operator</li>

                                    <li style={{ listStyle: "inside" }}><b>Control Statements in java</b></li>
                                    <li style={{ listStyle: "inside" }}>Control Statement</li>
                                    <li style={{ listStyle: "inside" }}>if Statements</li>
                                    <li style={{ listStyle: "inside" }}>If-else statements</li>
                                    <li style={{ listStyle: "inside" }}>switch-case Statements</li>
                                    <li style={{ listStyle: "inside" }}>Iteration Statements</li>
                                    <li style={{ listStyle: "inside" }}>for Statements</li>
                                    <li style={{ listStyle: "inside" }}>while Statements</li>
                                    <li style={{ listStyle: "inside" }}>do-while Statements</li>
                                    <li style={{ listStyle: "inside" }}>Transfer Statements break and continue</li>

                                    <li style={{ listStyle: "inside" }}><b>Arrays in Java</b></li>
                                    <li style={{ listStyle: "inside" }}>What is array</li>
                                    <li style={{ listStyle: "inside" }}>Types of array</li>
                                    <li style={{ listStyle: "inside" }}>arrayname.length Property</li>
                                    <li style={{ listStyle: "inside" }}>Command Line arguments</li>
                                    <li style={{ listStyle: "inside" }}>Creating Strings</li>
                                    <li style={{ listStyle: "inside" }}>String Class methods</li>
                                    <li style={{ listStyle: "inside" }}>Immutability of String</li>
                                    <li style={{ listStyle: "inside" }}><b>StringBuffer and StringBuilder</b></li>
                                    <li style={{ listStyle: "inside" }}>String Buffer class</li>
                                    <li style={{ listStyle: "inside" }}>String Buffer class methods</li>
                                    <li style={{ listStyle: "inside" }}>String Builder class</li>
                                    <li style={{ listStyle: "inside" }}>String Builder class methods</li>
                                    <li style={{ listStyle: "inside" }}><b>Introduction to OOP</b></li>
                                    <li style={{ listStyle: "inside" }}>Class / Object</li>
                                    <li style={{ listStyle: "inside" }}>Encapsulation</li>
                                    <li style={{ listStyle: "inside" }}>Abstraction</li>
                                    <li style={{ listStyle: "inside" }}>Inheritance</li>
                                    <li style={{ listStyle: "inside" }}>Polymorphism</li>
                                    
                                    <li style={{ listStyle: "inside" }}><b>Classes &amp; Object</b></li>
                                    <li style={{ listStyle: "inside" }}>Understanding Methods</li>
                                    <li style={{ listStyle: "inside" }}>Static Variables, Methods, and Block</li>
                                    <li style={{ listStyle: "inside" }}>'this' Keyword</li>
                                    <li style={{ listStyle: "inside" }}>Instance Methods</li>
                                    <li style={{ listStyle: "inside" }}>Passing Primitive data types, Objects &amp; Arrays to Methods</li>

                                    <li style={{ listStyle: "inside" }}><b>Inheritance</b></li>
                                    <li style={{ listStyle: "inside" }}>'super' Keyword</li>
                                    <li style={{ listStyle: "inside" }}>Types of Inheritance</li>
                                    <li style={{ listStyle: "inside" }}>Access Specifiers</li>

                                    <li style={{ listStyle: "inside" }}><b>Polymorphism</b></li>
                                    <li style={{ listStyle: "inside" }}>Polymorphism with Variables</li>
                                    <li style={{ listStyle: "inside" }}>Polymorphism using Methods</li>
                                    <li style={{ listStyle: "inside" }}>Static Polymorphism</li>
                                    <li style={{ listStyle: "inside" }}>Dynamic Polymorphism</li>
                                    <li style={{ listStyle: "inside" }}>Polymorphism with Static Methods</li>
                                    <li style={{ listStyle: "inside" }}>Polymorphism with Private Methods</li>
                                    <li style={{ listStyle: "inside" }}>Polymorphism with final Methods</li>
                                    <li style={{ listStyle: "inside" }}>'final' class</li>

                                    <li style={{ listStyle: "inside" }}><b>Type Casting</b></li>
                                    <li style={{ listStyle: "inside" }}>Casting with Primitive Data Types</li>
                                    <li style={{ listStyle: "inside" }}>Casting with User Defined Data Types</li>
                                    <li style={{ listStyle: "inside" }}>Generalization and Specialization</li>
                                    <li style={{ listStyle: "inside" }}>Object Class</li>
                                    <li style={{ listStyle: "inside" }}>Cloning the class Objects</li>

                                    <li style={{ listStyle: "inside" }}><b>Abstract Classes &amp; Interfaces</b></li>
                                    <li style={{ listStyle: "inside" }}>Abstract Method &amp; Abstract Classes</li>
                                    <li style={{ listStyle: "inside" }}>Multiple Inheritance using Interfaces</li>
                                    <li style={{ listStyle: "inside" }}>Interface within Interface</li>
                                    <li style={{ listStyle: "inside" }}>Abstract classes V/s Interfaces</li>

                                    <li style={{ listStyle: "inside" }}><b>Packages</b></li>
                                    <li style={{ listStyle: "inside" }}>Types of Packages</li>
                                    <li style={{ listStyle: "inside" }}>Interfaces in Package</li>
                                    <li style={{ listStyle: "inside" }}>Creating Sub Package In Package</li>

                                    <li style={{ listStyle: "inside" }}><b>Exception Handling</b></li>
                                    <li style={{ listStyle: "inside" }}>What are Exceptions?</li>
                                    <li style={{ listStyle: "inside" }}>Types of Exceptions</li>
                                    <li style={{ listStyle: "inside" }}>Handling Exception</li>
                                    <li style={{ listStyle: "inside" }}>'try', 'catch'</li>
                                    <li style={{ listStyle: "inside" }}>Handling Multiple Exception</li>
                                    <li style={{ listStyle: "inside" }}>'finally', 'throw', 'throws'</li>
                                </ul>
                            </p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingTwo"><button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style="font-weight: 800; font-size: 18px;">Advance Java</button></h2><div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#myAccordion"><div class="card-body"><p><b>Java Collections and Generics</b></p><li>The Collections Framework and its API</li><li>Collections and Java Generics</li><li>Collection, Set, List, Map, Iterator</li><li>Auto boxing</li><li>Collections of Object (non-generic)</li><li>Using Array List, Hash Set, and Hash Map</li><li>for-each Loop</li><li>Processing Items With an Iterator</li><li>More About Generics</li><b>The Java Streams Model</b><li>Delegation-Based Stream Model</li><li>Input Stream and Output Stream</li><li>Media-Based Streams</li><li>Filtering Streams</li><li>Readers and Writers</li><b>Working with Files</b><li>File Class</li><li>Modeling Files and Directories</li><li>File Streams</li><li>Random-Access Files</li><b>Java Serialization</b><li>The Challenge of Object Serialization</li><li>Serialization API</li><li>Serializable Interface</li><li>Object Input Stream and Object Output Stream</li><li>The Serialization Engine</li><li>Transient Fields</li><li>readObject and writeObject</li><li>Externalizable Interface</li><b>Conclusion</b><b>MySQL</b><li>MySQL Data types and Database Languages</li><li>Important SQL command</li><li>SQL Joins</li><li>SQL Constraints</li><b>Java Database Connectivity</b><li>JDBC Product</li><li>Types of Drivers</li><li>Two-Tier Client/Server Model</li><li>Three-Tier Client/Sever Model</li><li>Basic Steps of JDBC</li><li>Creating and Executing SQL Statement</li><li>The Result Set Object</li><li>Working with Database MetaData Interface</li><b>Servlets</b><li>Servlet Interaction &amp; Advanced Servlets</li><li>Life cycle of Servlet</li><li>Java Servlet Development Kit</li><li>Javax.servlet package</li><li>Reading Servlet Parameters</li><li>Reading Initialization Parameters</li><li>The javax.servlet.http Package</li><li>Handling HTTP</li><b>JavaServer Pages</b><li>JSP Technologies</li><li>Understanding the Client-Server Model</li><li>Understanding Web server software</li><li>Configuring the JSP Server</li><li>Handling JSP Errors</li><li>JSP Translation Time Errors</li><li>JSP Request Time Errors</li><li>Creating a JSP Error Page</li><b>EJB</b><li>Types of EnterpriseJava beans</li><li>Session Bean &amp; Entity Bean</li><li>Features of Session Bean</li><li>Life-cycle of Stateful Seession Bean</li><li>Features of Entity Bean</li><li>Life-cycle of Entity Bean</li><li>Container-managed Transactions &amp;</li><li>Bean-managed Transactions</li><li>Implementing a container-manged Entity Bean</li><b>XML</b><li>What is XML?</li><li>XML Syntax Rules</li><p></p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingThree"><button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" style="font-weight: 800; font-size: 18px;">Java Framework</button></h2><div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#myAccordion"><div class="card-body"><p><b>Spring Framework</b></p><li>Introduction to Spring 3.0</li><li>Steps to use Spring Framework in applications</li><li>Understanding IOC and Dependency Injection</li><li>Understanding the bean life-cycle – Auto wiring and bean scopes</li><li>Annotation-based dependency injection</li><li>Adding Behavior to an application using Aspect</li><li>Creating and applying aspects</li><li>Introduction data access with spring and JDBC through Spring</li><li>Transaction in a Spring environment</li><li>Getting started with Hibernate in a Spring environment</li><li>Working with Spring MVC</li><li>Spring MVC Form Handling</li><li>Creating Views in Spring MVC</li><b>Spring Boot:</b><li>Introduction to Spring Boot</li><li>Exploring Starters</li><li>Exploring Auto configuration</li><li>Exploring Embedded Containers</li><li>Exploring Actuators</li><li>Using YAML with Spring Boot Application</li><li>Using Spring Boot with JDBC</li><li>Using Spring Boot with Data Sources</li><li>Using Spring Boot with Hibernate</li><li>Using Spring Boot with JPA</li><li>Using Spring Data JPA</li><li>Spring Boot with Web MVC</li><li>Spring Boot with REST Services</li><li>Spring Boot with Swagger</li><li>Spring Boot with Messaging-RabbitMQ</li><li>Spring Boot with Messaging-Kafka</li><li>Spring Boot with Java Mail</li><li>Using Maven to Build Boot Applications</li><li>Using Gradle to Build Boot Applications</li><li>Spring Boot with Security</li><b>Micro services with Spring Cloud:</b><li>Introduction to Microservices</li><li>Exploring Microservices with Book Store -A Case-Study</li><li>Using Actuators in Book Store.</li><li>Spring Boot Admin Server</li><li>Spring Boot Admin Client in Book Store</li><li>Feign as a declarative REST client</li><li>ASYNC Calls with RabbitMQ</li><li>ASYNC Calls with Kafka</li><li>Service Discovery with Netflix Eureka</li><li>Load-Balancing with Netflix Ribbon</li><li>Distributed Tracing with Sleuth and Zipkin</li><li>Fault Tolerance with Netflix Hystrix</li><li>Edge Components with Netflix Zuul</li><li>Using All the Skills in Book Store</li><li>Spring Cloud Config Server</li><li>Spring Cloud Config Cleint in Book Store</li><li>Spring Cloud Bus</li><li>Handling Errors in MicroService Applications</li><li>Unit Testing MicroServices</li><li>Securing MicroService Applications.</li><li>Using OAUTH2 Security</li><b>Struts</b><li>Introduction to the Apache Struts</li><li>MVC Architecture</li><li>Struts Architecture</li><li>How Struts Works?</li><li>Introduction to the Struts Controller</li><li>Introduction to the Struts Action Class</li><li>Using Struts ActionFrom Class</li><li>Using Struts HTML Tags</li><li>Introduction to Struts Validator Framework</li><li>Client Side Address Validation in Struts</li><li>Custom Validators Example</li><li>Developing Application with Struts Tiles</li><b>Hibernate</b><li>Introduction to Hibernate 3.0</li><li>Hibernate Architecture</li><li>First Hibernate Application</li><li>Hibernate 3</li><li>What is the problem with JDBC - paradigm mismatch</li><li>What is ORM?</li><li>Understanding different components of Hibernate</li><li>How to persist objects using Hibernate</li><li>How to use mapping files, configuration files and Session object</li><li>Instance states</li><li>How to generate ID</li><li>How to implement Inheritance in Hibernate</li><li>Working with relationship between entities</li><li>Transactions in Hibernate</li><li>Querying with HQL (Hibernate Query Language)</li><li>Named and native queries</li><li>Working with Criteria Interface</li><li>Query by example - QBE</li><li>Caching and fetching</li><li>Using Hibernate in different types of applicatio </li><p></p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingThree"><button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour" style="font-weight: 800; font-size: 18px;">Android</button></h2><div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#myAccordion"><div class="card-body"><p><li>Java Concepts</li><li>SQL</li><li>Mobile Application Development Platform</li><li>Android Development History</li><li>Android Installation with Studio</li><li>Android SDK and Generation of APK Files</li><li>Android Features, Versions, and Market Scenario</li><li>Android Architecture</li><li>Android Basic Building Blocks</li><li>Activities and Basic UI Designing</li><li>Material Design UI</li><li>Adapters in Android</li><li>Working With Fragments</li><li>Notifications and its Types</li><li>Intent (Explicit and Implicit), Intent Filters</li><li>Services and Broadcast Receiver</li><li>Multithreading in Android</li><li>Camera, Bluetooth, Sensors, and Wi-Fi Implementation in Android</li><li>Telephony Services</li><li>Location Based Services with Google Maps</li><li>Web Services and Web View</li><li>SQLite Database</li><li>Shared Preferences</li><li>Firebase</li><li>File I/O</li><li>Content Provider in Android</li></p></div></div></div><button type="button" class="btn btn-primary mt-3" data-toggle="modal" data-target="#exampleModalCenter" style="margin-left: 45%;">Book A Demo <i class="fa-regular fa-arrow-right"></i></button><div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header"><p style="color: rgb(0, 15, 47); font-size: 20px; text-align: center; text-decoration: underline; font-weight: 700;">Courses Enquiry</p><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div><div class="heading_s1 mb-3" style="text-align: center;"><h6>Please feel the below form, we will call you very shortly</h6></div><div class="modal-body"><form action="mail.php" method="POST" class="pt-md-2"><div class="row"><div class="form-group col-sm-12" style="padding-top: 10px; padding-bottom: 15px;"><input required="" placeholder="Enter Your Name *" id="nameEnquiry" class="form-control alpha-only" name="fname" type="text"></div><div class="form-group col-sm-12" style="padding-top: 10px; padding-bottom: 15px;"><input required="" placeholder="Enter Mobile No. *" id="phoneEnquiry" class="form-control number-only" name="mobile" type="text" maxlength="10"></div><div class="form-group col-sm-12" style="padding-top: 10px; padding-bottom: 15px;"><input required="" placeholder="Enter Email ID" id="emailEnquiry" class="form-control" name="email" type="text"></div><div class="form-group col-sm-12" style="padding-top: 10px; padding-bottom: 15px;"><input required="" placeholder="Enter Course Name" id="course" class="form-control" name="course" type="text"></div><div class="col-md-12" style="text-align: center;"><button class="tp-btn" style="cursor: pointer;"><span>Submit <i class="fa-regular fa-arrow-right"></i> </span></button></div><div class="col-sm-12"><div id="alert-msg" class="alert-msg text-center"></div></div></div></form></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div></div></div>
            </div>
        </div>
        */}
        
        <Cta />
        <Footer />
        </>
    );
}
export default Java;