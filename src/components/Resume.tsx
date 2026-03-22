import React from 'react';
import './Resume.css';
import { Download, Eye, FileText } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="resume section-padding glass-effect">
      <div className="container">
        <h2 className="section-title"><span className="heading-gradient">Resume</span> & Experience</h2>
        <p className="section-subtitle">My professional journey</p>

        <div className="resume-content">
          <div className="resume-info">
            <h3>Download My Resume</h3>
            <p className="resume-desc">
              Get a detailed view of my education, experience, and technical skills in a professional format.
            </p>
            
            <div className="resume-actions">
              <a href="/Nageshk.pdf" download className="btn btn-primary">
                <Download size={20} />
                Download PDF
              </a>
              <a href="/Nageshk.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary">
                <Eye size={20} />
                View Online
              </a>
            </div>
          </div>
          
          <div className="resume-visual">
            <div className="resume-card glass-card">
              <div className="resume-icon">
                <FileText size={40} />
              </div>
              <h4>Nagesh Kore</h4>
              <p>AIML Student | Full Stack Dev</p>
              <div className="timeline-preview">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <span>B.E. AIML (2022-2026)</span>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <span>10+ Full Stack Projects</span>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <span>Publications in JETIR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
