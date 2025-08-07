'use client';

import { 
  FaReact, 
  FaNodeJs, 
  FaAngular, 
  FaPython, 
  FaDatabase,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
  FaCode,
  FaAws
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiMongodb, 
  SiPostgresql
} from 'react-icons/si';
import { 
  User, 
  Briefcase, 
  Mail, 
  ExternalLink, 
  Code2,
  Sparkles,
  Zap,
  Globe,
  ShoppingCart,
  Smartphone,
  Brain
} from 'lucide-react';

export default function Home() {
  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">BADRI NAGARJUN</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Looking to build something truly extraordinary?</h1>
            <p>
              I'm a passionate full-stack developer and software engineer with over 3 years of experience developing complex web applications with cutting-edge technologies. I specialize in creating digital solutions inspired by art, driven by purpose, and delivered with exceptional quality standards. Every project is crafted with meticulous attention to detail and driven by passion for crafting top-quality digital experiences, ensuring a lasting impression of quality and innovation.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">
                <Mail className="btn-icon" />
                Get In Touch
              </button>
              <button className="btn-secondary">
                <Briefcase className="btn-icon" />
                View Portfolio
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-pic">
              <div className="avatar">
                <User size={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h2>What My Programming Skills Included?</h2>
        <p>With expertise in modern development, backend systems, and cloud computing technologies, I possess a diverse range of skills that enable me to create cutting-edge solutions. From crafting responsive user interfaces to building robust server-side applications, my expertise spans across multiple technologies while maintaining clean and scalable code.</p>
        
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">
              <FaReact size={40} color="#61DAFB" />
            </div>
            <span>React</span>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <SiNextdotjs size={40} color="#ffffff" />
            </div>
            <span>Next.js</span>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <FaNodeJs size={40} color="#339933" />
            </div>
            <span>Node.js</span>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <FaAngular size={40} color="#DD0031" />
            </div>
            <span>Angular</span>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <SiJavascript size={40} color="#F7DF1E" />
            </div>
            <span>JavaScript</span>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <SiTypescript size={40} color="#3178C6" />
            </div>
            <span>TypeScript</span>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <FaPython size={40} color="#3776AB" />
            </div>
            <span>Python</span>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <SiMongodb size={40} color="#47A248" />
            </div>
            <span>MongoDB</span>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <SiPostgresql size={40} color="#336791" />
            </div>
            <span>PostgreSQL</span>
          </div>
        </div>

        <div className="experience-stats">
          <div className="stat">
            <Sparkles className="stat-icon" size={30} />
            <span className="stat-number">100+</span>
            <span className="stat-label">Projects Done</span>
          </div>
          <div className="stat">
            <Zap className="stat-icon" size={30} />
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <User className="stat-icon" size={30} />
            <span className="stat-number">50+</span>
            <span className="stat-label">Satisfied Clients</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="section-header">
          <h2>You have a Job or Project?</h2>
          <button className="btn-contact">
            <Mail className="btn-icon" />
            Get In Touch
          </button>
        </div>

        <div className="projects-list">
          <div className="project-item">
            <div className="project-info">
              <span className="project-type">
                <Globe className="project-type-icon" />
                WEB DEVELOPMENT
              </span>
              <h3>StoryCraftAI- AWS Serverless Stories Generator</h3>
              <p>
                StoryCraftAI is a revolutionary event-driven AI automation designed to generate compelling stories, built as an AWS Serverless application. Used for publishing stories, this Lambda-powered solution provides remarkable capabilities for content creation. Designed for both novices and experts looking to streamline narrative content production.
              </p>
              <div className="project-tech">
                <span className="tech-tag">
                  <FaAws size={16} />
                  AWS Lambda
                </span>
                <span className="tech-tag">
                  <Brain size={16} />
                  OpenAI
                </span>
                <span className="tech-tag">
                  <FaDatabase size={16} />
                  DynamoDB
                </span>
                <span className="tech-tag">
                  <Zap size={16} />
                  Serverless
                </span>
              </div>
              <div className="project-links">
                <button className="btn-outline">
                  <ExternalLink size={16} />
                  Live Demo
                </button>
                <button className="btn-outline">
                  <FaCode size={16} />
                  View Code
                </button>
              </div>
            </div>
            <div className="project-image">
              <div className="project-preview">
                <Code2 size={60} />
              </div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-info">
              <span className="project-type">
                <ShoppingCart className="project-type-icon" />
                E-COMMERCE
              </span>
              <h3>Aurius - Ecommerce Application</h3>
              <p>
                Aurius is an ecommerce application designed for exceptional product discovery and seamless shopping experiences. This application offers sophisticated product browsing features, detailed product information, and seamless shopping experience.
              </p>
              <div className="project-tech">
                <span className="tech-tag">
                  <FaReact size={16} />
                  React
                </span>
                <span className="tech-tag">
                  <ShoppingCart size={16} />
                  E-commerce
                </span>
                <span className="tech-tag">
                  <FaDatabase size={16} />
                  Payment
                </span>
                <span className="tech-tag">
                  <Smartphone size={16} />
                  Responsive
                </span>
              </div>
              <div className="project-links">
                <button className="btn-outline">
                  <ExternalLink size={16} />
                  Live Demo
                </button>
                <button className="btn-outline">
                  <FaCode size={16} />
                  View Code
                </button>
              </div>
            </div>
            <div className="project-image">
              <div className="project-preview">
                <ShoppingCart size={60} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-content">
          <h2>Let's Work Together</h2>
          <p>Ready to turn your ideas into reality? Let's discuss your next project.</p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">
                <FaEnvelope size={24} />
              </span>
              <span>badri.nagarjun@email.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <FaLinkedin size={24} />
              </span>
              <span>linkedin.com/in/badrinagarjun</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <FaGithub size={24} />
              </span>
              <span>github.com/badrinagarjun</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}