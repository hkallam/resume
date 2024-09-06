import React from 'react';
import styled from 'styled-components';
import { FaPython, FaAws, FaDatabase, FaMicrosoft, FaDocker, FaGit, FaTable } from 'react-icons/fa';
import { DiMysql, DiRasberryPi } from 'react-icons/di';  // Removed DiOracle
import { SiSnowflake, SiMicrosoftsqlserver, SiPowerbi, SiTableau, SiAzurefunctions, SiR } from 'react-icons/si';

const SkillsContainer = styled.section`
  padding: 40px 20px;
  background: linear-gradient(135deg, #f6f9fc, #e0e0e0);
  margin: 20px 0;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
`;

const SkillCategory = styled.div`
  margin-bottom: 30px;
`;

const SkillHeading = styled.h3`
  color: #333;
  margin-bottom: 15px;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
`;

const Skill = styled.div`
  background-color: #4a4a4a;
  color: white;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px);
    background-color: #3a3a3a;
  }
`;

const SkillLabel = styled.p`
  margin-top: 10px;
  font-size: 1rem;
`;

function Skills() {
  const skills = {
    "Data Visualization": [
      { name: 'Power BI', icon: <SiPowerbi /> },
      { name: 'Python Dash', icon: <FaPython /> },
      { name: 'Excel', icon: <FaTable /> },
      { name: 'Tableau', icon: <SiTableau /> },
    ],
    "Cloud": [
      { name: 'Azure Functions', icon: <SiAzurefunctions /> },
      { name: 'Serverless', icon: <FaAws /> },
      { name: 'Docker', icon: <FaDocker /> },
    ],
    "Databases": [
      { name: 'MySQL', icon: <DiMysql /> },
      { name: 'Snowflake', icon: <SiSnowflake /> },
      { name: 'Microsoft SQL Server', icon: <SiMicrosoftsqlserver /> },
      { name: 'Oracle', icon: <FaDatabase /> },  // Used FaDatabase as placeholder
    ],
    "Data Modeling": [
      { name: 'Tabular Editor', icon: null },
      { name: 'DAX Studio', icon: null },
    ],
    "Programming & Query Languages": [
      { name: 'Python', icon: <FaPython /> },
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'R', icon: <SiR /> },
      { name: 'Git', icon: <FaGit /> },
    ]
  };

  return (
    <SkillsContainer id="skills">
      <h2>Technical Skills</h2>

      {Object.keys(skills).map((category, index) => (
        <SkillCategory key={index}>
          <SkillHeading>{category}</SkillHeading>
          <SkillGrid>
            {skills[category].map((skill, index) => (
              <Skill key={index}>
                {skill.icon}
                <SkillLabel>{skill.name}</SkillLabel>
              </Skill>
            ))}
          </SkillGrid>
        </SkillCategory>
      ))}
    </SkillsContainer>
  );
}

export default Skills;
