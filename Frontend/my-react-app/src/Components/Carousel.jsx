import React from "react";
import Slider1  from  "../assets/Sliders/Slider1.jpg";
import Slider2 from "../assets/Sliders/Slider2.jpg";
import Slider3 from "../assets/Sliders/Slider3.jpg";
import '../App.css';


function Carousel(){
    return(
     <>
      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel"> 
        <div className="carousel-indicators"> 
            <button type="button" data-bs-target="#myCarousel" 
            data-bs-slide-to="0" className="" aria-label="Slide 1"></button> 

            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" 
            aria-label="Slide 2" className="active" aria-current="true"></button> 

            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" 
            aria-label="Slide 3" className=""></button> </div> <div className="carousel-inner"> 
            
        <div className="carousel-item"> 
            <img src={Slider1}  className="d-block w-100" alt="slider1" />
            <div className="container"> 
                <div className="carousel-caption d-none d-md-block" > 
                    <h1 className="slider-title" data-animation="fadeInUp" data-delay="0.5s" style={{marginBottom: "170px"}}>Digital Infotech<br /> training Instittute</h1> 
                    
                </div> 
            </div> 
        </div> 
        <div className="carousel-item active"> 
              <img 
  className="d-block w-100" 
  src={Slider2} 
  alt="slider 2"
  style={{ width: "100%", height: "100%", objectFit: "cover" }}
/>

        <div className="container"> 
            <div className="carousel-caption d-none d-md-block"> 
                <h1 className="slider-title" data-animation="fadeInUp" data-delay="0.5s" 
                style={{marginBottom: "170px"}}>Get Industrial training<br />
                from the experts.</h1> 
            </div> 
        
    </div> 
    </div> 
    <div className="carousel-item"> 
        <img 
  className="d-block w-100" 
  src={Slider3} 
  alt="slider 3"
  style={{ width: "100%", height: "100%", objectFit: "cover" }}
/>
    
    <div className="container"> 
        <div className="carousel-caption text-end"> 
            <h1 className="slider-title" data-animation="fadeInUp" data-delay="0.5s"
             style={{marginBottom: "170px"}}>Grow your career with<br /> From best platform.</h1> 
            
        </div>
    </div> 
</div> 
</div> 
<button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" 
data-bs-slide="prev"> 
<span className="carousel-control-prev-icon" aria-hidden="true"></span> 
<span className="visually-hidden">Previous</span> </button> 
<button className="carousel-control-next" type="button" data-bs-target="#myCarousel" 
data-bs-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> 
<span className="visually-hidden">Next</span>
</button>
</div>
     </>
    
    );
}
export default Carousel;