import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Features from "./Features";
import About from "./About";
import Courses from "./Courses";
import Why from "./Why";
import FormSection from "./FormSection";
import Cta from "./Cta";
import Footer from "./Footer";
import 'animate.css';


function Home(){
    return(
    <>
   
    <Header />
    <Carousel />
    <Features />
    <About />
    <Courses />
    <Why />
    <FormSection />
    <Cta />
    <Footer />
    </>
    )
}
export default Home;
