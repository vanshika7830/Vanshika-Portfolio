import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import './Certificates.css';

const certificates = [
  {
    title: 'Privacy and Security in Online Social Media',
    issuer: 'NPTEL',
    color: '#7c3aed',
    link: 'https://drive.google.com/file/d/1ERGE321AxhUWiqlCZgTfFhsSEcAjFVpP/view?usp=sharing',
  },
  {
    title: 'Adv. Python for ML/AI',
    issuer: 'CSE Pathshala',
    color: '#ec4899',
    link: 'https://drive.google.com/file/d/1x87aTbyynxk-9qc-x1A0pMnIPNSyW633/view?usp=sharing',
  },
  {
    title: 'DSA',
    issuer: 'Neocolab',
    color: '#3b82f6',
    link: 'https://drive.google.com/file/d/1UmpaILtQvBCJOse9msMksNjjnj-KBnEI/view?usp=sharing',
  },

];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function Certificates() {
  return (
    <section id="certificates" className="section certificates">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="gradient-text">Certificates</span>
        </motion.h2>

        <motion.div
          className="certificates__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.title}
              className="cert-card glass-card"
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="cert-card__accent" style={{ background: cert.color }} />
              <div className="cert-card__content">
                <span className="cert-card__icon" style={{ color: cert.color }}>🏆</span>
                <h3 className="cert-card__title">{cert.title}</h3>
                <p className="cert-card__issuer">{cert.issuer}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-card__view-btn"
                  style={{ '--cert-color': cert.color }}
                >
                  <FiExternalLink /> View Certificate
                </a>
              </div>
              <div className="cert-card__glow" style={{ background: cert.color }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Certificates;
