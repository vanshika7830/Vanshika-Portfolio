import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundShapes from './components/BackgroundShapes';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <BackgroundShapes />
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
