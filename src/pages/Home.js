import React, { lazy } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import SmoothScroll from "./SmoothScroll";
import Footer from "../components/Footer";

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
  gap: 20px;
  padding: 25px;
  margin-top: 5rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 10px;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
`;

const BaseCard = styled.div`
  padding: 7.5px;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.text};
  transition: background-color 0.3s ease, color 0.3s ease;

  @media (max-width: 768px) {
    padding: 5px;
    box-shadow: 0 2px 0.5px ${(props) => props.theme.boxShadow};
  }
`;

const ProfileCard = styled(BaseCard)`
  grid-column: 1;
  grid-row: 1 / span 2;
  height: 28rem;
  width: 30rem;
  background: ${({ theme }) => theme.profileCardBackground};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 2px solid ${(props) => props.theme.inputBackground};

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 1;
    height: 30rem;
    width: 100%;
    margin-bottom: 0.5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.09);
    margin-top: 5rem;
  }
`;

const WorkExperienceCard = styled(BaseCard)`
  grid-column: 2;
  grid-row: 1;
  height: 14.5rem;
  width: 100%;
  overflow-y: auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 2px solid ${(props) => props.theme.inputBackground};

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 2;
    height: 46rem;
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
  height: 12.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 2px solid ${(props) => props.theme.inputBackground};

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 3;
    height: auto;
    min-height: 15rem;
  }
`;

const ProjectsCard = styled(BaseCard)`
  grid-column: 3;
  grid-row: 1 / span 2;
  height: 28.5rem;
  overflow-y: auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 2px solid ${(props) => props.theme.inputBackground};

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 4;
    height: 50rem;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const CardHeader = styled.h2`
  font-size: 1.2rem;
  color: ${(props) => props.theme.text || "#333333"};

  text-align: center;
  background: linear-gradient(45deg, #ff6f61, #ffcc00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const ServicesCard = styled(BaseCard)`
  grid-column: 1 / span 2;
  grid-row: 3;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 2px solid ${(props) => props.theme.inputBackground};

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 5;
    width: 100%;
  }
`;

const ContactCard = styled(BaseCard)`
  background: ${(props) => props.theme.contactCardGradient};
  border: 2px solid ${(props) => props.theme.inputBackground};
  grid-column: 3;
  grid-row: 3;
  height: auto;
  width: 40rem;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 6;
    width: 100%;
    height: auto;
    min-height: 12rem;
    padding: 1rem;
  }

  &:hover {
    transform: translateY(-2.5px);
    box-shadow: 0 5px 15px ${(props) => props.theme.boxShadow};
  }
`;

const LetsTalkContainer = styled.div`
  background: linear-gradient(-45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2.5px);
    box-shadow: 0 7.5px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1rem;
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
  font-size: 1.25rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const LetsTalkMiddle = styled.div`
  font-size: 1.75rem;
  font-weight: 800;
  color: #fff;
  text-shadow: 1.5px 1.5px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LetsTalkLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: #fff;
  color: #ff6b6b;
  font-size: 0.8rem;
  font-weight: bold;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  box-shadow: 0 2.5px 7.5px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-1.5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    background-color: #ff6b6b;
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.5rem 1rem;
  }
`;

const BulletIcon = styled.svg`
  width: 10px;
  height: 10px;
  margin-left: 5px;
  fill: currentColor;
`;

const PageContainer = styled.div`
  padding: 2rem;
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
              <CardHeader>Recient Projects</CardHeader>
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
