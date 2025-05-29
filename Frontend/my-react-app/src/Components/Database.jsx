import React from "react";
import '../App.css';
import Header from './Header';
import Cta from './Cta';
import Footer from './Footer';
import { BsArrowRightShort } from "react-icons/bs";
function Database(){
    return(
        <>
        <Header />
        <div style={{ paddingTop: "50px", paddingBottom: "30px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div style={{ background: "rgb(243, 241, 238)", padding: "29px" }}>
                            <p style={{ color: "red", borderBottom: "2px solid red", fontSize: "30px", fontWeight: "700", paddingBottom: "25px" }}>Database Training</p>
                        </div>
                        <div className="accordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" 
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" 
                                    aria-expanded="false" 
                                    aria-controls="collapseOne"
                                    style={{ fontWeight: "800", fontSize: "18px" }}>
                                    SQL Server Syllabus</button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                    <div className="card-body" style={{textAlign: "left"}}>
                                        <p></p>
                                        <h3>Introducing SQL Server</h3>
                                        <li>What's is SQL Server?</li>
                                        <li>SQL Server Editions</li>
                                        <li>Installing SQL Server</li>
                                        <br />
                                        <b>Basics of Database Design</b>
                                        <li>Introducing SQL Server Management Studio</li>
                                        <li>Creating a Database</li>
                                        <li>Adding Tables</li>
                                        <li>Building Relations</li>
                                        <li>Primary key and Foreign key</li>
                                        <li>Creating Indexes</li>
                                        <li>Concept of Normalization</li>
                                        <li>Concept of Denormalization</li>
                                        <br />
                                        <b>T-SQL Basics</b>
                                        <li>What is T-SQL?</li>
                                        <li>Syntax Conventions</li>
                                        <li>Introducing AdventureWorks</li>
                                        <li>Executing SQL Statements</li>
                                        <li>Identifiers</li>
                                        <li>Creating Data Types</li>
                                        <li>Operators</li>
                                        <li>Variables</li>
                                        <li>Functions</li>
                                        <br />
                                        <b>SQL Queries</b>
                                        <li>SQL Syntax</li>
                                        <li>SELECT Clause</li>
                                        <li>FROM Clause</li>
                                        <li>SQL Aliases</li>
                                        <li>Select Distinct</li>
                                        <li>WHERE Clause</li>
                                        <li>ORDER BY Clause</li>
                                        <li>SQL Like and Text Search</li>
                                        <li>SQL In and NOT In</li>
                                        <li>SQL Between</li>
                                        <li>SQL AND, OR , NOT</li>
                                        <li>Using GROUP BY and HAVING</li>
                                        <li>Using TOP N</li>
                                        <li>UNION Queries</li>
                                        <br />
                                        <b>Action Queries</b>
                                        <li>SELECT INTO queries</li>
                                        <li>DELETE queries</li>
                                        <li>TRUNCATE TABLE queries</li>
                                        <li>INSERT queries</li>
                                        <li>UPDATE queries</li>
                                        <li>JOINS</li>
                                        <li>Inner Join</li>
                                        <li>Right Join</li>
                                        <li>Left Join</li>
                                        <li>Full Join</li>
                                        <br />
                                        <b>Functions</b>
                                        <li>What is Functions</li>
                                        <li>Type of Functions</li>
                                        <li>Syntax of Functions</li>
                                        <li>How to create Functions</li>
                                        <li>Execute Functions</li>
                                        <li>Rowset  Functions</li>
                                        <li>Rank function</li>
                                        <li>Dense_rank</li>
                                        <br />
                                        <b>Triggers</b>
                                        <li>Creating Triggers</li>
                                        <li>Altering Triggers</li>
                                        <li>Using the Inserted and Deleted Tables</li>
                                        <li>Checking Updated Columns</li>
                                        <br/>
                                        <b>XML and SQL Server</b>
                                        <li>What is XML</li>
                                        <li>Convert normal table data into XML data</li>
                                        <li>XML Columns and Indexes</li>
                                        <li>Querying and Modifying XML Data</li>
                                        <li>Using OPENXML</li>
                                        <br />
                                        <b>Advanced SQL</b>
                                        <li>Stored Procedures</li>
                                        <li>Views</li>
                                        <li>Transactions</li>
                                        <li>Profiler</li>
                                        <li>Sub Query</li>
                                        <li>Cursors</li>
                                        <li>Error handling</li>
                                        <li>Indexes</li>
                                        <li>Execution Plans</li>
                                        <br />
                                        <b>DataBase Backup</b>
                                        <li>How to take DB backup</li>
                                        <li>How to restore BD</li>
                                        <li>How to import data from Excel</li>
                                        <br />
                                        <b>SMO and RMO Programming</b>
                                        <li>Retrieving Server Information</li>
                                        <li>Working With Database Objects</li>
                                        <li>Generating Scripts</li>
                                        <li>Viewing and Modifying Server Configuration</li>
                                        <p></p>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        <div className="accordion" id="myAccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" 
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" 
                                    aria-expanded="false" 
                                    aria-controls="collapseTwo" 
                                    style={{ fontWeight: "800", fontSize: "18px" }}>
                                    MySQL </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                    <div className="card-body" style={{textAlign: "left"}}>
                                        <p>
                                            <b>MYSQL DATA DEFINITION using SQL</b>
                                            <li>Manage Databases</li>
                                            <li>MySQL Table Types</li>
                                            <li>MySQL Data Types</li>
                                            <li>MySQL CREATE TABLE</li>
                                            <li>MySQL Primary Key</li>
                                            <li>MySQL Foreign Key</li>
                                            <li>MySQL Sequence</li>
                                            <li>MySQL INT Data Type</li>
                                            <li>MySQL DECIMAL Data Type</li>
                                            <li>MySQL DATE Data Type</li>
                                            <li>MySQL TIME Data Type</li>
                                            <li>MySQL DATETIME Data Type</li>
                                            <li>MySQL ALTER TABLE</li>
                                            <li>MySQL RENAME TABLE</li>
                                            <li>MySQL ADD COLUMN</li>
                                            <li>MySQL DROP TABLE</li>
                                            <li>MySQL Temporary Table</li>
                                            
                                            <b>Basic Data Manipulation using SQL</b>
                                            <li>SQL Syntax</li>
                                            <li>What is DDL, DML and DCL?</li>
                                            <li>SQL Select</li>
                                            <li>SQL Distinct</li>
                                            <li>SQL Where</li><li>SQL And &amp; Or</li>
                                            <li>SQL Order By</li>
                                            <li>SQL Insert Into</li>
                                            <li>SQL Update</li>
                                            <li>SQL Delete</li>
                                            <li>SQL Injection</li>
                                            <li>SQL Select Top</li>
                                            <li>SQL Like</li>
                                            <li>SQL Wildcards</li>
                                            <li>SQL In</li>
                                            <li>SQL Between</li>
                                            <li>SQL Aliases</li>
                                            <li>SQL Joins</li>
                                            <li>SQL Inner Join</li>
                                            <li>SQL Left Join</li>
                                            <li>SQL Right Join</li>
                                            <li>SQL Full Join</li>
                                            <li>SQL Union</li>
                                            <li>SQL Select Into</li>
                                            <li>SQL Insert Into Select</li>
                                            <li>SQL Create DB</li>
                                            <li>SQL Create Table</li>
                                            <li>SQL Constraints</li>
                                            <li>SQL Not Null</li>
                                            <li>SQL Unique</li>
                                            <li>SQL Primary Key</li>
                                            <li>SQL Foreign Key</li>
                                            <li>SQL Check</li>
                                            <li>SQL Default</li>
                                            <li>SQL Create Index</li>
                                            <li>SQL Drop</li>
                                            <li>SQL Alter</li>
                                            <li>SQL Auto Increment</li>
                                            <li>SQL Views</li>
                                            <li>SQL Dates</li>
                                            <li>SQL Null Values</li>
                                            <li>SQL Null Functions</li>
                                            <li>SQL Data Types</li>
                                            <li>SQL DB Data Types</li>
                                            
                                            <b>SQL Functions</b>
                                            <li>SQL Avg()</li><li>SQL Count()</li>
                                            <li>SQL First()</li><li>SQL Last()</li>
                                            <li>SQL Max()</li><li>SQL Min()</li>
                                            <li>SQL Sum()</li><li>SQL Group By</li>
                                            <li>SQL Having</li><li>SQL Ucase()</li>
                                            <li>SQL Lcase()</li>
                                            <li>SQL Mid()</li>
                                            <li>SQL Len()</li><li>SQL Round()</li>
                                            <li>SQL Now()</li><li>SQL Format()</li>
                                            
                                            <b>MYSQL STORED PROCEDURES</b>
                                            <li>MySQL Stored Procedures Introduction</li>
                                            <li>MySQL Stored Procedures Getting Started</li>
                                            <li>MySQL Stored Procedure Variables</li>
                                            <li>MySQL Stored Procedure Parameters</li>
                                            <li>MySQL Stored Procedures – Return Multiple Values</li>
                                            <li>MySQL IF Statement</li>
                                            <li>MySQL CASE Statement</li>
                                            <li>IF vs. CASE</li>
                                            <li>MySQL Loop Statements</li>
                                            <li>MySQL Cursor</li>
                                            <li>MySQL Stored Procedures Listing</li>
                                            <li>MySQL Error Handling</li>
                                            <li>MySQL Stored Procedures – Raising Error Conditions</li>
                                            <li>MySQL Stored Function</li>
                                            
                                            <b>Introduction to SQL Trigger</b>
                                            <li>MySQL Triggers Implementation</li>
                                            <li>Create Trigger in MySQL</li>
                                            <li>Managing Triggers in MySQL</li>
                                            <li>Create Multiple Triggers For The Same Trigger Event And Action Time</li>
                                            <li>Working with MySQL Scheduled Event</li><li>Modifying MySQL Events</li>
                                            
                                            <b>MYSQL VIEWS</b>
                                            <li>Introduction to Database View</li>
                                            <li>Views in MySQL</li>
                                            <li>MySQL CREATE VIEW</li>
                                            <li>MySQL Views &amp; WITH CHECK OPTION</li>
                                            <li>Creating MySQL Updatable Views</li>
                                            <li>LOCAL &amp; CASCADED in WITH CHECK OPTION</li>
                                            <li>Managing Views in MySQL</li>
                                        </p>
                                    </div>

                                </div>
                                
                            </div>
                            <button type="button" className="btn btn-primary mt-3" 
                                
                              >Book A Demo 
                                <BsArrowRightShort className="ms-2" size={20} aria-hidden="true" /> 
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Cta />
        <Footer />
        </>
    );
}
export default Database;