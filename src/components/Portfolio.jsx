import React, { useRef } from 'react';

function Portfolio({ portfolioRef }) {
  return (
    <section className="portfolio" id="portfolio" ref={portfolioRef}>
      <h2 className="heading">
        My<span>Projects</span>
      </h2>

      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src="images/portfolio1.jpg" alt="" />
          <div className="portfolio-layer">
            <h4>Smart Calculator</h4>
            <p>
              An intelligent handwriting calculator that transforms your mathematical expressions into instant solutions
               using Google Gemini AI, complete with a sleek drawing interface and dynamic LaTeX rendering.
            </p>
            <a href="https://soumya-khuntia.github.io/scientific-calculator" target="_blank" rel="noopener noreferrer">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="images/portfolio2.jpg" alt="" />
          <div className="portfolio-layer">
            <h4>Blog-post website</h4>
            <p>
              An interactive blog platform built with HTML, Bootstrap, JavaScript, and Flask, offering a seamless user
              experience for readers and creators alike.
            </p>
            <a href="https://github.com/soumya-khuntia/Demo-blog" target="_blank" rel="noopener noreferrer">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="images/portfolio3.jpg" alt="" />
          <div className="portfolio-layer">
            <h4>Todo-list App</h4>
            <p>
              Crafted with React, my to-do list app offers a sleek and intuitive interface to manage tasks efficiently,
              enhancing productivity seamlessly.
            </p>
            <a href="https://todo-app-three-navy.vercel.app/" target="_blank" rel="noopener noreferrer">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="images/portfolio4.jpg" alt="" />
          <div className="portfolio-layer">
            <h4>QNA ChatBot</h4>
            <p>
              Empowering seamless information exchange with a Q&A chatbot, fusing natural language processing and
              machine learning for efficient and personalized responses.
            </p>
            <a href="https://github.com/soumya-khuntia/Gemini-Demo" target="_blank" rel="noopener noreferrer">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="images/portfolio5.jpg" alt="" />
          <div className="portfolio-layer">
            <h4>Digitalnotes Website</h4>
            <p>
              Designed with Python and Streamlit, my YouTube playlist downloader simplifies the process of fetching and
              saving your favorite videos for offline viewing, ensuring seamless access to your media.
            </p>
            <a href="https://github.com/soumya-khuntia/youtube_playlist_downloader" target="_blank" rel="noopener noreferrer">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="images/portfolio6.jpg" alt="" />
          <div className="portfolio-layer">
            <h4>Digit Recognition</h4>
            <p>
              Creating a deep learning masterpiece with a handwritten digit recognition project, leveraging advanced
              algorithms to accurately decipher and classify numerical characters for enhanced automation and data
              analysis
            </p>
            <a
              href="https://github.com/soumya-khuntia/Handwitten-digit_recognition/tree/main"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
