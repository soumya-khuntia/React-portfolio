import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Qualification from './components/Qualification';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';

function App() {
    const navRef = useRef(null);
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const qualificationRef = useRef(null);
    const skillsRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);
    const typedRef = useRef(null);

    useEffect(() => {
        const sr = ScrollReveal({
            distance: '80px',
            duration: 2000,
            delay: 200,
            mobile: false,
            easing: 'ease-in-out',
        });

        sr.reveal('.home-content, .heading, .heading1', { origin: 'top' });
        sr.reveal('.home-image, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
        sr.reveal('.home-content h1, .about img, .technical-bar', { origin: 'left' });
        sr.reveal('.home-content p, .about-content, .radial-bar', { origin: 'right' });

        const typedElement = typedRef.current;
        if (typedElement) {
            const typed = new Typed(typedElement, {
                strings: ['Web Developer', 'Python Developer', 'ML Engineer', 'Data Analytics'],
                typeSpeed: 100,
                backSpeed: 100,
                backDelay: 1000,
                loop: true,
            });

            return () => {
                sr.destroy();
                typed.destroy();
            };
        }
    }, []);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;

        document.getElementById('scroll-bar').style.display = 'block';
        document.getElementById('scroll').style.width = `${progress}%`;

        const sections = [
            { ref: homeRef, id: 'home' },
            { ref: aboutRef, id: 'about' },
            { ref: qualificationRef, id: 'services' },
            { ref: skillsRef, id: 'skills' },
            { ref: portfolioRef, id: 'portfolio' },
            { ref: contactRef, id: 'contact' },
        ];

        sections.forEach(({ ref, id }) => {
            const top = window.scrollY;
            const offset = ref.current.offsetTop - 150;
            const height = ref.current.offsetHeight;

            if (top >= offset && top < offset + height) {
                const links = document.querySelectorAll('header nav a');
                links.forEach((link) => link.classList.remove('active'));
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            }
        });

        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <Navbar navRef={navRef} />
            <div id="scroll-bar">
                <div id="scroll"></div>
            </div>
            <Home homeRef={homeRef} typedRef={typedRef} />
            <About aboutRef={aboutRef} />
            <Qualification qualificationRef={qualificationRef} />
            <Skills skillsRef={skillsRef} />
            <Portfolio portfolioRef={portfolioRef} />
            <Contact contactRef={contactRef} />
            <Footer />
        </div>
    );
}

export default App;
