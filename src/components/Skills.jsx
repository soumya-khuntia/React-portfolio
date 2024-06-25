import React, { useRef, useEffect } from 'react';

function Skills({ skillsRef }) {
  const technicalBarRef = useRef(null);
  const radialBarsRef = useRef(null);

  useEffect(() => {
    const technicalBars = technicalBarRef.current.querySelectorAll('.bar .progress-line span');
    const radialBars = radialBarsRef.current.querySelectorAll('.radial-bar .path');

    technicalBars.forEach((bar) => {
      bar.style.width = `${bar.getAttribute('data-width')}%`;
    });

    radialBars.forEach((bar) => {
      const strokeDasharray = 502;
      const strokeDashoffset = strokeDasharray - (strokeDasharray * bar.getAttribute('data-width')) / 100;
      bar.style.strokeDashoffset = strokeDashoffset;
    });
  }, []);

  return (
    <section className="sec" id="skills" ref={skillsRef}>
      <div className="container1" id="skills">
        <h2 className="heading1">
          Technical <span>Skills</span>
        </h2>
        <div className="technical-bar" ref={technicalBarRef}>
          <div className="bar">
            <i className="bx bxl-html5" style={{ color: '#c95d2e' }}></i>
            <div className="info">
              <span>HTML</span>
            </div>
            <div className="progress-line html">
              <span data-width="90"></span>
            </div>
          </div>
          <div className="bar">
            <i className="bx bxl-css3" style={{ color: '#147bbc' }}></i>
            <div className="info">
              <span>CSS</span>
            </div>
            <div className="progress-line css">
              <span data-width="80"></span>
            </div>
          </div>
          <div className="bar">
            <i className="bx bxl-javascript" style={{ color: '#b0bc1e' }}></i>
            <div className="info">
              <span>Javascript</span>
            </div>
            <div className="progress-line javascript">
              <span data-width="80"></span>
            </div>
          </div>
          <div className="bar">
            <i className="bx bxl-python" style={{ color: '#c32ec9' }}></i>
            <div className="info">
              <span>Python</span>
            </div>
            <div className="progress-line python">
              <span data-width="85"></span>
            </div>
          </div>
          <div className="bar">
            <i className="bx bxl-react" style={{ color: '#6969bcbc' }}></i>
            <div className="info">
              <span>React</span>
            </div>
            <div className="progress-line react">
              <span data-width="75"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="container1 p1">
        <h1 className="heading1">
          Professional <span>Skills</span>
        </h1>
        <div className="radial-bars" ref={radialBarsRef}>
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
              <circle className="path path-1" cx="100" cy="100" r="80" data-width="70"></circle>
            </svg>
            <div className="percentage">70%</div>
            <div className="text">Creativity</div>
          </div>
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
              <circle className="path path-2" cx="100" cy="100" r="80" data-width="85"></circle>
            </svg>
            <div className="percentage">85%</div>
            <div className="text">Communication</div>
          </div>
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
              <circle className="path path-3" cx="100" cy="100" r="80" data-width="90"></circle>
            </svg>
            <div className="percentage">90%</div>
            <div className="text">Problem solving</div>
          </div>
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
              <circle className="path path-4" cx="100" cy="100" r="80" data-width="75"></circle>
            </svg>
            <div className="percentage">75%</div>
            <div className="text">Teamwork</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
