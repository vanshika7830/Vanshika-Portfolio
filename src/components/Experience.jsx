import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiExternalLink, FiAward } from 'react-icons/fi';
import './Experience.css';

const experiences = [
  {
    role: 'Trainee — Advanced Python for ML & AI',
    company: 'CSE Pathshala',
    duration: 'June 2025 – July 2025',
    highlights: [
      'Completed an intensive 1-month training on advanced Python for ML & AI',
      'Built and evaluated ML models using Scikit-Learn, XGBoost & Neural Networks',
      'Worked on real-world datasets — data cleaning, feature engineering & EDA',
      'Implemented classification, regression & clustering algorithms from scratch',
    ],
    certificate: 'https://drive.google.com/file/d/1x87aTbyynxk-9qc-x1A0pMnIPNSyW633/view?usp=sharing', // paste your certificate link here
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="gradient-text">Experience</span>
        </motion.h2>

        <motion.div
          className="experience__timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="experience-card glass-card"
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(124,58,237,0.25)' }}
            >
              <div className="experience-card__icon-col">
                <div className="experience-card__icon-circle">
                  <FiBriefcase />
                </div>
                {idx < experiences.length - 1 && <div className="experience-card__line" />}
              </div>

              <div className="experience-card__content">
                <div className="experience-card__header">
                  <div>
                    <h3 className="experience-card__role">{exp.role}</h3>
                    <p className="experience-card__company">{exp.company}</p>
                  </div>
                  <span className="experience-card__duration">{exp.duration}</span>
                </div>
                <ul className="experience-card__highlights">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="experience-card__highlight">{point}</li>
                  ))}
                </ul>
                <a
                  href={exp.certificate || 'https://drive.google.com/file/d/1x87aTbyynxk-9qc-x1A0pMnIPNSyW633/view?usp=sharing'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-card__cert-link"
                >
                  <FiAward /> View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
