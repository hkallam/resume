import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.section`
  padding: 20px;
  background-color: #f4f4f4;
  margin: 20px 0;
  border-radius: 5px;
`;

const EducationList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const EducationItem = styled.li`
  margin-bottom: 10px;
  font-size: 1rem;
`;

function Education() {
  const education = [
    { degree: 'B. Tech in Computer Science', institution: 'JNTU India' },
    { degree: 'Google Data Analytics Professional Certificate', institution: 'Google' },
    // Add more education or certifications as needed
  ];

  return (
    <EducationContainer id="education">
      <h2>Education and Certifications</h2>
      <EducationList>
        {education.map((edu, index) => (
          <EducationItem key={index}>
            <strong>{edu.degree}</strong> - {edu.institution}
          </EducationItem>
        ))}
      </EducationList>
    </EducationContainer>
  );
}

export default Education;
