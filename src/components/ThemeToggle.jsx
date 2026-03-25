import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import './ThemeToggle.css';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className={`theme-toggle__icon ${theme === 'dark' ? 'theme-toggle__icon--visible' : ''}`}>
        <FiSun />
      </span>
      <span className={`theme-toggle__icon ${theme === 'light' ? 'theme-toggle__icon--visible' : ''}`}>
        <FiMoon />
      </span>
    </button>
  );
}

export default ThemeToggle;
