import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import profileImg from '../assets/professionalImage.jpeg';
import './Hero.css';

const roles = ['Data Science Engineer', 'Machine Learning Enthusiast', 'Problem Solver'];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 80);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero">
      {/* Animated background blobs */}
      <div className="hero__bg">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__blob hero__blob--3" />
      </div>

      {/* Floating grid particles */}
      <div className="hero__grid" />

      <div className="hero__split container">
        {/* Left — Text content */}
        <div className="hero__content">
          <motion.p
            className="hero__greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <span className="gradient-text">Vanshika Gupta</span>
          </motion.h1>

          <motion.div
            className="hero__role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <span className="hero__typewriter">
              {displayText}
              <span className="hero__cursor">|</span>
            </span>
          </motion.div>

          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Turning data into insights & building intelligent solutions.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="https://drive.google.com/file/d/1MHncBpjty0cE7CNCHjSDZKatiIpdfPA3/view?usp=sharing" download className="btn btn-outline" id="download-resume-btn">
              <HiDownload /> Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right — Profile Image */}
        <motion.div
          className="hero__photo-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
        >
          <div className="hero__photo-ring">
            <img src={profileImg} alt="Vanshika Gupta" className="hero__photo" />
          </div>
          {/* Glow effect */}
          <div className="hero__photo-glow" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="hero__mouse">
          <div className="hero__mouse-wheel" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
