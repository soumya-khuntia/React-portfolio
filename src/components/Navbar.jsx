import React, { useState, useEffect, useRef } from 'react';

function Navbar({ navRef }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuIconRef = useRef(null);
    const navbarRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(event.target) &&
                !menuIconRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="header" ref={navRef}>
            <a href="#home" className="logo">
                Portfolio
            </a>
            <h2 id="time"></h2>
            <i
                className={`bx bx-menu ${isMenuOpen ? 'bx-x' : ''}`}
                id="menu-icon"
                onClick={toggleMenu}
                ref={menuIconRef}
            ></i>

            <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} ref={navbarRef}>
                <a href="#home" className="active">
                    Home
                </a>
                <a href="#about">About</a>
                <a href="#services">Qualification</a>
                <a href="#skills">Skills</a>
                <a href="#portfolio">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Navbar;
