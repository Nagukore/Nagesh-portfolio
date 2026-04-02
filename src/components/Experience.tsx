import React from 'react';
import './Experience.css';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <h2 className="section-title">My <span className="heading-gradient">Experience</span></h2>
        <p className="section-subtitle">Professional milestones and roles</p>

        <div className="experience-list">
          <div className="experience-card glass-card">
            <div className="experience-header">
              <div className="company-logo-container">
                <img src="https://thoughtscrest.com/Logo.webp" alt="ThoughtsCrest Logo" className="company-logo" />
              </div>
              <div className="experience-title">
                <h3>Developer Intern</h3>
                <h4>ThoughtsCrest</h4>
              </div>
            </div>
            
            <div className="experience-meta">
              <span className="meta-item"><MapPin size={16} /> Bengaluru, India</span>
              <span className="meta-item"><Briefcase size={16} /> Core Banking & Automation</span>
              <span className="meta-item"><Calendar size={16} /> Current</span>
            </div>
            
            <div className="experience-description">
              <p>
                Gaining hands-on experience in the fast-paced environment of core banking technology and enterprise automation. Contributing to the development and optimization of seamless banking implementations and workflows.
              </p>
              <ul>
                <li>Learning and building scalable enterprise software solutions.</li>
                <li>Collaborating with cross-functional teams to integrate complex banking modules.</li>
                <li>Participating actively in automation projects to optimize infrastructure and financial workflows.</li>
                <li>Enhancing technical proficiency in full-stack architecture and best practices.</li>
              </ul>
            </div>
          </div>

          <div className="experience-card glass-card">
            <div className="experience-header">
              <div className="company-logo-container" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div style={{ color: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Briefcase size={32} />
                </div>
              </div>
              <div className="experience-title">
                <h3>Full Stack & AI Developer</h3>
                <h4>Project-Based Experience</h4>
              </div>
            </div>
            
            <div className="experience-meta">
              <span className="meta-item"><MapPin size={16} /> Remote / Independent</span>
              <span className="meta-item"><Briefcase size={16} /> Full Stack Architecture</span>
              <span className="meta-item"><Calendar size={16} /> 2022 - Present</span>
            </div>
            
            <div className="experience-description">
              <ul>
                <li>Designed and implemented end-to-end full-stack applications using React, Node.js, and RESTful architectures.</li>
                <li>Applied role-based access control (RBAC), JWT authentication, and secure API design principles.</li>
                <li>Integrated real-time systems using Supabase Realtime and event-driven webhooks.</li>
                <li>Developed AI and computer vision pipelines for gesture recognition and intelligent task extraction.</li>
                <li>Used Git-based version control, branching strategies, and collaborative development workflows.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
