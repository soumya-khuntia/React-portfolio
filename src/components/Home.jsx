import React, { useEffect, useRef } from 'react';

function Home({ homeRef, typedRef }) {
  const homeContentRef = useRef(null);
  const homeImageRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // Handle midnight (0 hours)
      const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
      document.getElementById('time').textContent = timeString;
    };

    const interval = setInterval(updateTime, 1000);
    updateTime();

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home" id="home" ref={homeRef}>
      <div className="home-content" ref={homeContentRef}>
        <h3>Hello it's me</h3>
        <h1>
          Soumya Ranjan <span>Khuntia</span>
        </h1>
        <h3>
          And i'm a <span className="multiple-text" ref={typedRef}></span>
        </h3>
        <p>
          In the intricate tapestry of productivity, I am the maestro of time management, orchestrating each moment with
          precision and purpose. A relentless work addict, I transform challenges into stepping stones, propelling
          myself towards excellence. Trusted as a stalwart ally, my insatiable appetite for knowledge makes me a quick
          learner, seamlessly adapting to the ever-evolving dynamics of success.
        </p>
        <div className="social-media">
          <a href="https://github.com/soumya-khuntia" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/soumya-ranjan-khuntia/" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin-square"></i>
          </a>
        </div>
        <a href="documents/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">
          Download Resume
        </a>
      </div>
      <div className="home-image" ref={homeImageRef}>
        <img src="images/profile-pic.png" alt="Soumya Ranjan Khuntia" />
      </div>
    </section>
  );
}

export default Home;
