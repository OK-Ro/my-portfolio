import React from "react";
import { FaArrowLeft, FaGraduationCap } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { FaCode, FaServer, FaMobile, FaRocket } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import NavBar from "../components/NavBar";
import AdmissionStats from "./AdmissionStats";
import VisitorSection from "./VisitorSection";
import SmoothScroll from "./SmoothScroll";
import Footer from "../components/Footer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ServicesContainer = styled.div`
  background: ${({ theme }) => theme.resumeBackground};
  color: ${(props) => props.theme.text};
  margin: 0 auto;
  padding: 3.5rem;
  animation: ${fadeIn} 0.5s ease-in;

  @media (max-width: 768px) {
    padding: 16px;
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin-top: 3.5rem;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const PageLayout = styled.div`
  flex-direction: row;
  gap: 2rem;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  min-width: 150px;
  animation: ${fadeIn} 0.9s ease-in;

  @media (max-width: 768px) {
    min-width: 100%;
    margin-bottom: 1rem;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  min-width: 150px;
  margin-top: 6rem;

  @media (max-width: 768px) {
    min-width: 100%;
    margin-top: 0;
  }
`;

const BackToHome = styled(Link)`
  display: inline-block;
  background-color: #ff6b6b;
  color: white;
  padding: 0.6rem 1rem;
  font-size: 0.75rem;
  text-decoration: none;
  border-radius: 10px;
  font-weight: bold;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  margin-top: 4rem;
  border: 3px solid ${(props) => props.theme.cardBackground};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: all 0.6s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    background-color: #ff8787;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.65rem;
    margin-top: 4rem;
  }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Header = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.75rem;
  text-align: center;
  color: transparent;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7aa, #6a2c70);
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  animation: ${gradientAnimation} 10s ease infinite, ${fadeIn} 1s ease-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: 1px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 25px;
    height: 2px;
    background: #4ecdc4;
    transform: translateX(-50%);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subheader = styled.p`
  font-size: 0.75rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: ${(props) => props.theme.secondaryText};
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${fadeIn} 1s ease-out 0.5s both;
  position: relative;
  padding: 0 10px;

  &::before,
  &::after {
    content: '"';
    font-size: 1.5rem;
    color: #4ecdc4;
    position: absolute;
    opacity: 0.3;
  }

  &::before {
    top: -10px;
    left: 0;
  }

  &::after {
    bottom: -20px;
    right: 0;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`;

const ServiceCard = styled.div`
  background-color: ${(props) => props.bgColor || props.theme.backgroundCala};
  border-radius: 7.5px;
  padding: 0.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border: 1.5px solid
    ${(props) => props.borderColor || props.theme.cardBorderline};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: "";
    position: absolute;
    top: -25%;
    left: -25%;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    transform: rotate(45deg);
    transition: all 0.5s ease;
  }

  &:hover::before {
    top: -37.5%;
    left: -37.5%;
  }

  @media (min-width: 768px) {
    padding: 1rem;

    &:nth-child(1) {
      grid-column: span 2;
    }

    &:nth-child(4) {
      grid-column: span 2;
    }
  }
`;

const ServiceIcon = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.iconColor || props.theme.accent};
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ServiceTitle = styled.h2`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.text};
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -2.5px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${(props) => props.theme.accent};
    transition: width 0.3s ease;
  }

  ${ServiceCard}:hover &::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ServiceDescription = styled.p`
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.secondaryText};
  font-size: 0.65rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TotalVisitorSection = styled.div`
  margin: 1.5rem 0;
  padding: 1rem;

  border-width: 10px;
  background-color: ${(props) => props.theme.backgroundCala};
  border-radius: 7.5px;
  font-size: 0.7rem;
  @media (max-width: 768px) {
    margin: 1rem 0;
    padding: 0.1rem;
    border-width: 1px;
  }
`;

const SectionTitle = styled.h2`
  color: ${(props) => (props.theme.dark ? "#e0e0e0" : "#333")};
  font-size: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;

    gap: 1rem;
  }
`;

const EducationSection = styled.div`
  margin: 2rem 0;
  @media (max-width: 768px) {
    margin: 4rem 0;
  }
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
`;

const EducationCard = styled.div`
  background: ${(props) => (props.theme.dark ? "#2a2a2a" : "#ffffff")};
  border-radius: 7.5px;
  padding: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-top: 5px solid #4caf50;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const EducationTitle = styled.h3`
  font-size: 0.7rem;
  color: #4caf50;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1.4rem;

    margin-bottom: 1rem;
  }
`;

const EducationInstitute = styled.h4`
  font-size: 0.55rem;
  color: ${(props) => (props.theme.dark ? "#e0e0e0" : "#333")};
  margin-bottom: 0.25rem;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`;

const EducationDate = styled.p`
  font-size: 0.45rem;
  color: ${(props) => (props.theme.dark ? "#b0b0b0" : "#666")};
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }
`;

const EducationDescription = styled.p`
  font-size: 0.5rem;
  color: ${(props) => (props.theme.dark ? "#d0d0d0" : "#444")};
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const CTASection = styled.div`
  perspective: 1000px;
  margin-top: 1rem;

  @media (min-width: 768px) {
    margin-top: 1.5rem;
  }
`;

