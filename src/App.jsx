import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import './App.css';
import LogoSVG from "./components/LogoSVG";

function App() {
  return (
    <Router>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <LogoSVG width={220} height={80} />
            </Link>
          </div>
          <nav className="navbar">
            <ul className="nav-links">
              <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : undefined}>Home</NavLink></li>
              <li><NavLink to="/services" className={({ isActive }) => isActive ? "active" : undefined}>Services</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : undefined}>About</NavLink></li>
              <li><NavLink to="/gallery" className={({ isActive }) => isActive ? "active" : undefined}>Gallery</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : undefined}>Contact</NavLink></li>
            </ul>
          </nav>
          <div className="header-cta">
            <a href="tel:+27721234567" className="header-phone">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.1 1 .33 2.1.7 3.1a2 2 0 01-.45 2.1l-1.27 1.27a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c1 .38 2.03.6 3.09.7a2 2 0 011.72 2z"></path>
              </svg>
              Call Now
            </a>
            <Link to="/contact" className="header-book-btn">Book Now</Link>
          </div>
        </div>
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <LogoSVG width={200} height={70} />
            <p>Authentic South African spit braai catering for events of all sizes in Cape Town & Helderberg</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p><strong>Phone:</strong> +27 72 123 4567</p>
            <p><strong>Email:</strong> info@splitbraai.co.za</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://wa.me/27721234567" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.4 14.24c-.32-.16-1.9-.94-2.2-1.04-.3-.1-.52-.16-.73.16-.22.3-.84.94-1.03 1.14-.2.2-.39.22-.72.08-.32-.16-1.37-.5-2.6-1.6-.96-.86-1.6-1.92-1.8-2.24-.18-.32-.02-.5.14-.66.14-.14.32-.36.48-.54.16-.18.2-.3.3-.52.1-.2.06-.4-.02-.54-.08-.16-.74-1.78-1-2.44-.28-.64-.54-.54-.74-.54-.2 0-.42-.02-.64-.02s-.6.08-.9.4c-.32.3-1.2 1.18-1.2 2.88 0 1.7 1.24 3.34 1.4 3.56.18.22 2.48 3.78 6 5.3.84.36 1.5.58 2 .74.86.26 1.64.22 2.26.14.68-.1 2.1-.86 2.4-1.7.3-.84.3-1.54.2-1.7-.08-.16-.3-.24-.62-.4z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Split Braai Catering | Cape Town & Helderberg
        </div>
      </footer>
    </Router>
  );
}

export default App;