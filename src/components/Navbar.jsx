import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import profilePic from '../assets/professionalImage.jpeg';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredLink, setHoveredLink] = useState(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(l => document.getElementById(l.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar__inner container">
        <div className="navbar__brand">
          <div className="navbar__profile-container" ref={profileRef}>
            <button 
              className="navbar__profile-btn"
              onClick={() => setProfileOpen(!profileOpen)}
              aria-label="Toggle profile information"
            >
              <img src={profilePic} alt="Vanshika Profile" className="navbar__profile-img" />
            </button>
            <AnimatePresence>
              {profileOpen && (
                <motion.div 
                  className="profile-popover"
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.2, type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <div className="profile-popover__header">
                    <h4>Vanshika Gupta</h4>
                    <p className="profile-popover__role">Data Science Engineer</p>
                  </div>
                  <div className="profile-popover__body">
                    <div className="profile-info-item">
                      <span className="profile-info-icon" aria-label="Location">📍</span>
                      <p>Uttar Pradesh, India</p>
                    </div>
                    <div className="profile-info-item">
                      <span className="profile-info-icon" aria-label="Education">🎓</span>
                      <p>B.Tech, Lovely Professional University (2027)</p>
                    </div>
                    <div className="profile-info-item skills-item">
                      <span className="profile-info-icon" aria-label="Skills">💻</span>
                      <div className="profile-skills-list">
                        <span>Python</span><span>Pandas</span><span>Scikit-Learn</span><span>NumPy</span>
                        <span>SQL</span><span>Power BI</span><span>Excel</span><span>Docker</span>
                        <span>Git</span><span>Jupyter</span><span>Excel</span><span>MERN</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#home" className="navbar__logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
            <span className="gradient-text">Vanshika</span>
          </a>
        </div>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li 
              key={link.id}
              className="navbar__link-item"
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <button
                className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="nav-active"
                    className="navbar__link-active-bg"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {hoveredLink === link.id && activeSection !== link.id && (
                  <motion.div
                    layoutId="nav-hover"
                    className="navbar__link-hover-bg"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="navbar__link-text">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar__right">
          <ThemeToggle />
          {/* Mobile toggle */}
          <button className="navbar__toggle" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
            {menuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                className="navbar__mobile-link"
                onClick={() => scrollTo(link.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
