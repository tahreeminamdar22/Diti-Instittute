import React from 'react';
import '../App.css';
import Header from './Header';
import Cta from './Cta';
import Footer from './Footer';
import aboutus from "../assets/About/aboutUs.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function AboutUs() {
  return (
    <>
      <Header />
      <section className="py-5">
        <div className="container">
          <h3 className="text-center mb-4" style={{ fontSize: "2.5rem", textDecoration: "underline", color: "#000" }}>
            Digital Infotech Training Institute
          </h3>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 mb-4">
              <div className="aboutUs-img border rounded">
                <img
                  src={aboutus}
                  alt="students studying"
                  className="img-fluid rounded"
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="col-lg-5" style={{textAlign: "justify", color: "charcoal" }}>
              <article>
                <p className="mb-4">
                  <strong>A completely Industry oriented Training Institute in all IT
                    related courses</strong>. DIT Institute has a group of highly 
                    experienced and qualified faculties. They are always dedicated 
                    towards improving the students, and make them learn more, 
                    with their experiences. <strong>We are best IT training Institutes
                    in Mumbai</strong> with a dedicated placement assistance team.
                </p>

                <p className="mb-4">
                  We offer IT course training with affordable fees on trending and top 
                  IT courses like <strong>Software Testing, Java, .Net, DevOps, AWS, Database 
                  (MS SQL, MY SQL), Data Science, RPA, Hardware &amp; Networking</strong>, 
                  and many more — all with real projects & assignments. Each student 
                  gets focused training for max impact.
                </p>

                <p className="mb-4">
                  Best part? We provide <strong>Classroom training, Online training</strong> 
                  and <strong>Corporate training</strong> on both weekends and weekdays. 
                  <strong> Best Software training institute in Kalyan - Mumbai</strong>, 
                  our trainers are working professionals and industry experts. 
                  We even offer flexible batch timings & special batches for 
                  <strong> working professionals</strong>. Plus: lifetime guidance & job support.
                </p>

                <p className="mb-4">
                  Resume prep, <strong>mock interviews</strong> & <strong>placement assistance</strong> 
                  — we’ve got you covered till you land the job 🔥
                </p>

                <ul className="list-unstyled ps-1">
                  <li className="mb-2">
                    <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                    Upskill your organization.
                  </li>
                  <li className="mb-2">
                    <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                    Personalize classes
                  </li>
                  <li className="mb-2">
                    <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                    Placement oriented courses
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <Footer />
    </>
  );
}

export default AboutUs;
