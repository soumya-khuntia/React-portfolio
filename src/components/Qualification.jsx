import React, { useRef } from 'react';

function Qualification({ qualificationRef }) {
  return (
    <section className="services" id="services" ref={qualificationRef}>
      <h2 className="heading">
        My <span>Qualification</span>
      </h2>

      <div className="services-container">
        
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="bx bxs-book"></i>
              <h3>Bachelor of technology</h3>
              <p>
                I am currently pursuing my Bachelor of technology in DRIEMS University in coumputer science and
                engineering with 9.05 Cgpa.
              </p>
            </div>
            <div className="flip-card-back">
              <h2>DRIEMS University</h2>
              <p>Degree: Bachelor of technology</p>
              <p>Major: Coumputer science</p>
              <p>Start Date: July-2021, End Date: June-2025(expect)</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="bx bxs-book-bookmark"></i>
              <h3>Intermediate</h3>
              <p>
                I have successfully completed intermediate from Tarini science recidential collage, Garajanga and
                secured 72.5%.
              </p>
            </div>
            <div className="flip-card-back">
              <h2>Tarini science resdential collage</h2>
              <p>Education: Intermediate(CHSE)</p>
              <p>Major: Science(Biology)</p>
              <p>Start Date: July-2019, End Date: March-2021</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="bx bxs-book-open"></i>
              <h3>Matriculation</h3>
              <p>I have successfully completed matriculation from Panchayat high school kurujanga, kurujanga and secured 71.5%.</p>
            </div>
            <div className="flip-card-back">
              <h2>Panchayat high school kurujanga</h2>
              <p>Education: Matriculation(HSE)</p>
              <p>Grade: 71.5%</p>
              <p>End Date: March-2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
