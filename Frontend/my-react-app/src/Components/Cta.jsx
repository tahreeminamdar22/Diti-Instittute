import React from 'react';
import 'hover.css/css/hover-min.css';

function Cta(){
    return(
        <>
        <section style={{backgroundColor: "rgba(7, 41, 77, 0.9)", 
            color: "white", textAlign: "justify", paddingBottom: "40px", paddingTop: "40px" }}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-8">
                  <h2>Lets Start training TODAY!!</h2>
                  <p>For more information for contact us</p>
                </div>
                <div className="col-md-4">
                    <div className="p-3 hvr-shadow hvr-glow" style={{  textAlign: "center", border: "2px solid white"}}>
                        <a className="p2" href="tel:+91 8976758080" style={{ color: "white", fontSize: "large" }}>+91 8976758080</a>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    );
}
export default Cta;
 