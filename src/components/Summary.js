import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SummaryContainer = styled.section`
  padding: 20px;
  background-color: #f4f4f4;
  margin: 20px 0;
  border-radius: 5px;
`;

const SummaryList = styled(motion.ul)`
  font-size: 1rem;
  line-height: 1.6;
  list-style-type: disc;
  margin-left: 20px;
  overflow: hidden;
`;

const SummaryItem = styled.li`
  margin-bottom: 10px;
`;

const ExpandButton = styled.button`
  background-color: #61dafb;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #4a4a4a;
  }
`;

function Summary() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SummaryContainer id="summary">
      <h2>Professional Summary</h2>
      <SummaryList
        animate={{ maxHeight: isExpanded ? 400 : 100 }}
        transition={{ duration: 0.5 }}
      >
        <SummaryItem>Results-driven Senior BI Developer with over 8 years of experience in Data Modeling Engineering and Business Intelligence.</SummaryItem>
        <SummaryItem>Proven expertise in designing and implementing advanced analytics solutions using Power BI, SQL, Python, and Azure cloud technologies.</SummaryItem>
        <SummaryItem>Skilled in optimizing data processes, creating executive-level dashboards, and driving actionable business insights through robust data visualization techniques.</SummaryItem>
        <SummaryItem>Demonstrated success in enhancing customer satisfaction by 25% through data-driven strategies.</SummaryItem>
        <SummaryItem>Skilled in managing complex datasets, executing ETL processes, and leading cross-functional teams to deliver high-impact solutions.</SummaryItem>
      </SummaryList>
      <ExpandButton onClick={toggleExpand}>
        {isExpanded ? 'Show Less' : 'Show More'}
      </ExpandButton>
    </SummaryContainer>
  );
}

export default Summary;
