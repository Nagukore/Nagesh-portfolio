import React from 'react';
import './BackgroundAnimation.css';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="bg-animation-container">
      {/* Dynamic Colored Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      
      {/* Floating Dust Particles to make animation very obvious */}
      <div className="dust-container">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className="dust"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              animationDelay: `-${Math.random() * 20}s`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          ></div>
        ))}
      </div>

      {/* Visibly Billowing Smoke Effect */}
      <div className="smoke-container">
        {[...Array(12)].map((_, i) => (
          <div 
            key={`smoke-${i}`} 
            className="smoke"
            style={{
              left: `${Math.random() * 100 - 10}vw`,
              animationDuration: `${Math.random() * 10 + 15}s`,
              animationDelay: `-${Math.random() * 15}s`,
              transform: `scale(${Math.random() * 1.5 + 0.5})`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundAnimation;
