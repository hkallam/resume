import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #4a4a4a;
  color: white;
  text-align: center;
  padding: 10px 0;
  margin-top: 40px;
`;

const FooterLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>Connect with me on <FooterLink href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</FooterLink></p>
    </FooterContainer>
  );
}

export default Footer;
