import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiPython, SiTensorflow, SiPandas,
  SiMysql, SiGit, SiJupyter, SiNumpy,
  SiKeras, SiDocker, SiJavascript,SiMongodb, SiExpress
} from 'react-icons/si';

import { FaCss3Alt,FaHtml5,FaReact,FaNodeJs,} from "react-icons/fa";


import { TbChartBar, TbBolt } from 'react-icons/tb';
import { FaBrain } from 'react-icons/fa';
import { TbFileSpreadsheet } from 'react-icons/tb';
import './About.css';

const dataScienceSkills = [
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

const webDevSkills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node JS', icon: <FaNodeJs /> },
  { name: 'Express JS', icon: <SiExpress /> },
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
  const [activeTab, setActiveTab] = useState('datascience');

  const activeSkills = activeTab === 'datascience' ? dataScienceSkills : webDevSkills;

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
            Whether it's designing predictive models, crafting dashboards, or exploring deep learning. I love solving complex problems with data-driven approaches.
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

        {/* ── Toggle Buttons ── */}
        <motion.div
          className="about__tab-buttons"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <button
            className={`tab-btn${activeTab === 'datascience' ? ' tab-btn--active' : ''}`}
            onClick={() => setActiveTab('datascience')}
          >
            Data Science
          </button>
          <button
            className={`tab-btn${activeTab === 'webdev' ? ' tab-btn--active' : ''}`}
            onClick={() => setActiveTab('webdev')}
          >
            Web Dev
          </button>
        </motion.div>

        {/* ── Skill Cards ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="about__skills"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
          >
            {activeSkills.map((skill) => (
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
        </AnimatePresence>
      </div>
    </section>
  );
}

export default About;