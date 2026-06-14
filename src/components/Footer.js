import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/pixelnest.png";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="PixelNest" className="footer-logo-img" width="120" height="32" loading="lazy" />
            <span className="logo-text">PixelNest</span>
          </Link>
          <p className="footer-tagline">
            Engineering high-performance digital products with industrial precision.
          </p>
          <div className="footer-availability">
            <span className="status-dot"></span>
            <span className="mono">AVAILABILITY: Q4 2026</span>
          </div>
        </div>

        <div className="footer-nav">
          <div className="footer-col">
            <span className="mono label">STUDIO</span>
            <Link to="/services">Capabilities</Link>
            <Link to="/about">Process</Link>
            <Link to="/testimonials">Lab</Link>
          </div>
          <div className="footer-col">
            <span className="mono label">CONNECT</span>
            <Link to="/contact">Contact</Link>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter / X</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <div className="footer-legal">
          <span className="mono">© {currentYear} PIXELNEST STUDIOS</span>
          <div className="legal-links">
            <Link to="/privacy" className="mono">PRIVACY</Link>
            <Link to="/terms" className="mono">TERMS</Link>
          </div>
        </div>
        <div className="footer-meta mono">
          BUILT_IN_INDIA
        </div>
      </div>
    </footer>
  );
};

export default Footer;
