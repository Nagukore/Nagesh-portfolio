import React from 'react';
import './About.css';
import { Award, BookOpen, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <h2 className="section-title">About <span className="heading-gradient">Me</span></h2>
        <p className="section-subtitle">Passion. Innovation. Excellence.</p>

        <div className="about-content">
          <div className="about-text glass-card">
            <p className="about-lead">
              Hi! I'm Nagesh Kore, an aspiring engineer currently pursuing my Bachelor's degree in Artificial Intelligence and Machine Learning.
            </p>
            <p>
              I am a passionate web developer, AI/ML enthusiast, and a curious innovator who loves to create smart, purposeful digital experiences. I enjoy blending design with logic to build clean, responsive websites and intelligent applications that solve real-world problems.
            </p>
            <p>
              Whether it's creating full-stack React architectures, developing AI-powered workflows like FOSYS, or experimenting with computer vision, I am always driven by a desire to learn, build, and deliver scalable code.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card glass-card">
              <div className="stat-icon"><Clock size={28} /></div>
              <h3>Fresher</h3>
              <p>Experience Level</p>
            </div>

            <div className="stat-card glass-card">
              <div className="stat-icon"><Award size={28} /></div>
              <h3>8</h3>
              <p>Projects Completed</p>
            </div>

            <div className="stat-card glass-card">
              <div className="stat-icon"><BookOpen size={28} /></div>
              <h3>B.E. AIML</h3>
              <p>AMC Engineering (8.0 CGPA)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
