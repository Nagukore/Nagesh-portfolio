import React from 'react';
import './Skills.css';
import { Database, Layout, Server, BrainCircuit, Code } from 'lucide-react';

const Skills: React.FC = () => {
  const customSkills = [
    {
      category: 'Languages',
      icon: <Code size={24} />,
      items: ['Python', 'JavaScript', 'C', 'Dart', 'SQL']
    },
    {
      category: 'AI & Data Tools',
      icon: <BrainCircuit size={24} />,
      items: ['OpenCV', 'MediaPipe', 'TensorFlow', 'Pandas']
    },
    {
      category: 'Frontend',
      icon: <Layout size={24} />,
      items: ['React', 'HTML', 'CSS', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      icon: <Server size={24} />,
      items: ['Node.js', 'Express', 'FastAPI', 'REST APIs']
    },
    {
      category: 'Databases & Tools',
      icon: <Database size={24} />,
      items: ['PostgreSQL', 'MongoDB', 'Firebase', 'Git', 'GitHub']
    }
  ];

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <h2 className="section-title">Technical <span className="heading-gradient">Skills</span></h2>
        <p className="section-subtitle">What I bring to the table</p>

        <div className="skills-grid">
          {customSkills.map((skillGroup, index) => (
            <div key={index} className="skill-category glass-card">
              <div className="skill-header">
                <div className="skill-icon">{skillGroup.icon}</div>
                <h3>{skillGroup.category}</h3>
              </div>
              <ul className="skill-list">
                {skillGroup.items.map((item, idx) => (
                  <li key={idx} className="skill-pill">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
