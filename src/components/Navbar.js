import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/pixelnest.png";
import "./Navbar.css";

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    }
  }, [mobileMenuOpen]);

  // Escape key and Link clicks to close menu
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  const navLinks = [
    { path: "/services", label: "Capabilities" },
    { path: "/about", label: "Process" },
    { path: "/labs", label: "Lab" },
    { path: "/contact", label: "Contact" },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${mobileMenuOpen ? "menu-open" : ""}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="PixelNest" className="logo-img" width="120" height="32" loading="eager" fetchpriority="high" />
          <span className="logo-text">PixelNest</span>
        </Link>

        {/* Desktop Links - hidden on mobile */}
        <div className="nav-links-desktop">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <Link to="/contact" className="btn btn-primary btn-small hide-mobile">
            Start a Project
          </Link>
          
          <button
            className={`mobile-menu-toggle ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Premium Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "active" : ""}`} aria-hidden={!mobileMenuOpen}>
        <div className="drawer-content">
          <div className="drawer-header mono">PIXELNEST_SYSTEM</div>
          <div className="drawer-links">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`drawer-link ${location.pathname === link.path ? "active" : ""}`}
                onClick={closeMenu}
              >
                <span className="link-idx mono">0{index + 1}</span>
                <span className="link-text">{link.label}</span>
              </Link>
            ))}
          </div>
          <div className="drawer-footer">
            <Link to="/contact" className="btn btn-primary btn-full" onClick={closeMenu}>
              Start Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
