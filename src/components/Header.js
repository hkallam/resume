import React, { useState } from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
// Import Summary.js
import Summary from './Summary';  // Adjust the path if necessary
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';

import Education from './Education';

// Styling for Header and Tabs
const HeaderContainer = styled.header`
  background-color: #4a4a4a;
  color: white;
  padding: 20px;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HeaderLinks = styled.div`
  margin-top: 10px;
  button, a {
    margin: 0 10px;
    color: #61dafb;
    text-decoration: none;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1rem;
  }
  button:hover, a:hover {
    text-decoration: underline;
  }
`;

const TabContent = styled.section`
  padding: 20px;
  background: #f6f6f6;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;


// Main Header with Tab Navigation
function Header() {
  const [activeTab, setActiveTab] = useState('summary'); // Default tab is 'summary'

  return (
    <>
      <HeaderContainer>
        <h1>Hima Kallam</h1>
        <p>Sacramento, CA | himabindukallam@outlook.com | 513-417-9019</p>
        <HeaderLinks>
          <button onClick={() => setActiveTab('summary')}>Summary</button>
          <button onClick={() => setActiveTab('skills')}>Skills</button>
          <button onClick={() => setActiveTab('experience')}>Experience</button>
          <button onClick={() => setActiveTab('projects')}>Projects</button>
          <button onClick={() => setActiveTab('education')}>Education</button>
          <a href="https://www.linkedin.com/in/hima-kallam" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/hkallam" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </HeaderLinks>
      </HeaderContainer>

      {/* Conditional Rendering of Tabs */}
      {activeTab === 'summary' && <Summary />}
      {activeTab === 'skills' && <Skills />}
      {activeTab === 'experience' && <Experience />}
      {activeTab === 'projects' && <Projects />}
      {activeTab === 'education' && <Education />}
    </>
  );
}

export default Header;
