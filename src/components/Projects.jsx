import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: 'QuickStay',
    description: 'A full-stack hotel booking platform built with the MERN stack. Browse hotels, check availability, book rooms, and manage reservations — all with a sleek, responsive interface and seamless user experience.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/vanshika7830/QuickStay.git',
    live: 'https://quick-stay-sandy.vercel.app/',
  },
  {
    title: 'Speech Emotion detection',
    description: 'NLP-powered sentiment classifier for product reviews using transformer models. Includes real-time inference API and interactive visualization.',
    tech: ['Python', 'Scikit-Learn', 'XGBoost', 'CNN'],
    github: 'https://github.com/vanshika7830/Speech_Emotion_Recognition.git',
  },
  {
    title: 'Spam mail detection',
    description: 'A intelligent System to detect spam mails using ML algorithms',
    tech: ['Python', 'Scikit-Learn', 'Logistic Regression'],
    github: 'https://github.com/vanshika7830/Spam_mail_detection.git',
  },
  {
    title: 'Himalyan Expedition Dashboard',
    description: 'A dashboard to analyze the sales and marketing data of a company.',
    tech: ['PowerBi'],
    live: 'https://app.powerbi.com/groups/me/reports/de700968-7126-45b7-98d2-02b3ff9bf493/fb5311ee2828fed08a42?experience=power-bi',
  },
  {
    title: 'Hangman Game',
    description: 'A simple yet engaging Hangman game built with HTML, CSS, and JavaScript. Features a clean interface, word categories, and responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/vanshika7830/HangmanGame.git',
    live: 'https://hangman-game-jade-seven.vercel.app/',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function ProjectCard({ project }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      className="project-card glass-card"
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: 'transform 0.15s ease',
      }}
      whileHover={{ boxShadow: '0 12px 40px rgba(124,58,237,0.25)' }}
    >
      <div className="project-card__header">
        <h3 className="project-card__title">{project.title}</h3>
        <div className="project-card__links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="project-card__link">
              <FiGithub />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="project-card__link">
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>
      <p className="project-card__desc">{project.description}</p>
      <div className="project-card__tech">
        {project.tech.map((t) => (
          <span key={t} className="project-card__tag">{t}</span>
        ))}
      </div>
      <div className="project-card__actions">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__view-btn">
            <FiGithub /> View Code
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-card__view-btn project-card__view-btn--live">
            <FiExternalLink /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="gradient-text">Projects</span>
        </motion.h2>

        <motion.div
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
