import React from 'react';
import { ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero section-padding">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge glass-effect">
            <span className="badge-dot"></span>
            Available for Work
          </div>
          
          <h1 className="hero-title">
            From Code to Creativity<br />
            <span className="heading-gradient">Building Smarter Futures</span>
          </h1>
          
          <p className="hero-subtitle-text">
            AIML Student & Full Stack Developer
          </p>
          
          <p className="hero-description">
            Crafting intelligent digital experiences that blend AI/ML with web development. 
            Where innovation meets elegance, and code becomes art.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ChevronRight size={18} />
            </a>
            <div className="social-links">
              <a href="https://github.com/Nagukore" target="_blank" rel="noreferrer" className="social-icon glass-effect" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nagesh-kore-7566b6254/" target="_blank" rel="noreferrer" className="social-icon glass-effect" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:nagesh.amcec@gmail.com" className="social-icon glass-effect" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="glow-orb"></div>
          <div className="glass-card main-card">
            <div className="code-block">
              <span className="code-comment">// Who am I?</span>
              <span className="code-line"><span className="code-keyword">const</span> developer = {'{'}</span>
              <span className="code-line indent">name: <span className="code-string">'Nagesh Kore'</span>,</span>
              <span className="code-line indent">role: <span className="code-string">'Full Stack & AI/ML'</span>,</span>
              <span className="code-line indent">status: <span className="code-string">'Building cool stuff'</span></span>
              <span className="code-line">{'}'};</span>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="floating-badge badge-1 glass-effect">
            <span>React.js</span>
          </div>
          <div className="floating-badge badge-2 glass-effect">
            <span>Python AI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
