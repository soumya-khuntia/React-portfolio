import React, { useRef } from 'react';

function About({ aboutRef }) {
  const aboutContentRef = useRef(null);
  const aboutImageRef = useRef(null);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about-img" ref={aboutImageRef}>
        <img src="images/profile-pic.png" alt="Soumya Ranjan Khuntia" />
      </div>
      <div className="about-content" ref={aboutContentRef}>
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Software Engineer!</h3>
        <p>
          Hello! I'm a passionate Software Engineer with a keen interest in web development, Python, React, databases,
          and machine learning. My journey in the tech world has been driven by a relentless curiosity and a desire to
          create efficient, user-friendly applications. With a strong foundation in both front-end and back-end
          technologies, I strive to build seamless digital experiences.
        </p>
      </div>
    </section>
  );
}

export default About;
