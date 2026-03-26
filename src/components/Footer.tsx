import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" style={{ display: 'flex', alignItems: 'center' }}>
              <div className="nk-logo-mark">NK</div>
              <div>Nagesh<span className="heading-gradient">K</span></div>
            </a>
            <p className="footer-tagline">
              Building intelligent full-stack applications and creating modern web experiences.
            </p>
          </div>
          
          <div className="footer-socials">
            <a href="https://github.com/Nagukore" target="_blank" rel="noreferrer" className="footer-icon">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/nagesh-kore-7566b6254/" target="_blank" rel="noreferrer" className="footer-icon">
              <Linkedin size={22} />
            </a>
            <a href="https://www.instagram.com/the.nagesh" target="_blank" rel="noreferrer" className="footer-icon">
              <Instagram size={22} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nagesh Kore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
