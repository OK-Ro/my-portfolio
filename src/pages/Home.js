import React, { lazy } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import SmoothScroll from "./SmoothScroll";
import Footer from "../components/Footer";

// Lazy load components
const MovingBanner = lazy(() => import("./MovingBanner"));
const Profile = lazy(() => import("../components/Profile"));
const WorkExperience = lazy(() => import("../components/WorkExperience"));
const Projects = lazy(() => import("../components/Projects"));
const Skills = lazy(() => import("../components/Skills"));
const HomeServices = lazy(() => import("../components/HomeServices"));

const CardContainer = styled.div`
  color: ${(props) => props.theme.text};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 50px;
  margin-top: 10rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0;
    margin-top: 5rem;
    width: 100%;
  }
`;

const BaseCard = styled.div`
  padding: 15px;
  border-radius: 1rem;

  color: ${(props) => props.theme.text};
  transition: background-color 0.3s ease, color 0.3s ease;

  @media (max-width: 768px) {
    padding: 5px;
    box-shadow: 0 4px 1px ${(props) => props.theme.boxShadow};
  }
`;

const ProfileCard = styled(BaseCard)`
  grid-column: 1;
  grid-row: 1 / span 2;
  height: 56rem;
  width: 60rem;
  background: ${({ theme }) => theme.profileCardBackground};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 4px solid ${(props) => props.theme.inputBackground};

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 1;
    height: 47rem;
    width: 100%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.09);
  }
`;

const WorkExperienceCard = styled(BaseCard)`
  grid-column: 2;
  grid-row: 1;
  height: 29rem;
  width: 100%;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 4px solid ${(props) => props.theme.inputBackground};

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 2;
    height: 47rem;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    scrollbar-width: none;
  }
`;

const SkillsCard = styled(BaseCard)`
  grid-column: 2;
  grid-row: 2;
  height: 25rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 4px solid ${(props) => props.theme.inputBackground};

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 3;
    height: auto;
    min-height: 24rem;
  }
`;

const ProjectsCard = styled(BaseCard)`
  grid-column: 3;
  grid-row: 1 / span 2;
  height: 55rem;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 4px solid ${(props) => props.theme.inputBackground};

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 4;
    height: 47rem;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const ServicesCard = styled(BaseCard)`
  grid-column: 1 / span 2;
  grid-row: 3;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 4px solid ${(props) => props.theme.inputBackground};

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 5;
    width: 100%;
  }
`;

const ContactCard = styled(BaseCard)`
  background: ${(props) => props.theme.contactCardGradient};
  border: 4px solid ${(props) => props.theme.inputBackground};
  grid-column: 3;
  grid-row: 3;
  height: auto;
  width: 60rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 6;
    width: 100%;
    height: auto;
    min-height: 20rem;
    padding: 1rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px ${(props) => props.theme.boxShadow};
  }
`;

const LetsTalkContainer = styled.div`
  background: linear-gradient(-45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const LetsTalkTop = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const LetsTalkMiddle = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  color: #fff;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const LetsTalkLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: #fff;
  color: #ff6b6b;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    background-color: #ff6b6b;
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
`;

const BulletIcon = styled.svg`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  fill: currentColor;
`;

const PageContainer = styled.div`
  padding: 4rem;
  background: ${({ theme }) => theme.body};
  color: ${(props) => props.theme.text};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

function Home({ toggleTheme, isDarkTheme }) {
  const navigate = useNavigate();

  const handleLetsTalkClick = (e) => {
    e.preventDefault();
    navigate("/contact");
  };

  return (
    <div className="home">
      <PageContainer>
        <NavBar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <SmoothScroll>
          <CardContainer>
            <ProfileCard>
              <Profile />
            </ProfileCard>
            <WorkExperienceCard>
              <WorkExperience />
            </WorkExperienceCard>
            <SkillsCard>
              <Skills />
            </SkillsCard>
            <ProjectsCard>
              <Projects />
            </ProjectsCard>
            <ServicesCard>
              <HomeServices />
            </ServicesCard>
            <ContactCard>
              <MovingBanner />
              <LetsTalkContainer>
                <LetsTalkTop>Let's👋</LetsTalkTop>
                <LetsTalkMiddle>Work Together</LetsTalkMiddle>
                <LetsTalkLink to="/contact" onClick={handleLetsTalkClick}>
                  Let's Talk
                  <BulletIcon viewBox="0 0 20 20" fill="currentColor">
                    <circle cx="10" cy="10" r="8" />
                  </BulletIcon>
                </LetsTalkLink>
              </LetsTalkContainer>
            </ContactCard>
          </CardContainer>
        </SmoothScroll>
        <Footer />
      </PageContainer>
    </div>
  );
}

export default Home;
