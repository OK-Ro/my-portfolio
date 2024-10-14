import React from "react";
import styled, { keyframes } from "styled-components";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhone,
  FaCode,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const FooterWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding: 0.5rem; /* Adjusted padding */
  border-radius: 1rem; /* Adjusted border radius */
  background-color: ${(props) => props.theme.cardBackground};

  @media (max-width: 768px) {
    padding: 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const FooterContainer = styled.footer`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.backgroundCala},
    ${({ theme }) => theme.primary}
  );
  background-size: 200% 200%;
  animation: ${gradientAnimation} 15s ease infinite;
  color: ${({ theme }) => theme.text};
  padding: 0.5rem 0 1rem; /* Adjusted padding */
  position: relative;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.5);
  margin-top: 0.5rem; /* Adjusted margin */
  border-radius: 1rem; /* Adjusted border radius */
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(125px, 1fr)
  ); /* Adjusted min width */
  gap: 1rem; /* Adjusted gap */
  padding: 0 1rem; /* Adjusted padding */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 0.9rem; /* Adjusted font size */
  margin-bottom: 1rem; /* Adjusted margin */
  color: ${({ theme }) => theme.primary};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 25px; /* Adjusted width */
    height: 2px;
    background-color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const FooterText = styled.p`
  font-size: 0.6rem; /* Adjusted font size for paragraphs */
  margin-bottom: 0.5rem; /* Adjusted margin */
  color: ${({ theme }) => theme.text}; /* Ensure text color matches theme */
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  margin-bottom: 0.4rem; /* Adjusted margin */
  transition: color 0.3s ease, transform 0.3s ease;
  display: inline-block;
  font-size: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.accent};
    transform: translateX(3px); /* Adjusted transform */
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.5rem; /* Adjusted gap */
  margin-top: 0.5rem;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 0.8rem; /* Adjusted font size */
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
    transform: translateY(-2px); /* Adjusted transform */
  }
`;

const Copyright = styled.p`
  text-align: center;
  padding-top: 1rem; /* Adjusted padding */
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.6rem; /* Adjusted font size */
`;

const DesignedBy = styled.p`
  text-align: center;
  font-size: 0.6rem; /* Adjusted font size */
  color: ${({ theme }) => theme.secondaryText};
`;

const HeartIcon = styled(FaHeart)`
  color: red;
  animation: ${pulse} 1s infinite;
  display: inline-block;
  margin: 0 0.1rem; /* Adjusted margin */
`;

const ScrollToTop = styled.button`
  position: absolute;
  right: 1rem; /* Adjusted position */
  font-size: 1rem; /* Adjusted font size */
  bottom: 1rem; /* Adjusted position */
  background-color: ${({ theme }) => theme.accent};
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 50px; /* Adjusted width */
  height: 50px; /* Adjusted height */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    transform: translateY(-2px); /* Adjusted transform */
  }
`;

const ContactInfo = styled.div`
  font-size: 0.6rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem; /* Adjusted margin */

  svg {
    margin-right: 0.3rem; /* Adjusted margin */
    color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 768px) {
    margin-left: 3rem; /* Adjusted margin */
  }
`;

const ProjectLink = styled(Link)`
  font-size: 0.6rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  margin-bottom: 0.4rem; /* Adjusted margin */
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }

  svg {
    margin-right: 0.3rem; /* Adjusted margin */
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <FooterSection>
            <FooterTitle>Robert Okuni</FooterTitle>
            <FooterText>Full Stack Web Developer</FooterText>{" "}
            {/* Updated to use FooterText */}
            <FooterText>Creating innovative web solutions</FooterText>{" "}
            {/* Updated to use FooterText */}
            <SocialIcons>
              <SocialIcon
                href="https://github.com/OK-Ro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </SocialIcon>
              <SocialIcon
                href="https://www.linkedin.com/in/robert-okuni-96425b269/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon
                href="mailto:o.robert1994@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </SocialIcon>
            </SocialIcons>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Quick</FooterTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/projects">Projects</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Latest Projects</FooterTitle>
            <ProjectLink to="/projects/project1">
              <FaCode /> E-commerce Platform
            </ProjectLink>
            <ProjectLink to="/projects/project2">
              <FaCode /> Task Management App
            </ProjectLink>
            <ProjectLink to="/projects/project3">
              <FaCode /> Portfolio Website
            </ProjectLink>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Contact</FooterTitle>
            <ContactInfo>
              <FaMapMarkerAlt /> Amsterdam, Netherlands
            </ContactInfo>
            <ContactInfo>
              <FaEnvelope /> o.robert1994@hotmail.com
            </ContactInfo>
            <ContactInfo>
              <FaPhone /> +31 6 12345678
            </ContactInfo>
          </FooterSection>
        </FooterContent>
        <Copyright>
          © {new Date().getFullYear()} Robert Okuni. All rights reserved.
        </Copyright>
        <DesignedBy>
          Designed with <HeartIcon /> by Robert Okuni
        </DesignedBy>
        <ScrollToTop onClick={scrollToTop}>
          <FaArrowUp />
        </ScrollToTop>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