const CTACard = styled.div`
  background: linear-gradient(45deg, #00c9ff, #92fe9d);
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  color: #1a1a1a;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: rotateY(5deg) rotateX(2.5deg);
  }

  @media (min-width: 768px) {
    padding: 1.25rem;
  }

  @media (min-width: 1024px) {
    padding: 1.5rem;
  }
`;

const CTAContent = styled.div`
  transform: translateZ(30px);
  transition: transform 0.6s;

  ${CTACard}:hover & {
    transform: translateZ(40px);
  }
`;

const CTATitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3);
`;

const CTAText = styled.p`
  font-size: 0.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: linear-gradient(135deg, #ff6b6b, #ff8787);
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
  font-size: 0.6rem;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    transition: all 0.6s;
    z-index: 0;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    background: linear-gradient(135deg, #ff8787, #ff6b6b);
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.65rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.7rem;
  }
`;

const Services = () => {
  const education = [
    {
      degree: "Full Stack Web Development Course",
      institution: "Hack Your Future",
      date: "05/2023 - 11/2023",
      description:
        "Intensive 7-month program covering front-end and back-end web development technologies.",
    },
    {
      degree: "Front-End Web Development using JavaScript and React.js",
      institution: "DevTown",
      date: "01/2023 - 03/2023",
      description: "Certificate: https://cert.devtown.in/verify/Z2rj35k",
    },
    {
      degree: "Bachelor Of Information Technology",
      institution: "St Peters University",
      date: "2015 - 2016",
      description: "Foundational studies in Information Technology.",
    },
  ];

  return (
    <ServicesContainer>
      <NavBar />
      <SmoothScroll>
        <ContentWrapper>
          <PageLayout>
            <LeftColumn>
              <BackToHome to="/">
                <FaArrowLeft /> <span>Back To Home</span>
              </BackToHome>
              <Header>My Services</Header>
              <Subheader>
                Designing and developing engaging, responsive user interfaces
                with modern frameworks such as React, Vue, and Angular.
                Transforming ideas into high-quality, interactive experiences
                through meticulous, efficient code.
              </Subheader>

              <ServicesGrid>
                <ServiceCard bgColor="#FF6B6B" borderColor="#FF8787">
                  <ServiceIcon iconColor="#FFD93D">
                    <FaCode />
                  </ServiceIcon>
                  <ServiceTitle>Front-End Development</ServiceTitle>
                  <ServiceDescription>
                    Crafting responsive and intuitive user interfaces using
                    modern frameworks like React, Vue, or Angular. Bringing
                    designs to life with clean, efficient code.
                  </ServiceDescription>
                </ServiceCard>

                <ServiceCard bgColor="#4ECDC4" borderColor="#45B7AA">
                  <ServiceIcon iconColor="#FF6B6B">
                    <FaServer />
                  </ServiceIcon>
                  <ServiceTitle>Back-End Development</ServiceTitle>
                  <ServiceDescription>
                    Building robust server-side applications and APIs using
                    technologies like Node.js, Python, or Ruby on Rails.
                    Ensuring scalable and secure data management.
                  </ServiceDescription>
                </ServiceCard>

                <ServiceCard bgColor="#FFD93D" borderColor="#FFC300">
                  <ServiceIcon iconColor="#6A2C70">
                    <FaMobile />
                  </ServiceIcon>
                  <ServiceTitle>Full-Stack Development</ServiceTitle>
                  <ServiceDescription>
                    Delivering end-to-end web solutions, from database design to
                    user interface. Seamlessly integrating front-end and
                    back-end technologies for optimal performance.
                  </ServiceDescription>
                </ServiceCard>

                <ServiceCard bgColor="#6A2C70" borderColor="#9B4DCA">
                  <ServiceIcon iconColor="#FFD93D">
                    <FaRocket />
                  </ServiceIcon>
                  <ServiceTitle>Web Performance Optimization</ServiceTitle>
                  <ServiceDescription>
                    Enhancing website speed and efficiency through code
                    optimization, caching strategies, and best practices.
                    Improving user experience and search engine rankings.
                  </ServiceDescription>
                </ServiceCard>
              </ServicesGrid>

              <EducationSection>
                <SectionTitle>
                  <FaGraduationCap /> Education
                </SectionTitle>
                <EducationGrid>
                  {education.map((edu, index) => (
                    <EducationCard key={index}>
                      <EducationTitle>{edu.degree}</EducationTitle>
                      <EducationInstitute>{edu.institution}</EducationInstitute>
                      <EducationDate>{edu.date}</EducationDate>
                      <EducationDescription>
                        {edu.description}
                      </EducationDescription>
                    </EducationCard>
                  ))}
                </EducationGrid>
              </EducationSection>
            </LeftColumn>

            <RightColumn>
              <VisitorSection />
              <TotalVisitorSection>
                <h2 className="text-xl font-bold mb-4">Live Visitor Metrics</h2>
                <AdmissionStats />
              </TotalVisitorSection>

              <CTASection>
                <CTACard>
                  <CTAContent>
                    <CTATitle>Ready to bring your ideas to life?</CTATitle>
                    <CTAText>
                      Let's collaborate and create something amazing together!
                    </CTAText>
                    <CTAButton to="/contact">Get In Touch</CTAButton>
                  </CTAContent>
                </CTACard>
              </CTASection>
            </RightColumn>
          </PageLayout>
        </ContentWrapper>
      </SmoothScroll>
      <Footer />
    </ServicesContainer>
  );
};

export default Services;
