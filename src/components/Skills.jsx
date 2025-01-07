import React from 'react';

function Skills({ skillsRef }) {
  return (
    <section className="skills" id="skills" ref={skillsRef}>
      <h2 className="heading">My <span>Skills</span></h2>
      <div className="skills-container">
        <div className="skill-box">
          <i className="bx bxl-html5" style={{ color: '#c95d2e' }}></i>
          <span>HTML</span>
        </div>
        <div className="skill-box">
          <i className="bx bxl-css3" style={{ color: '#147bbc' }}></i>
          <span>CSS</span>
        </div>
        <div className="skill-box">
          <i className="bx bxl-javascript" style={{ color: '#b0bc1e' }}></i>
          <span>JavaScript</span>
        </div>
        <div className="skill-box">
          <i className="bx bxl-typescript" style={{ color: '#007acc' }}></i>
          <span>TypeScript</span>
        </div>
        <div className="skill-box">
          <i className="bx bxl-python" style={{ color: '#c32ec9' }}></i>
          <span>Python</span>
        </div>
        <div className="skill-box">
          <i className="bx bxl-flask" style={{ color: '#000000' }}></i>
          <span>Flask</span>
        </div>
        <div className="skill-box">
          <i className="bx bxl-react" style={{ color: '#6969bcbc' }}></i>
          <span>React</span>
        </div>
        <div className="skill-box">
          <i className="bx bxl-tailwind-css" style={{ color: '#38bdf8' }}></i>
          <span>Tailwind CSS</span>
        </div>
        <div className="skill-box">
          <i className="bx bxl-wordpress" style={{ color: '#21759b' }}></i>
          <span>WordPress</span>
        </div>
        <div className="skill-box">
          <i className="bx bxl-mongodb" style={{ color: '#47A248' }}></i>
          <span>MongoDB</span>
        </div>
        
      </div>
    </section>
  );
}

export default Skills;
