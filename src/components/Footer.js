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
  padding: 1rem;
  border-radius: 2rem;
  background-color: transparent;
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
  padding: 1rem 0 2rem;
  position: relative;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.5);
  margin-top: 1rem;
  border-radius: 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 2rem;

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
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 50px;
    height: 2px;
    background-color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 768px) {
    display: none;
  }
  }
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease, transform 0.3s ease;
  display: inline-block;

  &:hover {
    color: ${({ theme }) => theme.accent};
    transform: translateX(5px);
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
`;

const DesignedBy = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.secondaryText};
`;

const HeartIcon = styled(FaHeart)`
  color: red;
  animation: ${pulse} 1s infinite;
  display: inline-block;
  margin: 0 0.2rem;
`;

const ScrollToTop = styled.button`
  position: absolute;
  right: 2rem;
  font-size: 1.5rem;
  bottom: 2rem;
  background-color: ${({ theme }) => theme.accent};
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;

  svg {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 768px) {
    margin-left: 5rem;
  }
`;

const ProjectLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }

  svg {
    margin-right: 0.5rem;
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
            <p>Full Stack Web Developer</p>
            <p>Creating innovative web solutions</p>
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
              <FaEnvelope /> robert@example.com
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
