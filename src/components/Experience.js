import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceContainer = styled.section`
  padding: 20px;
  background-color: #f4f4f4;
  margin: 20px 0;
  border-radius: 5px;
`;

const ExperienceItemContainer = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
`;

const ExperienceTitle = styled.h3`
  color: #333;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
`;

const ExperienceDetails = styled(motion.div)`
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 10px;
`;

const BulletList = styled.ul`
  padding-left: 20px;
  margin: 10px 0;
  list-style-type: disc;
`;

function Experience() {
  const experiences = [
    {
      title: 'Senior BI Developer',
      company: 'Tek Yantra – Leading Grocery Retailer',
      duration: 'May 2023 - Present',
      details: [
        "Collaborated with stakeholders to deliver customized Power BI reports and dashboards, enhancing decision-making",
        "Designed and implemented data warehouses using Star and Snowflake Schema to meet client business needs",
        "Developed and optimized ETL processes for seamless data integration from multiple sources (Oracle, Teradata, SQL Server)",
        "Automated data refresh schedules in Power BI, ensuring real-time data availability for users",
        "Applied advanced DAX and M-language techniques to transform data for impactful visualizations",
        "Improved decision-making efficiency by 30% through enhanced data visualization techniques"
      ]
    },
    {
      title: 'Senior Data Engineer',
      company: 'Tek Yantra – California Department of Health',
      duration: 'Jan 2022 – May 2023',
      details: [
        'Led the deployment of the \'CA Notify\' COVID-19 exposure notification app on Azure Cloud, impacting millions',
'Optimized Azure ingestion processes, achieving a 40% reduction in infrastructure costs',
'Migrated critical applications to meet California Department of Public Health security standards',
'Delivered insights through Power BI dashboards that informed public health strategies'

      ]
    },
    {
      title: 'Customer Data Analyst                                                            ',
      company: 'Upwork',
      duration: 'Feb 2021 – Dec 2021',
      details: [
        
'Analyzed customer data to enhance targeted marketing strategies for a beauty and cosmetics company',
'Conducted Market Basket Analysis, uncovering key product associations for strategic planning',
'Developed KPI tracking systems, facilitating data-backed business decisions'


      ]
    },
    {
      title: 'Head Developer',
      company: 'Coronastate.org',
      duration: 'Mar 2020 – Jan 2021',
      details: [
        'Directed a globally distributed team to develop a real-time COVID-19 dashboard',
'Engineered Python-based applications for daily data extraction, ensuring data accuracy',
'Implemented CI/CD pipelines for seamless system updates, improving user experience'


      ]
    },
    {
      title: 'Data Analyst',
      company: 'Independent Contractor',
      duration: 'Feb 2016 – Jan 2020',
      details: [
        'Managed product databases for e-commerce platforms, ensuring data accuracy',
'Provided data solutions to clients like Zappos and Microsoft Research, enhancing their data management',
'Reduced web scraping costs by 50% through optimized data extraction processes'


      ]
    },
  ];

  return (
    <ExperienceContainer id="experience">
      <h2>Work Experience</h2>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} exp={exp} />
      ))}
    </ExperienceContainer>
  );
}

function ExperienceItem({ exp }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ExperienceItemContainer onClick={toggleExpand}>
      <ExperienceTitle>{exp.title} <span>{exp.company} | {exp.duration}</span></ExperienceTitle>
      <ExperienceDetails
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        initial={{ height: 0, opacity: 0 }}
      >
        <BulletList>
          {exp.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </BulletList>
      </ExperienceDetails>
    </ExperienceItemContainer>
  );
}

export default Experience;
