import React from 'react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2025 by SRK | All Rights Reserved.</p>
      </div>
      <div className="footer-icontop">
        <a href="#" onClick={scrollToTop}>
          <i className="bx bxs-up-arrow"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
