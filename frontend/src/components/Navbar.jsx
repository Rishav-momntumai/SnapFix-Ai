import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // You can retain your custom styles here

function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        isScrolled ? 'shadow-sm bg-light' : 'bg-white'
      }`}
    >
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold">
          SnapFix<span className="text-primary">AI</span>
          <span className="text-danger">.</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/report"
                className={`nav-link ${location.pathname === '/report' ? 'active' : ''}`}
                onClick={toggleMobileMenu}
              >
                Report Issue
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/view"
                className={`nav-link ${location.pathname === '/view' ? 'active' : ''}`}
                onClick={toggleMobileMenu}
              >
                View Issues
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/report-preview"
                className={`nav-link ${
                  location.pathname === '/report-preview' ? 'active' : ''
                }`}
                onClick={toggleMobileMenu}
              >
                Contact Us →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
