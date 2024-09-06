import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.section`
  padding: 20px;
  background-color: #e0e0e0;
  margin: 20px 0;
  border-radius: 5px;
`;

const ProjectItemContainer = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
`;

const ProjectTitle = styled.h3`
  color: #333;
  margin-bottom: 5px;
`;

const ProjectDetails = styled(motion.div)`
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 10px;
`;

const Subheading = styled.h4`
  color: #444;
  margin-top: 10px;
  font-weight: bold;
`;

const BulletList = styled.ul`
  margin-left: 20px;
  list-style-type: disc;
`;

const BulletItem = styled.li`
  margin-bottom: 5px;
`;

function Projects() {
  const projects = [
    {
      title: 'Sales Performance Dashboard',
      overview: 'Developed a comprehensive Power BI dashboard to provide real-time insights into sales performance across multiple regions for a global retail company. The dashboard was designed to empower executives and regional managers with actionable data, driving strategic decision-making and optimizing sales operations.',
      subdetails: [
        {
          subheading: 'Data Integration',
          bullets: [
            'Integrated data from multiple sources, including SQL Server, Oracle, and Excel, to create a unified data model',
            'Implemented ETL processes using Power Query to clean, transform, and load data efficiently',
          ],
        },
        {
          subheading: 'Data Modeling',
          bullets: [
            'Designed and developed a star schema data model to support complex queries and enhance the performance of the dashboard',
            'Utilized DAX (Data Analysis Expressions) to create calculated columns, measures, and dynamic visualizations',
          ],
        },
      ],
    },
    {
      title: 'Promotional Insights for Sales Optimization',
      overview: 'Developed an advanced Power BI dashboard to analyze the effectiveness of promotional campaigns for a leading consumer goods company. The project aimed to optimize promotional strategies by providing detailed insights into sales performance, customer behavior, and ROI of various marketing initiatives.',
      subdetails: [
        {
          subheading: 'Advanced Analytics:',
          bullets: [
            'Utilized DAX to create complex calculations and time intelligence functions.',
            'Analyzed the sales lift resulting from different promotional strategies.',
          ],
        },
        {
          subheading: 'Business Impact:',
          bullets: [
            'Improved promotional efficiency by 15% through data-driven insights.',
            'Generated actionable recommendations for future campaigns based on data trends.',
          ],
        },
      ],
    },
  ];

  return (
    <ProjectsContainer id="projects">
      <h2>Key Projects</h2>
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </ProjectsContainer>
  );
}

function ProjectItem({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ProjectItemContainer onClick={toggleExpand}>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectDetails
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        initial={{ height: 0, opacity: 0 }}
      >
        <p><strong>Overview:</strong> {project.overview}</p>
        {project.subdetails.map((subdetail, index) => (
          <div key={index}>
            <Subheading>{subdetail.subheading}</Subheading>
            <BulletList>
              {subdetail.bullets.map((bullet, i) => (
                <BulletItem key={i}>{bullet}</BulletItem>
              ))}
            </BulletList>
          </div>
        ))}
      </ProjectDetails>
    </ProjectItemContainer>
  );
}

export default Projects;
