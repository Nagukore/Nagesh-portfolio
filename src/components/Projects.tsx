import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './Projects.css';

const Projects: React.FC = () => {
  const [readmeContent, setReadmeContent] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mainProjects = [
    {
      title: 'FOSYS AI Workspace',
      description: 'AI-Powered Automated Workflow Management System. Engineered a role-based workspace with task management, transcriptions, and GitHub PR integrations.\n🏆 Best Paper Award — IC-AISMART 2025\n💵 Selected for funding by State Government of Karnataka',
      tags: ['React', 'Python', 'AI', 'GitHub API'],
      github: 'https://github.com/Nagukore/Ai-workspacein-realtime.git',
      readme: '/fosys-readme.md',
      featured: true
    },
    {
      title: 'SS Clinic Kudlu',
      description: 'Full-stack clinic platform enabling online appointment booking, doctor schedules, OTP authentication, and automated email notifications.',
      tags: ['React', 'Full-Stack', 'OTP Auth', 'EmailJS'],
      github: 'https://github.com/Nagukore/SS-Clinic',
      readme: 'https://raw.githubusercontent.com/Nagukore/SS-Clinic/main/README.md',
      featured: true
    },
    {
      title: 'Virtual AI Mouse',
      description: 'Gesture-Controlled virtual mouse using real-time hand recognition. Maps landmarks to cursor movements without external hardware.\n📄 Published in JETIR, Volume 12, Issue 6, June 2025',
      tags: ['Python', 'OpenCV', 'MediaPipe'],
      github: 'https://github.com/Trishag04/VIRTUAL-AI-MOUSE',
      external: 'https://www.jetir.org/view?paper=JETIR2506564',
      readme: 'https://raw.githubusercontent.com/Trishag04/VIRTUAL-AI-MOUSE/main/README.md',
      featured: true
    },
    {
      title: 'Enterprise RAG System',
      description: 'Built an enterprise-grade Retrieval-Augmented Generation (RAG) platform to enable context-aware question answering over custom datasets.',
      tags: ['Python', 'LLM', 'Vector DB', 'Semantic Search'],
      github: 'https://github.com/Nagukore/enterprise-rag-system',
      readme: 'https://raw.githubusercontent.com/Nagukore/enterprise-rag-system/main/README.md',
      featured: true
    },
    {
      title: 'Hunt the Wumpus',
      description: 'A web-based grid exploration game featuring hazards like bottomless pits, bats, and the Wumpus. Built with interactive keyboard controls and an atmospheric UI.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Nagukore/wumpusgame.',
      external: 'https://nagukore.github.io/wumpusgame.',
      readme: 'https://raw.githubusercontent.com/Nagukore/wumpusgame./main/README.md',
      featured: true
    },
    {
      title: 'GitTogether EDA',
      description: 'Exploratory Data Analysis Tool analyzing CSV datasets using statistical summaries and visual insights (histograms, heatmaps).',
      tags: ['Python', 'Pandas', 'Data Viz'],
      github: 'https://github.com/Nagukore/GitTogether',
      readme: 'https://raw.githubusercontent.com/Nagukore/GitTogether/main/README.md',
      featured: true
    }
  ];

  const githubRepos = [
    { name: 'Advanced Book Scraper', url: 'https://github.com/Nagukore/advanced-book-scraper' },
    { name: 'Clinic Health Tree', url: 'https://github.com/Nagukore/Clinichealthtree' },
    { name: 'Sri Manasa Tours', url: 'https://github.com/Nagukore/srimanasatoursandtravels' },
    { name: 'Portfolio v1', url: 'https://github.com/Nagukore/Portfolio' },
    { name: 'QR Code Tool', url: 'https://github.com/Nagukore/TASK-1-qr_code' }
  ];

  const openProjectModal = async (project: any) => {
    setIsModalOpen(true);
    setReadmeContent('Loading project details...');

    try {
      const res = await fetch(project.readme);
      if (!res.ok) throw new Error('Not found');
      const text = await res.text();
      setReadmeContent(text);
    } catch {
      setReadmeContent(`# ${project.title}\n\n${project.description}\n\n*Detailed README currently unavailable.* `);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="projects section-padding relative">
      <div className="container">
        <h2 className="section-title">Featured <span className="heading-gradient">Work</span></h2>
        <p className="section-subtitle">Projects that push boundaries</p>

        <div className="projects-grid">
          {mainProjects.map((project, index) => (
            <div
              key={index}
              className="project-card glass-card clickable-card"
              onClick={() => openProjectModal(project)}
            >
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links" onClick={e => e.stopPropagation()}>
                    <a href={project.github} target="_blank" rel="noreferrer" className="icon-link">
                      <Github size={20} />
                    </a>
                    {project.external && (
                      <a href={project.external} target="_blank" rel="noreferrer" className="icon-link" style={{ marginLeft: '12px' }}>
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-desc">
                  {project.description.split('\n').map((line, i) => {
                    const isAchievement = line.includes('🏆') || line.includes('💵') || line.includes('📄');
                    return (
                      <p
                        key={i}
                        style={{
                          marginBottom: i < project.description.split('\n').length - 1 ? '0.8rem' : '1.5rem',
                          color: isAchievement ? '#34d399' : 'var(--text-secondary)',
                          fontWeight: isAchievement ? '500' : '400'
                        }}
                      >
                        {line}
                      </p>
                    );
                  })}
                </div>

                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                  <span className="read-more-badge">Click to read more</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="other-repos">
          <h3 className="sub-heading">More from GitHub</h3>
          <div className="repos-grid">
            {githubRepos.map((repo, idx) => (
              <a key={idx} href={repo.url} target="_blank" rel="noreferrer" className="repo-card glass-effect">
                <Github size={18} className="repo-icon" />
                <span>{repo.name}</span>
                <ExternalLink size={16} className="ext-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content glass-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}><X size={24} /></button>
            <div className="modal-body markdown-body">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {readmeContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
