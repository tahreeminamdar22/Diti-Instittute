import React from 'react';
  import { BsArrowRightShort } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function FormSection(){
    const handleSubmit = async(event) => {
        event.preventDefault();
        const form = new FormData(event.target);
         await fetch("http://localhost/diti/formsection.php", {
      method: "POST",
      body: form,
    });
    
    alert("Successfully connected to backend!");
  };
    return(
        <>
        <div class="container col-xl-10 col-xxl-8 px-4 py-5 w-100" style={{backgroundColor: "#f5f7fb"}}> 
            <div class="row align-items-center "> 
                <div class="col-lg-6  mb-40"> 
                    <h3 className="mb-15" style={{fontSize: "40px"}}><b>100% Job Oriented Courses <span style={{color: "#2c79ff"}}>50+</span>  
                    Courses Placement Assistant</b></h3>
                </div> 
                <div class="col-lg-6"> 
                    
                    <form class="pt-md-2 p-4 p-md-5 border rounded-3 bg-body-tertiary" style={{textAlign: "justify"}} method="POST" onSubmit={handleSubmit}> 
                        <div class="form-floating mb-3 " > 
                            <div className="mb-20 pt-4">
                            <label for="name"><b>Enter Full Name:</b></label>
                            <input type="text" class="form-control" id="floatingInput" name="name"
                            placeholder="Full Name: John Doe"  required/> 
                             
                            </div>
                        </div> 
                        
                        <div class="form-floating mb-3"> 
                            <div className="mb-20">
                            <label for="number"><b>Enter Phone Number:</b></label>
                            <input type="tel" class="form-control" id="floatingInput" name="number"
                            placeholder="Phone Number: 9876543210"  required/> 
                             
                            </div>
                        </div> 
                        <div class="form-floating mb-3"> 
                            <div className="mb-20">
                            <label for="email"><b>Enter Email-id:</b></label>
                            <input type="email" class="form-control" id="floatingInput" name="email"
                            placeholder="Email: example@gmail.com" required /> 
                             
                            </div>
                        </div> 
                        
                        <div class="form-floating mb-3"> 
                            <div className="mb-20">
                             <label for="course"><b>Enter Course Name:</b></label>   
                            <input type="text" class="form-control" id="floatingInput" name="course"
                            placeholder="Web Development/Java" required /> 
                             
                            </div>

                            
                        </div> 
                        <button className="btn btn-primary d-inline-flex align-items-center" type="submit">
                              Submit
                              <BsArrowRightShort className="ms-1" size={20} aria-hidden="true" />
                            </button>
                    </form> 
                </div> 
            </div> 
        </div>
        </>
    );
}
export default FormSection;
 