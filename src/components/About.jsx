import React from 'react';
import { motion } from 'framer-motion';
import {
  SiPython, SiTensorflow, SiPandas,
  SiMysql, SiGit, SiJupyter, SiNumpy,
  SiKeras, SiDocker, 
} from 'react-icons/si';
import { TbChartBar, TbBolt } from 'react-icons/tb';
import { FaBrain } from 'react-icons/fa'; 
import { TbFileSpreadsheet } from 'react-icons/tb';
import './About.css';

const skills = [
  { name: 'Python', icon: <SiPython /> },
  { name: 'Pandas', icon: <SiPandas /> },
  { name: 'Scikit-Learn', icon: <FaBrain /> }, 
  { name: 'NumPy', icon: <SiNumpy /> },
  { name: 'SQL', icon: <SiMysql /> },
  { name: 'Power BI', icon: <TbChartBar /> },
  { name: 'Excel', icon: <TbFileSpreadsheet /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'Jupyter', icon: <SiJupyter /> },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <motion.div
          className="about__bio"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p>
            I'm <strong>Vanshika Gupta</strong>, a passionate Data Science Engineer who thrives on transforming raw data into actionable insights.
          </p>
          <p>
            Whether it's designing predictive models, crafting dashboards, or exploring deep learning — I love solving complex problems with data-driven approaches.
          </p>
        </motion.div>

        <motion.h3
          className="about__skills-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Tech Stack
        </motion.h3>

        <motion.div
          className="about__skills"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-card glass-card"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="skill-card__icon">{skill.icon}</span>
              <span className="skill-card__name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;